"use client";
import './style.css';
import Image from 'next/image';
import imageCadastro from '../../../img/imgInclusiveJourneyCadastro.png';
import image1 from '../../../img/3 2.svg';
import image2 from '../../../img/nomeQualquer.jpg';
import imageMascote from '../../../img/Macote - Cabeça.jpg';
import imageFundadores from '../../../img/imageDesesseis.svg';
import logo from '../../../img/2_2-removebg-preview.png';
import Link from 'next/link';
import { api } from '@/src/services/api';
import { useState } from 'react';
import { NavBar } from '@/src/components/NavBar';
import SectionPageSobre from '@/src/components/SectionPageSobre';
import SectionPageSobreImage from '@/src/components/SectionPageSobre/sectionPageSobreImage';
import SectionPageSobreText from '@/src/components/SectionPageSobre/sectionPageSobreText';

export default function Sobre() {
    return (
        <>
            <NavBar />

            <div style={{overflowY: 'auto', height: '100vh' }}>
                <SectionPageSobre >
                    <SectionPageSobreText maxHeight='900' maxWidth='600' text='Explore possibilidades acessíveis em nosso site! Com uma interface intuitiva e informações detalhadas, simplificamos sua busca por locais adaptados. Bem-vindo ao seu novo guia para uma vida inclusiva!' textTitle="Nosso site é o melhor para ajudar pessoas com deficiência a encontrar lugares acessíveis" />
                    <SectionPageSobreImage height="500" imageSrc={imageFundadores} />
                </SectionPageSobre>

                <SectionPageSobre backgroundColor='#002234'>
                    <SectionPageSobreText maxHeight='900' maxWidth='600' textColorP='white' text='O Inclusive Journey nasceu com a missão de tornar o mundo mais inclusivo e acessível para pessoas com deficiência. Nosso objetivo é ajudar todos a encontrar lugares adaptados às suas necessidades, promovendo a inclusão e a igualdade. Acreditamos que, ao compartilhar informações e recursos, podemos superar barreiras e criar uma comunidade mais solidária e acolhedora para todos. Junte-se a nós nessa jornada de transformação!' />
                    <SectionPageSobreText maxHeight='900' maxWidth='600' textColorTitle='white' textColorP='white' textTitle="Juntos, construindo um mundo mais acessível para todos." />
                </SectionPageSobre>

                <SectionPageSobre>
                    <SectionPageSobreImage  height='270' imageSrc={imageMascote } />
                    <SectionPageSobreText maxHeight='900' maxWidth='900' textColorTitle='black' textColorP='black' text='Explore possibilidades acessíveis em nosso site! Com uma interface intuitiva e informações detalhadas, simplificamos sua busca por locais adaptados. Bem-vindo ao seu novo guia para uma vida inclusiva!' textTitle="Nosso site é o melhor para ajudar pessoas com deficiência a encontrar lugares acessíveis" />
                </SectionPageSobre>
            </div>
        </>
    );
}
