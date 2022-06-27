using Microsoft.EntityFrameworkCore.Migrations;

namespace WebGuider.Admin.Migrations
{
    public partial class firstmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "WebGuideInformation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Item_Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Item_Sequence = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Item_Id = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CanvasData = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WebGuideInformation", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "WebGuideInformation");
        }
    }
}
