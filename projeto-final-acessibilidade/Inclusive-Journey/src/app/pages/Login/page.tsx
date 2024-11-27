"use client"
import './style.css'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import imagemLogin from '../../../img/imgInclusiveJourneyLogin.png'
import { api } from '@/src/services/api'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function Login() {
  const router = useRouter()

  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [lembrar, setLembrar] = useState(true)
  const [loadingButton, setLoadingButton] = useState(false)
  const [esqueciSenha, setEsqueciSenha] = useState(false)

  useEffect(() => {
    document.title = 'Acesse Sua Conta | Inclusive Journey'
  }, [])

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoadingButton(true)

    if (usuario === '' || senha === '') {
      toast.warning("Por favor, preencha todos os campos.")
      setLoadingButton(false)
      return
    }

    try {
      const response = await api.post('/auth/login', {
        email: usuario,
        password: senha
      })

      if (response.status === 200) {
        localStorage.setItem('u-inclusive-journey', JSON.stringify(response.data.userCode))
        localStorage.setItem('p-inclusive-journey', JSON.stringify(senha))
        router.push('../pages/Home')
        setUsuario('')
        setSenha('')
      }

    } catch (error) {
      toast.error("Erro ao fazer login. Verifique suas credenciais.")

    } finally {
      setLoadingButton(false)
    }
  }

  async function handleEsqueciSenha(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    setLoadingButton(true)

    if (usuario === '' || senha === '' || confirmarSenha === '' ) {
      toast.warning("Por favor, preencha todos os campos.")
      setLoadingButton(false)
      return
    }

    if (senha !== confirmarSenha) {
      toast.warning("As senhas não coincidem. Verifique e tente novamente.")
      setLoadingButton(false)
      return
    }

    try {
      const response = await api.post('/auth/forgot-password', {
        email: usuario,
        newPassword: confirmarSenha
      })

      if (response.status === 200) {
        toast.success("Senha alterada com sucesso!")
        setUsuario('')
        setSenha('')
        setConfirmarSenha('')
        setEsqueciSenha(false)
      }

    } catch (error) {
      toast.error("Erro ao redefinir a senha. Tente novamente.")

    } finally{
      setLoadingButton(false)
    }
  }

  const handleVoltarLogin = () => {
    setEsqueciSenha(false)
    setUsuario('')
    setSenha('')
  }

  return (
    <main className='main-login'>
      <div className="container">
        <Image className='imagem' src={imagemLogin} alt="Imagem" />
        {!esqueciSenha ? (
          <form className="form" onSubmit={handleLogin}>
            <div className="header">
              <h1>Login</h1>
              <p>Faça login e continue a sua jornada conosco</p>
            </div>
            <div className="inputForm">
              <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
                <g id="Layer_3" data-name="Layer 3">
                  <path d="M30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                </g>
              </svg>
              <input type="text" style={{ color: 'black' }} className="input" placeholder="Email" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
            </div>
            <div className="inputForm">
              <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M336 512H48c-26.453 0-48-21.523-48-48V240c0-26.476 21.547-48 48-48h288c26.453 0 48 21.524 48 48v224c0 26.477-21.547 48-48 48zM48 224c-8.813 0-16 7.168-16 16v224c0 8.832 7.187 16 16 16h288c8.813 0 16-7.168 16-16V240c0-8.832-7.187-16-16-16zM304 224c-8.832 0-16-7.168-16-16v-80c0-52.93-43.07-96-96-96s-96 43.07-96 96v80c0 8.832-7.168 16-16 16s-16-7.168-16-16v-80c0-70.594 57.406-128 128-128s128 57.406 128 128v80c0 8.832-7.168 16-16 16z"></path>
              </svg>
              <input type="password" style={{ color: 'black' }} className="input" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
            </div>
            <div className='footer'>
              <label><input type="checkbox" size={200} checked={lembrar} onChange={(e) => {setLembrar(e.target.checked)}}/> Lembre-se de mim</label>
              <p onClick={() => { setEsqueciSenha(true) }}>Esqueceu a senha?</p>
            </div>

            <button type="submit" className="button-submit" disabled={loadingButton}>{loadingButton ? "Carregando..." : "Continuar"}</button>
            <a href='../pages/Cadastro'>Ainda não possui uma conta? Cadastre-se</a>
          </form>
        ) : (
          <form className="form" onSubmit={handleEsqueciSenha}>
            <div className="header">
              <h1>Trocar Senha</h1>
              <p>Insira seu email e nova senha para trocar a sua senha</p>
            </div>
            <div className="inputForm">
              <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
                <g id="Layer_3" data-name="Layer 3">
                  <path d="M30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                </g>
              </svg>
              <input type="text" style={{ color: '#000' }} className="input" placeholder="Email" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
            </div>
            <div className="inputForm">
              <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M336 512H48c-26.453 0-48-21.523-48-48V240c0-26.476 21.547-48 48-48h288c26.453 0 48 21.524 48 48v224c0 26.477-21.547 48-48 48zM48 224c-8.813 0-16 7.168-16 16v224c0 8.832 7.187 16 16 16h288c8.813 0 16-7.168 16-16V240c0-8.832-7.187-16-16-16zM304 224c-8.832 0-16-7.168-16-16v-80c0-52.93-43.07-96-96-96s-96 43.07-96 96v80c0 8.832-7.168 16-16 16s-16-7.168-16-16v-80c0-70.594 57.406-128 128-128s128 57.406 128 128v80c0 8.832-7.168 16-16 16z"></path>
              </svg>
              <input type="password" style={{ color: '#000' }} className="input" placeholder="Nova Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
            </div>
            <div className="inputForm">
              <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M336 512H48c-26.453 0-48-21.523-48-48V240c0-26.476 21.547-48 48-48h288c26.453 0 48 21.524 48 48v224c0 26.477-21.547 48-48 48zM48 224c-8.813 0-16 7.168-16 16v224c0 8.832 7.187 16 16 16h288c8.813 0 16-7.168 16-16V240c0-8.832-7.187-16-16-16zM304 224c-8.832 0-16-7.168-16-16v-80c0-52.93-43.07-96-96-96s-96 43.07-96 96v80c0 8.832-7.168 16-16 16s-16-7.168-16-16v-80c0-70.594 57.406-128 128-128s128 57.406 128 128v80c0 8.832-7.168 16-16 16z"></path>
              </svg>
              <input type="password" style={{ color: '#000' }} className="input" placeholder="Confirmar Nova Senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
            </div>

            <button type="submit" className="button-submit" disabled={loadingButton}>{loadingButton ? "Carregando..." : "Trocar Senha"}</button>
            <p className='p-voltar' onClick={handleVoltarLogin}>Voltar para login</p>
          </form>
        )}
      </div>
      <ToastContainer autoClose={3000} />
    </main>
  )
}
