using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class OfferComplete : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "Created",
                table: "Offers",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "Deadline",
                table: "Offers",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "StatusId",
                table: "Offers",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "TierList",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TierList", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Offers_StatusId",
                table: "Offers",
                column: "StatusId");

            migrationBuilder.AddForeignKey(
                name: "FK_Offers_TierList_StatusId",
                table: "Offers",
                column: "StatusId",
                principalTable: "TierList",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Offers_TierList_StatusId",
                table: "Offers");

            migrationBuilder.DropTable(
                name: "TierList");

            migrationBuilder.DropIndex(
                name: "IX_Offers_StatusId",
                table: "Offers");

            migrationBuilder.DropColumn(
                name: "Created",
                table: "Offers");

            migrationBuilder.DropColumn(
                name: "Deadline",
                table: "Offers");

            migrationBuilder.DropColumn(
                name: "StatusId",
                table: "Offers");
        }
    }
}
