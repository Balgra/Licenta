using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Entities
{
    public class Description
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int OfferId { get; set; }

        public string MarketSize { get; set; }

        public string BusinessModel { get; set; } // Subscription , E-commerce, Advertising, Freemium, Affiliate, Pay-As-You-Go
        public string Competitiveness { get; set; } //poate sa fie low high medium

        public string FinancialStatus { get; set; } //poate sa fie low high medium
        public string RiskFactors { get; set; } //poate sa fie low high medium


    }
}
