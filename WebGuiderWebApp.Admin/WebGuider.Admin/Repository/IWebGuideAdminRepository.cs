using System.Collections.Generic;
using WebGuider.Admin.Models;
using WebGuider.Admin.Models.DBModel;

namespace WebGuider.Admin.Repository
{
    public interface IWebGuideAdminRepository
    {
        bool SaveData(List<WebGuideInformation> webGuideInfo);
        List<WebGuideInformation> GetData(string url);
    }
}
