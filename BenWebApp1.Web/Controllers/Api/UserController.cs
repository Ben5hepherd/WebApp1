using BenWebApp1.CommandQuery.Queries.Interfaces;
using BenWebApp1.Web.ViewModels;
using BenWebApp1.Web.ViewModels.Builders.Interfaces;
using System.Web.Http;

namespace BenWebApp1.Web.Controllers.Api
{
    public class UserController : ApiController
    {
        readonly IGetUserByIdQuery getUserByIdQuery;
        readonly IUserViewModelBuilder userViewModelBuilder;

        public UserController(IGetUserByIdQuery getUserByIdQuery, IUserViewModelBuilder userViewModelBuilder)
        {
            this.getUserByIdQuery = getUserByIdQuery;
            this.userViewModelBuilder = userViewModelBuilder;
        }

        // GET: api/User
        public UserViewModel Get()
        {
            var firstUser = getUserByIdQuery.Execute(1);
            var userModel = userViewModelBuilder.Build(firstUser);
            return userModel;
        }
    }
}