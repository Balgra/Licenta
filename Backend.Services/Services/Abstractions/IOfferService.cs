
using Backend.Services.Entities;

namespace Backend.Services.Services.Abstractions;

//contract pe care se share-uie intre cele 2 aplicatii
    public interface IOfferService
    {
        Task<Offer> CreateOffer(string AuthorName,
            string Company_Name, string Company_Email, DateTime Deadline,
            int CostTierOne, int CostTierTwo, int Cost_TierThree, int Cost_TierFour);

        Task GetOffers();

        Task GetOffersTransactionbyid(int id);

        Task UpdateTier(int offerId, bool TierOne, bool TierTwo, bool TierThree, bool TierFour);

        Task UpdateDescription(int offerId, string MarketSize,
           string BusinessModel, string Competitiveness, string FinancialStatus, string RiskFactors);

        Task DeleteOffer(int id);
    }
