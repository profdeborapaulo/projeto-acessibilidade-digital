'use client'
import './style.css'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import CarrosselPaginaInicial from '@/src/components/CarrosselPaginaInicial'
import CarrosselComentariosPrincipal from '@/src/components/CarrosselComentariosPrincipal'
import { motion } from 'framer-motion'

import logo from '../../../img/2_2-removebg-preview.png'
import cachorroAcenando from '../../../img/Acenando.png'
import instagram from '../../../img/instagram.png'
import siganos from '../../../img/sina-nos.png'
import email from '../../../img/email.png'
import location from '../../../img/maps-and-flags.png'
// import top from '../../../img/back-to-top.png'

export default function PaginaInicial() {
  const router = useRouter()

  useEffect(() => {
    document.title = 'Inclusive Journey | Sua Plataforma de Acessibilidade e Inclusão'
  }, [])

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   })
  // }

  return (
    <main className='main-pagina-principal' style={{ overflowY: 'auto', height: '100vh', overflowX: 'hidden' }}>
      {/* <Image className='back-to-top' src={top} alt="Icon" onClick={scrollToTop}/> */}

      <header>
        <Image className='logo' src={logo} alt="Imagem" />
        <div className='buttons'>
          <button onClick={() => { router.push('/pages/Login') }}>Login</button>
          <button onClick={() => { router.push('../pages/Cadastro') }}>Cadastrar</button>
        </div>
      </header>

      <section className='section-1'>
        <CarrosselPaginaInicial />
      </section>

      <section className='section-2'>
        <Image className='cachorroAcenando' src={cachorroAcenando} alt="Imagem" />
        <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1 }}>
          <h2>Conheça o Inclusive Journey!</h2>
          <p>Explore o Inclusive Journey e descubra como estamos empenhados em criar um mundo mais acessível e inclusivo para todos. Nossa plataforma é dedicada para facilitar a vida das pessoas com deficiência, ajudando-as a encontrar lugares acessíveis e promovendo a inclusão em todos os aspectos da sociedade. Explore o Inclusive Journey e descubra um universo de acessibilidade e inclusão.</p>
          <button onClick={() => { router.push('../pages/Cadastro') }}>Cadastrar</button>
        </motion.div>
      </section>

      <section className='section-3'>
        <div className='div-background'>
          <div>
            <motion.h2 initial={{ opacity: 0, y: -70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.9 }}>Acompanhe o Inclusive Journey!</motion.h2>
            <motion.p initial={{ opacity: 0, y: -70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.8 }}>Faça parte dessa jornada inclusiva!</motion.p>
            <motion.a initial={{ opacity: 0, y: -70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.8 }} href='https://www.instagram.com/inclusive.journey/' target="_blank" rel="noopener noreferrer"><button>Siga-nos <Image className='instagram' src={instagram} alt="Imagem" /></button></motion.a>
          </div>
          <Image className='siganos' src={siganos} alt="Imagem" />
        </div>
      </section>

      <section className='section-4'>
        <h2>O que dizem nossos usuários</h2>
        <CarrosselComentariosPrincipal />
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
          <p onClick={() => { router.push('../pages/PoliticaDePrivacidade') }}>Política de privacidade</p>
          <p onClick={() => { router.push('../pages/TermosDeUso') }}>Termos de uso</p>
          <p>2024</p>
        </div>
      </footer>
    </main>
  )
}
