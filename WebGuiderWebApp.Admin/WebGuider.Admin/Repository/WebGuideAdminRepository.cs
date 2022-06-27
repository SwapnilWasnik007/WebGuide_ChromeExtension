using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using WebGuider.Admin.Models;
using WebGuider.Admin.Models.DBModel;

namespace WebGuider.Admin.Repository
{
    public class WebGuideAdminRepository : IWebGuideAdminRepository
    {
        private readonly WebGuideContext _webGuideContext;

        public WebGuideAdminRepository(WebGuideContext webGuideContext)
        {
            _webGuideContext = webGuideContext;
        }

        public List<WebGuideInformation> GetData(string url)
        {
            return _webGuideContext.WebGuideInformation.Where(x => x.Url.ToLower() == url.ToLower()).OrderBy(x => x.Item_Sequence).ToList();
        }

        public bool SaveData(List<WebGuideInformation> webGuideInfo)
        {
            try
            {
                _webGuideContext.WebGuideInformation.AddRange(webGuideInfo);
                int res = _webGuideContext.SaveChanges();
                return res > 0;
            }
            catch (System.Exception ex)
            {
                return false;
            }
        }
    }
}
