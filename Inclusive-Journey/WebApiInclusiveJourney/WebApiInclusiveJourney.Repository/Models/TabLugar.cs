using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApiInclusiveJourney.Repository.Models
{
    public class TabLugar
    {
        [Key]
        public int codigo { get; set; }
        public string nome { get; set; }
        public DateTime dataCadastro { get; set; }
        public string rua { get; set; }
        public string numero { get; set; }
        public string complemento { get; set; }
        public string bairro { get; set; }
        public string cidade { get; set; }
        public string cep { get; set; }
        public string uf { get; set; }
        public int usuarioCodigo { get; set; }
        public string zona { get; set; }
    }
}
