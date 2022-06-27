using System.Collections.Generic;
using System.Linq;
using WebGuider.Admin.Models;
using WebGuider.Admin.Models.DBModel;
using WebGuider.Admin.Repository;

namespace WebGuider.Admin.Services
{
    public class WebGuideAdminService : IWebGuideAdminService
    {
        private readonly IWebGuideAdminRepository _webGuideAdminRepository;

        public WebGuideAdminService(IWebGuideAdminRepository webGuideAdminRepository)
        {
            this._webGuideAdminRepository = webGuideAdminRepository;
        }

        public List<WebGuideView> GetData(string url)
        {
            var data = _webGuideAdminRepository.GetData(url);
            return data.Select(x => new WebGuideView
            {
                Item_Id = x.Item_Id,
                Item_Description = x.Item_Description,
                Item_Sequence = x.Item_Sequence,
                Item_CanvasData = x.Item_CanvasData,
                Item_Classes = x.Item_Classes,
                Url = x.Url
            }).ToList();
        }

        public bool SaveData(List<WebGuideView> webGuideInfo)
        {
            var webGuideInformation = webGuideInfo.Select(x => new WebGuideInformation
            {
                Item_Id = x.Item_Id,
                Item_Description = x.Item_Description,
                Item_Sequence = x.Item_Sequence,
                Item_CanvasData = x.Item_CanvasData,
                Item_Classes = x.Item_Classes,
                Url = x.Url
            }).ToList();
            return _webGuideAdminRepository.SaveData(webGuideInformation);
        }
    }
}
