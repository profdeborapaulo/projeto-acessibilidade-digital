using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApiInclusiveJourney.Application.DTO.Request
{
    public class AutenticacaoRequest
    {
        public string Usuario { get; set; }
        public string Senha { get; set; }
    }
}
