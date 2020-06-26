using Microsoft.EntityFrameworkCore;
using serpost.monitoreo.core.Entities;
using serpost.monitoreo.data.seeders;
using System;
using System.Collections.Generic;
using System.Text;

namespace serpost.monitoreo.data
{
    public class EFDataContext : DbContext
    {
        public DbSet<camara> camara { get; set; }
        public DbSet<archivos> archivos { get; set; }
        public DbSet<usuario> usuario { get; set; }
        public DbSet<ti_usuario_x_camara> ti_usuario_x_camara { get; set; }

        public EFDataContext(DbContextOptions<EFDataContext> option)
        : base(option)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<archivos>()
               .HasKey(o => new { o.id_camara, o.id_archivo });
            modelBuilder.Entity<ti_usuario_x_camara>()
              .HasKey(o => new { o.id_camara, o.username });

            


            //modelBuilder.Entity<usuario>()
            //    .HasKey(o => o.id_usuario);

            //modelBuilder.Entity<usuario>()
            //    .HasKey(o => o.username);

            modelBuilder.Entity<camara>().HasData(seed_camara.Listacamara);
            modelBuilder.Entity<usuario>().HasData(seed_usuarios.ListaUsuarios);
            modelBuilder.Entity<ti_usuario_x_camara>().HasData(seed_ti_usuario_x_camara.ListaUsuarioXCamara);
            

        }

    }
}
