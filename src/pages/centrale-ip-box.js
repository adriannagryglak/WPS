import * as React from "react"
import { Link } from "gatsby"
import "../styles/pages/subpage.scss"
import "../styles/pages/centrale-ip.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"
import video from "../assets/hero-video-2.mp4"
import { Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import { useMediaQuery } from 'react-responsive'
import { StaticImage } from "gatsby-plugin-image"
import Phone from "../images/svg/phone.svg"
import Server from "../images/svg/server.svg"

export default function ThirdPage() {

  const isMobile = useMediaQuery({ query: '(max-width: 650px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1650px)' });
  const isLaptop = useMediaQuery({ query: '(max-width: 1100px)' });
  const offerData = [{ title: "PRZEKIEROWANIE POŁĄCZEŃ", content: "Możesz ustawić przekierowanie połączeń przychodzących na dowolny numer telefonu (wewnętrzny, stacjonarny lub komórkowy). Usługę możesz zaprogramować w zależności od potrzeb, gdy nie odbierasz połączenia lub jesteś niedostępny. Możesz także włączyć przekierowanie bezwarunkowe." },

  { title: "TRANSFER POŁĄCZEŃ", content: "Dzięki tej funkcji możesz przełączyć rozmowę przychodzącą na dowolny numer wewnętrzny na Twoim koncie." },
  { title: "POCZTA GŁOSOWA", content: "Dzięki tej usłudze każdy będzie mógł zostawić Tobie wiadomość jeśli nie będziesz mógł odebrać telefonu. Nagrana wiadomość trafi na Twoją skrzynkę e-mail. Usługa może się włączać gdy nie odbierasz lub nie jesteś dostępny." },
  { title: "POŁĄCZENIA KONFERENCYJNE", content: "Bez problemu możesz prowadzić rozmowę z kilkoma osobami jednocześnie." },

  { title: "PREZENTACJA NUMERÓW PRZYCHODZĄCYCH I WYCHODZĄCYCH", content: "Możesz włączać lub wyłączać prezentację swojego numeru. Natomiast na Twoim telefonie numer osoby dzwoniącej do Ciebie będzie zawsze widoczny." },
  { title: "WIRTUALNY FAX - ODBIERANIE", content: "Dzięki tej usłudze możesz otrzymywać faks na swoje konto e-mail w pliku PDF. Umożliwia to znaczne oszczędności, gdyż nie musisz posiadać osobnego urządzenia, a faksy można łatwo archiwizować w formie elektronicznej." },
  { title: "WIRTUALNY FAX - WYSYŁANIE", content: "Dzięki tej funkcji możesz wysyłać faksy bez urządzenia. Możesz zrobić to ze swojego panelu przez upload pliku (web2fax) lub wysłać faks przez e-maila (mail2fax)." },
  { title: "BEZPIECZEŃSTWO", content: "Możesz zablokować wybrane kierunki, na które nie mogą być wykonywane połączenia. Możesz zablokować połączenia przychodzące od numerów anonimowych. Możesz ustalić adres IP z którego będziesz wykonywał połączenia." },
  { title: "BILING ONLINE", content: "W panelu klienta można sprawdzić biling połączeń wychodzących i przychodzących wykonanych w dowolnym okresie." },
  { title: "NUMERY TELEFONICZNE", content: "Do swojego konta możesz przydzielić dowolną ilość numerów miejskich z dowolnej strefy numeracyjnej z Polski tzw. DDI. Oferujemy także możliwość przydzielenia numerów zagranicznych z wielu krajów." },
  { title: "NAGRYWANIE ROZMÓW", content: "Możesz włączyć nagrywanie rozmów wychodzących lub przychodzących i odtwarzać je w dowolnej chwili z własnego panelu. Nagrane rozmowy możesz w każdej chwili pobrać na swój dysk." },
  { title: "WIRTUALNA CENTRALA - NUMERY WEWNĘTRZNE", content: "Do każdego konta SIP możesz przydzielić numer wewnętrzny i dzwonić w ramach swojego konta klienta po dwu lub trzy cyfrowych numerach wewnętrznych. W ten sposób tworzysz wirtualną centralę. Usługa jest dostępna na Softphonie, dowolnych aparatach IP, bramkach VoIP oraz telefonach komórkowych z bezpłatną aplikacją SIP." },
  { title: "PANEL SEKRETARSKI", content: "Dzięki tej usłudze na ekranie komputera możesz zobaczyć jakie konta wewnętrzne prowadzą rozmowę oraz jakie są aktualnie wolne. Będziesz mógł rozłączyć lub przełączyć połączenie przychodzące na inny numer wewnętrzny używając myszki!" },
  { title: "PREZENTACJA JEDNYM NUMEREM", content: "Mając wiele kont SIP i wiele numerów publicznych możesz zawsze prezentować się jednym z numerów, które posiadasz niezależnie z jakiego konta SIP wykonujesz połączenie." },
  ];


  return (
    <Layout>
      <header className="subpage-header">
        <video muted autoPlay loop loading="eager" className="hero-video">
          <source src={video} type="video/mp4" />
        </video>
      </header>
      <section className="ip-pbx">
        <h1>centrale IP PBX</h1>
        <h2>autorskie rozwiązanie telefonii VOIP</h2>
        <p className="ip-box-paragraph container">Przetestowaliśmy wiele systemów wirtualnej centrali telefonicznej. Szukaliśmy niezawodnego rozwiązania - więc stworzyliśmy własne!</p>
        <div className="container ip-box-container">
          {isLaptop ? <>
            <div className="ip-pbx-item">

              <div>
                <h3>MONITOROWANIE I ZARZĄDZANIE INFRASTRUKTURĄ</h3>
                <p>System dostosowany do indywidualnych potrzeb. Otrzymuj interesujące Cię statystyki i raporty. Potrzebujesz nowego komponentu? Dodamy go na Twoje życzenie.</p>

              </div>

            </div>
            <div className="ip-pbx-item">

              <div>
                <h3>PANEL ZARZĄDZANIA</h3>
                <p>Wszystkie usługi i opcje możesz konfigusrować dzięki łatwemu i przejrzystemu panelowi zarządzania dostępnemu na stronie internetowej.</p>
              </div></div>
          </> : <>
            <div className="ip-pbx-item">

              <div>
                <h3>MONITOROWANIE I ZARZĄDZANIE INFRASTRUKTURĄ</h3>
                <p>System dostosowany do indywidualnych potrzeb. Otrzymuj interesujące Cię statystyki i raporty. Potrzebujesz nowego komponentu? Dodamy go na Twoje życzenie.</p>
                <br />
                <h3>PANEL ZARZĄDZANIA</h3>
                <p>Wszystkie usługi i opcje możesz konfigusrować dzięki łatwemu i przejrzystemu panelowi zarządzania dostępnemu na stronie internetowej.</p>
              </div>
              <StaticImage
                src="../images/ip-pbx/konta-sip-voip.png"
                loading="lazy"
                placeholder="blurred"
                className="ip-box-img img-1"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="screenshot systemu voip"

              />
            </div>
          </>}

          <div className="ip-pbx-item">
            <div >
              <h3>INTEGRACJE</h3>
              <p>Możliwość integracji systemu VoIP z innymi systemami informatycznymi Twojej firmy, np. z bazami danych, czy systemami ERP/CRM.</p>
            </div>
            <StaticImage
              src="../images/ip-pbx/poltelpbx-2.png"
              loading="lazy"
              placeholder="blurred"
              className="ip-box-img img-3"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="screenshot systemu voip"

            />
          </div>
          <div className="ip-pbx-item">
            <div >
              <h3>BEZPIECZEŃSTWO</h3>
              <p>Szyfrowanie połączeń telefonicznych, uniemożliwia ich rejestrację przez osoby trzecie. Tworzymy struktury o nieograniczonej skalowalności i odpowiednim stopniu rozproszenia.</p>
            </div>
            <StaticImage
              src="../images/ip-pbx/poltelpbx-3.png"
              loading="lazy"
              placeholder="blurred"
              className="ip-box-img img-4"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="screenshot systemu voip"

            />
          </div>

        </div>

      </section>

      <section className="implementation container">

        <div className="implementation-box">
          <div className="implementation-titles">
            <h1>wdrożenie</h1>
            <h2>realizujemy cały proces inwestycyjny</h2>
          </div>

          <div className="container implementation-container">
            <ul>
              <li>sporządzenie projektu</li>
              <li>zakup sprzętu</li>
              <li>instalacja</li>
              <li>konfiguracja terminali</li>
              <li>konfiguracja sprzętu sieciowego</li>
              <li>niezbędne przeszkolenie</li>
            </ul>
          </div>
        </div>

      </section>

      <section className="centrale-offer container">
        <h1>usługi</h1>
        <h2>usługi i możliwości telefonii VOIP</h2>
        <Swiper
          slidesPerView={isMobile ? 1 : isDesktop ? 4 : isLaptop ? 2 : 3}
          spaceBetween={30}
          loop={true}
          freeMode={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}

          modules={[Pagination]}
        >
          {offerData.map((item, i) => {
            return (<SwiperSlide key={i} className="centrale-slide">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </SwiperSlide>)
          })}
        </Swiper>


      </section>
      <section className="centrale-call-center container">

        <div className="centrale-call-center-container">
          <h1>call center</h1>
          <div>
            <Phone className="offer-icon" />
            <p>Usługa przeznaczona jest do działów call center. Umożliwia kolejkowanie połączeń przychodzących oraz informowanie klientów o czasie do połączenia z konsultantem oraz o pozycji w kolejce. </p></div>

          <div>
            <Server className="offer-icon" />
            <p>Usługę można konfigurować na wiele sposobów, między innymi można ustalać strategię łączenia z agentami. Usługa zawiera również zaawansowany moduł statystyk obciążenia agentów oraz szczegółowy biling połączeń przychodzących</p></div>
          <Link to="/call-center">dowiedz się więcej</Link>
        </div>


      </section>
      <section className="meet-us container">
        <h1>zapraszamy na spotkanie</h1>
        <h2>umów się na darmowy test naszej usługi do 14 dni</h2>
        <div className="meet-us-container">
          <div>NIEZOBOWIĄZUJĄCA PREZENTACJA MOŻLIWOŚCI SPRZĘTU BĘDĄCEGO W NASZEJ DYSPOZYCJI</div>
          <div>MOŻLIWOŚĆ ŚWIADCZENIA NASZEJ USŁUGI NA ISTNIEJĄCEJ JUŻ W FIRMIE INFRASTRUKTURZE (TELEFONY, CENTRALE IP)</div>
          <div>MINIMALNY KOSZT WDROŻENIA I MONTAŻ SPRZĘTU BEZ WZGLĘDU NA ILOŚĆ LOKALIZACJI</div>
          <div>BEZPŁATNA DZIERŻAWA URZĄDZEŃ W TRAKCIE TRWANIA UMOWY (CENTRALE, BRAMY)</div>
          <div>BEZPŁATNY SERWIS PRZEZ CAŁY OKRES TRWANIA UMOWY</div>
          <div>KOMPLEKSOWE ZAŁATWIANIE PRZEZ NASZĄ FIRMĘ FORMALNOŚCI ZWIĄZANYCH ZE ZMIANĄ OPERATORA</div>
        </div>
        <Link to="/#kontakt" className="centrale-link">skontaktuj sie z nami</Link>
      </section>
    </Layout>
  )
}



export const Head = () => <Seo title="Centrale IP BPX" />


