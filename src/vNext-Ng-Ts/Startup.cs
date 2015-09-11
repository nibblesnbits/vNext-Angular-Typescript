using System.Linq;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Framework.DependencyInjection;
using Newtonsoft.Json.Serialization;
using Microsoft.AspNet.Mvc;

namespace vNext_Ng_Ts {
    public class Startup {
        public Startup(IHostingEnvironment env) {}


        public void ConfigureServices(IServiceCollection services) {
           

            services.AddMvc().Configure<MvcOptions>(options => {
                options.OutputFormatters.OfType<JsonOutputFormatter>()
                    .First()
                    .SerializerSettings
                    .ContractResolver = new CamelCasePropertyNamesContractResolver();
            });
        }


        public void Configure(IApplicationBuilder app, IHostingEnvironment env) {
            
            app.UseStaticFiles();

            app.UseMvc();
        }
    }
}
