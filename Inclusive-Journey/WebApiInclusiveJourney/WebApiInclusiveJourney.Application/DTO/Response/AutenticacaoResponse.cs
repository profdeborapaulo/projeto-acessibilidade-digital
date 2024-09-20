using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApiInclusiveJourney.Application.DTO.Response
{
    public class AutenticacaoResponse
    {
        public string token { get; set; }
        public int usuarioCodigo { get; set; }
        public string Nome { get; set; }
        public string Usuario { get; set; }
    }
}
