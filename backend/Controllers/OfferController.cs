
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
        public OfferController(IOfferService offerService)
        {
           _offerService= offerService;
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
            var offers = await _offerService.GetOffers();

            return Ok(offers);
        }

        [HttpGet("description")]
        public async Task<ActionResult<IReadOnlyList<Description>>> GetOfferDescription()
        {
            var offerDescription = await _offerService.GetOfferDescriptionsAsync();

            return Ok(offerDescription);
        }

        [HttpGet("transaction")]
        public async Task<ActionResult<IReadOnlyList<Transaction>>> GetOfferTransaction()
        {
            var offerTransactions = await _offerService.GetOfferTransactionsAsync();

            return Ok(offerTransactions);
        }


         [HttpGet("{id}")]
         public async Task<ActionResult<Offer>> GetProductbyId(int id)
         {
             var product = await _offerService.GetOfferbyIdAsync(id);

             if (product == null) return NotFound();

             return product;
         }

        [HttpGet("transaction/{id}")]
        public async Task<ActionResult<Transaction>> GetTransactionbyId(int id)
        {
            var product = await _offerService.GetOffersTransactionbyid(id);

            if (product == null) return NotFound();

            return product;
        }

        [HttpGet("description/{id}")]
        public async Task<ActionResult<Description>> GetDescriptionbyId(int id)
        {
            var product = await _offerService.GetOffersDescriptionbyid(id);

            if (product == null) return NotFound();

            return product;
        }

        [HttpPut("transaction/{id}")]
        public async Task<Transaction> UpdateTier(int id, bool TierOne, bool TierTwo, bool TierThree, bool TierFour)
          {
            var transaction = await _offerService.UpdateTiersAsync(id, TierOne, TierTwo, TierThree, TierFour);
              

              return transaction;
          }

        [HttpPut("description/{id}")]
        public async Task<Description> UpdateDescription(int id, string MarketSize, string BusinessModel, string Competitiveness, string FinancialStatus, string RiskFactors)
        {
            var description = await _offerService.UpdateDescriptionAsync( id,  MarketSize,  BusinessModel,  Competitiveness,  FinancialStatus,  RiskFactors);


            return description;
        }

  
        /*//de pus cu Id la descriptuion
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
