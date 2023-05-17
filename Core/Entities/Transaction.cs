using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Core.Entities
{
    public class Transaction : BaseEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public bool? TierOne { get; set; }
        public bool? TierTwo { get; set; }
        public bool? TierThree { get; set; }
        public bool? TierFour { get; set; }

        public int? Cost_TierOne { get; set; }
        public int? Cost_TierTwo { get; set; }
        public int? Cost_TierThree { get; set; }
        public int? Cost_TierFour { get; set; }

        //One Tier Entity with Name and public in Cost. 
        // public List<Tiers> TierList {get; set;}

    }
}
