"use client"
import './style.css';
import Image from 'next/image';
import imageCadastro from '../../../img/imgInclusiveJourneyCadastro.png';
import Link from 'next/link';
import { api } from '@/src/services/api';
import { useState } from 'react';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const cadastro = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (senha !== confirmacaoSenha) {
            setErrorMessage('As senhas não coincidem.');
            return;
        }

        api.post('/Usuario', {
            nome: nome,
            usuario: usuario,
            senha: senha
        })
        .then(response => {
            console.log(response.data);

            localStorage.setItem('userData', JSON.stringify({
                nome: nome,
                usuario: usuario,
                senha: senha
            }));

            window.location.href = '../pages/QuemEVoce'; // Redireciona para a página de login
        })
        .catch(error => {
            console.log(error);
            setErrorMessage('Erro ao cadastrar. Verifique suas informações.');
        });
    }

    return (
        <main>
            <div className="container">
                <section className="primeiro">
                    <Image src={imageCadastro} height={726} alt="Imagem de Cadastro" />
                </section>
                <section className="segunda">
                    <form className="form" onSubmit={cadastro}>
                        <div className="title">
                            <h1>Cadastro</h1>
                            <p>Cadastre-se agora e faça parte da nossa comunidade inclusiva</p>
                        </div>
                        <br />
                        <div className="inputForm">
                            <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
                                <g id="Layer_3" data-name="Layer 3">
                                    <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                                </g>
                            </svg>
                            <input
                                type="text"
                                className="input"
                                placeholder="Nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>

                        <div className="inputForm">
                            <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
                                <g id="Layer_3" data-name="Layer 3">
                                    <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                                </g>
                            </svg>
                            <input
                                type="text"
                                className="input"
                                placeholder="Email"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                            />
                        </div>

                        <div className="inputForm">
                            <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M336 512H48c-26.453 0-48-21.523-48-48V240c0-26.476 21.547-48 48-48h288c26.453 0 48 21.524 48 48v224c0 26.477-21.547 48-48 48zM48 224c-8.813 0-16 7.168-16 16v224c0 8.832 7.187 16 16 16h288c8.813 0 16-7.168 16-16V240c0-8.832-7.187-16-16-16zM304 224c-8.832 0-16-7.168-16-16v-80c0-52.93-43.07-96-96-96s-96 43.07-96 96v80c0 8.832-7.168 16-16 16s-16-7.168-16-16v-80c0-70.594 57.406-128 128-128s128 57.406 128 128v80c0 8.832-7.168 16-16 16z"></path>
                            </svg>
                            <input
                                type="password"
                                className="input"
                                placeholder="Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>

                        <div className="inputForm">
                            <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M336 512H48c-26.453 0-48-21.523-48-48V240c0-26.476 21.547-48 48-48h288c26.453 0 48 21.524 48 48v224c0 26.477-21.547 48-48 48zM48 224c-8.813 0-16 7.168-16 16v224c0 8.832 7.187 16 16 16h288c8.813 0 16-7.168 16-16V240c0-8.832-7.187-16-16-16zM304 224c-8.832 0-16-7.168-16-16v-80c0-52.93-43.07-96-96-96s-96 43.07-96 96v80c0 8.832-7.168 16-16 16s-16-7.168-16-16v-80c0-70.594 57.406-128 128-128s128 57.406 128 128v80c0 8.832-7.168 16-16 16z"></path>
                            </svg>
                            <input
                                type="password"
                                className="input"
                                placeholder="Confirmação de senha"
                                value={confirmacaoSenha}
                                onChange={(e) => setConfirmacaoSenha(e.target.value)}
                            />
                        </div>

                        <div className="flex-row">
                            <div>
                                <input type="checkbox" id="rememberMe" />
                                <label htmlFor="rememberMe">Lembre de mim</label>
                            </div>
                        </div>

                        <button className="button-submit" type="submit">Cadastrar</button>

                        <Link className="p" href="../pages/Login">Já possui uma conta?</Link>

                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                </section>
            </div>
        </main>
    )
}
