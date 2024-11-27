"use client"
import './style.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Footer from '@/src/components/Footer'
import { NavBar } from '@/src/components/NavBar'
import CardBoxLugar from '@/src/components/CardBoxLugar'
import ModalDetalhesLugar from '@/src/components/ModalDetalhesLugar/page'
import { api } from '@/src/services/api'

import logout from '../../../img/logout.png'
import iconEdit from '../../../img/edit.png'
import user from '../../../img/user.png'
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import load from '../../../img/loading.png'
import support from '../../../img/customer-service.png'

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

export default function Perfil() {
  const router = useRouter()
  const [lugaresFavoritados, setLugaresFavoritados] = useState<Local[]>([])
  const [noData, setNoData] = useState(false)
  const [selectedLocal, setSelectedLocal] = useState<Local | null>(null)
  const [isOpenModalDetalhes, setIsOpenModalDetalhes] = useState(false)

  const [userName, setUserName] = useState('')
  const [bio, setBio] = useState('')
  const [email, setEmail] = useState('')
  const [pessoaTipo, setPessoaTipo] = useState('')
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [genero, setGenero] = useState('')
  const [tipoDeficiencia, setTipoDeficiencia] = useState('')
  const [cep, setCep] = useState('')
  const [cidade, setCidade] = useState('')
  const [rua, setRua] = useState('')
  const [complemento, setComplemento] = useState('')
  const [numero, setNumero] = useState('')
  const [bairro, setBairro] = useState('')
  const [uf, setUf] = useState('')

  const [editable, setEditable] = useState(false)
  const [loadingButton, setLoadingButton] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userJourney = localStorage.getItem('u-inclusive-journey')

    const formatDate = (dateString: any) => {
      const date = new Date(dateString)
      const day = String(date.getDate()).padStart(2, '0')
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const year = date.getFullYear()
      return `${day}/${month}/${year}`
    }

    async function fetchUserData() {
      if (userJourney && !isNaN(Number(userJourney))) {
        try {
          const response = await api.get(`person/${userJourney}`)

          const data = response.data
          setUserName(data.username || '')
          setEmail(data.email || '')
          setNomeCompleto(data.fullName || '')
          setDataNascimento(data.dateOfBirth ? formatDate(data.dateOfBirth) : '')
          setGenero(data.gender || '')
          setTipoDeficiencia(data.disabilityType || '')
          setCep(data.postalCode || '')
          setCidade(data.city || '')
          setRua(data.street || '')
          setComplemento(data.additionalInfo || '')
          setNumero(data.number || '')
          setBairro(data.neighborhood || '')
          setUf(data.state || '')
          setBio(data.userDescription || '')
          setPessoaTipo(data.role || '')

        } catch (error) {
          toast.error('Erro ao carregar dados do perfil.')

        } finally {
          setLoading(false)
        }
      }
    }

    async function fetchFavoritados() {
      if (userJourney && !isNaN(Number(userJourney))) {
        try {
          const responseFavoritados = await api.post('place/GetFavoritePlaceOfUser', {
            personCode: userJourney
          })

          setLugaresFavoritados(responseFavoritados.data)

        } catch (error) {
          setNoData(true)

        } finally {
          setLoading(false)
        }
      }
    }

    fetchUserData()
    fetchFavoritados()
  }, [])

  useEffect(() => {
    document.title = 'Sua Conta | Inclusive Journey'
  }, [])

  async function handleUpdateProfile() {
    setLoadingButton(true)
    const userJourney = localStorage.getItem('u-inclusive-journey')
    const pJourney = localStorage.getItem('p-inclusive-journey')

    const [day, month, year] = dataNascimento.split('/')
    const isoDate = `${year}-${month}-${day}T00:00:00`

    try {
      const response = await api.put(`person/updateperson/${userJourney}`, {
        name: nomeCompleto,
        email: email,
        password: pJourney,
        role: pessoaTipo,
        fullName: nomeCompleto,
        dateOfBirth: isoDate,
        gender: genero,
        disabilityType: tipoDeficiencia,
        postalCode: cep,
        street: rua,
        additionalInfo: complemento,
        neighborhood: bairro,
        city: cidade,
        number: numero,
        state: uf,
        username: userName,
        userDescription: bio,
        avatar: ""
      })

      if (response.status === 200) {
        toast.success("Perfil atualizado com sucesso!")
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }

    } catch (error) {
      toast.error("Erro ao atualizar o perfil. Tente novamente.")

    } finally {
      setLoadingButton(false)
    }
  }

  const handleCloseModalDetalhes = () => {
    setIsOpenModalDetalhes(false)
  }

  return (
    <div className='perfil' style={{ overflowY: 'auto', height: '100vh' }}>
      <NavBar />

      <section className='container'>
        <div className='left'>
          <Image className='avatar' src={user} alt='Imagem' />
          <button className='btn-suporte' type='button' onClick={() => { router.push('../pages/Suporte') }}><Image className='support' src={support} alt='Imagem' /> Ajuda e suporte</button>
          <button className='btn-logout' type='button' onClick={() => { router.push('../') }}>Sair <Image className='logout' src={logout} alt='Imagem' /></button>
        </div>

        <div className='content'>
          <div className='header'>
            <div>
              <h3>Informações pessoais</h3>
              {!loading && (<Image className='edit' src={iconEdit} onClick={() => { setEditable(true) }} alt='Icon' />)}
            </div>
            {!loading && (<p>{pessoaTipo || ''}</p>)}
          </div>

          {loading ? (
            <div className='container-loading'>
              <Image className='loading' src={load} alt='Imagem' />
            </div>
          ) : (
            <>
              <div className="inputForm">
                <input disabled={!editable} style={{ width: '30%' }} type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <input disabled={!editable} style={{ width: '64%' }} type="text" placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} />
              </div>

              <h4>Dados Pessoais</h4>
              <div className="inputForm">
                <input disabled={!editable} style={{ width: '47%' }} type="text" placeholder="Nome Completo" value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} />
                <input disabled style={{ width: '47%' }} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input disabled={!editable} style={{ width: '29%' }} type="text" placeholder="Data de Nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
                <input disabled={!editable} style={{ width: '30%' }} type="text" placeholder="Gênero" value={genero} onChange={(e) => setGenero(e.target.value)} />
                <input disabled={!editable} style={{ width: '32%' }} type="text" placeholder="Tipo de Deficiência" value={tipoDeficiencia} onChange={(e) => setTipoDeficiencia(e.target.value)} />
              </div>

              <h4>Endereço</h4>
              <div className="inputForm">
                <input disabled={!editable} style={{ width: '23%' }} type="text" placeholder="CEP" value={cep} onChange={(e) => setCep(e.target.value)} />
                <input disabled={!editable} style={{ width: '27%' }} type="text" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                <input disabled={!editable} style={{ width: '41%' }} type="text" placeholder="Rua" value={rua} onChange={(e) => setRua(e.target.value)} />
                <input disabled={!editable} style={{ width: '10%' }} type="text" placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)} />
                <input disabled={!editable} style={{ width: '31%' }} type="text" placeholder="Complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
                <input disabled={!editable} style={{ width: '33%' }} type="text" placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                <input disabled={!editable} style={{ width: '13%' }} type="text" placeholder="UF" value={uf} onChange={(e) => setUf(e.target.value)} />
              </div>
              {editable && (
                <button type="button" className="updateButton" onClick={handleUpdateProfile} disabled={loadingButton}>
                  {loadingButton ? "Carregando..." : "Atualizar Perfil"}
                </button>
              )}
            </>
          )}
        </div>
      </section>

      <section className='favoritos'>
        <div className='container-card'>
          <h1>Lugares favoritados</h1>

          {loading ? (
            <div className='container-loading'>
              <Image className='loading' src={load} alt='Imagem' />
            </div>
          ) : (
            <div className='cards'>
              {noData ? (
                <p>Não há lugares favoritados.</p>
              ) : (
                lugaresFavoritados.map((l) => (
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
          )}
        </div>
      </section>

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

      <ToastContainer autoClose={3000} />

      <Footer />
    </div>
  )
}
