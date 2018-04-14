using BenWebApp1.Orm.EntityFramework;
using BenWebApp1.Web.ViewModels.Builders.Interfaces;
using BenWebApp1.Web.ViewModels.Builders;
using SimpleInjector;
using SimpleInjector.Integration.WebApi;
using System;
using System.Linq;
using System.Reflection;
using System.Web.Http;
using BenWebApp1.CommandQuery.Queries.Interfaces;
using SimpleInjector.Lifestyles;

namespace BenWebApp1.Web.App_Start
{
    public static class SimpleInjectorConfig
    {
        public static void ConfigureWebApi()
        {
            // Did you know the container can diagnose your configuration? Go to: https://bit.ly/YE8OJj.
            var container = new Container();

            InitializeContainer(container);

            container.RegisterWebApiControllers(GlobalConfiguration.Configuration);
            //container.RegisterWebApiFilterProvider(GlobalConfiguration.Configuration);

            container.Verify();

            GlobalConfiguration.Configuration.DependencyResolver =
                new SimpleInjectorWebApiDependencyResolver(container);
        }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Maintainability", "CA1506:AvoidExcessiveClassCoupling")]
        private static void InitializeContainer(Container container)
        {
            //Info: https://simpleinjector.readthedocs.org/en/latest/lifetimes.html#perwebapirequest
            var webApiLifestyle = new AsyncScopedLifestyle();

            container.Register<IDataContext, DataContext>(webApiLifestyle);
            container.Register<IUserViewModelBuilder, UserViewModelBuider>();

            RegisterForAssembly(container, webApiLifestyle, typeof(IGetUserByIdQuery).Assembly, "BenWebApp1.CommandQuery.Queries");
            //container.RegisterWebApiRequest(() => Thread.CurrentPrincipal);
        }

        private static void RegisterForAssembly(Container container, AsyncScopedLifestyle webApiLifestyle, Assembly assembly, string nameSpace)
        {
            var registrations =
                from type in assembly.GetExportedTypes()
                where type.Namespace.StartsWith(nameSpace, StringComparison.OrdinalIgnoreCase)
                where type.GetInterfaces().Any()
                select new { Service = type.GetInterfaces().Single(), Implementation = type };

            foreach (var reg in registrations)
            {
                container.Register(reg.Service, reg.Implementation, webApiLifestyle);
            }
        }
    }
}