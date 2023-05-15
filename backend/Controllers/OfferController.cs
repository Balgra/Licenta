
using Core.Entities;
using Backend.Services.Services.Abstractions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Core.Requests;

namespace backend.Controllers
{
    [ApiController ]
    //[Authorize]
    [Route("/api/offers")]
    public class OfferController : ControllerBase
    {

        private readonly IOfferService _offerService;
        private readonly IGenericRepository<Offer> _offerRepo;
        private readonly IGenericRepository<Description> _descriptionRepo;
        private readonly IGenericRepository<Transaction> _transactionRepo;
        public OfferController(IOfferService offerService, IGenericRepository<Offer> offerRepo,
            IGenericRepository<Description> descriptionRepo, 
            IGenericRepository<Transaction> transactionRepo)
        {
           _offerService= offerService;
            _offerRepo = offerRepo;
            _descriptionRepo = descriptionRepo;
            _transactionRepo = transactionRepo;
        }

        [HttpPost]
        public async Task<IActionResult> CreateOffer(OfferRequest Offer)
        {

            var offer = await _offerService.CreateOffer(Offer);

             return Ok(offer);
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Offer>>> GetOffers()
        {
            var offers = await _offerRepo.ListAllAsync();

            return Ok(offers);
        }

        [HttpGet("description")]
        public async Task<ActionResult<IReadOnlyList<Description>>> GetOfferDescription()
        {
            var offerDescription = await _descriptionRepo.ListAllAsync();

            return Ok(offerDescription);
        }

        [HttpGet("transaction")]
        public async Task<ActionResult<IReadOnlyList<Transaction>>> GetOfferTransaction()
        {
            var offerTransactions = await _transactionRepo.ListAllAsync();

            return Ok(offerTransactions);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Offer>> GetProduct(int id)
        {
            var product = await _offerRepo.GetByIdAsync(id);

            if (product == null) return NotFound();

            return product;
        }

        /*[HttpGet("{id}")]
         public async Task<IActionResult> GetOffersbyid(int id)
         {
             var offers = await _dbContext.Offers.FirstOrDefaultAsync(d => d.Id == id);

             if (offers == null) return NotFound();
             return Ok(offers);
         }*/

        /*  [HttpGet("{id}")]
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
          }*/

        /*MarketSize="",
                    BusinessModel = "",
                    Competitiveness = "",
                    FinancialStatus = "",
                    RiskFactors = ""*/
        /*
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

        //de pus cu Id la descriptuion
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
        */

    }
}
