using Microsoft.EntityFrameworkCore;
using serpost.monitoreo.core.Entities;
using serpost.monitoreo.core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace serpost.monitoreo.data.Repositories
{
    public class RepositoryCamara: IRepositoryCamara
    {
        private readonly EFDataContext _dbontext;
        public RepositoryCamara(EFDataContext dataContext)
        {
            _dbontext = dataContext;
        }
        public async Task<IEnumerable<camara>> GetCamaraPerUser(string id_usuario)
        {
            var query = (from cam in _dbontext.camara
                         join cxu in _dbontext.ti_usuario_x_camara on cam.id_camara equals cxu.id_camara
                         where cxu.activo
                         where cxu.username.Equals(id_usuario)
                         select new camara()
                         {
                             id_camara = cam.id_camara,
                             url_camara = cam.url_camara
                         });
            var list = await query.AsQueryable().ToListAsync();

            return list;

        }


    }


}
