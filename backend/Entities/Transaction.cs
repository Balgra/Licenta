using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace backend.Entities
{
    public class Transaction
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int OfferId { get; set; }
        public int? TierOne { get; set; }
        public int? TierTwo { get; set; }
        public int? TierThree { get; set; }
        public int? TierFour { get; set; }
    }
}
