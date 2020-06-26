using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace serpost.monitoreo.core.Entities
{
    public class usuario
    {

        //[Key]
        //[Display(Name = "id de usuario.")]
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //public int id_usuario { get; set; }

        [Key]
        [Display(Name = "nombre de usuario.")]
        [Column(TypeName = "varchar(30)")]
        public string username { get; set; }

        [Required]
        [Column(TypeName = "varchar(500)")]
        [Display(Name = "Password del usuario.")]
        public string password { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        [Display(Name = "Apellido Paterno")]
        public string ap_paterno { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        [Display(Name = "Apellido Materno")]
        public string ap_materno { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)[]")]
        [Display(Name = "Nombres")]
        public string[] nombres { get; set; }


        
    }
}
