'use client'
import { useState } from 'react';
import './style.css';
import Image from 'next/image';
import logo1 from '../../img/estilo-de-vida-de-amigos-com-deficiencia-de-tiro-completo.jpg'; // Imagem 1
import logo2 from '../../img/Zona norte 2.svg'; // Imagem 2
import logo3 from '../../img/zona-leste-de-sao-paulo-bairros-610x406 1.svg'; // Imagem 3

export function Carrousel() {
    const images = [logo1, logo2, logo3];
    const phrasesTitles = [
        "Embarque no Inclusive Journey",
        "Acessibilidade para Todos",
        "Melhores lugares de cada região"
    ];
    const phrases = [
        "Descubra e compartilhe locais acessíveis com nossa comunidade. Transforme a interação das pessoas com deficiência com o mundo.",
        "Veja como o Inclusive Journey está facilitando a vida de pessoas com deficiência. Descubra os melhores lugares acessíveis e faça parte dessa transformação. ",
        "Explore os melhores lugares acessíveis em cada região de São Paulo"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carrousel" style={{ marginTop: 20 }}>
            <button className="carrousel-button left" onClick={prevImage}>❮</button>
            
            <div className="carrousel-content">
                <Image src={images[currentIndex]} alt={`Carrousel Image ${currentIndex + 1}`} />
                <div className="carrousel-text">
                    <p style={{fontSize: 50, fontWeight: 'bold', margin: 0}}>{phrasesTitles[currentIndex]}</p>
                    <p style={{fontSize: 18}}>{phrases[currentIndex]}</p>
                    <button style={{color: 'white'}} className="saiba-mais-button">Saiba Mais</button>
                </div>
            </div>

            <button className="carrousel-button right" onClick={nextImage}>❯</button>
        </div>
    );
}
