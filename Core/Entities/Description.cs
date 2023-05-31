using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities
{
    public class Description : BaseEntity
    {

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string MarketSize { get; set; } // Top Down Market Sizing   ... . Bottom-Up, Total Addressable Market , Analogy Method

        public string Descriptions { get; set; }

        public string TargetAudience { get; set; }

        public string MarketingStrategies { get; set; }

        public string BusinessModel { get; set; } // Subscription , E-commerce, Advertising, Freemium, Affiliate, Pay-As-You-Go

        public int RiskFactors { get; set; } //poate sa fie low high medium //de pus int


    }
}
