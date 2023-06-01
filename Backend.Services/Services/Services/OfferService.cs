
using Core.Entities;
using Backend.Services.Services.Abstractions;
using Core.Data;
using Core.Requests;
using Microsoft.EntityFrameworkCore;
using System;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;

namespace Backend.Services.Services.Services
{
    public class OfferService : IOfferService
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly IOfferRepository _offerRepo;
        private readonly IHttpContextAccessor _httpContext;

        public OfferService(ApplicationDbContext dbContext, IOfferRepository offerRepo, 
            IHttpContextAccessor httpContext)
        {
            _dbContext = dbContext;
            _offerRepo = offerRepo;
            _httpContext = httpContext;
        }
        //Verif daca User exista etc...
        public async Task<Offer> CreateOffer(OfferRequest Offer)
        {
            var UserId = _httpContext.HttpContext.User.FindFirstValue("UserId");

            Console.WriteLine(UserId.ToString());

            var offer = new Offer()
            {
                AuthorName = Offer.AuthorName,
                Deadline = Offer.Deadline,
                UserId = UserId,
                Created = DateTime.Now,
                Company_Name = Offer.Company_Name,
                Company_Email = Offer.Company_Email,
                Description = new Description
                {
                    MarketSize = Offer.MarketSize,
                    BusinessModel = Offer.BusinessModel,
                    Descriptions = Offer.Descriptions,
                    TargetAudience = Offer.TargetAudience,
                    MarketingStrategies = Offer.MarketingStrategies,
                    RiskFactors = Offer.RiskFactors
                },
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

                },
                Financial = new Financial { 

                    CompanyValue = Offer.CompanyValue,
                    MonthlyIncome = Offer.MonthlyIncome,
                    MonthlySpendings = Offer.MonthlySpendings,
                    ValueOfDebt = Offer.ValueOfDebt,
                    ValueOfLoans = Offer.ValueOfLoans,
                    YearsOnMarket = Offer.YearsOnMarket,
                    MethodOfValuation = Offer.MethodOfValuation
                },

               Competitiveness = new Competitiveness
               {
                   EmbraceDigitalTransformation = Offer.EmbraceDigitalTransformation,
                   EnhanceCustomerExperience = Offer.EnhanceCustomerExperience,
                   EmbraceEmergingTechnologies = Offer.EnhanceCustomerExperience,
                   InvestInEmployeeDevelopment = Offer.InvestInEmployeeDevelopment,
                   AdoptAgileMethodologies = Offer.AdoptAgileMethodologies,
                   LeverageBigDataAndAnalytics = Offer.LeverageBigDataAndAnalytics
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

        public async Task<Offer> GetOfferbyIdAsync(int id)
        {
            return await _offerRepo.GetOfferbyIdAsync(id);
        }

        public async Task<IReadOnlyList<Transaction>> GetOfferTransactionsAsync()
        {
            return await _offerRepo.GetOfferTransactionAsync();
        }

        public async Task<IReadOnlyList<Description>> GetOfferDescriptionsAsync()
        {
            return await _offerRepo.GetOfferDescriptionAsync();
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
           // description.BusinessModel = BusinessModel;
           /// description.Competitiveness = Competitiveness;
           /// description.FinancialStatus = FinancialStatus;
          //  description.RiskFactors = RiskFactors;

            await _offerRepo.SaveChangesAsync();

            return description;
        }

        public async Task<IReadOnlyList<Competitiveness>> GetOfferCompetitivenessAsync()
        {
            return await _offerRepo.GetOfferCompetitivenessAsync();
        }

        public async Task<IReadOnlyList<Financial>> GetOfferFinancialsAsync()
        {
            return await _offerRepo.GetOfferFinancialAsync();
        }

        public async Task<Financial> GetOffersFinancialbyid(int id)
        {
            return await _offerRepo.GetOfferFinancialbyIdAsync(id);
        }

        public async Task<Competitiveness> GetOffersCompetitivenessbyid(int id)
        {
            return await _offerRepo.GetOfferCompetitivenessbyIdAsync(id);
        }

        public async Task<Offer> DeleteOffer(int id)
        {
            var to_delete = await _offerRepo.GetOfferbyIdAsync(id);
            var to_deleteTransaction = await _offerRepo.GetOfferTransactionbyIdAsync(id);
            var to_deleteDescription = await _offerRepo.GetOfferDescriptionbyIdAsync(id);

            if (to_delete == null)
            {
                return null; 
            }

            _dbContext.Offers.Remove(to_delete);
            _dbContext.Descriptions.Remove(to_deleteDescription);
            _dbContext.Transactions.Remove(to_deleteTransaction);

            await _offerRepo.SaveChangesAsync();

            return to_delete;
        }


        public async Task<Offer> GetPlanOfInvesting()
        {
            var Offers = await _offerRepo.GetOffersAsync();

            Random rnd = new Random();

            int randIndex = rnd.Next(Offers.Count);

            var random = Offers[randIndex];

            return random;
        }
    }
}
