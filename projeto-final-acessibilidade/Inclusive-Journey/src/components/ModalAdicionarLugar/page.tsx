import React, { useState, useEffect } from "react"
import './style.css'
import Modal from 'react-modal'
import Image from 'next/image'
import { api } from "@/src/services/api"
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import start from '../../img/star.png'
import startgray from '../../img/star-gray.png'
import camera from '../../img/camera.png'
import close from '../../img/close.png'

export default function ModalAdicionarLugar({ isOpen, closeModal }: any) {
  const [nomeLocal, setNomeLocal] = useState('')
  const [cep, setCep] = useState('')
  const [rua, setRua] = useState('')
  const [complemento, setComplemento] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [numero, setNumero] = useState('')
  const [uf, setUf] = useState('')
  const [horarioFuncionamento, setHorarioFuncionamento] = useState('')
  const [descricao, setDescricao] = useState('')
  const [rating, setRating] = useState(0)
  const [acessibilidade, setAcessibilidade] = useState<any>({})
  const [selectedAccessibility, setSelectedAccessibility] = useState<string>("")
  const [loadingButton, setLoadingButton] = useState(false)
  const [selectedZone, setSelectedZone] = useState<number | null>(null)
  const [selectedPlace, setSelectedPlace] = useState<number | null>(null)
  const [imageBase64, setImageBase64] = useState<string | null>(null)
  const [fotoNome, setFotoNome] = useState<string | null>(null)

  const zonas = [
    { codigo: 1, nome: 'Zona Sul' },
    { codigo: 2, nome: 'Zona Oeste' },
    { codigo: 3, nome: 'Zona Norte' },
    { codigo: 4, nome: 'Zona Central' },
    { codigo: 5, nome: 'Zona Leste' }
  ]

  const lugaresPrincipais = [
    { codigo: 1, nome: 'Parques' },
    { codigo: 2, nome: 'Escolas' },
    { codigo: 3, nome: 'Pontos turísticos' },
    { codigo: 4, nome: 'Hospedagem' },
    { codigo: 5, nome: 'Restaurantes' },
    { codigo: 6, nome: 'Saúde e bem-estar' }
  ]

  const customStyles = {
    content: {
      top: '50%',
      bottom: 'auto',
      left: '50%',
      right: 'auto',
      padding: '0',
      backgroundColor: 'transparent',
      transform: 'translate(-50%, -50%)',
      border: 'none'
    }
  }

  const accessibilityOptions = [
    "Rampa de Acesso",
    "Banheiro Acessível",
    "Estacionamento Acessível",
    "Acessibilidade para Cegos",
    "Elevador ou Plataforma Elevatória",
    "Sinalização de Acessibilidade",
    "Acessibilidade para Surdos"
  ]

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target
    setAcessibilidade((prevState: Record<string, boolean>) => ({
      ...prevState,
      [name]: checked
    }))

    setSelectedAccessibility((prevSelected) => {
      const updatedSelected = checked
        ? [...prevSelected.split(", "), name].filter(Boolean)
        : prevSelected.split(", ").filter((item) => item !== name)

      return updatedSelected.join(", ")
    })
  }

  const handleImagePick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      const reader = new FileReader()

      reader.onloadend = () => {
        const base64String = reader.result as string

        const cleanedBase64String = base64String.replace(/^data:image\/\w+base64,/, '')

        setImageBase64(cleanedBase64String)
      }

      reader.readAsDataURL(file)
      setFotoNome(file.name)
    }
  }

  async function fetchCepData(cep: string) {
    if (cep.length === 8) {
      try {
        const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`)
        const { logradouro, bairro, localidade, uf } = response.data
        setRua(logradouro || '')
        setBairro(bairro || '')
        setCidade(localidade || '')
        setUf(uf || '')
      } catch (error) {
        toast.error("Erro ao buscar dados do CEP.")
      }
    }
  }

  useEffect(() => {
    if (cep.length === 8) {
      fetchCepData(cep)
    } else {
      setRua('')
      setBairro('')
      setCidade('')
      setUf('')
    }
  }, [cep])

  async function handleAdd() {
    setLoadingButton(true)

    if (
      !nomeLocal ||
      !cep ||
      !rua ||
      !complemento ||
      !bairro ||
      !cidade ||
      !numero ||
      !uf ||
      !horarioFuncionamento ||
      !descricao ||
      !rating ||
      !selectedAccessibility ||
      !selectedZone ||
      !selectedPlace
    ) {
      toast.warning("Por favor, preencha todos os campos.")
      setLoadingButton(false)
      return
    }

    if (!imageBase64) {
      toast.warning("Por favor, adicione uma foto.")
      setLoadingButton(false)
      return
    }

    try {
      const response = await api.post('place/registerPlace', {
        NameLocal: nomeLocal,
        Cep: cep,
        Street: rua,
        Complement: complemento,
        Neighborhood: bairro,
        City: cidade,
        NumberHome: numero,
        State: uf,
        OpeningHours: horarioFuncionamento,
        LocalAssessment: String(rating),
        Description: descricao,
        TypeAcessibility: selectedAccessibility,
        ZoneCode: selectedZone,
        ZoneCategorie: selectedPlace,
        ImageName: fotoNome,
        ImageStream: imageBase64
      })

      if (response.status === 200) {
        toast.success("Lugar adicionado com sucesso!")
        closeModal()
      }

    } catch (error) {
      toast.error("Erro ao adicionar o lugar. Verifique as informações e tente novamente.")

    } finally {
      setLoadingButton(false)
    }
  }

  return (
    <Modal style={customStyles} isOpen={isOpen} onRequestClose={closeModal}>
      <div className="modal-adicionar-lugar">
        <Image className='close' src={close} alt='Imagem' onClick={closeModal} />

        <h1>Adicionar um lugar</h1>
        <div className="form">
          <div className="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d328683.16568752046!2d-47.25699180520779!3d-23.64546584917338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1727104814981!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="content">
            <div className="inputs">
              <input style={{ width: '58%' }} type="text" placeholder="Nome do local" value={nomeLocal} onChange={(e) => setNomeLocal(e.target.value)} />
              <input style={{ width: '33%' }} type="text" placeholder="CEP" value={cep} onChange={(e) => setCep(e.target.value)} />
              <input style={{ width: '48%' }} type="text" placeholder="Rua" value={rua} onChange={(e) => setRua(e.target.value)} />
              <input style={{ width: '43%' }} type="text" placeholder="Complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
              <input style={{ width: '48%' }} type="text" placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
              <input style={{ width: '43%' }} type="text" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
              <input style={{ width: '20%' }} type="text" placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)} />
              <input style={{ width: '20%' }} type="text" placeholder="UF" value={uf} onChange={(e) => setUf(e.target.value)} />
              <input style={{ width: '47%' }} type="text" placeholder="Horario de funcionamento" value={horarioFuncionamento} onChange={(e) => setHorarioFuncionamento(e.target.value)} />
              <input style={{ width: '95%' }} type="text" placeholder="Descrição do local" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            </div>
            <div className="selects">
              <div className="select-group" style={{ width: '30%' }}>
                <select style={{ width: '100%' }} value={selectedZone ?? ''} onChange={(e) => setSelectedZone(Number(e.target.value))}>
                  <option value="" disabled>Escolha uma zona</option>
                  {zonas.map((zona) => (
                    <option key={zona.codigo} value={zona.codigo}>
                      {zona.nome}
                    </option>
                  ))}
                </select>
              </div>

              <div className="select-group" style={{ width: '35%' }}>
                <select style={{ width: '100%' }} value={selectedPlace ?? ''} onChange={(e) => setSelectedPlace(Number(e.target.value))}>
                  <option value="" disabled>Escolha um lugar principal</option>
                  {lugaresPrincipais.map((lugar) => (
                    <option key={lugar.codigo} value={lugar.codigo}>
                      {lugar.nome}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <h4>Acessibilidade do local</h4>
            <div className="checkboxs">
              {accessibilityOptions.map((option, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    name={option}
                    checked={acessibilidade[option] || false}
                    onChange={handleCheckboxChange}
                  />
                  {option}
                </label>
              ))}
            </div>
            <div className="stars">
              <h4>Avaliação do local</h4>
              {[1, 2, 3, 4, 5].map((star) => (
                <Image
                  key={star}
                  id={`star-${star}`}
                  className="star"
                  src={star <= rating ? start : startgray}
                  alt="Estrela de avaliação"
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
            {fotoNome && (
              <p style={{ fontSize: '12px', color: 'green', marginTop: '3vh', textDecoration: 'underline' }}>
                {fotoNome}
              </p>
            )}
            <div className="buttons">
              <input type="file" accept="image/*" onChange={handleImagePick} style={{ display: 'none' }} id="fileInput" />
              <button type="button" className="button-foto" onClick={() => document.getElementById('fileInput')?.click()}>
                <Image className='camera' src={camera} alt='Imagem' /> Adicionar foto
              </button>
              <button type="button" className="button-submit" disabled={loadingButton} onClick={handleAdd}>{loadingButton ? "Carregando..." : "Adicionar lugar"}</button>
            </div>
            
          </div>
        </div>

      </div>

      <ToastContainer autoClose={3000} style={{ marginTop: '10vh'}}/>
    </Modal>
  )
}