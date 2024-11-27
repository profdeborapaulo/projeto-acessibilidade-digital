"use client"
import './style.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { api } from '@/src/services/api'

import Image from 'next/image'
import imageCadastro from '../../../img/imgInclusiveJourneyCadastro.png'
import iconPcd from '../../../img/imgCadeirante.png'
import iconOlho from '../../../img/imgOlhinhos.png'
import iconCoracao from '../../../img/imgCoracaozin.png'
import iconTutor from '../../../img/imgEscritaLousa.png'
import iconDone from '../../../img/Done.png'

// import aaaa from '../../../../public/Avatares/Feminino/Feminino-cadeirantes/IMG_3277.png'

export default function Cadastro() {
  const router = useRouter()

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
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
  const [bio, setBio] = useState('')
  const [relacaoTutelado, setRelacaoTutelado] = useState('')

  const [isFirstStepComplete, setIsFirstStepComplete] = useState(false)
  const [isSecondStepComplete, setIsSecondStepComplete] = useState(false)
  const [isThirdStepComplete, setIsThirdStepComplete] = useState(false)
  const [isFourthStepComplete, setIsFourthStepComplete] = useState(false)

  const [lembrar, setLembrar] = useState(true)
  const [loadingButton, setLoadingButton] = useState(false)
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    document.title = 'Junte-se a Nós | Inclusive Journey'
  }, [])

  // const avataresCadeirantes = [
  //   { id: 1, src: aaaa }
  // ]

  // const toggleAccordion = (index: any) => {
  //   if (openIndex === index) {
  //     setOpenIndex(null);
  //   } else {
  //     setOpenIndex(index)
  //   }
  // }

  async function fetchCep(cep: any) {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()
      if (!data.erro) {
        return data
      } else {
        toast.error('CEP não encontrado.')
        return null
      }
    } catch (error) {
      toast.error('Erro ao buscar CEP.')
      return null
    }
  }

  const handleCepChange = async (e: any) => {
    const cepValue = e.target.value
    setCep(cepValue)

    if (cepValue.length === 8) {
      const data = await fetchCep(cepValue)
      if (data) {
        setCidade(data.localidade)
        setRua(data.logradouro)
        setBairro(data.bairro)
        setUf(data.uf)
      }
    }
  }

  const handleFirstStepSubmit = () => {
    if (email === '' && password === '' && passwordConfirmation === '') {
      toast.warning('Por favor, preencha todos os campos.')
      return
    }

    // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // if (!emailRegex.test(email)) {
    //   toast.warning('Por favor, insira um e-mail válido.')
    //   return
    // }

    if (password !== passwordConfirmation) {
      toast.warning("As senhas não coincidem. Verifique e tente novamente.")
      return
    }

    setIsFirstStepComplete(true)
  }

  const handleSecondStepSubmit = (item: string) => {
    setPessoaTipo(item)

    if (item === 'Tutor') {
      setTipoDeficiencia('')
    } else {
      setRelacaoTutelado('')
    }

    setIsSecondStepComplete(true)
  }

  const handleThirdStepSubmit = () => {
    const allFieldsFilled =
      nomeCompleto !== '' &&
      dataNascimento !== '' &&
      genero !== '' &&
      cep !== '' &&
      rua !== '' &&
      numero !== '' &&
      bairro !== '' &&
      cidade !== '' &&
      uf !== '' &&
      (pessoaTipo === 'Tutor' ? relacaoTutelado !== '' : pessoaTipo !== '')

    const calculateAge = (birthDate: any) => {
      const birthDateObj = new Date(birthDate)
      const today = new Date()
      let age = today.getFullYear() - birthDateObj.getFullYear()
      const month = today.getMonth()
      if (month < birthDateObj.getMonth() || (month === birthDateObj.getMonth() && today.getDate() < birthDateObj.getDate())) {
        age--
      }
      return age
    }

    const age = calculateAge(dataNascimento)

    if (allFieldsFilled && age > 13) {
      setIsThirdStepComplete(true)

    } else {
      if (!allFieldsFilled) {
        toast.warning('Por favor, preencha todos os campos obrigatórios.')
      } else {
        toast.warning('Você deve ser maior de 13 anos para continuar.')
      }
    }
  }

  const handleFourthStepSubmit = () => {
    if (userName === '' && bio === '') {
      toast.warning('Por favor, preencha todos os campos.')
      return
    }

    setIsFourthStepComplete(true)
  }

  const quemEvoce = [
    { codigo: 1, tipo: 'Pessoa não deficiente', descricao: 'Seja parte da mudança, promovendo inclusão e acessibilidade para todos.', src: iconCoracao },
    { codigo: 2, tipo: 'PcD', descricao: 'Junte-se a nós e faça sua voz ser ouvida na busca por um mundo mais acessível.', src: iconPcd },
    { codigo: 3, tipo: 'Curioso', descricao: 'Explore e aprenda sobre acessibilidade, expandindo seus horizontes e compreensão.', src: iconOlho },
    { codigo: 4, tipo: 'Tutor', descricao: 'Compartilhe seu conhecimento e experiência, capacitando outros a promoverem a inclusão.', src: iconTutor },
  ]

  const regras = [
    { codigo: 1, tipo: 'Seja você mesmo', descricao: 'Aqui, cada voz importa. Celebre sua autenticidade enquanto contribui para um mundo mais inclusivo.', src: iconDone },
    { codigo: 2, tipo: 'Respeite os usuarios', descricao: 'Valorizamos a diversidade e o respeito mútuo. Juntos, construímos uma comunidade inclusiva e acolhedora.', src: iconDone },
    { codigo: 3, tipo: 'Esteja seguro', descricao: 'Sua segurança é nossa prioridade. Navegue com confiança em nosso ambiente protegido.', src: iconDone },
    { codigo: 4, tipo: 'Seja empático', descricao: 'Reconheça as diferentes experiências e desafios enfrentados por pessoas com deficiência, demonstrando empatia e solidariedade.', src: iconDone },
  ]

  const generos = [
    { codigo: 1, nome: 'Masculino' },
    { codigo: 2, nome: 'Feminino' },
    { codigo: 3, nome: 'Outro' },
    { codigo: 4, nome: 'Prefiro não dizer' },
  ]

  async function handleCadastro() {
    setLoadingButton(true)

    try {
      const response = await api.post('person/register', {
        name: nomeCompleto,
        email: email,
        password: password,
        role: pessoaTipo,
        fullName: nomeCompleto,
        birthDate: dataNascimento,
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
        localStorage.setItem('u-inclusive-journey', JSON.stringify(response.data.userCode))
        localStorage.setItem('p-inclusive-journey', JSON.stringify(password))
        toast.success("Cadastro realizado com sucesso!")
        router.push('../pages/Home')
      }

    } catch (error) {
      toast.error("Ocorreu um erro ao realizar o cadastro. Verifique os dados e tente novamente.")
      setTimeout(() => {
        window.location.reload()
      }, 5000)

    } finally {
      setLoadingButton(false)
    }
  }

  return (
    <main className='main-cadastro'>
      <div className="container">
        <Image className='imagem' src={imageCadastro} alt="Imagem" />

        {!isFirstStepComplete ? (
          <div className="form">
            <div className="header">
              <h1>Cadastro</h1>
              <p>Cadastre-se agora e faça parte da nossa comunidade inclusiva</p>
            </div>
            <div className="inputForm">
              <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
                <g id="Layer_3" data-name="Layer 3">
                  <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.144 2.144 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                </g>
              </svg>
              <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="inputForm">
              <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M336 512H44c-26.453 0-44-21.523-44-44V240c0-26.476 21.547-44 44-44h288c26.453 0 44 21.524 44 44v224c0 26.477-21.547 44-44 44zM44 224c-8.813 0-16 7.168-16 16v224c0 8.832 7.187 16 16 16h288c8.813 0 16-7.168 16-16V240c0-8.832-7.187-16-16-16zM304 224c-8.832 0-16-7.168-16-16v-80c0-52.93-43.07-96-96-96s-96 43.07-96 96v80c0 8.832-7.168 16-16 16s-16-7.168-16-16v-80c0-70.594 57.406-128 128-128s128 57.406 128 128v80c0 8.832-7.168 16-16 16z"></path>
              </svg>
              <input type="password" className="input" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="inputForm">
              <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M336 512H44c-26.453 0-44-21.523-44-44V240c0-26.476 21.547-44 44-44h288c26.453 0 44 21.524 44 44v224c0 26.477-21.547 44-44 44zM44 224c-8.813 0-16 7.168-16 16v224c0 8.832 7.187 16 16 16h288c8.813 0 16-7.168 16-16V240c0-8.832-7.187-16-16-16zM304 224c-8.832 0-16-7.168-16-16v-80c0-52.93-43.07-96-96-96s-96 43.07-96 96v80c0 8.832-7.168 16-16 16s-16-7.168-16-16v-80c0-70.594 57.406-128 128-128s128 57.406 128 128v80c0 8.832-7.168 16-16 16z"></path>
              </svg>
              <input type="password" className="input" placeholder="Confirmação de senha" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
            </div>

            <div className='footer'>
              <label><input type="checkbox" size={200} checked={lembrar} onChange={(e) => { setLembrar(e.target.checked) }} /> Lembre-se de mim</label>
            </div>

            <button className="button-submit" onClick={handleFirstStepSubmit}>Avançar</button>
            <a href='../pages/Login'>Já possui uma conta? Faça login</a>

            <p style={{ marginTop: '5vh', textAlign: 'center' }}>Ao continuar, você declara que leu e concorda com os <a href='../pages/TermosDeUso'>Termos e Condições</a>.</p>
          </div>
        ) : !isSecondStepComplete ? (
          <div className="form">
            <div className="header">
              <h1>Quem é você?</h1>
            </div>

            {quemEvoce.map((item) => (
              <div key={item.codigo} className={`botao-personalizado ${pessoaTipo === item.tipo ? 'selected' : ''}`} onClick={() => handleSecondStepSubmit(item.tipo)}
              >
                <div className="icones">
                  <Image src={item.src} alt={`Ícone de ${item.tipo}`} />
                </div>
                <div className="conteudo-quem">
                  <h4>{item.tipo}</h4>
                  <p>{item.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        ) : !isThirdStepComplete ? (
          <div className="form">
            <div className="header">
              <h1>Informações pessoais</h1>
            </div>

            <section className='inputs'>
              <div className="inputForm" style={{ width: '100%' }}>
                <input type="text" className="input" placeholder="Nome Completo" value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} />
              </div>
              <div className="inputForm" style={{ width: '43%' }}>
                <input type="date" className="input" placeholder="Data de Nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
              </div>
              <div className="inputForm" style={{ width: '53%' }}>
                <select className="input" value={genero} onChange={(e) => setGenero(e.target.value)}>
                  <option value="" disabled>Selecione um gênero</option>
                  {generos.map((genero) => (
                    <option key={genero.nome} value={genero.nome}>
                      {genero.nome}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputForm" style={{ width: '100%' }}>
                {pessoaTipo === 'Tutor' ? (
                  <input type="text" className="input" placeholder="Relação com o tutelado (ex: pai, mãe)" value={relacaoTutelado} onChange={(e) => setRelacaoTutelado(e.target.value)}/>
                ) : (
                  <input type="text" className="input" placeholder="Deficiência (se houver)" value={tipoDeficiencia} onChange={(e) => setTipoDeficiencia(e.target.value)}/>
                )}
              </div>
              <div className="inputForm" style={{ width: '43%' }}>
                <input type="text" className="input" placeholder="CEP" value={cep} onChange={handleCepChange} />
              </div>
              <div className="inputForm" style={{ width: '53%' }}>
                <input type="text" className="input" placeholder="Rua" value={rua} onChange={(e) => setRua(e.target.value)} />
              </div>
              <div className="inputForm" style={{ width: '35%' }}>
                <input type="number" className="input" placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)} />
              </div>
              <div className="inputForm" style={{ width: '61%' }}>
                <input type="text" className="input" placeholder="Complemento (se houver)" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
              </div>
              <div className="inputForm" style={{ width: '46%' }}>
                <input type="text" className="input" placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
              </div>
              <div className="inputForm" style={{ width: '50%' }}>
                <input type="text" className="input" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
              </div>
              <div className="inputForm" style={{ width: '30%' }}>
                <input type="text" className="input" placeholder="UF" value={uf} onChange={(e) => setUf(e.target.value)} />
              </div>
            </section>

            <button className="button-submit" onClick={handleThirdStepSubmit}>Avançar</button>
          </div>
        ) : !isFourthStepComplete ? (
          <div className="form">
            <div className="header">
              <h1>Perfil</h1>
            </div>

            <div className="inputForm">
              <input type="text" className="input" placeholder="Nome do usuário" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="inputForm">
              <input type="text" className="input" placeholder="Descrição (bio)" value={bio} onChange={(e) => setBio(e.target.value)} />
            </div>

            <section>
              <div className="header">
                <h2>Escolha seu avatar</h2>
              </div>

              {/* {avataresCadeirantes.map((avatar, index) => (
                <div key={avatar.id} className="accordion-item">
                  <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                    <h3>Avatares - Cadeirantes</h3>
                  </div>
                  {openIndex === index && (
                    <div className="accordion-content">
                      <Image style={{width: '100px', height: '100px', backgroundColor: 'red'}} className='imagem' src={avatar.src} alt="Imagem" />
                    </div>
                  )}
                </div>
              ))} */}

              <div className="inputForm" style={{ marginBottom: '10px' }}>
                <select name="gender" className="input" id="gender">
                  <option value="">Avatares - Cadeirantes</option>
                </select>
              </div>
              <div className="inputForm" style={{ marginBottom: '10px' }}>
                <select name="gender" className="input" id="gender">
                  <option value="">Avatares - Pcd auditivo</option>
                </select>
              </div>
              <div className="inputForm" style={{ marginBottom: '10px' }}>
                <select name="gender" className="input" id="gender">
                  <option value="">Avatares - Pcd Visual</option>
                </select>
              </div>
              <div className="inputForm" style={{ marginBottom: '10px' }}>
                <select name="gender" className="input" id="gender">
                  <option value="">Avatares - Pessoa não deficiente</option>
                </select>
              </div>
            </section>

            <button className="button-submit" onClick={handleFourthStepSubmit}>Avançar</button>
          </div>
        ) : (
          <div className="form">
            <div className="header">
              <h1>Siga as regras abaixo</h1>
            </div>

            {regras.map((item) => (
              <div key={item.codigo} style={{ padding: '1.5%' }} className={`botao-personalizado ${pessoaTipo === item.tipo ? 'selected' : ''}`}>
                <div className="icones">
                  <Image src={item.src} alt={`Ícone de ${item.tipo}`} />
                </div>
                <div className="conteudo-quem">
                  <h4>{item.tipo}</h4>
                  <p>{item.descricao}</p>
                </div>
              </div>
            ))}

            <button className="button-submit" onClick={handleCadastro} disabled={loadingButton}>{loadingButton ? "Carregando..." : "Cadastrar"}</button>
          </div>
        )}
      </div>

      <ToastContainer autoClose={3000} />
    </main>
  )
}
