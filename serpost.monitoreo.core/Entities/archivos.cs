using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace serpost.monitoreo.core.Entities
{
    public class archivos
    {
        public archivos()
        {
            fecha_inicio = DateTime.Now;
        }

        [Key]
        [Display(Name = "id del archivo")]
        [Column(Order = 0, TypeName = "int")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id_archivo { get; set; }

        [Required]
        [Display(Name = "id camara")]
        [Column(Order = 1, TypeName = "smallint")]
        [ForeignKey("camara")]
        public int id_camara { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        [Display(Name = "nombre archivo")]
        public string nombre_archivo { get; set; }

        [Required]
        [Column(TypeName = "timestamp")]
        [Display(Name = "Fecha inicio")]
        public DateTime fecha_inicio { get; set; }

        public virtual camara camara { get; set; }
    }
}
