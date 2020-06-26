using serpost.monitoreo.core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace serpost.monitoreo.core.Interfaces
{
    public interface IRepositoryCamara
    {
        Task<IEnumerable<camara>> GetCamaraPerUser (string id_usuario );
    }
}
