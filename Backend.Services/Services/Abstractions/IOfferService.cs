
using Core.Entities;
using Core.Requests;

namespace Backend.Services.Services.Abstractions;

//contract pe care se share-uie intre cele 2 aplicatii
    public interface IOfferService
    {
        Task<Offer> CreateOffer(OfferRequest Offer);

        Task GetOffers();

        Task<Offer> GetOfferByIdAsync(int id);

        Task<IReadOnlyList<Offer>> GetOffersAsync();

        Task<IReadOnlyList<Description>> GetOfferDescriptionsAsync();

        Task<IReadOnlyList<Transaction>> GetOfferTransactionsAsync();

        Task GetOffersTransactionbyid(int id);

        Task GetOffersDescriptionbyid(int id);

    Task UpdateTier(int offerId, bool TierOne, bool TierTwo, bool TierThree, bool TierFour);

        Task UpdateDescription(int offerId, string MarketSize,
           string BusinessModel, string Competitiveness, string FinancialStatus, string RiskFactors);

        Task DeleteOffer(int id);
    }
