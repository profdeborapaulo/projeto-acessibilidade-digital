"use client";
import Image from 'next/image';

interface SectionPageSobreProps {
    textTitle?: string;
    text?: string;
    textColorTitle?: string;
    textColorP?: string;
    maxWidth?: string;
    maxHeight?: string;
}

export default function SectionPageSobreText({ textTitle, text,textColorTitle,textColorP,maxWidth, maxHeight }: SectionPageSobreProps) {
    return (
        <div style={{ margin: 20, maxWidth: `${maxWidth}px`, maxHeight: `${maxHeight}px` }}>
            <h3 style={{ fontSize: 35, color: `${textColorTitle}` }}>{textTitle}</h3>
            <p style={{ fontSize: 20, color: `${textColorP}` }}>{text}</p>
        </div>
    )
}
