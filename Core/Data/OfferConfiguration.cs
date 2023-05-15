using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Data
{
    public class OfferConfiguration : IEntityTypeConfiguration<Offer>
    {
        public void Configure(EntityTypeBuilder<Offer> builder)
        {
            builder.Property(p => p.Id).IsRequired();
            builder.Property(p => p.AuthorName).IsRequired().HasMaxLength(100);
            builder.Property(p => p.Company_Email).IsRequired();
            builder.Property(p => p.Company_Name).IsRequired();
            builder.Property(p=> p.Deadline).IsRequired();
            builder.HasOne(b => b.Transaction).WithMany().HasForeignKey(b => b.TransactionId);
            builder.HasOne(t => t.Description).WithMany().HasForeignKey(p => p.DescriptionId);


        }
    }
}
