'use client'
import './style.css';
import Image, { StaticImageData } from 'next/image';

interface CardBoxProps{
    title: string,
    imageSrc: StaticImageData;
}

export default function CardBox({title, imageSrc}: CardBoxProps) {
    return (
        <>
            <div className="cardBoxHome" style={{
                margin: 20,
                borderRadius: 20,
                paddingBottom: 40,
                maxHeight: '300px',
                width: '25%',
                maxWidth: '350px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
                transition: 'box-shadow 0.3s ease-in-out'
            }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px -4px 20px rgba(0, 0, 0, 0.4)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 4px 16px rgba(0, 0, 0, 0.2)'}
            >
                <Image src={imageSrc} alt='imagebox' style={{ maxWidth: '100%', objectFit: 'contain' }} />
                <h3>{title}</h3>
                <button style={{ color: 'white' }} className="saiba-mais-button">Saiba Mais</button>
            </div>
        </>
    )
}