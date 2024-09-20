using Microsoft.AspNetCore.Mvc;
using WebApiInclusiveJourney.Application.DTO.Request;
using WebApiInclusiveJourney.Application.DTO.Response;
using WebApiInclusiveJourney.Application.IServices;
using WebApiInclusiveJourney.Repository.Models;

namespace WebApiInclusiveJourney.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LugarController : ControllerBase
    {
        private readonly ILugarService _lugarServices;
        public LugarController(ILugarService service)
        {
            _lugarServices = service;
        }
        [HttpPost]
        public IActionResult InserirLugar([FromBody] LugarRequest request)
        {
            bool resposta = _lugarServices.InserirLugar(request);
            if (resposta == false)
                return BadRequest();
            else
                return Ok();
        }
        [HttpGet]
        public IActionResult BuscarLugares()
        {
            List<LugarResponse> resposta = _lugarServices.BuscarLugares();
            if (resposta == null)
                return NoContent();
            else
                return Ok(resposta);
        }
    }
}
