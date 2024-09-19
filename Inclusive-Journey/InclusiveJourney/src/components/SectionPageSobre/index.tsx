"use client";
import Image from 'next/image';

// Definindo a interface para as props do componente
interface SectionPageSobreProps {
    children: React.ReactNode;
    backgroundColor?: string
}

export default function SectionPageSobre({ children, backgroundColor }: SectionPageSobreProps) {
    return (
        <div style={{ margin: 0,marginTop: 20, marginBottom: 20, display: 'flex', backgroundColor: `${backgroundColor}` }}>
            {children}
        </div>
    )
}
