using System.ComponentModel.DataAnnotations;

namespace WebGuider.Admin.Models.DBModel
{
    public class WebGuideInformation
    {
        [Key]
        public int Id { get; set; }
        public string Item_Description { get; set; }
        public string Item_Sequence { get; set; }
        public string Item_Id { get; set; }
        public string Item_CanvasData { get; set; }
        public string Item_Classes { get; set; }
        public string Url { get; set; }
    }
}
