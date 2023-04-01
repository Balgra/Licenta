using backend.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer.Query.Internal;
using static backend.Entities.Transaction;

namespace backend.Controllers
{
    [ApiController]
    [Route("/api/offers")]
    public class OfferController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        //Transaction / Add to interest new class si ala imi trimite tierList la Offer COntroll 
        // Aka new Transaction class cu id la offer samd, si un TierList var. si ala se trimite la controllerOffer
        // New function receiveTransaction care cand primeste de la database o  transactie pune Tierlistul de la oferta x (IdOffer + comapny name + TierListVar)
        public OfferController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        /*    public class Offer
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string? AuthorName { get; set; }
        public string? Description { get; set; }
        public DateTime Created { get; set; }

        public string? Company_Name { get; set; }

        public Transaction? Transaction { get; set; }

        public DateTime? Deadline { get; set; }

    }*/
        [HttpPost]
        public async Task<IActionResult> CreateOffer(string AuthorName, string Description,
            string Company_Name, string Company_Email ,DateTime Deadline)
        {
            

            var offer = new Offer() { AuthorName = AuthorName, Deadline = Deadline, 
                Description = Description, Created = DateTime.Now, Company_Name = Company_Name, Company_Email = Company_Email,
                Transaction = new Transaction
                {
                    TierOne = 0,
                    TierTwo = 0,
                    TierThree = 0,
                    TierFour = 0
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
        
       [HttpGet("{id}")]
        public async Task<IActionResult> GetOffersbyid(int id)
        {
            var offers = await _dbContext.Offers.FirstOrDefaultAsync(d => d.Id == id);

            if (offers == null) return NotFound();
            return Ok(offers);
        }

        [HttpPut("/api/offers/{offerId:int}/transaction")]
        public async Task<IActionResult> UpdateTransaction(int offerId, [FromBody] Transaction transaction)
        {
            var offer = await _dbContext.Offers.Include(o => o.Transaction).SingleOrDefaultAsync(o => o.Id == offerId);

            if (offer == null)
            {
                return NotFound();
            }
            if(transaction.TierOne!= null)
                offer.Transaction.TierOne = transaction.TierOne;
            if (transaction.TierTwo != null)
                offer.Transaction.TierTwo = transaction.TierTwo;
            if (transaction.TierThree != null)
                offer.Transaction.TierThree = transaction.TierThree;
            if (transaction.TierFour != null)
                offer.Transaction.TierFour = transaction.TierFour;

            await _dbContext.SaveChangesAsync();

            return Ok(offer);
        }

        
        [HttpPut]
        public async Task<IActionResult> EditOffer(int id, string Description, string Company_Email, DateTime Deadline)
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


    
    }
}
