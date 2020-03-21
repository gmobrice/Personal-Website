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
            try
            {
                var file = System.IO.File.ReadAllLines(Path.Combine(Directory.GetCurrentDirectory(), 
                                            "ClientApp", "PageContent", name + ".md"));

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
