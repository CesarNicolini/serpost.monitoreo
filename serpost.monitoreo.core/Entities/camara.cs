using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace serpost.monitoreo.core.Entities
{
    public class camara
    {
        [Key]
        [Display(Name = "id de la puerta")]
        [Column(Order = 0, TypeName = "smallint")]
        [ForeignKey("puerta")]
        public int id_camara { get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        [Display(Name = "URL de la cámara")]
        public string url_camara { get; set; }

        
    }
}
