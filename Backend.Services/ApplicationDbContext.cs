using Backend.Services.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services
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

        public DbSet<User> Users { get; set; }

    }
}
