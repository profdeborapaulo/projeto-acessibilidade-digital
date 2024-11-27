'use client'
import './style.css'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import logo from '../../../img/2_2-removebg-preview.png'
import instagram from '../../../img/instagram.png'
import email from '../../../img/email.png'
import location from '../../../img/maps-and-flags.png'

export default function TermosDeUso() {
  const router = useRouter()

  useEffect(() => {
    document.title = 'Termos de uso | Inclusive Journey'
  }, [])

  return (
    <main className='main-termos-uso' style={{ overflowY: 'auto', height: '100vh', overflowX: 'hidden' }}>
      <section>
        <h1>Termos de Uso</h1>
        <p>Bem-vindo ao Inclusive Journey! Estes Termos de Uso descrevem as regras e condições que regem o uso do nosso site e serviços. Ao acessar ou utilizar o Inclusive Journey, você concorda com estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve utilizar nosso site.</p>
        <h4>1. Aceitação dos Termos</h4>
        <p>Ao usar o Inclusive Journey, você concorda em cumprir e estar sujeito a estes Termos de Uso, além de nossa Política de Privacidade. Estes termos aplicam-se a todos os usuários do site, incluindo visitantes, assinantes e colaboradores.</p>
        <h4>2. Descrição dos Serviços</h4>
        <p>O Inclusive Journey é uma plataforma dedicada a ajudar Pessoas com Deficiência (PcDs) a encontrar lugares acessíveis. Oferecemos uma variedade de recursos, incluindo avaliações de acessibilidade, dicas e informações sobre locais acessíveis.</p>
        <h4>3. Registro e Conta</h4>
        <p>Para acessar alguns dos nossos serviços, você pode ser solicitado a criar uma conta. Você concorda em fornecer informações precisas e completas durante o processo de registro e a atualizar essas informações conforme necessário. Você é responsável por manter a confidencialidade das suas informações de login e por todas as atividades que ocorram sob sua conta.</p>
        <h4>4. Uso Aceitável</h4>
        <p>Você concorda em utilizar o Inclusive Journey apenas para fins legais e de acordo com estes Termos de Uso. Você não deve: <br/> - Usar o site de maneira que viole qualquer lei ou regulamento local, estadual, nacional ou internacional aplicável. Enviar ou transmitir qualquer conteúdo que seja ilegal, fraudulento, difamatório, obsceno, ou de qualquer forma ofensivo. Usar o site para coletar informações pessoais de outros usuários sem o seu consentimento. Interferir ou interromper o funcionamento do site ou dos servidores ou redes conectados ao site.</p>

        <h4>5. Conteúdo do Usuário</h4>
        <p>Ao enviar conteúdo ao Inclusive Journey, incluindo avaliações, comentários e outras contribuições, você concede ao Inclusive Journey uma licença mundial, não exclusiva, livre de royalties e totalmente sublicenciável para usar, reproduzir, modificar, adaptar, publicar e distribuir esse conteúdo. Você declara que possui todos os direitos sobre o conteúdo que envia e que este não viola direitos de terceiros.</p>
        <h4>6. Propriedade Intelectual</h4>
        <p>Todo o conteúdo do Inclusive Journey, incluindo textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é de propriedade do Inclusive Journey ou de seus licenciadores e é protegido por leis de direitos autorais e outras leis de propriedade intelectual.</p>
        <h4>7. Limitação de Responsabilidade</h4>
        <p>O Inclusive Journey não garante que o site estará disponível ininterruptamente ou livre de erros. O site e todos os conteúdos nele disponíveis são fornecidos como estão e conforme disponíveis. Na máxima extensão permitida por lei, o Inclusive Journey não se responsabiliza por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos resultantes do uso ou da incapacidade de usar o site.</p>
        <h4>8. Alterações nos Termos</h4>
        <p>O Inclusive Journey pode alterar estes Termos de Uso a qualquer momento. Quaisquer alterações serão publicadas nesta página e, se as alterações forem significativas, notificaremos você por e-mail ou por meio de um aviso em destaque no site. Seu uso continuado do site após a publicação das alterações constitui sua aceitação dos novos Termos de Uso.</p>
        <h4>9. Rescisão</h4>
        <p>Podemos rescindir ou suspender seu acesso ao Inclusive Journey imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo, sem limitação, se você violar estes Termos de Uso. Todas as disposições destes Termos de Uso que, por sua natureza, devem sobreviver à rescisão, sobreviverão, incluindo, sem limitação, disposições de propriedade, isenções de garantia, indenização e limitações de responsabilidade.</p>
        <h4>Com Provedores de Serviços</h4>
        <p>Compartilhamos informações com terceiros que nos ajudam a operar nosso site e fornecer nossos serviços, como provedores de hospedagem, análises e suporte ao cliente.</p>
        <h4>10. Contato</h4>
        <p>Se você tiver dúvidas ou preocupações sobre estes Termos de Uso, entre em contato conosco pelo e-mail Inclusivejourney@gmail.com. Obrigado por usar o Inclusive Journey. Estamos comprometidos em proporcionar uma experiência acessível e inclusiva para todos os usuários.</p>
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