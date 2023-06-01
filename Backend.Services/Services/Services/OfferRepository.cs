using Backend.Services.Services.Abstractions;
using Core.Data;
using Core.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Services.Services.Services
{
    public class OfferRepository : IOfferRepository
    {

        public readonly ApplicationDbContext _dbContext;

        public OfferRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Offer> GetOfferbyIdAsync(int id)
        {
            return await _dbContext.Offers
                .Include(p => p.Transaction)
                .Include(p => p.Description)
                .Include(p => p.Financial)
                .Include(p => p.Competitiveness)
                .FirstOrDefaultAsync(p => p.Id == id);
        }



        public async Task<List<Offer>> GetOffersAsync()
        {
            return await _dbContext.Offers.Include(p => p.Transaction)
                .Include(p => p.Description)
                 .Include(p => p.Financial)
                .Include(p => p.Competitiveness)
                .ToListAsync();
        }



        public async Task<List<Description>> GetOfferDescriptionAsync()
        {
            return await _dbContext.Descriptions.ToListAsync();
        }

        public async Task<List<Transaction>> GetOfferTransactionAsync()
        {
            return await _dbContext.Transactions.ToListAsync();
        }

        public async Task<Description> GetOfferDescriptionbyIdAsync(int id)
        {
            return await _dbContext.Descriptions.FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<Transaction> GetOfferTransactionbyIdAsync(int id)
        {
            return await _dbContext.Transactions.FirstOrDefaultAsync(p => p.Id == id);
        }


        public async Task<List<Competitiveness>> GetOfferCompetitivenessAsync()
        {
            return await _dbContext.Competitivenesses.ToListAsync();
        }

        public async Task<List<Financial>> GetOfferFinancialAsync()
        {
            return await _dbContext.Financials.ToListAsync();
        }

        public async  Task<Competitiveness> GetOfferCompetitivenessbyIdAsync(int id)
        {
            return await _dbContext.Competitivenesses.FirstOrDefaultAsync(p => p.Id == id);
        }


        public async Task<Financial> GetOfferFinancialbyIdAsync(int id)
        {
            return await _dbContext.Financials.FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task SaveChangesAsync()
             => await _dbContext.SaveChangesAsync();

        
    }
}
