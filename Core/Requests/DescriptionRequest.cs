using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Requests
{
    public class DescriptionRequest
    {
    
        public int Id { get; set; }
        public string MarketSize { get; set; }

        public string BusinessModel { get; set; }

        public string Competitiveness { get; set; }

        public string FinancialStatus { get; set; }

        public string RiskFactors { get; set; }
    }
}
