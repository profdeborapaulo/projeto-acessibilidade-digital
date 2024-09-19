import './style.css';
import Image from 'next/image';
import frameImage from '../../../img/Frame231.png';
import doneImage from '../../../img/Done.png';

export default function Regras() {
  return (
    <main>
      <div className="container">
        <section className="primeiro">
          <Image src={frameImage} alt="Imagem do Frame" height={726}/>
        </section>
        <section className="segunda">
          <form className="form">
            <div className="title">
              <h1>Siga as regras abaixo</h1>
            </div>
            <div className="botao-personalizado">
              <div className="icones">
                <Image src={doneImage} alt="Ícone de Feito" />
              </div>
              <div className="texto">
                <h3>Seja você mesmo</h3>
                <p>
                  Aqui, cada voz importa. Celebre sua autenticidade enquanto contribui para um mundo mais inclusivo.
                </p>
              </div>
            </div>

            <div className="botao-personalizado">
              <div className="icones">
                <Image src={doneImage} alt="Ícone de Feito" />
              </div>
              <div className="texto">
                <h3>Respeite os usuários</h3>
                <p>
                  Valorizamos a diversidade e o respeito mútuo. Juntos, construímos uma comunidade inclusiva e acolhedora.
                </p>
              </div>
            </div>

            <div className="botao-personalizado">
              <div className="icones">
                <Image src={doneImage} alt="Ícone de Feito" />
              </div>
              <div className="texto">
                <h3>Esteja seguro</h3>
                <p>
                  Sua segurança é nossa prioridade. Navegue com confiança em nosso ambiente protegido.
                </p>
              </div>
            </div>

            <div className="botao-personalizado">
              <div className="icones">
                <Image src={doneImage} alt="Ícone de Feito" />
              </div>
              <div className="texto">
                <h3>Seja empático</h3>
                <p>
                  Reconheça as diferentes experiências e desafios enfrentados por pessoas com deficiência, demonstrando empatia e solidariedade.
                </p>
              </div>
            </div>
            <button className="button">Continuar</button>
          </form>
        </section>
      </div>
    </main>
  );
}
