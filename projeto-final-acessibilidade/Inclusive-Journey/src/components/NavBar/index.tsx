import './style.css'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import logo from '../../img/logoHome.svg'

export function NavBar() {
  const router = useRouter()

  const zonas = [
    { codigo: 1, nome: 'Zona Sul' },
    { codigo: 2, nome: 'Zona Oeste' },
    { codigo: 3, nome: 'Zona Norte' },
    { codigo: 4, nome: 'Zona Central' },
    { codigo: 5, nome: 'Zona Leste' }
  ]

  const pathname = usePathname()

  const isActiveLink = (path: string) => {
    return pathname?.includes(path) ? 'active' : '' 
  }

  const handleZonaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const codigo = event.target.value
    if (codigo) {
      router.push(`../pages/LugarZona?codigo=${codigo}`)
    }
  }

  return (
    <div className='navbar'>
      <Image src={logo} className='navbar-logo' alt="Imagem"/>
      <div>
        <Link href={'../pages/Home'} className={isActiveLink('Home')}>Home</Link>
        <Link href={'../pages/Sobre'} className={isActiveLink('Sobre')}>Sobre</Link>
        <Link href={'../pages/Lugares'} className={isActiveLink('Lugares')}>Lugares</Link>

        <select className='navbar-select' onChange={handleZonaChange}>
          <option value="">Zonas</option>
          {zonas.map((zona) => (
            <option key={zona.codigo} value={zona.codigo}>
              {zona.nome}
            </option>
          ))}
        </select>

        <Link href={'../pages/Perfil'} className={isActiveLink('Perfil')}>Perfil</Link>
      </div>
    </div>
  )
}