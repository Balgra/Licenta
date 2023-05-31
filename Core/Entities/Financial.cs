using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Financial : BaseEntity
    {
        public string CompanyValue { get; set; }
        public string MonthlySpendings { get; set; }
        public string MonthlyIncome { get; set; }

        public string ValueOfDebt { get; set; }

        public string ValueOfLoans { get; set; }

        public float YearsOnMarket { get; set; }

        public string MethodOfValuation { get; set; }
    }
}
