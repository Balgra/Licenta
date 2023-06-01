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

        public string Descriptions { get; set; }

        public string TargetAudience { get; set; }

        public string MarketingStrategies { get; set; }

        [Required]

        public int CompanyValue { get; set; }
        public int MonthlySpendings { get; set; }
        public int MonthlyIncome { get; set; }

        public int ValueOfDebt { get; set; }

        public int ValueOfLoans { get; set; }

        public float YearsOnMarket { get; set; }

        public string MethodOfValuation { get; set; }

        public bool EmbraceDigitalTransformation { get; set; }
        public bool EnhanceCustomerExperience { get; set; }
        public bool LeverageBigDataAndAnalytics { get; set; }
        public bool AdoptAgileMethodologies { get; set; }
        public bool EmbraceEmergingTechnologies { get; set; }
        public bool InvestInEmployeeDevelopment { get; set; }


    }
}
