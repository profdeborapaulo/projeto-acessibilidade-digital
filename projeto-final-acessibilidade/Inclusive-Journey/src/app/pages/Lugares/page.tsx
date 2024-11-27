'use client'
import './style.css'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Footer from "@/src/components/Footer"
import { NavBar } from "@/src/components/NavBar"
import CardBox from "@/src/components/CardBox"
import { motion } from 'framer-motion'

import parques from '../../../img/parques.svg'
import escolas from '../../../img/escolas.svg'
import pontosTuristicos from '../../../img/pontos turisticos.svg'
import hospedagem from '../../../img/hospedagem.svg'
import restaurantes from '../../../img/restaurantes.svg'
import saude from '../../../img/saude e bem estar.svg'

import central from '../../../img/zona-central.svg'
import sul from '../../../img/zona-sul.svg'
import norte from '../../../img/zona-norte-new.jpg'
import leste from '../../../img/zona-leste.svg'
import oeste from '../../../img/zona-oeste.svg'

export default function Lugares() {
  const router = useRouter()

  const lugaresPrincipais = [
    { codigo: 1, nome: 'Parques', imagem: parques },
    { codigo: 2, nome: 'Escolas', imagem: escolas },
    { codigo: 3, nome: 'Pontos turísticos', imagem: pontosTuristicos },
    { codigo: 4, nome: 'Hospedagem', imagem: hospedagem },
    { codigo: 5, nome: 'Restaurantes', imagem: restaurantes },
    { codigo: 6, nome: 'Saúde e bem-estar', imagem: saude }
  ]

  const lugaresPorRegiao = [
    { codigo: 1, nome: 'Zona sul', imagem: sul },
    { codigo: 2, nome: 'Zona oeste', imagem: oeste },
    { codigo: 3, nome: 'Zona norte', imagem: norte },
    { codigo: 4, nome: 'Zona central', imagem: central },
    { codigo: 5, nome: 'Zona leste', imagem: leste },
  ]

  useEffect(() => {
    document.title = 'Lugares Acessíveis | Inclusive Journey'
  }, [])

  return (
    <div className="lugares" style={{ overflowY: 'auto', height: '100vh' }}>
      <NavBar />

      <section className='highlight'>
        <motion.h1 initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.9 }}>Lugares recomendados</motion.h1>
        <motion.p initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.8 }}>Nesta página você pode encontrar lugares mais acessíveis de São Paulo para a sua necessidade recomendados pelo nosso site!</motion.p>
      </section>

      <section className='section1'>
        <h1>Navegue pelo nossos links com recomendações</h1>
        <p>Explore os melhores lugares acessíveis separados por categorias</p>

        <div className='cards'>
          {lugaresPrincipais.map((lugar, index) => (
            <CardBox
              index={index}
              key={lugar.codigo}
              imageSrc={lugar.imagem}
              title={lugar.nome}
              onButtonClick={() => { router.push(`../pages/Lugar?codigo=${lugar.codigo}`) }}
            />
          ))}
        </div>
      </section>

      <section className='section1' style={{ paddingBottom: '8vh' }}>
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

      <Footer />
    </div>
  )
}
