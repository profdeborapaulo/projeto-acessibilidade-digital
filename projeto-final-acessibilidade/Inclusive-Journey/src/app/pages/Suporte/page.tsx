"use client"
import './style.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Footer from '@/src/components/Footer'
import { NavBar } from '@/src/components/NavBar'

import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import back from '../../../img/back-button.png'

export default function Suporte() {
  const router = useRouter()

  const [showContent3, setShowContent3] = useState(false)

  const [assuntoSelected, setAssuntoSelected] = useState('')

  const [email, setEmail] = useState('')
  const [assunto, setAssunto] = useState('')
  const [mensagem, setMensagem] = useState('')

  const [loadingButton, setLoadingButton] = useState(false)

  useEffect(() => {
    document.title = 'Ajuda e Suporte | Inclusive Journey'
  }, [])

  async function handleSubmit() {
    setLoadingButton(true)

    if (!email || !assunto || !mensagem) {
      toast.warning("Todos os campos são obrigatórios!")
      setLoadingButton(false)
      return
    }

    const validateEmail = (email: string) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return regex.test(email)
    }

    if (!validateEmail(email)) {
      toast.error("Por favor, insira um email válido!")
      setLoadingButton(false)
      return
    }

    setTimeout(() => {
      toast.success("Sua solicitação foi enviada com sucesso!")
      setShowContent3(false)
      setEmail('')
      setAssunto('')
      setMensagem('')
      setLoadingButton(false)
    }, 2000)
  }

  return (
    <div className='ajuda-suporte' style={{ overflowY: 'auto', height: '100vh' }}>
      <NavBar />

      <section className='container'>
        {!showContent3 && (
          <>
            <div className='content-1'>
              <h1>Ajuda e suporte</h1>
              <h2>Como podemos ajudar</h2>
              <select value={assuntoSelected} onChange={(e) => setAssuntoSelected(e.target.value)}>
                <option value="">Selecione o tipo de problema</option>
                <option value="problemas_navegacao">Problemas com navegação ou recursos de acessibilidade</option>
                <option value="dificuldades_login">Dificuldades ao criar uma conta ou fazer login</option>
                <option value="perfil_configuracoes">Problemas com perfil ou configurações</option>
                <option value="sugestoes_locais">Sugestões ou problemas com informações de locais acessíveis</option>
                <option value="outro_problema">Outro problema técnico ou erro no site</option>
              </select>

              {assuntoSelected === "" && (
                <div className="assunto">
                  <p>Escolha uma das opções acima para que possamos entender melhor o seu problema e fornecer a ajuda necessária.</p>
                </div>
              )}

              {assuntoSelected === "problemas_navegacao" && (
                <div className="assunto-text">
                  <p>Se você está tendo problemas com a navegação ou recursos de acessibilidade, por favor, verifique se você está utilizando a versão mais recente do seu navegador. Se o problema persistir, entre em contato conosco através do formulário abaixo, fornecendo detalhes específicos sobre a dificuldade que está enfrentando. Estamos aqui para ajudar e melhorar continuamente a acessibilidade do nosso site.</p>
                </div>
              )}

              {assuntoSelected === "dificuldades_login" && (
                <div className="assunto-text">
                  <p>Para problemas ao criar uma conta ou fazer login, primeiro verifique se você está inserindo suas informações corretamente. Caso tenha esquecido sua senha, utilize a opção &apos;Esqueci minha senha&apos; para redefini-la. Se o problema continuar, entre em contato conosco com detalhes do erro ou dificuldade encontrada. Vamos ajudá-lo a acessar sua conta o mais rápido possível.</p>
                </div>
              )}

              {assuntoSelected === "perfil_configuracoes" && (
                <div className="assunto-text">
                  <p>Se você está enfrentando dificuldades para atualizar suas informações pessoais ou configurações de perfil, certifique-se de que todos os campos obrigatórios estão preenchidos corretamente. Caso o problema persista, entre em contato conosco com uma descrição detalhada da questão. Estamos disponíveis para ajudar a garantir que seu perfil esteja sempre atualizado.</p>
                </div>
              )}

              {assuntoSelected === "sugestoes_locais" && (
                <div className="assunto-text">
                  <p>Para sugestões ou problemas com informações de locais acessíveis, utilize o formulário abaixo para nos enviar detalhes específicos. Sua contribuição é valiosa para mantermos nosso banco de dados atualizado e útil para todos os usuários. Agradecemos seu feedback e trabalharemos para corrigir ou adicionar as informações fornecidas.</p>
                </div>
              )}

              {assuntoSelected === "outro_problema" && (
                <div className="assunto-text">
                  <p>Se você está enfrentando qualquer outro problema técnico ou erro no site, por favor, relate-o através do formulário abaixo. Inclua detalhes sobre o problema e, se possível, capturas de tela para nos ajudar a entender melhor a situação. Estamos comprometidos em resolver quaisquer problemas técnicos para garantir a melhor experiência possível para nossos usuários.</p>
                </div>
              )}
            </div>

            <div className='content-2'>
              <h2>Não encontrou o que estava procurando?</h2>
              <p>Você pode escrever sobre outros assuntos em nosso</p>
              <span onClick={() => setShowContent3(true)}>Formulário de contato</span>
            </div>
          </>
        )}

        {showContent3 && (
          <div className='content-3'>
            <Image className='btn-back' src={back} alt='Imagem' onClick={() => setShowContent3(false)} />
            <div className='inputForm'>
              <h1>Enviar uma solicitação</h1>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="text" placeholder="Assunto" value={assunto} onChange={(e) => setAssunto(e.target.value)} />
              <textarea placeholder="Mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
              <p>Ao clicar em &quot;Enviar&quot;, você confirma que leu e aceita a nossa <span onClick={() => { router.push('../pages/PoliticaDePrivacidade') }}>política de privacidade</span>.</p>
              <button className='btn-enviar' type="button" onClick={handleSubmit} disabled={loadingButton}>{loadingButton ? 'Carregando...' : 'Enviar'}</button>
            </div>
          </div>
        )}
      </section>

      <ToastContainer autoClose={3000} />

      <Footer />
    </div>
  )
}
