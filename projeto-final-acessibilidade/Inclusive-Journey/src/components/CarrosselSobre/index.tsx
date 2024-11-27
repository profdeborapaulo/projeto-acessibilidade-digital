import React from "react"
import './style.css'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper/modules'

import fundo1 from '../../img/teste.jpg'

export default function CarrosselSobre() {
  const data = [
    {
      id: 1,
      title: "Sobre Nossa Plataforma",
      subtitle: "Explore possibilidades acessíveis em nossa plataforma! Com uma interface intuitiva e informações detalhadas, simplificamos sua busca por locais adaptados. Bem-vindo(a) ao seu novo guia para uma vida inclusiva!",
      src: fundo1
    }
  ]

  return (
    <div className="container-sobre">
      <Swiper className="container" modules={[ EffectFade]} effect="fade" slidesPerView={1}>
        {data.map((item) => (
          <SwiperSlide className="item" key={item.id}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.src.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <h1>{item.title}</h1>
            <p>{item.subtitle}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
