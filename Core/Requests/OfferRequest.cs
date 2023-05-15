using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Requests
{
    public class OfferRequest
    {
        [Required]
        public string AuthorName { get; set; }

        [Required]
        public string Company_Name { get; set; }

        [Required]
        public string Company_Email { get; set; }

        [Required]
        public DateTime Deadline { get; set; }

        [Required]
        public int CostTierOne { get; set; }

        [Required]
        public int CostTierTwo { get; set; }

        [Required]
        public int Cost_TierThree { get; set; }

        [Required]
        public int Cost_TierFour { get; set; }

        [Required]
        public string MarketSize { get; set; }

        [Required]
        public string BusinessModel { get; set; }

        [Required]
        public string Competitiveness { get; set; }

        [Required]
        public string FinancialStatus { get; set; }

        [Required]
        public string RiskFactors { get; set; }
    }
}
