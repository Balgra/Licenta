using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Services.Services.Abstractions
{
    public interface IOfferRepository
    {
        Task<Offer> GetOfferbyIdAsync(int id);

       // Task<Room> GetOfferByUserId(string userId);
        Task<List<Offer>> GetOffersAsync();

        Task<List<Description>> GetOfferDescriptionAsync();

        Task<List<Transaction>> GetOfferTransactionAsync();

        Task<Description> GetOfferDescriptionbyIdAsync(int id);

        Task<Transaction> GetOfferTransactionbyIdAsync(int id);

        Task<List<Competitiveness>> GetOfferCompetitivenessAsync();

        Task<List<Financial>> GetOfferFinancialAsync();

        Task<Competitiveness> GetOfferCompetitivenessbyIdAsync(int id);

        Task<Financial> GetOfferFinancialbyIdAsync(int id);


        Task SaveChangesAsync();
    }
}
