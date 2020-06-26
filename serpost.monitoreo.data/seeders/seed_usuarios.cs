using serpost.monitoreo.core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace serpost.monitoreo.data.seeders
{
    public class seed_usuarios
    {
        public static List<usuario> ListaUsuarios = new List<usuario>()
        {
            new usuario() { username  = "CNICOLINI",password ="123456", ap_paterno = "NICOLINI", ap_materno = "RIVERO",nombres = new string []{ "CÉSAR", "GIANFRANCO" } },
            new usuario() { username  = "ACHAVARRI",password ="123456",  ap_paterno = "CHAVARRI", ap_materno = "FREIRE",nombres = new string []{ "ALVARO", "ALONSO" } },
        };
    }
}
