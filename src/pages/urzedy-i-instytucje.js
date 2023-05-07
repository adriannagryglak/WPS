import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo';
import "../styles/pages/call-center.scss"
import { useMediaQuery } from 'react-responsive'

export default function InstytutionsPage() {
  const [sectionActive, setSectionActive] = React.useState("oferta");
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  return (
    <Layout>
      <section className={isMobile ? ' double-content-subpage' : "double-content-subpage container"}>
        <div className={isMobile ? 'container' : ''}>
          <h1>Urzędy i instytucje</h1>
          <div className={sectionActive === "oferta" ? "double-subpage-switches " : 'double-subpage-switches right'}>
            <h3 className={sectionActive === "oferta" ? "active" : ""} onClick={() => { setSectionActive("oferta") }}>oferta</h3>
            <h3 className={sectionActive === "technologie" ? "active" : ""} onClick={() => { setSectionActive("technologie") }}>technologia</h3>
          </div>
        </div>
        <div className={isMobile ? "double-subpage-content container" : "double-subpage-content"}>
          {sectionActive === "oferta" ? <>
            <h2>USŁUGI OPERATORSKIE</h2>
            <p>Nasza oferta skierowana jest do wszystkich, pragnących znacząco usprawnić działanie swojej firmy oraz obniżyć koszty telekomunikacji. Połączenia wykonywane w naszej sieci są darmowe, dlatego jest ona idealnym rozwiązaniem dla firm i instytucji posiadających rozproszone oddziały.
              <br /><br />
              Dzięki zastosowaniu najnowszych rozwiązań z dziedziny telekomunikacji oraz informatyki, możemy zaoferować najwyższą jakość usług. Naszą zaletą jest bardzo duża elastyczność w zakresie ich konfiguracji.
              <br /><br />
              <strong>Dobór oferty na korzyść klienta</strong>
            </p>
            <ul><li>indywidualna oferta cenowa zależna od generowanego ruchu (stawki minutowe)</li>
              <li>nielimitowane połączenia stacjonarne i komórkowe do wszystkich sieci (ryczałt)</li></ul>
            <p>= 20 – 50% niższe rachunki względem aktualnej FV</p>
            
            <h2>MODERNIZACJA I SERWIS SYSTEMÓW TELEKOMUNIKACYJNYCH</h2>
            <p>Od 10 lat instalujemy, konfigurujemy i konserwujemy abonenckie centrale telefoniczne oraz inne urządzenia stanowiące wyposażenie infrastruktury telekomunikacyjnej firm i instytucji. Ponad 10 letnie doświadczenie naszych serwisantów jest gwarancją realizacji zleceń na najwyższym poziomie.
              <br /><br />
              Nasza oferta w ramach usług serwisu systemów telekomunikacyjnych, obejmuje instalację i konfigurację central abonenckich i innych urządzeń, systemy taryfikacji i łączności bezprzewodowej, okablowanie strukturalne, bramki GSM, bramki VoIP i inne. Ponadto świadczymy usługi konserwacji i pełnego wsparcia technicznego.
              <br /><br />
              Wszystkie wyżej wymienione usługi świadczymy dla sprzętu następujących producentów:</p>
            <ul>
              <li>Slican</li>
              <li>Siemens</li>
              <li>Alcatel</li>
              <li>Panasonic</li>
              <li>Cisco Linksys</li>
              <li>Yealink</li>
              <li>Grandstream i wiele innych</li>
            </ul>
          </> : 
          <>
            <h2>POłĄCZENIA</h2>
            <ul>
              <li>rozmowy głosowe realizowane:<br />
                a) drogą internetową – technologia VoIP<br />
                b) bramy GSM – dowolny operator (dostosowany do potrzeb/zasięgu)</li>
              <li>darmowe połączenia między oddziałami (również międzynarodowymi)</li>
              <li>kompleksowa obsługa: rozwiązania techniczne, zakup sprzętu oraz świadczenie usług telekomunikacyjnych</li>
              <li>instalowanie sieci telefonicznej w nowych obiektach (okablowanie, centrale telefoniczne, aparaty telefoniczne)</li>
              <li>możliwe video-rozmowy – łatwiejszy kontakt i ograniczanie kosztów przejazdu</li>

            </ul>

            <h2>CENTRALE</h2>
            <h6>Slican:</h6>
            <ul>
              <li><strong>MAC-6400</strong> – serwer telekomunikacyjny MAC-6400 jest wysokiej klasy rozwiązaniem przeznaczonym dla dużych przedsiębiorstw i instytucji, wymagających obsługi setek użytkowników sieci telekomunikacyjnej. Elastyczne możliwości konfiguracyjne sprawiają, że MAC-6400 jest produktem, który sprawdzi się zarówno dla grupy 100 abonentów, jak i dla firm, które wymagają obsługi 1000 abonentów. Serwer oparty jest o jednorodną i kompletną platformę IT. Współpracuje z VoIP, GSM, POTS oraz ISDN.</li>
              <li><strong>CCT-1668.S/IP</strong> – uniwersalny serwer telekomunikacyjny dedykowany do małych i średnich firm. Zapewnia komunikację zarówno w standardzie IP , jak i z wykorzystaniem technologii ISDN i łączy analogowych. Oferuje kompleksowe rozwiązanie VoIP , bez konieczności zakupu dodatkowych zewnętrznych urządzeń, bram itp. Slican CCT-1668.S/IP to najnowocześniejsza technologia VoIP , dzięki której dostępne są nowe usługi, więcej funkcji, bogactwo programów oraz jak zawsze wysoka jakość.</li>
              <li><strong>CCT-1668.L/IP</strong> – serwer telekomunikacyjny stworzony z myślą o średnich i dużych firmach oraz instytucjach. Zapewnia komunikację zarówno w standardzie IP , jak i z wykorzystaniem technologii ISDN i łączy analogowych. CCT-1668.L/IP może obsługiwać pojedynczą sieć lub stanowić element sieci serwerów, umożliwiających komunikację pomiędzy rozproszonymi lokalizacjami. CCT-1668.L/IP to nowoczesna technologia IP , bogactwo programów oraz jak zawsze wysoka jakość.</li>
              <li><strong>CCT-1668.EU/IP</strong> – nowoczesny serwer telekomunikacyjny dostępny w uniwersalnej obudowie 19” typu RACK. Adresowany dla średnich i dużych firm oraz instytucji. Zapewnia komunikację w standardzie IP , jak i z wykorzystaniem technologii ISDN i łączy analogowych. CCT-1668.EU/IP łączy standardowe funkcje komunikacyjne z opcją nagrywania rozmów oraz pakietem usług dodanych wspierających pracę call center, obsługę infolinii oraz integrację z zewnętrznymi aplikacjami dedykowanymi dla konkretnych branż, czy też użytkowników.
              </li>
              <li><strong>Slican CXS-0424.2U</strong> – najmniejszy serwer telekomunikacyjny Slican oferujący dostęp do wszystkich dróg komunikacji, po to by zapewnić tanią i wysokiej jakości łączność. Slican CXS-0424 jest rozwiązaniem dla firm i biur, które wybierając jedno urządzenie chcą korzystać zarówno z linii tradycyjnych jaki i linii IP i GSM , rozbudowanego systemu zapowiedzi INVENIO oraz nagrywania rozmów czy unikalnej funkcji Slican MobilePhone – rozwiązań wcześniej dostępnych tylko w dużych systemach lub wymagających instalacji kilku osobnych urządzeń. Wersja do 19” zabudowy RACK.
              </li>
              <li><strong>Slican CXS-0424.WM</strong> – najmniejszy serwer telekomunikacyjny Slican oferujący dostęp do wszystkich dróg komunikacji, po to by zapewnić tanią i wysokiej jakości łączność. Slican CXS-0424 jest rozwiązaniem dla firm i biur, które wybierając jedno urządzenie chcą korzystać zarówno z linii tradycyjnych jaki i linii IP i GSM , rozbudowanego systemu zapowiedzi INVENIO oraz nagrywania rozmów czy unikalnej funkcji Slican MobilePhone – rozwiązań wcześniej dostępnych tylko w dużych systemach lub wymagających instalacji kilku osobnych urządzeń. Wersja do montażu naściennego.</li>
              <li><strong>ITS-0106</strong> – każdy potrzebuje tanich i dobrych połączeń telefonicznych – nieważne czy do gabinetu, kancelarii czy do domu. Dziś to Internet i technologia VoIP gwarantuje takie połączenia.Mamy rozwiązanie dla Ciebie. Mała centralka telefoniczna IP. Wystarczy, że masz Internet.Jedna zwykła linia miejska (port FXO) i 2 linie miejskie VoIP (porty IPO), 6 zwykłych numerów wewnętrznych (abonenci FXS) i jeden numer wewnętrzny VoIP (abonent IPS) – to standardowe wyposażenie centralki ITS-0106. Do centralki można zalogować telefony VoIP (SIP) oraz podłączyć zwykłe telefony i faxy, bramofony oraz programy typu softphone.Łatwa instalacja, intuicyjna obsługa, dostęp on-line do panelu programowania i zarządzania oraz niewielkie rozmiary i minimalny pobór mocy to atuty, których nie znajdziesz u innych.</li>
              <li><strong>ITS-0206</strong> – jeśli potrzebujesz tanich internetowych rozwiązań telekomunikacyjnych – mamy rozwiązanie dla Ciebie.Mała centralka IP to pomost między tradycyjną telefonią a telefonią internetową. Wystarczy dostęp do sieci.Dwie analogowe linie miejskie (FXO) i 2 porty IP (IPO), aż 6 abonentów (FXS), 1 abonent VoIP (IPS), współpraca z telefonami VoIP SIP, aplikacjami softphone oraz telefonami i faxami analogowymi oraz bramofonami to standardowe wyposażenia i możliwości centralki ITS-0206.Łatwa instalacja, intuicyjna obsługa, dostęp on-line do panelu programowania i zarządzania oraz niewielkie rozmiary i minimalny pobór mocy to atuty, których nie znajdziesz u innych.</li>
              <li><strong>ITS-0286</strong> – potrzebujesz tanich internetowych rozwiązań telekomunikacyjnych do swojej firmy? Mamy rozwiązanie dla Ciebie!Mała centralka IP to pomost między tradycyjną telefonią a telefonią internetową. Wystarczy dostęp do Internetu.Dwie analogowe linie miejskie (FXO) i 6 linii IP (IPO). 6 abonentów wewnętrznych (FXS) i aż 8 abonentów VoIP (IPS). Współpraca z telefonami VoIP SIP, aplikacjami softphone oraz telefonami i faxami analogowymi oraz bramofonami to standard centralki ITS-0286. Łatwa instalacja, intuicyjna obsługa, dostęp on-line do panelu programowania i zarządzania oraz niewielkie rozmiary i minimalny pobór mocy to atuty, których nie znajdziesz u innych.</li>

            </ul>
            <h6>CENTRALE VOIP/IP PBX „SZYTE NA MIARĘ”</h6>
            <p>Oferujemy centrale telefoniczną dedykowaną zarówno małym firmom potrzebującym kilku telefonów wewnętrznych, jak i korporacją i instytucją korzystającym nawet z kilku tysięcy takich telefonów. Każdy klient, zarówno mała firma, jak i duża korporacja, otrzymuje system o takich samych możliwościach funkcjonalnych i sposobach rozbudowy. Szczególnie istotne jest tzw. „Call Center Ready”, co oznacza, że klient po zakupieniu naszej centrali posiada system pozwalający na uruchomienie w każdej chwili systemu do obsługi Call / Contact Center lub Telemarketingu, bez potrzeby zakupu dodatkowego sprzętu. Kosztem są jedynie licencje na oprogramowanie.
              <br /><br />
              <strong>Odkryj zalety:</strong></p>
              <ul>
                <li>Nie ma potrzeby instalacji odzielnych kabli telefonicznych – wykorzystana jest sieć komputerowa</li>
                <li>Łatwy w instalacji i obsłudze dzięki prostemu internetowemu interfejsowi konfiguracji</li>
                <li>Programowy IP PBX jest o wiele tańszy niż tradycyjny sprzęt PBX / PABX</li>
                <li>Pracownicy mogą zmieniać stanowiska pracy bez konieczności zmiany okablowania i konfiguracji IP PBX</li>
                <li>Możliwość użytkowania sprzętu SIP różnych marek bez konieczności zastosowania wszystkich aparatów pochodzących od jednego producenta</li>
                <li>Odbieranie i wykonywanie połaczeń telefonicznych przez standardowy system PSTN przy użyciu bramek VOIP</li>
                <li>Pozwala zaoszczędzić na kosztach połączeń, stosując dowolną usługę SIP VOIP lub WAN</li>
                <li>System skalowalny – nieograniczona liczba numerów wewnętrznych i linii telefonicznych</li>
                <li>Niepotrzebne są zastrzeżone prawami wlasności moduły rozszerzeń</li>
              </ul>


              <h6>SERWIS</h6>
              <ul className='call-center-serwis'>
                <li>Dla Państwa bezpieczeństwa dysponujemy serwisem 7 dni w tygodniu przez 24 h</li>
                <li><a href='mailto:serwis@e-poltel.pl'>serwis@e-poltel.pl</a></li>
                <li>tel. 777 - tylko dla obecnych klientów</li>
                <li>tel. (22) 100 - 55 - 56</li>
                <li>fax (22) 100 - 52 - 22</li>
              </ul>
          </>}
          </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Urzędy i instytucje" />
