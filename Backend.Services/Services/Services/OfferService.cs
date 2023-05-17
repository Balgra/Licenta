
using Core.Entities;
using Backend.Services.Services.Abstractions;
using Core.Data;
using Core.Requests;
using Microsoft.EntityFrameworkCore;
using System;

namespace Backend.Services.Services.Services
{
    public class OfferService : IOfferService
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly IOfferRepository _offerRepo;

        public OfferService(ApplicationDbContext dbContext, IOfferRepository offerRepo)
        {
            _dbContext = dbContext;
            _offerRepo = offerRepo;
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

       

        public async Task<IReadOnlyList<Offer>> GetOffers()
        {
            var Offers = await _offerRepo.GetOffersAsync();

            return Offers;
        }

        public async Task<IReadOnlyList<Transaction>> GetOfferTransactionsAsync()
        {
            return await _offerRepo.GetOfferTransactionAsync();
        }

        public async Task<IReadOnlyList<Description>> GetOfferDescriptionsAsync()
        {
            return await _offerRepo.GetOfferDescriptionAsync();
        }

        public async Task<Offer> GetOfferbyIdAsync(int id)
        {
            return await _offerRepo.GetOfferbyIdAsync(id);
        }

        public async Task<Transaction> GetOffersTransactionbyid(int id)
        {
            return await _offerRepo.GetOfferTransactionbyIdAsync(id);
        }

        public async Task<Description> GetOffersDescriptionbyid(int id)
        {
            return await _offerRepo.GetOfferDescriptionbyIdAsync(id);
        }

        public async Task<Transaction> UpdateTiersAsync(int id, bool TierOne, bool TierTwo,
            bool TierThree, bool TierFour)
        {
            var transaction = await _offerRepo.GetOfferTransactionbyIdAsync(id);

            if (transaction == null)
            {
                return null;
            }
            transaction.TierOne = TierOne;
            transaction.TierTwo = TierTwo;
            transaction.TierThree = TierThree;
            transaction.TierFour = TierFour;

            await _offerRepo.SaveChangesAsync();

            return transaction;
        }

        public async Task<Description> UpdateDescriptionAsync(int id, string MarketSize, string BusinessModel, string Competitiveness, string FinancialStatus, string RiskFactors)
        {
            var description = await _offerRepo.GetOfferDescriptionbyIdAsync(id);

            if (description == null)
            {
                return null;
            }
            description.MarketSize = MarketSize;
            description.BusinessModel = BusinessModel;
            description.Competitiveness = Competitiveness;
            description.FinancialStatus = FinancialStatus;
            description.RiskFactors = RiskFactors;

            await _offerRepo.SaveChangesAsync();

            return description;
        }

        public async Task<Offer> DeleteOffer(int id)
        {
            var to_delete = await _offerRepo.GetOfferbyIdAsync(id);

            if (to_delete == null)
            {
                return null; 
            }

            _dbContext.Offers.Remove(to_delete);

            await _offerRepo.SaveChangesAsync();

            return to_delete;
        }
    }
}
