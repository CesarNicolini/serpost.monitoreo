using serpost.monitoreo.core.Entities;
using System.Collections.Generic;


namespace serpost.monitoreo.data.seeders
{
    public static class seed_camara
    {
        public static List<camara> Listacamara = new List<camara>()
        {
            new camara() {id_camara = 1, url_camara = "http://10.147.17.111:3333/"},
            new camara() {id_camara = 2, url_camara = "http://10.147.17.99:8080/"},
            new camara() {id_camara = 3, url_camara = "http://10.147.17.20:8080/"}
        };
    }
}
