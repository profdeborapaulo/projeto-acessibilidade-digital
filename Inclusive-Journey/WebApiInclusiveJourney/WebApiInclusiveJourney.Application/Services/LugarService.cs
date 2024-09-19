using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApiInclusiveJourney.Application.DTO.Request;
using WebApiInclusiveJourney.Application.DTO.Response;
using WebApiInclusiveJourney.Application.IServices;
using WebApiInclusiveJourney.Repository;
using WebApiInclusiveJourney.Repository.Models;

namespace WebApiInclusiveJourney.Application.Services
{
    public class LugarService : ILugarService
    {
        private readonly WebApiInclusiveJourneyContext _context;
        public LugarService(WebApiInclusiveJourneyContext context)
        {
            _context = context;
        }
        public bool InserirLugar(LugarRequest request)
        {
            try
            {
                var lugar = new TabLugar()
                {
                    bairro = request.bairro,
                    cep = request.cep,
                    cidade = request.cidade,
                    complemento = request.complemento,
                    dataCadastro = request.dataCadastro,
                    nome = request.nome,
                    numero = request.numero,
                    rua = request.rua,
                    uf = request.uf,
                    usuarioCodigo = request.usuarioCodigo,
                    zona = request.zona,
                };

                _context.tabLugar.Add(lugar);
                _context.SaveChanges();

                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public List<LugarResponse> BuscarLugares()
        {
            try
            {
                var lugares = _context.tabLugar.ToList();

                var lugaresResponse = lugares.Select(lugar => new LugarResponse
                {
                    codigo = lugar.codigo,
                    nome = lugar.nome,
                    dataCadastro = lugar.dataCadastro,
                    rua = lugar.rua,
                    numero = lugar.numero,
                    complemento = lugar.complemento,
                    bairro = lugar.bairro,
                    cidade = lugar.cidade,
                    cep = lugar.cep,
                    uf = lugar.uf,
                    usuarioCodigo = lugar.usuarioCodigo,
                    zona = lugar.zona
                }).ToList();

                return lugaresResponse;
            }
            catch (Exception)
            {
                return null;
            }
        }

    }
}
