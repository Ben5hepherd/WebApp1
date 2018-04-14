using System.ComponentModel.DataAnnotations.Schema;

namespace BenWebApp1.Domain
{
    public abstract class Entity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
    }
}
