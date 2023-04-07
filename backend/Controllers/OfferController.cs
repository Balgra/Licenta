using backend.Entities;
using backend.Migrations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer.Query.Internal;
using static backend.Entities.Transaction;

namespace backend.Controllers
{
    [ApiController ]
    [Route("/api/offers")]
    public class OfferController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        public OfferController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpPost]
        public async Task<IActionResult> CreateOffer(string AuthorName,
            string Company_Name, string Company_Email ,DateTime Deadline, 
            int CostTierOne, int CostTierTwo, int Cost_TierThree, int Cost_TierFour)
        {
            

            var offer = new Entities.Offer() { AuthorName = AuthorName, Deadline = Deadline, 
                Description = new Entities.Description {
                    MarketSize="",
                    BusinessModel = "",
                    Competitiveness = "",
                    FinancialStatus = "",
                    RiskFactors = ""
                }, 
                Created = DateTime.Now, Company_Name = Company_Name, Company_Email = Company_Email,
                Transaction = new Transaction
                {
                    TierOne = false,
                    TierTwo = false,
                    TierThree = false,
                    TierFour = false,
                    Cost_TierOne = CostTierOne,
                    Cost_TierTwo = CostTierTwo,
                    Cost_TierThree = Cost_TierThree,
                    Cost_TierFour = Cost_TierFour,

                }
            };
            await _dbContext.Offers.AddAsync(offer);

            await _dbContext.SaveChangesAsync();

            return Ok(offer);

        }

       [HttpGet]
        public async Task<IActionResult> GetOffers()
        {
            var offers = await _dbContext.Offers.ToListAsync();

            return Ok(offers);
        }
        
       /*[HttpGet("{id}")]
        public async Task<IActionResult> GetOffersbyid(int id)
        {
            var offers = await _dbContext.Offers.FirstOrDefaultAsync(d => d.Id == id);

            if (offers == null) return NotFound();
            return Ok(offers);
        }*/

        [HttpGet("{id}")]
        public async Task<IActionResult> GetOffersTransactionbyid(int id)
        {
            var offers = await _dbContext.Offers.Include(o => o.Transaction).SingleOrDefaultAsync(o => o.Id == id);

            if (offers == null) return NotFound();
            return Ok(offers);
        }



        [HttpPut("/api/offers/{offerId:int}/transaction")]
        public async Task<IActionResult> UpdateTier(int offerId, bool TierOne, bool TierTwo, bool TierThree, bool TierFour)
        {
            var offer = await _dbContext.Offers.Include(o => o.Transaction).SingleOrDefaultAsync(o => o.Id == offerId);
            if (offer == null)
            {
                return NotFound();
            }
            if (offer.Transaction.TierOne == false && TierOne == true)
                offer.Transaction.TierOne = true;
            if (offer.Transaction.TierTwo == false && TierTwo == true)
                offer.Transaction.TierTwo = true;
            if (offer.Transaction.TierThree == false && TierThree == true)
                offer.Transaction.TierThree = true;
            if (offer.Transaction.TierFour == false && TierFour == true)
                offer.Transaction.TierFour = true;

            await _dbContext.SaveChangesAsync();

            return Ok(offer);
        }

        /*MarketSize="",
                    BusinessModel = "",
                    Competitiveness = "",
                    FinancialStatus = "",
                    RiskFactors = ""*/

        [HttpPut("/api/offers/{offerId:int}/description")]
        public async Task<IActionResult> UpdateDescription(int offerId, string MarketSize, 
            string BusinessModel, string Competitiveness, string FinancialStatus, string RiskFactors)
        {
            var offer = await _dbContext.Offers.Include(o => o.Description).SingleOrDefaultAsync(o => o.Id == offerId);
            if (offer == null)
            {
                return NotFound();
            }
            offer.Description.MarketSize =  MarketSize;
            offer.Description.BusinessModel = BusinessModel;
            offer.Description.Competitiveness = Competitiveness;
            offer.Description.FinancialStatus = FinancialStatus;
            offer.Description.RiskFactors = RiskFactors;

            await _dbContext.SaveChangesAsync();

            return Ok(offer);
        }


        [HttpPut]
        public async Task<IActionResult> EditOffer(int id, Entities.Description Description, string Company_Email, DateTime Deadline)
        {

            var offer = await _dbContext.Offers.FirstOrDefaultAsync(d => d.Id == id);

            if (offer == null) { return NotFound(); }

            offer.Description = Description;
            offer.Company_Email = Company_Email;
            

            await _dbContext.SaveChangesAsync();

            return Ok(offer);

        }
        
        [HttpDelete]

        public async Task<IActionResult> DeleteOffer(int id)
        {
            var dog = await _dbContext.Offers.FirstOrDefaultAsync(d => d.Id == id);

            if (dog == null) { return NotFound(); }

            _dbContext.Offers.Remove(dog);

            await _dbContext.SaveChangesAsync();

            return Ok();
        }
        // to add modifications to all controllers
        // And fool proof the controller.
        //teamplate for description, value on market:, 

    
    }
}
