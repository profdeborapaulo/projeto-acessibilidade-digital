'use client'
import './style.css'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import logo from '../../../img/2_2-removebg-preview.png'
import instagram from '../../../img/instagram.png'
import email from '../../../img/email.png'
import location from '../../../img/maps-and-flags.png'

export default function PoliticaDePrivacidade() {
  const router = useRouter()

  useEffect(() => {
    document.title = 'Política de Privacidade | Inclusive Journey'
  }, [])

  return (
    <main className='main-politica-privacidade' style={{ overflowY: 'auto', height: '100vh', overflowX: 'hidden' }}>
      <section>
        <h1>Política de Privacidade</h1>
        <h5>POLÍTICA DE PRIVACIDADE E POLÍTICA DE COOKIES DO INCLUSIVE JOURNEY.</h5>
        <p>Bem-vindo ao Inclusive Journey! Sua privacidade é extremamente importante para nós. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações ao usar nosso site e serviços. Ao acessar e utilizar o Inclusive Journey, você concorda com as práticas descritas nesta política.</p>
        <h4>Coleta de Informações</h4>
        <p>Informações Pessoais: Coletamos informações que você nos fornece diretamente, como nome, endereço de e-mail, localização e quaisquer outros dados pessoais que você escolha compartilhar ao se registrar ou utilizar nosso site.</p>
        <h4>Informações de Uso</h4>
        <p>Coletamos automaticamente informações sobre sua interação com nosso site, incluindo seu endereço IP, tipo de dispositivo, navegador, páginas visitadas, tempo de navegação e outras atividades.</p>
        <h4>Cookies e Tecnologias Semelhantes</h4>
        <p>Utilizamos cookies e outras tecnologias de rastreamento para melhorar a funcionalidade do nosso site, personalizar sua experiência e analisar o tráfego.</p>
        <h4>Uso das Informações</h4>
        <p>Utilizamos as informações coletadas para:</p>
        <h4>Fornecer e Melhorar Serviços</h4>
        <p>Garantir o funcionamento eficaz do nosso site e aprimorar sua experiência de usuário.</p>
        <h4>Comunicação</h4>
        <p>Enviar notificações, atualizações e informações relevantes sobre nossos serviços e sua conta</p>
        <h4>Personalização</h4>
        <p>Personalizar o conteúdo e as recomendações de acordo com suas preferências e histórico de uso.</p>
        <h4>Segurança</h4>
        <p>Proteger nossos usuários e serviços contra fraudes, abusos e outras atividades ilegais.</p>
        <h4>Compartilhamento de Informação</h4>
        <p>Não vendemos suas informações pessoais a terceiros. Podemos compartilhar suas informações nas seguintes circunstâncias:</p>
        <h4>Com Provedores de Serviços</h4>
        <p>Compartilhamos informações com terceiros que nos ajudam a operar nosso site e fornecer nossos serviços, como provedores de hospedagem, análises e suporte ao cliente.</p>
        <h4>Por Motivos Legais</h4>
        <p>Podemos divulgar informações quando acreditarmos que é necessário para cumprir com a lei, proteger nossos direitos ou a segurança de nossos usuários.</p>
        <h4>Segurança</h4>
        <p>Adotamos medidas de segurança razoáveis para proteger suas informações contra acesso não autorizado, uso indevido ou divulgação. No entanto, nenhuma transmissão de dados pela internet ou sistema de armazenamento eletrônico é 100% seguro.</p>
        <h4>Seus Direitos</h4>
        <p>Você tem o direito de acessar, corrigir ou excluir suas informações pessoais que temos em nosso sistema. Se desejar exercer esses direitos ou tiver perguntas sobre nossa política de privacidade, entre em contato conosco através do e-mail Inclusivejourney@gmail.com.</p>
      </section>
      <footer>
        <section>
          <div className='div-1'>
            <h3>Entre em contato</h3>
            <p><Image className='icon' src={location} alt="Imagem" /> Barueri - SP</p>
            <p><Image className='icon' src={email} alt="Imagem" /> Inclusivejourney@gmail.com</p>
            <p><Image className='icon' src={instagram} alt="Imagem" /><a href='https://www.instagram.com/inclusive.journey/' target="_blank" rel="noopener noreferrer">Siga-nos no Instagram</a></p>
          </div>
          <div className='div-2'>
            <Image className='logo' src={logo} alt="Imagem" />
            <p>A Jornada Inclusiva é para todos. Mesmo sem deficiência, você pode colaborar compartilhando informações sobre locais acessíveis que você conhece. Juntos, construímos um ambiente mais inclusivo.</p>
          </div>
          <div className='div-3'>
            <h3>Conteúdos</h3>
            <p>Informações acessíveis</p>
            <p>Ajuda acessível</p>
          </div>
        </section>
        <div className='div-footer'>
          <p onClick={() => {router.push('../pages/PoliticaDePrivacidade')}}>Política de privacidade</p>
          <p onClick={() => {router.push('../pages/TermosDeUso')}}>Termos de uso</p>
          <p>2024</p>
        </div>
      </footer>
    </main>
  )
}