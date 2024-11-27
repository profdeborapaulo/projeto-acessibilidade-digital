import React from "react"
import './style.css'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { useRouter } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'

import fundo1 from '../../img/teste.jpg'
import fundo2 from '../../img/fundo2.jpg'

export default function CarrosselPrincipal() {
  const router = useRouter()

  const data = [
    {
      id: 1,
      title: "Embarque no Inclusive Journey",
      subtitle: "Descubra e compartilhe locais acessíveis com nossa comunidade. Transforme a interação das pessoas com deficiência com o mundo.",
      src: fundo1
    },
    {
      id: 2,
      title: "Acessibilidade Para Todos",
      subtitle: "Veja como o Inclusive Journey está facilitando a vida das pessoas com deficiência. Descubra os melhores lugares acesspiveis e faça parte dessa transformação.",
      src: fundo2
    }
  ]

  return (
    <div className="container-principal">
      <Swiper className="container" modules={[Autoplay, EffectFade]} effect="fade" autoplay={{ delay: 6000 }} slidesPerView={1} grabCursor>
        {data.map((item) => (
          <SwiperSlide className="item" key={item.id}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.src.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <h1>{item.title}</h1>
            <p>{item.subtitle}</p>
            <button type="button" onClick={() => {router.push('../pages/Lugares')}}>Saiba mais</button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
