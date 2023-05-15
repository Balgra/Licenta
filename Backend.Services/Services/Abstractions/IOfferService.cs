
using Core.Entities;
using Core.Requests;

namespace Backend.Services.Services.Abstractions;

//contract pe care se share-uie intre cele 2 aplicatii
    public interface IOfferService
    {
        Task<Offer> CreateOffer(OfferRequest Offer);

         Task<Offer> GetOfferbyIdAsync(int id);

        Task<IReadOnlyList<Offer>> GetOffers();


       Task<IReadOnlyList<Description>> GetOfferDescriptionsAsync();

        Task<IReadOnlyList<Transaction>> GetOfferTransactionsAsync();


        Task<Transaction> GetOffersTransactionbyid(int id);

        Task<Description> GetOffersDescriptionbyid(int id);

        Task<Transaction> UpdateTiersAsync(int id, bool TierOne, bool TierTwo,
            bool TierThree, bool TierFour);


        Task<Description> UpdateDescriptionAsync(int id, string MarketSize, string BusinessModel, string Competitiveness,
       string FinancialStatus, string RiskFactors);

/*Task UpdateTier(int offerId, bool TierOne, bool TierTwo, bool TierThree, bool TierFour);

    Task UpdateDescription(int offerId, string MarketSize,
       string BusinessModel, string Competitiveness, string FinancialStatus, string RiskFactors);

    Task DeleteOffer(int id);*/
}
