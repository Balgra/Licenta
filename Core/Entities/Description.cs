using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities
{
    public class Description : BaseEntity
    {

        //public Offer? Offer { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string MarketSize { get; set; }

        public string BusinessModel { get; set; } // Subscription , E-commerce, Advertising, Freemium, Affiliate, Pay-As-You-Go
        public string Competitiveness { get; set; } //poate sa fie low high medium

        public string FinancialStatus { get; set; } //poate sa fie low high medium
        public string RiskFactors { get; set; } //poate sa fie low high medium


    }
}
