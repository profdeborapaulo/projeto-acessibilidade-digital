import React, { useState, useEffect } from "react"
import './style.css'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { api } from "@/src/services/api"
import Image from 'next/image'
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import user from '../../img/user.png'

interface Comentario {
  codigo: number
  namePerson: string
  description: string
}

export default function CarrosselComentarios() {
  const [comentarios, setComentarios] = useState<Comentario[]>([])

  useEffect(() => {
    const fetchComentarios = async () => {
      try {
        const response = await api.get("comments")
        setComentarios(response.data)

      } catch (error) {
        toast.error('Erro ao carregar comentários')
      }
    }

    fetchComentarios()
  }, [])

  return (
    <div className="container-comentarios">
      <Swiper className="comentarios" modules={[Pagination, Navigation ]} slidesPerView={1} navigation pagination={{clickable: true}} grabCursor>
        {comentarios.map((item) => (
          <SwiperSlide className="item" key={item.codigo}>
            <Image className='user' src={user} alt='Imagem' />
            <h1>{item.namePerson}</h1>
            <p>{item.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      <ToastContainer autoClose={3000} />
    </div>
  )
}
