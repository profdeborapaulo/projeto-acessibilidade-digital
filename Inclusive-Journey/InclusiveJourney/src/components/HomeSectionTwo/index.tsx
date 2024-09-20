'use client'
import './style.css';

import logo2 from '../../img/Zona norte 2.svg'; // Imagem 2
import logo3 from '../../img/zona-oeste.jpg'; // Imagem 2
import logo4 from '../../img/zona-leste-de-sao-paulo-bairros-610x406 1.svg'; // Imagem 2
import logo5 from '../../img/zona-sul-de-sao-paulo-1.jpg'; // Imagem 2
import logo6 from '../../img/zonaCentral.jpg'; // Imagem 2
import CardBox from '../CardBox';

export function HomeSectionTwo() {
    return (
        <div>
            <h3 style={{ fontSize: 40, textAlign: 'center', margin: 0, marginTop: 40 }}>Melhores lugares de cada região</h3>
            <p style={{ fontSize: 16, textAlign: 'center' }}>Explore os melhores lugares acessíveis em cada região de São Paulo</p>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>

                <CardBox imageSrc={logo2} title='Zona Central'/>
                <CardBox imageSrc={logo3} title='Zona Sul'/>
                <CardBox imageSrc={logo4} title='Zona Norte'/>
                <CardBox imageSrc={logo5} title='Zona Leste'/>
                <CardBox imageSrc={logo6} title='Zona Oeste'/>
            </div>
        </div>
    )
}