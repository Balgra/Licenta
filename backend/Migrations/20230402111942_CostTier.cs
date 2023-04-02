using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class CostTier : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Cost_TierFour",
                table: "Transactions",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Cost_TierOne",
                table: "Transactions",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Cost_TierThree",
                table: "Transactions",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Cost_TierTwo",
                table: "Transactions",
                type: "int",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Cost_TierFour",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "Cost_TierOne",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "Cost_TierThree",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "Cost_TierTwo",
                table: "Transactions");
        }
    }
}
