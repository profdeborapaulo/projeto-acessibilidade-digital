using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApiInclusiveJourney.Application.DTO.Request;
using WebApiInclusiveJourney.Application.Services;

namespace WebApiInclusiveJourney.Application.IServices
{
    public interface IUsuarioService 
    {
        bool CadastrarUsuario(UsuarioRequest request);
    }
}
