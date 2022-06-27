using System.Collections;
using System.Collections.Generic;
using WebGuider.Admin.Models;

namespace WebGuider.Admin.Services
{
    public interface IWebGuideAdminService
    {
        bool SaveData(List<WebGuideView> webGuideInfo);
        List<WebGuideView> GetData(string url);
    }
}
