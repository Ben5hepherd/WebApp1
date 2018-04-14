using BenWebApp1.Domain;

namespace BenWebApp1.CommandQuery.Queries.Interfaces
{
    public interface IGetUserByIdQuery
    {
        User Execute(int id);
    }
}
