using System.Data.Entity.ModelConfiguration;
using BenWebApp1.Domain;

namespace BenWebApp1.Orm.EntityFramework.Configuration
{
    public class UserConfiguration : EntityTypeConfiguration<User>
    {
        public UserConfiguration()
        {
            ToTable("dbo.Users");

            Property(u => u.Name);
        }
    }
}
