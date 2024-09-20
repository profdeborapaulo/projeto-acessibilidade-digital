using Microsoft.AspNetCore.Mvc;
using WebApiInclusiveJourney.Application.DTO.Request;
using WebApiInclusiveJourney.Application.DTO.Response;
using WebApiInclusiveJourney.Application.IServices;

namespace WebApiInclusiveJourney.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PessoaController : Controller
    {
        private readonly IPessoaService _usuarioService;
        public PessoaController(IPessoaService service)
        {
            _usuarioService = service;
        }
        [HttpPost]
        public IActionResult CadastrarPessoa([FromBody] PessoaRequest request)
        {
            var resposta = _usuarioService.CadastrarPessoa(request);
            if (resposta == null)
            {
                return BadRequest();
            }
            return Ok(resposta);
        }
        [HttpGet("/BuscarTipoPessoa")]
        public IActionResult BuscarTipoPessoa()
        {
            var resposta = _usuarioService.BuscarTipoPessoa();
            if (resposta == null)
            {
                return BadRequest();
            }
            return Ok(resposta);
        }
        [HttpGet("/BuscarDeficiencia")]
        public IActionResult BuscarDeficiencia()
        {
            var resposta = _usuarioService.BuscarDeficiencia();
            if (resposta == null)
            {
                return BadRequest();
            }
            return Ok(resposta);
        }
        [HttpGet("/BuscarPessoas")]
        public IActionResult BuscarPessoas()
        {
            var resposta = _usuarioService.BuscarPessoas();
            if (resposta == null)
            {
                return BadRequest();
            }
            return Ok(resposta);
        }
        [HttpGet("/BuscarGeneros")]
        public IActionResult BuscarGeneros()
        {
            var resposta = _usuarioService.BuscarGeneros();
            if (resposta == null)
            {
                return BadRequest();
            }
            return Ok(resposta);
        }
    }
}
