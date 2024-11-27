import React, { useState } from "react"
import './style.css'
import Modal from 'react-modal'
import Image from 'next/image'

import close from '../../img/close.png'
import star from '../../img/star.png'
import location from '../../img/location.png'
import whiteHeart from '../../img/white-heart.png'
import redHeart from '../../img/red-heart.png'
import ramp from '../../img/ramp.png'
import toilet from '../../img/toilet.png'
import disabledSign from '../../img/disabled-sign.png'
import book from '../../img/book.png'
import elevator from '../../img/elevator.png'
import disability from '../../img/disability.png'
import signLanguage from '../../img/sign-language.png'

export default function ModalDetalhesLugar({ isOpen, closeModal, nameLocal, imageUrl, isFavorite, description, street, numberHome, neighborhood, city, state, cep, localAssessment, typeAcessibility, openingHours }: any) {
  const customStyles = {
    content: {
      top: '50%',
      bottom: 'auto',
      left: '50%',
      right: 'auto',
      padding: '0',
      backgroundColor: 'transparent',
      transform: 'translate(-50%, -50%)',
      border: 'none'
    }
  }

  async function handleFavorite() {

  }

  return (
    <Modal style={customStyles} isOpen={isOpen} onRequestClose={closeModal}>
      <div className="modal-detalhes-lugar">
        <Image className='close' src={close} alt='Imagem' onClick={closeModal} />

        <div className="main">
          <div className="imagem">
            <Image className='url' src={imageUrl} alt='Imagem' width={50} height={30} unoptimized />
          </div>
          <div className="content">
            <div className="title">
              <h3>{nameLocal}</h3>
              <Image className='heart' src={isFavorite ? redHeart : whiteHeart} alt='Imagem' onClick={handleFavorite} />
            </div>
            <p className="stars">
              {localAssessment}
              {localAssessment && !isNaN(parseInt(localAssessment, 10)) ? (
                [...Array(parseInt(localAssessment, 10))].map((_, index) => (
                  <Image key={index} className="star" src={star} alt="Imagem" />
                ))
              ) : (
                <p>Nenhuma avaliação</p>
              )}
            </p>
            <p className="address"><Image className='location' src={location} alt='Imagem' /> {`${street}, ${numberHome} - ${neighborhood}, ${city} - ${state}, ${cep}`}</p>
            <p>Horário de funcionamento: {openingHours}</p>
            <div className="acessibilidade">
              <h4>Acessibilidade</h4>
              {typeAcessibility
                ?.split(',')
                .map((item: any, index: any) => {
                  const trimmedItem = item.trim().replace(/\.$/, '').toLowerCase()
                  let imageSrc = null

                  switch (trimmedItem) {
                    case 'rampa de acesso':
                      imageSrc = ramp
                      break
                    case 'banheiro acessível':
                      imageSrc = toilet
                      break
                    case 'estacionamento acessível':
                      imageSrc = disabledSign
                      break
                    case 'acessibilidade para cegos':
                      imageSrc = book
                      break
                    case 'elevador ou plataforma elevatória':
                      imageSrc = elevator
                      break
                    case 'sinalização de acessibilidade':
                      imageSrc = disability
                      break
                    case 'acessibilidade para surdos':
                      imageSrc = signLanguage
                      break
                    default:
                      imageSrc = null
                      break
                  }

                  return (
                    <div key={index} className="acessibilidade-item">
                      {imageSrc && <Image src={imageSrc} alt={trimmedItem} width={24} height={24} />}
                      <p>{item.trim().replace(/\.$/, '')}</p>
                    </div>
                  )
                })}
            </div>
            <div className="descricao">
              <h4>Descrição</h4>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}