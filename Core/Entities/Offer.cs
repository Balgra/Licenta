using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace Core.Entities
{
    public class Offer : BaseEntity
    {
        public string? AuthorName { get; set; }
        public Description Description { get; set; }

        public int DescriptionId { get; set; }
        public DateTime Created { get; set; }

        public string? Company_Name { get; set; }
        public string Company_Email { get; set; }

        public Transaction Transaction { get; set; }

        public int TransactionId { get; set; }

        public DateTime? Deadline { get; set; }



    }
}
