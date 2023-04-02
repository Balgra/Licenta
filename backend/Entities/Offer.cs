using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace backend.Entities
{
    public class Offer
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string? AuthorName { get; set; }
        public string? Description { get; set; }
        public DateTime Created { get; set; }

        public string? Company_Name { get; set; }
        public string Company_Email { get; set; }

        public Transaction Transaction { get; set; }

        public DateTime? Deadline { get; set; }



    }
}
