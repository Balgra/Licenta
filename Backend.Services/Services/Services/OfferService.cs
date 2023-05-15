
using Core.Entities;
using Backend.Services.Services.Abstractions;
using Core.Data;
using Core.Requests;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services.Services.Services
{
    public class OfferService : IOfferService
    {
        private readonly ApplicationDbContext _dbContext;

        public OfferService(ApplicationDbContext dbContext, IGenericRepository<Offer> offerRepo)
        {
            _dbContext = dbContext;
        }

        public async Task<Offer> CreateOffer(OfferRequest Offer)
        {

            var offer = new Offer()
            {
                AuthorName = Offer.AuthorName,
                Deadline =  Offer.Deadline,
                Description = new Description
                {
                    MarketSize = Offer.MarketSize,
                    BusinessModel = Offer.BusinessModel,
                    Competitiveness = Offer.Competitiveness,
                    FinancialStatus = Offer.FinancialStatus,
                    RiskFactors = Offer.RiskFactors
                },
                Created = DateTime.Now,
                Company_Name = Offer.Company_Name,
                Company_Email = Offer.Company_Email,
                Transaction = new Transaction
                {
                    TierOne = false,
                    TierTwo = false,
                    TierThree = false,
                    TierFour = false,
                    Cost_TierOne = Offer.CostTierOne,
                    Cost_TierTwo = Offer.CostTierTwo,
                    Cost_TierThree = Offer.Cost_TierThree,
                    Cost_TierFour = Offer.Cost_TierFour,

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

        public async Task<Offer> GetOfferByIdAsync(int id)
        {
            return await _dbContext.Offers
                .Include(p => p.Transaction)
                .Include(p => p.Description)
                .FirstOrDefaultAsync(p => p.Id == id);
        }

        public Task<IReadOnlyList<Description>> GetOfferDescriptionsAsync()
        {
            throw new NotImplementedException();
        }

        public Task GetOffers()
        {
            throw new NotImplementedException();
        }

        public Task<IReadOnlyList<Offer>> GetOffersAsync()
        {
            throw new NotImplementedException();
        }

        public Task GetOffersDescriptionbyid(int id)
        {
            throw new NotImplementedException();
        }

        public Task GetOffersTransactionbyid(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IReadOnlyList<Transaction>> GetOfferTransactionsAsync()
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
