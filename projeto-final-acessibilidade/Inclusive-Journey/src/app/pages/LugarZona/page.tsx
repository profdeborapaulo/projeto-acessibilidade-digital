'use client'
import './style.css'
import React, { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Footer from "@/src/components/Footer"
import { NavBar } from "@/src/components/NavBar"
import CardBoxLugar from "@/src/components/CardBoxLugar"
import ModalAdicionarLugar from '@/src/components/ModalAdicionarLugar/page'
import ModalDetalhesLugar from '@/src/components/ModalDetalhesLugar/page'
import { api } from '@/src/services/api'
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import load from '../../../img/loading.png'

interface Local {
  codigo: number
  nameLocal: string
  cep: string
  street: string
  complement: string
  neighborhood: string
  city: string
  numberHome: string
  state: string
  openingHours: string
  localAssessment: string
  description: string
  typeAcessibility: string
  zoneCode: number
  zoneCategorie: number
  isFavorite: boolean
  imageUrl: string
}

export default function LugarZona({ searchParams }: { searchParams: { [key: string]: string } }) {
  const router = useRouter()

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenModalDetalhes, setIsOpenModalDetalhes] = useState(false)
  const [selectedLocal, setSelectedLocal] = useState<Local | null>(null)
  const [local, setLocal] = useState<Local[]>([])
  const [noData, setNoData] = useState(false)
  const codigo = searchParams.codigo
  const [loading, setLoading] = useState(true)

  const zonas = [
    { codigo: 1, nome: 'Zona Sul' },
    { codigo: 2, nome: 'Zona Oeste' },
    { codigo: 3, nome: 'Zona Norte' },
    { codigo: 4, nome: 'Zona Central' },
    { codigo: 5, nome: 'Zona Leste' }
  ]

  useEffect(() => {
    if (codigo) {
      const fetchComentarios = async () => {
        try {
          const response = await api.get(`place/placesForZones/${codigo}`)

          if (response.status === 204) {
            setNoData(true)
          } else {
            setLocal(response.data)
            setNoData(false)
          }

        } catch (error) {
          toast.error('Erro ao buscar lugar.')
          setNoData(true)
          
        } finally {
          setLoading(false)
        }
      }

      fetchComentarios()
    }
  }, [codigo])

  useEffect(() => {
    document.title = 'Lugar Por Zona | Inclusive Journey'
  }, [])

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  const handleCloseModalDetalhes = () => {
    setIsOpenModalDetalhes(false)
  }

  return (
    <div className="lugar" style={{ overflowY: 'auto', height: '100vh' }}>
      <NavBar />

      <section className='highlight'>
        <h1>{zonas.find(zona => zona.codigo === Number(codigo))?.nome}</h1>
        <p>
          {zonas.map((zona, index) => (
            <React.Fragment key={zona.codigo}>
              <span style={{ color: zona.codigo === Number(codigo) ? 'red' : '#ffffff' }} onClick={() => { router.push(`../pages/LugarZona?codigo=${zona.codigo}`) }}>
                {zona.nome}
              </span>
              {index < zonas.length - 1 && <span> / </span>}
            </React.Fragment>
          ))}
        </p>
      </section>

      {loading ? (
        <div className='container-loading'>
          <Image className='loading' src={load} alt='Imagem' />
        </div>
      ) : (
        <section className='section1'>
          <div className='cards'>
            {noData ? (
              <p>Não há lugares disponíveis.</p>
            ) : (
              local.map((l) => (
                <CardBoxLugar
                  key={l.codigo}
                  imageSrc={l.imageUrl}
                  title={l.nameLocal}
                  subtitle={l.localAssessment}
                  endereco={`${l.street}, ${l.numberHome} - ${l.neighborhood}, ${l.city} - ${l.state}`}
                  onButtonClick={() => { setSelectedLocal(l); setIsOpenModalDetalhes(true) }}
                  isfavorite={l.isFavorite}
                />
              ))
            )}
          </div>
        </section>
      )}

      <button type='button' className='button-add' onClick={() => { setIsOpenModal(true) }}>Adicionar lugar</button>

      <ModalDetalhesLugar isOpen={isOpenModalDetalhes} closeModal={handleCloseModalDetalhes}
        nameLocal={selectedLocal?.nameLocal}
        imageUrl={selectedLocal?.imageUrl}
        isFavorite={selectedLocal?.isFavorite}
        description={selectedLocal?.description}
        street={selectedLocal?.street}
        numberHome={selectedLocal?.numberHome}
        neighborhood={selectedLocal?.neighborhood}
        city={selectedLocal?.city}
        state={selectedLocal?.state}
        cep={selectedLocal?.cep}
        localAssessment={selectedLocal?.localAssessment}
        typeAcessibility={selectedLocal?.typeAcessibility}
        openingHours={selectedLocal?.openingHours}
      />

      <ModalAdicionarLugar isOpen={isOpenModal} closeModal={handleCloseModal}/>

      <ToastContainer autoClose={3000} />

      <Footer />
    </ div>
  )
}