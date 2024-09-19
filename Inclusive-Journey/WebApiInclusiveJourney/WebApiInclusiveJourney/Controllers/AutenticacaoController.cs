using Microsoft.AspNetCore.Mvc;
using WebApiInclusiveJourney.Application.DTO.Request;
using WebApiInclusiveJourney.Application.DTO.Response;
using WebApiInclusiveJourney.Application.IServices;

namespace WebApiInclusiveJourney.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AutenticacaoController : ControllerBase
    {
        private readonly IAutenticacaoService _autenticacoesServices;
        public AutenticacaoController(IAutenticacaoService service)
        {
            _autenticacoesServices = service;
        }
        [HttpPost]
        public IActionResult Login([FromBody] AutenticacaoRequest request)
        {
            AutenticacaoResponse resposta = _autenticacoesServices.Autenticar(request);
            if (resposta == null)
            {
                return Unauthorized();
            }
            return Ok(resposta);
        }
    }
}
