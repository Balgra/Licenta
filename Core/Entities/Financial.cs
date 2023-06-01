using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Financial : BaseEntity
    {
        public int CompanyValue { get; set; }
        public int MonthlySpendings { get; set; }
        public int MonthlyIncome { get; set; }

        public int ValueOfDebt { get; set; }

        public int ValueOfLoans { get; set; }

        public float YearsOnMarket { get; set; }

        public string MethodOfValuation { get; set; }
    }
}
