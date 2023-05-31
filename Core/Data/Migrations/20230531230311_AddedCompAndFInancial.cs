using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Core.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddedCompAndFInancial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "FinancialStatus",
                table: "Descriptions",
                newName: "TargetAudience");

            migrationBuilder.RenameColumn(
                name: "Competitiveness",
                table: "Descriptions",
                newName: "MarketingStrategies");

            migrationBuilder.AddColumn<int>(
                name: "CompetitivenessId",
                table: "Offers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "FinancialId",
                table: "Offers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "RiskFactors",
                table: "Descriptions",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<string>(
                name: "Descriptions",
                table: "Descriptions",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "Competitivenesses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmbraceDigitalTransformation = table.Column<bool>(type: "bit", nullable: false),
                    EnhanceCustomerExperience = table.Column<bool>(type: "bit", nullable: false),
                    LeverageBigDataAndAnalytics = table.Column<bool>(type: "bit", nullable: false),
                    AdoptAgileMethodologies = table.Column<bool>(type: "bit", nullable: false),
                    EmbraceEmergingTechnologies = table.Column<bool>(type: "bit", nullable: false),
                    InvestInEmployeeDevelopment = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Competitivenesses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Financials",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CompanyValue = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MonthlySpendings = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MonthlyIncome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ValueOfDebt = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ValueOfLoans = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    YearsOnMarket = table.Column<float>(type: "real", nullable: false),
                    MethodOfValuation = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Financials", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Offers_CompetitivenessId",
                table: "Offers",
                column: "CompetitivenessId");

            migrationBuilder.CreateIndex(
                name: "IX_Offers_FinancialId",
                table: "Offers",
                column: "FinancialId");

            migrationBuilder.AddForeignKey(
                name: "FK_Offers_Competitivenesses_CompetitivenessId",
                table: "Offers",
                column: "CompetitivenessId",
                principalTable: "Competitivenesses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Offers_Financials_FinancialId",
                table: "Offers",
                column: "FinancialId",
                principalTable: "Financials",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Offers_Competitivenesses_CompetitivenessId",
                table: "Offers");

            migrationBuilder.DropForeignKey(
                name: "FK_Offers_Financials_FinancialId",
                table: "Offers");

            migrationBuilder.DropTable(
                name: "Competitivenesses");

            migrationBuilder.DropTable(
                name: "Financials");

            migrationBuilder.DropIndex(
                name: "IX_Offers_CompetitivenessId",
                table: "Offers");

            migrationBuilder.DropIndex(
                name: "IX_Offers_FinancialId",
                table: "Offers");

            migrationBuilder.DropColumn(
                name: "CompetitivenessId",
                table: "Offers");

            migrationBuilder.DropColumn(
                name: "FinancialId",
                table: "Offers");

            migrationBuilder.DropColumn(
                name: "Descriptions",
                table: "Descriptions");

            migrationBuilder.RenameColumn(
                name: "TargetAudience",
                table: "Descriptions",
                newName: "FinancialStatus");

            migrationBuilder.RenameColumn(
                name: "MarketingStrategies",
                table: "Descriptions",
                newName: "Competitiveness");

            migrationBuilder.AlterColumn<string>(
                name: "RiskFactors",
                table: "Descriptions",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }
    }
}
