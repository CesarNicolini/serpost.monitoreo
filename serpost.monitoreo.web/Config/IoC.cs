using Microsoft.Extensions.DependencyInjection;
using serpost.monitoreo.core.Interfaces;
using serpost.monitoreo.data.Repositories;


namespace serpost.monitoreo.web.Config
{
    public static class IoC
    {
        public static void IoCCommonDataLibraryRegister(this IServiceCollection service)
        {
            service.AddTransient<IRepositoryCamara, RepositoryCamara>();
            service.AddTransient<IRepositoryUser, RepositoryUser>();
        }
    }
}
