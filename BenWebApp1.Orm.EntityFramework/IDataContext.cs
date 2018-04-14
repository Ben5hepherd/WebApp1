using BenWebApp1.Domain;
using System.Data.Entity;

namespace BenWebApp1.Orm.EntityFramework
{
    public interface IDataContext
    {
        DbSet<User> Users { get; set; }
        int SaveChanges();
    }
}
