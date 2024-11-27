'use client'
import './style.css'
import Image from 'next/image'

import star from '../../img/star.png'
import whiteHeart from '../../img/white-heart.png'
import redHeart from '../../img/red-heart.png'

interface CardBoxProps {
  title: string
  subtitle: string
  endereco: string
  imageSrc: string
  onButtonClick: () => void
  isfavorite: boolean
}

export default function CardBoxLugar({ title, subtitle, endereco, imageSrc, onButtonClick, isfavorite }: CardBoxProps) {
  async function handleFavorite() {

  }

  return (
    <div className="cardBoxLugar">
      <Image className='cardBoxImg' src={imageSrc} alt='Imagem' width={500} height={300} />
      <Image className='heart' src={isfavorite ? redHeart : whiteHeart} alt='Imagem' onClick={handleFavorite} />
      <h3>{title}</h3>
      <h6 className="stars">
        {subtitle}
        {subtitle && !isNaN(parseInt(subtitle, 10)) ? (
          [...Array(parseInt(subtitle, 10))].map((_, index) => (
            <Image key={index} className="star" src={star} alt="Imagem" />
          ))
        ) : (
          <h6>Nenhuma avaliação</h6>
        )}
      </h6>
      <h5>{endereco}</h5>
      <span onClick={onButtonClick}>Ver mais informações</span>
    </div>
  )
}