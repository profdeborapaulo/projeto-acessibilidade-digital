import { useState } from 'react';
import './style.css';
import Image from 'next/image';
import { NavBar } from '@/src/components/NavBar';
import { Carrousel } from '@/src/components/Carrousel';
import { HomeSectionTwo } from '@/src/components/HomeSectionTwo';
import SectionFounders from '@/src/components/SectionFounders';
import FooterHome from '@/src/components/FooterHome';

export default function Home() {
    return (
        <div style={{
            overflowY: 'auto', 
            height: '100vh', 
        }}>
            <NavBar />
            <Carrousel />
            <HomeSectionTwo />
            <SectionFounders/>
            <FooterHome/>
        </div>
    )
}
