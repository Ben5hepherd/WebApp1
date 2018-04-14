using BenWebApp1.Domain;

namespace BenWebApp1.Web.ViewModels.Builders.Interfaces
{
    public interface IUserViewModelBuilder
    {
        UserViewModel Build(User user);
    }
}