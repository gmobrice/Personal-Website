using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace mywebsite.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContentController : ControllerBase
    {
        [HttpPost]
        public string Post(string name)
        {
            string[] file = System.IO.File.ReadAllLines(@"PageContent/" + name + ".md");
            StringBuilder content = new StringBuilder();

            foreach (string s in file)
            {
                content.Append(s + "\n");
            }
            
            return content.ToString();
        }
    }
}
