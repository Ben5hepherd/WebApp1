[assembly: WebActivator.PostApplicationStartMethod(typeof(BenWebApp1.Web.App_Start.SimpleInjectorWebApiInitializer), "Initialize")]

namespace BenWebApp1.Web.App_Start
{
    using System.Web.Http;
    using SimpleInjector;
    using SimpleInjector.Integration.WebApi;
    using BenWebApp1.Orm.EntityFramework;
    using BenWebApp1.Web.ViewModels.Builders.Interfaces;
    using BenWebApp1.Web.ViewModels.Builders;
    using BenWebApp1.CommandQuery.Queries.Interfaces;
    using SimpleInjector.Lifestyles;
    using System.Reflection;
    using System.Linq;
    using System;

    public static class SimpleInjectorWebApiInitializer
    {
        /// <summary>Initialize the container and register it as Web API Dependency Resolver.</summary>
        public static void Initialize()
        {
            var container = new Container();
            container.Options.DefaultScopedLifestyle = new WebApiRequestLifestyle();
            
            InitializeContainer(container);

            container.RegisterWebApiControllers(GlobalConfiguration.Configuration);
       
            container.Verify();
            
            GlobalConfiguration.Configuration.DependencyResolver =
                new SimpleInjectorWebApiDependencyResolver(container);
        }
     
        private static void InitializeContainer(Container container)
        {
            var webApiLifestyle = new AsyncScopedLifestyle();

            container.Register<IDataContext, DataContext>(webApiLifestyle);
            container.Register<IUserViewModelBuilder, UserViewModelBuider>();

            RegisterForAssembly(container, webApiLifestyle, typeof(IGetUserByIdQuery).Assembly, "BenWebApp1.CommandQuery.Queries");
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