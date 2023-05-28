
using Core.Entities;
using Backend.Services.Services.Abstractions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Core.Requests;
using Microsoft.AspNetCore.Authentication.JwtBearer;
//to look for both autorize
namespace backend.Controllers
{
    [ApiController ]
    [Authorize(Roles ="Investor", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
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

        [HttpGet("plan")]
        public async Task<ActionResult<Offer>> GetPlan()
        {
            var offers = await _offerService.GetPlanOfInvesting();

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
         public async Task<ActionResult<Offer>> GetOfferbyId(int id)
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

        [HttpPut("transaction")]
        public async Task<Transaction> UpdateTier(TransactionRequest transactions)
          {
            var transaction = await _offerService.UpdateTiersAsync(transactions.Id,
                transactions.TierOne, transactions.TierTwo, transactions.TierThree, transactions.TierFour);
              

              return transaction;
          }

        [HttpPut("description")]
        public async Task<Description> UpdateDescription(DescriptionRequest descr)
        {
            var description = await _offerService.UpdateDescriptionAsync(descr.Id, descr.MarketSize, descr.BusinessModel, descr.Competitiveness, descr.FinancialStatus, descr.RiskFactors);


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

        }*/
        
        [HttpDelete]
        public async Task<Offer> DeleteOffer(int id)
        {
            var to_delete = await _offerService.DeleteOffer(id);

            if(to_delete == null)
            {
                return null;
            }

            return to_delete;
        }
        // to add modifications to all controllers
        // And fool proof the controller.
        //teamplate for description, value on market:, 
        

    }
}

//Plan of Investing // invest Plan by Ofers
//Database figure
// Transaction replanning
//Reverse property
