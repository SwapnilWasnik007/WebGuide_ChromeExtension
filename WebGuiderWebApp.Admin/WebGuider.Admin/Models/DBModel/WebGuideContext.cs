using Microsoft.EntityFrameworkCore;

namespace WebGuider.Admin.Models.DBModel
{
    public class WebGuideContext : DbContext
    {
        public WebGuideContext(DbContextOptions<WebGuideContext> dbContextOptions) : base(dbContextOptions)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //optionsBuilder.UseSqlServer(
            //    @"Server=IN-IT5751\MSSQL;Database=WebGuideDB;Trusted_Connection=True;Integrated Security=True;");
        }

        public DbSet<WebGuideInformation> WebGuideInformation { get; set; }
    }
}
