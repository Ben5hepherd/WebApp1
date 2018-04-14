using BenWebApp1.CommandQuery.Queries.Interfaces;
using BenWebApp1.Domain;
using BenWebApp1.Orm.EntityFramework;
using System.Linq;

namespace BenWebApp1.CommandQuery.Queries
{
    public class GetUserByIdQuery : IGetUserByIdQuery
    {
        readonly IDataContext dataContext;

        public GetUserByIdQuery(IDataContext dataContext)
        {
            this.dataContext = dataContext;
        }
        public User Execute(int id)
        {
            return dataContext.Users.SingleOrDefault(b => b.Id == id);
        }
    }
}