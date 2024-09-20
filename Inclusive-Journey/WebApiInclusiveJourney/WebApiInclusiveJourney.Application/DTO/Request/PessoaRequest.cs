using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApiInclusiveJourney.Application.DTO.Request
{
    public class PessoaRequest
    {
        public string NomeCompleto { get; set; }
        public DateTime DataNascimento { get; set; }
        public int GeneroCodigo { get; set; }
        public int TipoDeficienciaCodigo { get; set; }
        public string Rua { get; set; }
        public int Numero { get; set; }
        public string Complemento { get; set; }
        public string Bairro { get; set; }
        public string Cidade { get; set; }
        public string Cep { get; set; }
        public string Uf { get; set; }
        public int PessoaTipoCodigo { get; set; }
    }
}
