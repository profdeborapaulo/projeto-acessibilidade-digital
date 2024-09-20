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
    public class PessoaService : IPessoaService
    {
        private readonly WebApiInclusiveJourneyContext _context;
        public PessoaService(WebApiInclusiveJourneyContext context)
        {
            _context = context;
        }

        public PessoaResponse CadastrarPessoa(PessoaRequest request)
        {
            try
            {
                var pessoa = new TabPessoa()
                {
                    Bairro = request.Bairro,
                    Cep = request.Cep,
                    Cidade = request.Cidade,
                    Complemento = request.Complemento,
                    DataNascimento = request.DataNascimento,
                    GeneroCodigo = request.GeneroCodigo,
                    NomeCompleto = request.NomeCompleto,
                    Numero = request.Numero,
                    PessoaTipoCodigo = request.PessoaTipoCodigo,
                    TipoDeficienciaCodigo = request.TipoDeficienciaCodigo,
                    Uf = request.Uf,
                    Rua = request.Rua
                };

                _context.tabPessoa.Add(pessoa);
                _context.SaveChanges();

                var pessoaTipo = _context.tabPessoaTipo
                                          .FirstOrDefault(pt => pt.Codigo == pessoa.PessoaTipoCodigo)?.TipoPessoa;

                var genero = _context.tabGenero
                                     .FirstOrDefault(g => g.Codigo == pessoa.GeneroCodigo)?.Genero;

                var tipoDeficiencia = _context.tabTipoDeficiencia
                                              .FirstOrDefault(td => td.Codigo == pessoa.TipoDeficienciaCodigo)?.Deficiencia;

                var response = new PessoaResponse
                {
                    Codigo = pessoa.Codigo,
                    NomeCompleto = pessoa.NomeCompleto,
                    DataNascimento = pessoa.DataNascimento,
                    Genero = genero, 
                    Rua = pessoa.Rua,
                    Numero = pessoa.Numero,
                    Complemento = pessoa.Complemento,
                    Bairro = pessoa.Bairro,
                    Cidade = pessoa.Cidade,
                    Cep = pessoa.Cep,
                    Uf = pessoa.Uf,
                    PessoaTipo = pessoaTipo, 
                    TipoDeficiencia = tipoDeficiencia 
                };

                return response;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public List<TabPessoaTipo> BuscarTipoPessoa()
        {
            var response = _context.tabPessoaTipo.ToList();
            return response;
        }
        public List<TabTipoDeficiencia> BuscarDeficiencia()
        {
            var response = _context.tabTipoDeficiencia.ToList();
            return response;
        }
        public List<TabPessoa> BuscarPessoas()
        {
            var response = _context.tabPessoa.ToList();
            return response;
        }
        public List<TabGenero> BuscarGeneros()
        {
            var response = _context.tabGenero.ToList();
            return response;
        }
    }
}
