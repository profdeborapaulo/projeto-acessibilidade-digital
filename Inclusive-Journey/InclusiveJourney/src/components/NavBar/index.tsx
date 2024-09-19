import './style.css';
import Image from 'next/image'
import logo from '../../img/logoHome.svg'
import Link from 'next/link';

export function NavBar() {
    return (
        <div style={{ display: "flex", backgroundColor: "white", margin: 0, justifyContent: 'space-between' }} className="h-10 w-full flex items-center">
            <Image src={logo} alt="logo" height={60} style={{marginLeft: 40, marginTop: 10,  marginBottom: 10}}/>
            <ul className="flex space-x-4 list-none" style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 18, paddingRight:40 }}>
                <Link href={'../pages/Home'} className='text-5xl linhasLi' style={{ fontWeight: 500, fontSize: 19 }}>Home</Link>
                <Link href={'../pages/Sobre'} className='text-5xl linhasLi' style={{ fontWeight: 500, fontSize: 19 }}>Sobre</Link>
                <Link href={'#'} className='text-5xl linhasLi' style={{ fontWeight: 500, fontSize: 19 }}>Lugares</Link>
                <Link href={'#'} className='text-5xl linhasLi' style={{ fontWeight: 500, fontSize: 19 }}>Zonas</Link>
                <Link href={'#'} className='text-5xl linhasLi' style={{ fontWeight: 500, fontSize: 19 }}>Perfil</Link>
            </ul>
        </div>
    )
}