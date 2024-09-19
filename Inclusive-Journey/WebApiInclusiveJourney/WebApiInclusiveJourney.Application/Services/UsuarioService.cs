using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApiInclusiveJourney.Application.DTO.Request;
using WebApiInclusiveJourney.Application.IServices;
using WebApiInclusiveJourney.Repository;
using WebApiInclusiveJourney.Repository.Models;

namespace WebApiInclusiveJourney.Application.Services
{
    public class UsuarioService : IUsuarioService
    {
        private readonly WebApiInclusiveJourneyContext _context;
        public UsuarioService(WebApiInclusiveJourneyContext context)
        {
            _context = context;
        }
        public bool CadastrarUsuario(UsuarioRequest request)
        {
            try
            {
                TabUsuario objUsuario = new TabUsuario();
                objUsuario.nome = request.nome;
                objUsuario.usuario = request.usuario;
                objUsuario.senha = request.senha;

                _context.tabUsuario.Add(objUsuario);
                _context.SaveChanges();

                return true;
            }
            catch (Exception )
            {
                return false;
            }
            
        }

    }
}
