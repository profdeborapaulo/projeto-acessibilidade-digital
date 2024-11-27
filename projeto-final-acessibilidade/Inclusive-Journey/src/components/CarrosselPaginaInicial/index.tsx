import React from "react"
import './style.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { useRouter } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

export default function CarrosselPaginaInicial() {
  const router = useRouter()

  const data = [
    {id: 1 , title: 'Seja Bem vindo(a) ao Inclusive journey!' , subtitle: 'Bem-vindo ao Inclusive Journey! Aqui, nós valorizamos a acessibilidade e a inclusão. Explore conosco lugares adaptados para todos.', buttonName: 'Login', src: '../pages/Login'},
    {id: 2 , title: 'Conecte-se com a Acessibilidade' , subtitle: 'Junte-se a uma comunidade engajada! No Inclusive Journey, compartilhamos, recomendações e experiências sobre lugares acessíveis. Faça parte!', buttonName: 'Cadastrar', src: '../pages/Cadastro'},
    {id: 3 , title: 'Inclusão para Todos' , subtitle: 'O Inclusive Journey é para todos. Mesmo sem deficiência, você pode colaborar compartilhando informações sobre locais acessíveis que conhece. Juntos, construímos um ambiente mais inclusivo.', buttonName: 'Login', src: '../pages/Login'}
  ]

  return (
    <div className="container-pagina-inicial">
      <Swiper className="pagina-inicial" modules={[Pagination, Autoplay]} autoplay={{delay: 5000}} slidesPerView={1} pagination={{ clickable: true }} grabCursor>
        {data.map((item) => (
          <SwiperSlide className="item" key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.subtitle}</p>
            <button type="button" onClick={() => {router.push(item.src)}}>{item.buttonName}</button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
