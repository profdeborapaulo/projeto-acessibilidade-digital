import './style.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import logo from '../../img/2_2-removebg-preview.png'
import instagram from '../../img/instagram.png'
import email from '../../img/email.png'
import location from '../../img/maps-and-flags.png'

export default function Footer() {
  const router = useRouter()

  return (
    <footer className='footer-principal'>
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
      </div>
    </footer>
  )
}
