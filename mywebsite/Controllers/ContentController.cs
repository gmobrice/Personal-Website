using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace mywebsite.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContentController : ControllerBase
    {
        private readonly IWebHostEnvironment hostingEnvironment;

        public ContentController(IWebHostEnvironment hostingEnvironment)
        {
            this.hostingEnvironment = hostingEnvironment;
        }

        [HttpPost]
        public string Post(string name)
        {
            string[] file;

            if (hostingEnvironment.EnvironmentName == "Development")
                file = System.IO.File.ReadAllLines(Path.Combine(Directory.GetCurrentDirectory(), "ClientApp", "PageContent", name + ".md"));
            else
                file = System.IO.File.ReadAllLines(Path.Combine(Directory.GetCurrentDirectory(), "ClientApp", "build", "PageContent", name + ".md"));

            try
            {
                StringBuilder content = new StringBuilder();

                foreach (string s in file)
                {
                    content.Append(s + "\n");
                }
                
                return content.ToString();
            }
            catch ( Exception e )
            {
                return e.Message;
            }
            
        }
    }
}