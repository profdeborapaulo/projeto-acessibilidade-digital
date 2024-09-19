using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApiInclusiveJourney.Repository.Models
{
    public class TabGenero
    {
        [Key]
        public int Codigo { get; set; }
        public string Genero { get; set; }
    }
}
