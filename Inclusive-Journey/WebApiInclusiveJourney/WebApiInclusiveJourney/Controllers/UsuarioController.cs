using Microsoft.AspNetCore.Mvc;
using WebApiInclusiveJourney.Application.DTO.Request;
using WebApiInclusiveJourney.Application.IServices;

namespace WebApiInclusiveJourney.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuarioController : Controller
    {
        private readonly IUsuarioService _usuarioService;
        public UsuarioController(IUsuarioService service)
        {
            _usuarioService = service;
        }

        [HttpPost]
        public IActionResult CadastrarUsuario([FromBody] UsuarioRequest request)
        {
            var resposta = _usuarioService.CadastrarUsuario(request);
            if (resposta == false)
                return BadRequest();
            else
                return Ok();
        }
    }
}
