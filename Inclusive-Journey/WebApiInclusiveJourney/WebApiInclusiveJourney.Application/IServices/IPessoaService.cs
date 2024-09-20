using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApiInclusiveJourney.Application.DTO.Request;
using WebApiInclusiveJourney.Application.DTO.Response;
using WebApiInclusiveJourney.Repository.Models;

namespace WebApiInclusiveJourney.Application.IServices
{
    public interface IPessoaService
    {
        public PessoaResponse CadastrarPessoa(PessoaRequest request);
        List<TabPessoaTipo> BuscarTipoPessoa();
        List<TabTipoDeficiencia> BuscarDeficiencia();
        List<TabPessoa> BuscarPessoas();
        List<TabGenero> BuscarGeneros();
    }
}
