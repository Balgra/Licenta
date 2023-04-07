using backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {


        }

        public DbSet<Offer> Offers { get; set; }
        public DbSet<Transaction> Transactions { get; set; }

        public DbSet<Description> Descriptions { get; set; }

    }
}
