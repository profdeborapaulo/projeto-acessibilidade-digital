import './style.css';
import Image from 'next/image';
import Link from 'next/link';
import imagemPrincipalPageInicial from '../../../img/ImagePrincipalPageInicial.svg';
import removebgPreview from '../../../img/2_2-removebg-preview.png';
import acenando from '../../../img/Acenando.png';
import sigaNos from '../../../img/sina-nos.png';
import pessoa1 from '../../../img/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg';

export default function PaginaInicial() {
  return (
    <>
      <div className="hero_area">
        <div className="bg-box">
          <Image src={imagemPrincipalPageInicial} height={726} alt="Imagem de Login" />
        </div>
        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <Link className="navbar-brand" href="/">
                <Image src={removebgPreview} alt="Logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto"></ul>
                <div className="user_option">
                  <Link href="/pages/Login" className="order_online">
                    Login
                  </Link>
                  <Link href="/pages/Cadastro" className="order_online">
                    Cadastra-se
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <section className="slider_section">
          <div id="customCarousel1" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7 col-lg-6">
                      <div className="detail-box">
                        <h1>Seja Bem-vindo(a) ao Inclusive journey!</h1>
                        <p>
                          Bem-vindo ao Inclusive Journey! Aqui, nós valorizamos a acessibilidade e a inclusão. Explore conosco lugares adaptados para todos.
                        </p>
                        <div className="btn-box">
                          <Link href="/pages/Login" className="btn1">
                            Login
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7 col-lg-6">
                      <div className="detail-box">
                        <h1>Conecte-se com a Acessibilidade</h1>
                        <p>
                          Junte-se a uma comunidade engajada! No Inclusive Journey, compartilhamos recomendações e experiências sobre lugares acessíveis. Faça parte!
                        </p>
                        <div className="btn-box">
                          <Link href="/pages/Cadastro" className="btn1">
                            Cadastra-se
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7 col-lg-6">
                      <div className="detail-box">
                        <h1>Inclusão para Todos</h1>
                        <p>
                          O Inclusive Journey é para todos. Mesmo sem deficiência, você pode colaborar compartilhando informações sobre locais acessíveis que conhece. Juntos, construímos um ambiente mais inclusivo.
                        </p>
                        <div className="btn-box">
                          <Link href="/pages/Login" className="btn1">
                            Login
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <ol className="carousel-indicators">
                <li data-bs-target="#customCarousel1" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#customCarousel1" data-bs-slide-to="1"></li>
                <li data-bs-target="#customCarousel1" data-bs-slide-to="2"></li>
              </ol>
            </div>
          </div>
        </section>
      </div>

      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <Image src={acenando} alt="Imagem Acenando" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Conheça o Inclusive Journey!</h2>
                </div>
                <p>
                  Explore o Inclusive Journey e descubra como estamos empenhados em criar um mundo mais acessível e inclusivo para todos. Nossa plataforma é dedicada para facilitar a vida das pessoas com deficiência, ajudando-as a encontrar lugares acessíveis e promovendo a inclusão em todos os aspectos da sociedade. Explore o Inclusive Journey e descubra um universo de acessibilidade e inclusão.
                </p>
                <Link href="/pages/Cadastro">Cadastra-se</Link>
              </div>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <br />

          <div className="sigame">
            <div className="row">
              <div className="col-md-6">
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>Acompanhe o Inclusive Journey!</h2>
                  </div>
                  <p>
                    Faça parte dessa jornada inclusiva!
                    <Link href="https://www.instagram.com/inclusive.journey/">
                      Siga-nos
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-box">
                  <Image src={sigaNos} alt="Siga-nos no Instagram" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <section className="client_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2>O que dizem nossos usuários</h2>
          </div>
          <div className="carousel-wrap row">
            <div className="owl-carousel client_owl-carousel">
              <div className="item">
                <div className="box">
                  <div className="detail-box">
                    <p>
                      Eu acho que isso é bem importante para que assim as pessoas com deficiência possam saber com antecedência se o local para onde elas vão ou pretendem ir é adaptado para recebê-las ou não.
                    </p>
                    <h6>Pessoa 1</h6>
                  </div>
                  <div className="img-box">
                    <Image src={pessoa1} alt="Pessoa 1" className="box-img" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="detail-box">
                    <p>
                      É necessário, pra entender a eficiência que o local tem sobre a sua acessibilidade e como pode ser um desafio a pessoas deficientes, entender as desvantagens que o local tem pros deficientes ajuda a entender em que ponto tem que focar para haver uma melhoria.
                    </p>
                    <h6>Pessoa 2</h6>
                  </div>
                  <div className="img-box">
                    <Image src={pessoa1} alt="Pessoa 2" className="box-img" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="detail-box">
                    <p>
                      Incluir avaliações e comentários de usuários em um site é uma ferramenta valiosa para promover a conveniência do usuário e uma influência positiva para muitos. Ao fornecer informações valiosas sobre a infraestrutura de acessibilidade dos locais, as pessoas com deficiência ou mobilidade limitada podem tomar decisões informadas sobre onde podem ter acesso a melhores transportes. E estas avaliações podem ajudar os estabelecimentos a melhorar as ofertas de acessibilidade.
                    </p>
                    <h6>Pessoa 3</h6>
                  </div>
                  <div className="img-box">
                    <Image src={pessoa1} alt="Pessoa 3" className="box-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
