using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace serpost.monitoreo.core.Entities
{
    public class ti_usuario_x_camara
    {
        public ti_usuario_x_camara()
        {
            this.activo = true;
        }

        [Key]
        [Display(Name = "nombre de usuario.")]
        [Column(TypeName = "varchar(30)")]
        [ForeignKey("usuario")]
        public string username { get; set; }

        [Key]
        [Display(Name = "id de la puerta")]
        [Column(Order = 0, TypeName = "smallint")]
        [ForeignKey("camara")]
        public int id_camara { get; set; }

        [Required]
        [Column(TypeName = "BOOLEAN")]
        [Display(Name = "activo = true, inactivo = false")]
        public Boolean activo { get; set; }

        public virtual camara camara { get; set; }

        
        public virtual usuario usuario { get; set; }
    }
}
