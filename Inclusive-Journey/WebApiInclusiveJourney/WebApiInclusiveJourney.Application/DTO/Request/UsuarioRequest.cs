using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApiInclusiveJourney.Application.DTO.Request
{
    public class UsuarioRequest
    {
        public string nome { get; set; }
        public string usuario { get; set; }
        public string senha { get; set; }
    }
}
