﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using backend;
using Backend.Services;
#nullable disable

namespace backend.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20230407195546_Description")]
    partial class Description
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("backend.Entities.Description", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("BusinessModel")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Competitiveness")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FinancialStatus")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MarketSize")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("OfferId")
                        .HasColumnType("int");

                    b.Property<string>("RiskFactors")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("OfferId")
                        .IsUnique();

                    b.ToTable("Descriptions");
                });

            modelBuilder.Entity("backend.Entities.Offer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("AuthorName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Company_Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Company_Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("Deadline")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("Offers");
                });

            modelBuilder.Entity("backend.Entities.Transaction", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("Cost_TierFour")
                        .HasColumnType("int");

                    b.Property<int?>("Cost_TierOne")
                        .HasColumnType("int");

                    b.Property<int?>("Cost_TierThree")
                        .HasColumnType("int");

                    b.Property<int?>("Cost_TierTwo")
                        .HasColumnType("int");

                    b.Property<int>("OfferId")
                        .HasColumnType("int");

                    b.Property<bool?>("TierFour")
                        .HasColumnType("bit");

                    b.Property<bool?>("TierOne")
                        .HasColumnType("bit");

                    b.Property<bool?>("TierThree")
                        .HasColumnType("bit");

                    b.Property<bool?>("TierTwo")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.HasIndex("OfferId")
                        .IsUnique();

                    b.ToTable("Transactions");
                });

            modelBuilder.Entity("backend.Entities.Description", b =>
                {
                    b.HasOne("backend.Entities.Offer", null)
                        .WithOne("Description")
                        .HasForeignKey("backend.Entities.Description", "OfferId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("backend.Entities.Transaction", b =>
                {
                    b.HasOne("backend.Entities.Offer", null)
                        .WithOne("Transaction")
                        .HasForeignKey("backend.Entities.Transaction", "OfferId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("backend.Entities.Offer", b =>
                {
                    b.Navigation("Description")
                        .IsRequired();

                    b.Navigation("Transaction")
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
