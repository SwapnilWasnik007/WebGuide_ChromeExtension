using Microsoft.EntityFrameworkCore.Migrations;

namespace WebGuider.Admin.Migrations
{
    public partial class thirdmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CanvasData",
                table: "WebGuideInformation",
                newName: "Item_Classes");

            migrationBuilder.AddColumn<string>(
                name: "Item_CanvasData",
                table: "WebGuideInformation",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Item_CanvasData",
                table: "WebGuideInformation");

            migrationBuilder.RenameColumn(
                name: "Item_Classes",
                table: "WebGuideInformation",
                newName: "CanvasData");
        }
    }
}
