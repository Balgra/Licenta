
using Backend.Services.Entities;
using Backend.Services.Services.Abstractions;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services.Services.Services
{
    public class OfferService : IOfferService
    {
       //rivate readonly IRepository<Offer> _offerRepository;
        private readonly ApplicationDbContext _dbContext;

        public OfferService(/*epository<Offer> offerRepository,*/  ApplicationDbContext dbContext)
        {
           //offerRepository = offerRepository;
            _dbContext = dbContext;
        }

 

        public async Task<Offer> CreateOffer(string AuthorName,
            string Company_Name, string Company_Email, DateTime Deadline,
            int CostTierOne, int CostTierTwo, int Cost_TierThree, int Cost_TierFour)
        {

            var offer = new Offer()
            {
                AuthorName = AuthorName,
                Deadline = Deadline,
                Description = new Description
                {
                    MarketSize = "",
                    BusinessModel = "",
                    Competitiveness = "",
                    FinancialStatus = "",
                    RiskFactors = ""
                },
                Created = DateTime.Now,
                Company_Name = Company_Name,
                Company_Email = Company_Email,
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

            return offer;
        }

        public Task DeleteOffer(int id)
        {
            throw new NotImplementedException();
        }

        public Task GetOffers()
        {
            throw new NotImplementedException();
        }

        public Task GetOffersTransactionbyid(int id)
        {
            throw new NotImplementedException();
        }

        public Task UpdateDescription(int offerId, string MarketSize, string BusinessModel, string Competitiveness, string FinancialStatus, string RiskFactors)
        {
            throw new NotImplementedException();
        }

        public Task UpdateTier(int offerId, bool TierOne, bool TierTwo, bool TierThree, bool TierFour)
        {
            throw new NotImplementedException();
        }
    }
}
