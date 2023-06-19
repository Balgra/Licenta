﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Requests
{
    public class RequiermentRequest
    {
        public string businessModel { get; set; } 

        public string targetAudience { get; set; }

        public int RiskFactor { get; set; }

        public int MonthlyIncome { get; set; }

        public int MonthlySpendings { get; set; }

        public int CompanyValue { get; set; }

        public int maxMonthlyIncome { get; set; }

        public int maxMonthlySpendings { get; set; }

        public int maxCompanyValue { get; set; }


    }
}
