using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace serpost.monitoreo.web
{
    public class Program
    {
        //public static void Main(string[] args)
        //{
        //    CreateHostBuilder(args).UseUrls("http://192.168.1.10:80").Build().Run();
        //    //CreateHostBuilder(args).Build().Run();
        //}

        //public static IHostBuilder CreateHostBuilder(string[] args) =>
        //    Host.CreateDefaultBuilder(args)
        //        .ConfigureWebHostDefaults(webBuilder =>
        //        {
        //            webBuilder.UseStartup<Startup>();
        //        });


        //    public static void Main(string[] args)
        //    {
        //        //CreateWebHostBuilder(args).UseUrls("http://192.168.1.10:80").Build().Run();
        //        CreateWebHostBuilder(args).UseUrls("http://0.0.0.0:80").Build().Run();  
        //        //CreateWebHostBuilder(args).Build().Run();
        //    }

        //    public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
        //        WebHost.CreateDefaultBuilder(args)
        //            .UseStartup<Startup>();
        //}


        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.
                    //UseUrls("http://0.0.0.0:5000").
                    UseStartup<Startup>();
                });

    }
}
