using Microsoft.AspNet.Mvc;

namespace vNext_Ng_Ts.Controllers {
    [Route("api/[controller]")]
    public class DataController : Controller {
        [HttpGet]
        public ObjectResult Get() {
            return new ObjectResult(new[] {
                new {
                    Foo = "bar"
                }
            });
        }
    }
}
