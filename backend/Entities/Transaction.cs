using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace backend.Entities
{
    public class Transaction
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int OfferId { get; set; }
        public bool? TierOne { get; set; }
        public bool? TierTwo { get; set; }
        public bool? TierThree { get; set; }
        public bool? TierFour { get; set; }

        public int? Cost_TierOne { get; set; }
        public int? Cost_TierTwo { get; set; }
        public int? Cost_TierThree { get; set; }
        public int? Cost_TierFour { get; set; }

    }
}
