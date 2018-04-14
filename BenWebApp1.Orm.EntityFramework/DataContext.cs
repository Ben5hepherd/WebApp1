using System.Data.Entity;
using System.Data.Common;
using BenWebApp1.Domain;
using System.Data.Entity.Validation;
using System.Linq;
using BenWebApp1.Orm.EntityFramework.Configuration;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace BenWebApp1.Orm.EntityFramework
{
    public class DataContext: DbContext, IDataContext
    {
        public DataContext()
            : base("EntityFrameworkConnectionString")
        {
            Database.SetInitializer<DataContext>(null);
        }

        protected DataContext(DbConnection connection)
            : base(connection, true) { }

        public DbSet<User> Users { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Maintainability", "CA1506:AvoidExcessiveClassCoupling")]
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            modelBuilder.Conventions.Add<ForeignKeyConvention>();

            modelBuilder.Configurations.Add(new UserConfiguration());
            base.OnModelCreating(modelBuilder);
        }

        public override int SaveChanges()
        {

            try
            {
                return base.SaveChanges();
            }
            catch (DbEntityValidationException ex)
            {
                var errorMessages = (from eve in ex.EntityValidationErrors
                                     let entity = eve.Entry.Entity.GetType().Name
                                     from ev in eve.ValidationErrors
                                     select new
                                     {
                                         Entity = entity,
                                         ev.PropertyName,
                                         ev.ErrorMessage
                                     });

                var fullErrorMessage = string.Join("; ", errorMessages.Select(e => string.Format("[Entity: {0}, Property: {1}] {2}", e.Entity, e.PropertyName, e.ErrorMessage)));

                var exceptionMessage = string.Concat(ex.Message, " The validation errors are: ", fullErrorMessage);

                throw new DbEntityValidationException(exceptionMessage, ex.EntityValidationErrors);
            }
        }
    }
}
