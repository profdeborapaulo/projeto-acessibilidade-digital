'use client'
import './style.css'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { NavBar } from '@/src/components/NavBar'
import SectionFounders from '@/src/components/SectionFounders'
import CardBox from '@/src/components/CardBox'
import Footer from '@/src/components/Footer'
import CarrosselComentarios from '@/src/components/CarrosselComentarios'
import CarrosselPrincipal from '@/src/components/CarrosselPrincipal'
import Image from 'next/image'
import { motion } from 'framer-motion'

import section2imagem from '../../../img/smartmockups_lyxmqeaa.jpg'
import mascote from '../../../img/Macote - Cabeça.jpg'

import central from '../../../img/zona-central.svg'
import sul from '../../../img/zona-sul.svg'
import norte from '../../../img/zona-norte-new.jpg'
import leste from '../../../img/zona-leste.svg'
import oeste from '../../../img/zona-oeste.svg'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    document.title = 'Início | Inclusive Journey'
  }, [])

  const lugaresPorRegiao = [
    { codigo: 1, nome: 'Zona sul', imagem: sul },
    { codigo: 2, nome: 'Zona oeste', imagem: oeste },
    { codigo: 3, nome: 'Zona norte', imagem: norte },
    { codigo: 4, nome: 'Zona central', imagem: central },
    { codigo: 5, nome: 'Zona leste', imagem: leste },
  ]

  return (
    <div className='home' style={{ overflowY: 'auto', height: '100vh' }}>
      <NavBar />

      <CarrosselPrincipal />

      <section className='section1'>
        <h1>Melhores lugares de cada região</h1>
        <p>Explore os melhores lugares acessíveis em cada região de São Paulo</p>

        <div className='cards'>
          {lugaresPorRegiao.map((lugar, index) => (
            <CardBox
              index={index}
              key={lugar.codigo}
              imageSrc={lugar.imagem}
              title={lugar.nome}
              onButtonClick={() => { router.push(`../pages/LugarZona?codigo=${lugar.codigo}`) }}
            />
          ))}
        </div>
      </section>

      <section className='section2'>
        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1 }}>
          <Image className='section2-img' src={section2imagem} alt='Imagem' />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1 }}>
          <h2>Nós somos o melhor site para encontrar lugares acessiveis</h2>
          <p>Lutar pelos direitos das pessoas com deficiência fortalece nossa sociedade. Ao promover acessibilidade e igualdade, criamos um mundo onde todos podem participar plenamente.</p>
          <a href="https://www.instagram.com/inclusive.journey/" target="_blank" rel="noopener noreferrer">
            <button type='button' className='button-submit'>Acesse mais</button>
          </a>
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

      <section className='section4'>
        <h1>O que dizem nossos usuários</h1>

        <CarrosselComentarios />
      </section>

      <Footer />
    </div>
  )
}
