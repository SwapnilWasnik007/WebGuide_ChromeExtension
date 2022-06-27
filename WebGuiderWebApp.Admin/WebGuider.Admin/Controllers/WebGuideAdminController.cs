using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using WebGuider.Admin.Models;
using WebGuider.Admin.Services;

namespace WebGuider.Admin.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WebGuideAdminController : ControllerBase
    {
        private readonly IWebGuideAdminService _webGuideAdminService;
        public WebGuideAdminController(IWebGuideAdminService webGuideAdminService)
        {
            _webGuideAdminService = webGuideAdminService;
        }

        [HttpGet]
        public IActionResult Get([FromQuery] string url)
        {
            if (!string.IsNullOrWhiteSpace(url))
            {
                return Ok(_webGuideAdminService.GetData(url));
            }
            else
            {
                return BadRequest(new List<WebGuideView>());
            }
        }

        [HttpPost]
        public bool Post(List<WebGuideView> webGuides)
        {
            return _webGuideAdminService.SaveData(webGuides);
        }
    }
}
