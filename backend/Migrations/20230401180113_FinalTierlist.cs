using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class FinalTierlist : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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
                name: "StatusId",
                table: "Offers");

            migrationBuilder.CreateTable(
                name: "Transaction",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OfferId = table.Column<int>(type: "int", nullable: false),
                    TierOne = table.Column<int>(type: "int", nullable: true),
                    TierTwo = table.Column<int>(type: "int", nullable: true),
                    TierThree = table.Column<int>(type: "int", nullable: true),
                    TierFour = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transaction", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Transaction_Offers_OfferId",
                        column: x => x.OfferId,
                        principalTable: "Offers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Transaction_OfferId",
                table: "Transaction",
                column: "OfferId",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Transaction");

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
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TierFour = table.Column<int>(type: "int", nullable: true),
                    TierOne = table.Column<int>(type: "int", nullable: true),
                    TierThree = table.Column<int>(type: "int", nullable: true),
                    TierTwo = table.Column<int>(type: "int", nullable: true)
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
    }
}
