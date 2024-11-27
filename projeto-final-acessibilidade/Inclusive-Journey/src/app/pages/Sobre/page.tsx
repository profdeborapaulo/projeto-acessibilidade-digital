"use client"
import './style.css'
import { useEffect } from 'react'
import Image from 'next/image'
import Footer from '@/src/components/Footer'
import { NavBar } from '@/src/components/NavBar'
import SectionFounders from '@/src/components/SectionFounders'
import CarrosselSobre from '@/src/components/CarrosselSobre'
import { motion } from 'framer-motion'

import section1imagem from '../../../img/image16.svg'
import mascote from '../../../img/Macote - Cabeça.jpg'

export default function Sobre() {
  useEffect(() => {
    document.title = 'Sobre Nós | Inclusive Journey'
  }, [])

  return (
    <div className='sobre' style={{ overflowY: 'auto', height: '100vh', }}>
      <NavBar />

      <CarrosselSobre />

      <section className='section1'>
        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1 }}>
          <Image className='section1-img' src={section1imagem} alt='Imagem' />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1 }}>
          <h2>Juntos, construindo um mundo mais acessível para todos.</h2>
          <p>O Inclusive Journey nasceu com a missão de tornar o mundo mais inclusivo e acessível para pessoas com deficiência. Nosso objetivo é ajudar todos a encontrar lugares adaptados às suas necessidades, promovendo a inclusão e a igualdade. Acreditamos que, ao compartilhar informações e recursos, podemos superar barreiras e criar uma comunidade mais solidária e acolhedora para todos. Junte-se a nós nessa jornada de transformação!</p>
        </motion.div>
      </section>

      <section className='section3'>
        <motion.div className='left' initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1 }}>
          <h2>Conheça nosso mascote</h2>
          <p>Joe, nosso amigável cachorro-guia, é o coração do Inclusive Journey.Ele combina seriedade e simpatia, sempre pronto para ajudar. Joe não só enfeita nossa identidade visual e site, mas também simboliza nosso compromisso de guiar e apoiar as pessoas com deficiência na busca por lugares acessíveis. Ele é um verdadeiro amigo, refletindo a missão de nossa marca de promover a inclusão e a acessibilidade para todos.</p>
        </motion.div>
        <motion.div className='right' initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1 }}>
          <Image className='section3-img' src={mascote} alt='Imagem' />
        </motion.div>
      </section>

      <SectionFounders />

      <Footer />
    </div>
  )
}
