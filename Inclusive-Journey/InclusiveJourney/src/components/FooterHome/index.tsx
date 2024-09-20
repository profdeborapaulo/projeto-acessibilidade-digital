import Link from 'next/link';
import './style.css'; // Certifique-se de que este arquivo contém as classes apropriadas

export default function FooterHome() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="section">
          <h4 className="sectionTitle">Home</h4>
          <ul className="linkList">
            <li>
              <Link href="/inclusive-journey" className="link">
                Inclusive Journey
              </Link>
            </li>
            <li>
              <Link href="/careers" className="link"> 
                Carreiras
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div className="section">
          <h4 className="sectionTitle">Soluções</h4>
          <ul className="linkList">
            <li>
              <Link href="/solutions/company" className="link">
                Para sua Empresa
              </Link>
            </li>
            <li>
              <Link href="/solutions/you" className="link">
                Para Você
              </Link>
            </li>
            <li>
              <Link href="/support" className="link">
                Suporte Técnico
              </Link>
            </li>
          </ul>
        </div>

        <div className="section">
          <h4 className="sectionTitle">Conteúdos</h4>
          <ul className="linkList">
            <li>
              <Link href="/blog" className="link">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/festival-digital" className="link">
                Link Festival Digital de Acessibilidade
              </Link>
            </li>
            <li>
              <Link href="/accessibility" className="link">
                Acessibilidade
              </Link>
            </li>
            <li>
              <Link href="/partner" className="link">
                Seja um Parceiro
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footerBottom">
        <Link href="/privacy-policy" className="bottomLink">
          Política de Privacidade
        </Link>
        <Link href="/terms" className="bottomLink">
          Termos de Uso
        </Link>
      </div>
    </footer>
  );
}
