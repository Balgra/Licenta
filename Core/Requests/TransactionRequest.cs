using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Requests
{
    public class TransactionRequest
    {
        public int Id { get; set; }
        public bool TierOne { get; set; }

        public bool TierTwo { get; set; }

        public bool TierThree { get; set; }

        public bool TierFour { get; set; }
    }
}
