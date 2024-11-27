'use client'
import './style.css'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'

interface CardBoxProps {
    title: string,
    imageSrc: StaticImageData,
    onButtonClick: () => void,
    index: number
}

export default function CardBox({ title, imageSrc, onButtonClick, index }: CardBoxProps) {
    return (
        <motion.div className="cardBoxHome" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
            transition={{
                duration: 0.2,
                delay: index * 0.1,
            }}
        >
            <Image className='cardBoxImg' src={imageSrc} alt='Imagem' />
            <h3>{title}</h3>
            <button type='button' className='cardBoxButton' onClick={onButtonClick}>Saiba Mais</button>
        </motion.div>
    )
}
