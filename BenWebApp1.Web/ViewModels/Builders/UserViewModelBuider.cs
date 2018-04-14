using BenWebApp1.Domain;
using BenWebApp1.Web.ViewModels.Builders.Interfaces;

namespace BenWebApp1.Web.ViewModels.Builders
{
    public class UserViewModelBuider : IUserViewModelBuilder
    {
        public UserViewModel Build(User user)
        {
            return new UserViewModel
            {
                Id = user.Id,
                Name = user.Name
            };
        }
    }
}