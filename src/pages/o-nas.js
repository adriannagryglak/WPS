import React from "react"
import "../styles/pages/about.scss"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Mousewheel } from "swiper"
import "swiper/css"
import "swiper/css/effect-cards"
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function AboutPage() {

  const [isLightbox, setIsLightbox] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  const [isDetailsOpen, setIsDetailsOpen ] = useState({1: null, 2: null, 3: null}); 
  
  const [readMoreOn, setReadMoreOn]= useState(true);
  const images = [
    <StaticImage
      src="../images/references/stator.jpg"
      loading="eager"
      placeholder="blurred"
      className="reference-img"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
    />,
    <StaticImage
      src="../images/references/zmigrod.jpg"
      loading="eager"
      placeholder="blurred"
      className="reference-img"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
    />,
    <StaticImage
      src="../images/references/pzm.jpg"
      loading="eager"
      placeholder="blurred"
      className="reference-img"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
    />,
    <StaticImage
      src="../images/references/pks.jpg"
      loading="eager"
      placeholder="blurred"
      className="reference-img"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
    />,
    <StaticImage
      src="../images/references/myszkow.jpg"
      loading="eager"
      placeholder="blurred"
      className="reference-img"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
    />,
    <StaticImage
      src="../images/references/micro.jpg"
      loading="eager"
      placeholder="blurred"
      className="reference-img"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
    />,
    <StaticImage
      src="../images/references/dcaa.jpg"
      loading="eager"
      placeholder="blurred"
      className="reference-img square"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
    />,
    <StaticImage
      src="../images/references/daga.jpg"
      loading="eager"
      placeholder="blurred"
      className="reference-img"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
    />,
  ]
  const extraText = `Popularyzacja technologii VoIP oraz dostępu
  do szerokopasmowego Internetu, a także dostępność tanich lub nawet
  darmowych terminali końcowych VoIP (telefony IP, bramki VoIP,
  telefony VoIP SoftPhone) skłania wiele firm i instytucji do
  wdrożenia systemu darmowej komunikacji między oddziałami. Wiele firm
  z branży telekomunikacyjnej oferuje centrale telefoniczne VoIP lub
  usługi tzw. wirtualnych PBX dających możliwość realizacji połączeń
  na platformie operatorskiej. Niestety, funkcjonalność takich
  rozwiązań jest ograniczona. Klienci nie mają możliwości centralnego
  monitorowania i zarządzania całą infrastrukturą ani opcji integracji
  takiego systemu z innymi systemami informatycznymi swojej firmy, np.
  z bazami danych, czy systemami ERP/CRM. Połączenia telefoniczne w
  wielu przypadkach nie są szyfrowane, co umożliwia ich rejestrację
  przez osoby trzecie. Ponadto nie ma możliwości utworzenia struktury
  o nieograniczonej skalowalności i odpowiednim stopniu rozproszenia.
  W naszym rozwiązaniu (tzw. Platformy VoIP) wyeliminowaliśmy wyżej
  wymienione problemy. Dostarczamy nie tylko system telekomunikacyjny
  oraz systemy call center, ale realizujemy cały proces inwestycyjny –
  od sporządzenia projektu, przez zakup sprzętu, instalację,
  konfigurację i pełne wdrożenie. Zapewniamy także instalację i
  konfigurację terminali użytkowników końcowych oraz sprzętu
  sieciowego, łącznie z niezbędnym przeszkoleniem.`;
 
  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    if(isLightbox){
        document.addEventListener("mousemove", mouseMoveHandler);
    }

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, [isLightbox]);

  return (
    <Layout>
      <section className="about-us">
        <header></header>
        <h1>
          Witaj w <span>POLTEL</span>
        </h1>
        <div className="container">
        <p className="welcome-caption">
          Firma powstała w odpowiedzi na rosnące zapotrzebowanie rynku na
          najnowsze i tanie usługi telekomunikacyjne i teletransmisyjne.
          Podstawą jej działalności jest świadczenie usług telefonicznych VoIP,
          opartych o najnowocześniejsze na świecie technologie transmisji
          danych. Dzięki nim oraz dzięki podpisaniu umowy partnerskiej z jedną z
          największych, giełdowych firm amerykańskich (NASDAQ) zajmujących się
          tą technologią, firma jest w stanie zaoferować niezwykle tanią ofertę
          w zakresie usług telefonicznych. <br />
          <br /> W 2005 roku firma wsprowadziła rewolucyjną na rynku Polskim
          ofertę zryczałtowanych opłat za świadczenie usług telefonicznych.
          <Link to="/#oferta">ZOBACZ OFERTE</Link>
        </p>
        </div>



        <div className="welcome-container container">
          <div className="item" onClick={()=>{setIsDetailsOpen(prev=>{
            return {...prev, 1: !prev[1]}})}}>
            <h3>strategia</h3>
            {isMobile && <FontAwesomeIcon icon={faChevronDown} style={{transform: isDetailsOpen[1] ? "rotate(180deg)" : "none", marginBottom: isDetailsOpen[1] ? "40px" : "0"}} className='about-icon'/>}
            {!isMobile ? <p>
              Dla swoich klientów firma stara się dostarczać usługi na
              najwyższym poziomie dbając o wysoką jakość i niezawodność, kładąc
              szczególny nacisk na profesjonalizm w obsłudze klienta. Strategia
              firmy ukierunkowana jest zarówno na obsługę firm oraz Urzędów
              Administracji Państwowej jak i osób indywidualnych.
            </p> : isMobile && isDetailsOpen[1] ? <p>
              Dla swoich klientów firma stara się dostarczać usługi na
              najwyższym poziomie dbając o wysoką jakość i niezawodność, kładąc
              szczególny nacisk na profesjonalizm w obsłudze klienta. Strategia
              firmy ukierunkowana jest zarówno na obsługę firm oraz Urzędów
              Administracji Państwowej jak i osób indywidualnych.
            </p> : null}
          </div>
          <div className="item" onClick={()=>{setIsDetailsOpen(prev=>{
            return {...prev, 2: !prev[2]}})}}>
            <h3>rozwiazania</h3>
            {isMobile && <FontAwesomeIcon icon={faChevronDown} style={{transform: isDetailsOpen[2] ? "rotate(180deg)" : "none", marginBottom: isDetailsOpen[2] ? "40px" : "0"}} className='about-icon'/>}
            {!isMobile ? <p>
              Szczególną uwagę zwracamy na prawidłową obsługę Klienta, zarówno
              na etapie projektowania rozwiązania, sprzedaży jak i obsługi
              serwisowej. Posiadamy kadrę wysoko wykwalifikowanych w swoich
              dziedzinach specjalistów, którzy nabyli potwierdzone certyfikatami
              szkolenia. Dział serwisu wyposażony jest w nowoczesny sprzęt
              pomiarowy i diagnostyczny, który umożliwia skuteczne i szybkie
              usuwanie zaistniałych usterek.
            </p> : isMobile && isDetailsOpen[2] ? <p>
              Szczególną uwagę zwracamy na prawidłową obsługę Klienta, zarówno
              na etapie projektowania rozwiązania, sprzedaży jak i obsługi
              serwisowej. Posiadamy kadrę wysoko wykwalifikowanych w swoich
              dziedzinach specjalistów, którzy nabyli potwierdzone certyfikatami
              szkolenia. Dział serwisu wyposażony jest w nowoczesny sprzęt
              pomiarowy i diagnostyczny, który umożliwia skuteczne i szybkie
              usuwanie zaistniałych usterek.
            </p> : null }
          </div>
          <div className="item" onClick={()=>{setIsDetailsOpen(prev=>{
            return {...prev, 3: !prev[3]}})}}>
            <h3>zaufanie</h3>
            {isMobile && <FontAwesomeIcon icon={faChevronDown} style={{transform: isDetailsOpen[3] ? "rotate(180deg)" : "none", marginBottom: isDetailsOpen[3] ? "40px" : "0"}} className='about-icon'/>}
            {!isMobile ? <p>
              W ciągu wieloletniej działalności firmy POLTEL, swoim zaufaniem
              obdarzyło nas około 300 instytucji i przedsiębiorstw
              reprezentujących prawie wszystkie działy gospodarki. Obecnie
              jesteśmy sprawdzonym i pewnym dealerem oraz dystrybutorem central
              telefonicznych PANASONIC, SLICAN, PLATAN.
            </p> : isMobile && isDetailsOpen[3] ? <p>
              W ciągu wieloletniej działalności firmy POLTEL, swoim zaufaniem
              obdarzyło nas około 300 instytucji i przedsiębiorstw
              reprezentujących prawie wszystkie działy gospodarki. Obecnie
              jesteśmy sprawdzonym i pewnym dealerem oraz dystrybutorem central
              telefonicznych PANASONIC, SLICAN, PLATAN.
            </p>: null}
          </div>
        </div>

        <h1>Co nas wyróżnia?</h1>
        <div className="about-specials container">
          <h2>PLATFORMA VOIP</h2>
          <p className="about-specials__paragraph">
            Telefonia VoIP (Voice over IP) to pakietowa transmisja głosu w
            ramach usług sieci telekomunikacyjnej. Jej podstawową zaletą jest
            znacząca redukcja kosztów połączeń telefonicznych poprzez
            wykorzystanie sieci Internet. Umożliwia to prowadzenie rozmów
            wewnętrznych pomiędzy lokalizacjami znajdującymi się nawet na
            krańcach naszego globu.  {!isMobile ? <>{extraText}</> : isMobile && !readMoreOn ? <>{extraText}</> : null}
            {isMobile && <a className="read-more-link" onClick={()=>{setReadMoreOn(!readMoreOn)}}>{readMoreOn ? " czytaj dalej" : " zwiń tekst"}</a>}
          </p>
        </div>

        <div className="container references-container">
          <h2>
            referencje i certyfikaty <br />
            <Link to="/#partnerzy" >zobacz z kim jeszcze wspolpracujemy</Link>
          </h2>
          <Swiper
            className="swiper-references"
            modules={[EffectCards, Mousewheel]}
            loop={true}
            effect="cards"
            grabCursor={true}
            mousewheel={true}
          >{images.map((img, i)=><SwiperSlide key={i}>
            <div className="slide" onClick={(e)=>{
                    setIsLightbox(i === isLightbox ? null : i);
                }}>
              {img}
            </div>
          </SwiperSlide>)}
          </Swiper>

          {isLightbox !== null && 
    
          <div className='lightbox' onClick={()=>{setIsLightbox(null)}}>
            {images[isLightbox]}
            <div className="cursor" style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}></div>
          </div>}

        </div>
        <div className="ceo-container">
      <StaticImage
                src="../images/g-abramek.png"
                loading="lazy"
                placeholder="blurred"
                className="ceo-img"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="portret, mężczyzna w garniturze, średniego wieku, czarne włosy."
      />
      <div className="ceo-info">
        <p className="ceo-quote"></p>
        <p className="ceo-name">Grzegorz Abramek</p>
        <p>PREZES ZARZĄDU</p>
        <a href="tel:717776616">tel. (71) 777-66-16</a>
        <a href="mailto:grzegorz.abramek@e-poltel.pl​">grzegorz.abramek@e-poltel.pl​</a>
      </div>
    </div>
      </section>

    
    </Layout>
  )
}
export const Head = () => <Seo title="O nas" />

export default AboutPage
