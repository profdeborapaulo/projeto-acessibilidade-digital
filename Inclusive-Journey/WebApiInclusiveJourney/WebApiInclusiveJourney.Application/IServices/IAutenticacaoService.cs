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
    public interface IAutenticacaoService
    {
        AutenticacaoResponse Autenticar(AutenticacaoRequest request);
        string GerarTokenJwt(TabUsuario usuario);
    }
}
