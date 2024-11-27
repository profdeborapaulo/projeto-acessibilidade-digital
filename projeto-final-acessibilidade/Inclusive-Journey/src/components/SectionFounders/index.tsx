import './style.css'
import Person1 from '../../img/Person1.png'
import Person2 from '../../img/Person2.png'
import Person3 from '../../img/Person3.png'
import Person4 from '../../img/Person4.png'
import Person5 from '../../img/Person5.png'
import instagram from '../../img/instagram2.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function SectionFounders() {
    const founders = [
        {
            name: "Henrique Junior",
            description: "Henrique Junior é aluno de Elec, está focado em seu TCC, que envolve a criação de aplicações inclusivas. Henrique acredita que a tecnologia deve ser um ponto que une todas as barreiras, e dedica-se a construir ferramentas que sejam verdadeiramente acessíveis para todos.",
            imgUrl: Person1,
            ig: 'henrique_douglasjr'
        },
        {
            name: "Isabella Gil",
            description: "Isabella Gil sempre teve uma paixão por inovação e tecnologia. Atualmente, como aluna de Elec, está desenvolvendo seu trabalho de TCC. Sua capacidade de identificar oportunidades de mercado e criar soluções práticas é reconhecida por seus colegas e orientadores.",
            imgUrl: Person2,
            ig: 'isxbella_gil'
        },
        {
            name: "Sarah Gaspar",
            description: "Sarah Gaspar tem uma abordagem estratégica e gerencial. Ela ajuda no desenvolvimento de soluções que geram impacto positivo no ambiente de trabalho, além de trazer melhorias contínuas para todos os membros da equipe.",
            imgUrl: Person3,
            ig: 'sarah.gasparr'
        },
        {
            name: "Vitor Fernandes",
            description: "Vitor Fernandes acha muito importante a acessibilidade digital, atualmente aluno da Etec, onde está desenvolvendo seu trabalho de TCC em Design de Interação. Seu TCC inclui a criação de soluções tecnológicas que facilitam a vida de pessoas com deficiência.",
            imgUrl: Person4,
            ig: 'vtqxzz_'
        },
        {
            name: "Yasmin Duarte",
            description: "Yasmin Duarte também é aluna da Etec, onde está desenvolvendo seu TCC. Com uma carreira acadêmica marcada por projetos inovadores, Yasmin traz para o projeto sua expertise em desenvolvimento de produtos digitais. Ela acredita que a tecnologia deve ser uma aliada na promoção da inclusão e acessibilidade.",
            imgUrl: Person5,
            ig: 'miinnduarte'
        }
    ]

    return (
        <div className="section-founders">
            <h3 className="section-title">Conheça nossos fundadores</h3>
            <div className="founders-container">
                {founders.map((founder, index) => (
                    <motion.div key={index} className="founder-card" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }}
                        transition={{
                            duration: 1,
                            delay: index * 0.2,
                        }}
                    >
                        <Image src={founder.imgUrl} alt={founder.name} className="founder-image" />
                        <h4 className="founder-name"><a href={`https://www.instagram.com/${founder.ig}/`} target="_blank" rel="noopener noreferrer"><Image src={instagram} alt={founder.name} className="ig" /></a> {founder.name}</h4>
                        <p className="founder-description">{founder.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}