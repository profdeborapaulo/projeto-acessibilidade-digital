"use client";
import Image from 'next/image';

interface SectionPageSobreProps {
    imageSrc: any;
    height?: string;  
}

export default function SectionPageSobreImage({ imageSrc, height }: SectionPageSobreProps) {
    return (
        <>
            <Image style={{ height: `${height}px` }} src={imageSrc} alt='Imagem da seção' />
        </>
    )
}
