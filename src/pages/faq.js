import React from "react"
import "../styles/pages/faq.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useMediaQuery } from "react-responsive"

export default function Faq() {

  const kroki = [
    {
      "Do czego służy bramka VOIP?":
        `Bramka VoIP jest to małe urządzenie elektroniczne, które pozwala na podłączenie do internetu Twojego tradycyjnego aparatu telefonicznego.Dzięki temu możesz korzystać z telefonu jak dotychczas, bez konieczności włączania komputera i dzwonić po najkorzystniejszych stawkach za połączenia.`,
    },
    {
      "Nie posiadam bramki VOIP ani telefonu VOIP, czy mogę przetestować jakość połączeń?":
        "Jeśli nie posiadasz żadnego z tych urządzeń, możesz wypróbować PolTel korzystając  z komputera, mikrofonu i słuchawek  oraz darmowego oprogramowania do wykonywania połączeń, np.  s oftphone X-Lite .W tym celu skontaktuj się z naszym doradcą. Czas testu zależy od klienta. możliwy jest po wpłaceniu kwoty np. 10,00 zł , by sprawdzić jakość połączeń. Wystarczy to na 200 minut  połączeń stacjonarnych w Polsce lub 30 minut połączeń komórkowych do wszystkich operatorów w Polsce.",
    },
    {
      "Czym różnimy się od innych operatorów VOIP?":
        "Każdy z operatorów telefonii VoIP oferuje możliwość wykonywania darmowych połączeń wewnątrz sieci. Na numery spoza puli danych operatorów stawki są dużo wyższe. W PolTel w danym abonamencie nie rozliczamy Cię za minutę połączenia, ale dajemy ci możliwość wykonywania połączeń bez limitu. Dzięki temu, nie musisz się martwić o wysokosć rachunku, gdyż co miesiąc będzie na tym samym poziomie, nie zależnie od ilości i czasu wykonywanych połączeń.",
    },
  ]
  const numery = [
    {
      "Jak wybrać sobie dowolny numer telefonu?": `Możesz dodać dowolną ilość numerów z dowolnych stref numeracyjnych. Możesz także przenieść swój numer od innego operatora stacjonarnego.

  W tym celu skontaktuj się z naszym konsultantem.`,
    },
    {
      "Jakie numery telefoniczne są dostępne?": `Obecnie posiadamy do wyboru numery telefonów z 50 polskich stref numeracyjnych. W tym celu prosimy o kontakt z naszym konsultantem.`,
    },
    {
      "Ile kosztuje połączenie z moim numerem VOIP?": `Każda osoba, która zadzwoni do Ciebie na numer telefonu wybrany przez PolTel  zapłaci jak za połączenie z numerem stacjonarnym  zgodnie ze stawkami swojego operatora.`,
    },
    {
      "Czy mogę przenieść swój obecny  numer telefonu?": `Tak. Szczegółowe informacje oraz procedurę przenoszenia numerów uzyskasz od naszego konsultanta.`,
    },
    {
      "Czy mieszkając w Warszawie mogę wybrać numer np. z Łodzi?": `Tak. Lokalizacja nie ma znaczenia. Przebywając w Warszawie możne wybrać dowolną ilość numerów z różnych stref. Dzięki temu osoby, które nie korzystają z usług VoIP PolTel zapłacą jak za połączenie lokalne.`,
    },
    {
      "Od jakich operatorów mogę przenieść numer?": `Można przenosić numery stacjonarne operatorów:
Telekomunikacja Polska SA, Netia SA, Exatel SA, GTS Poland, Dialog oraz NASK.
Jeśli nie ma wymienionego twojego operatora – skontaktuj się z naszym doradcą.`,
    },
    {
      "Czy istnieje możliwość przeniesienia numeru z VOIP do VOIP?": `Ze względu na brak uwarunkowań prawnych wystosowanych przez UKE (Urząd Komunikacji Elektronicznej) dotyczących możliwości przenoszenia numerów między różnymi operatorami VoIP, proces nie jest obecnie przeprowadzany.`,
    },
    {
      "Czy po przeniesieniu numeru jestem nadal jego właścicielem?": `Klient jest pełnoprawnym właścicielem swojego numeru telefonu. Istnieją tylko dwa przypadki, przy których klient traci prawo do numeru: pisemnie z niego rezygnując lub gdy przez 3 miesiące utrzymuje się zaległość w płaceniu Faktur VAT. PolTel dokonuje wypowiedzenia umowy na numer przeniesiony i zwraca go do operatora macierzystego.`,
    },
    {
      "Czy numer przeniesiony na platformę VOIP można dalej przenosić?": `Klient ma możliwość dalszego przenoszenia swojego numeru pomiędzy innymi operatorami stacjonarnymi, nie może tego jednak uczynić chcąc przenieść bezpośrednio ten numer do innego operatora VoIP.`,
    },
    {
      "Czy można mieć numer z innego kraju niż Polska?": `Tak, numery zagraniczne są dostępne, jednak warunkowo. W tym celu prosimy o kontakt z naszym doradcą.`,
    },
    {
      "Czy można prezentować się numerem zagranicznym?": `Tak. Więcej szczegółów u naszego doradcy.`,
    },
    {
      "Usunąłem numer telefonu i chciałbym go odzyskać, czy jest to możliwe?": `Po zwolnieniu numeru jest możliwość przyłączenia go ponownie w ciągu 21 dni. Po tym terminie nie będzie to możliwe.`,
    },
    {
      "Problem z prezentacją numeru": `Jeden z naszych partnerów telekomunikacyjnych zastrzega sobie możliwość prezentacji numeru, w przypadku połączeń z telefonami komórkowymi. W przypadku uruchomienia prezentacji numeru prosimy o kontakt z naszym doradcą.`,
    },
  ]
  const polaczenia = [
    {
      "Jakość połączeń jest niezadowalająca.": `Jakość głosu podczas połączeń jest w bardzo niewielkim stopniu zależna od operatora PolTel. Obciążenie naszych serwerów pośredniczących jest stale monitorowane i utrzymuje się na prawidłowym poziomie.Cechą telefonii VoIP jest to, że strumień RTP (głos) przesyłany jest przez publiczną sieć (internet). Strumień ten jest dość czuły na opóźnienia i utraty pakietów. Chwilowe problemy na dowolnym etapie drogi połączeniowej mają zgubny wpływ na jakość głosu.Problemy z jakością są  najczęściej spowodowane przez zbyt mocno obciążone łącze internetowe . Proszę się upewnić, że podczas rozmów nie są włączone żadne programy  p2p , nie są ściągane żadne pliki ani nie są włączone strony internetowe mogące obciążać łącze (youtube itp.)Sugerujemy stosowanie jako preferowanego kodeka: g729. Można również sprawdzić jakość za pośrednictwem g711.Zalecamy także ustawienie QoS dla połączeń VoIP. Połączenia VoIP korzystają z protokołu SIP oraz RTP, które działają na portach:RTP (10000:20000,4000:6500/UDP)SIP (5060/UDP)te zakresy portów należy ustawić konfigurując usługę QoS.Sugerujemy również ustawienie priorytetów na komunikację z naszymi serwerami.`,
    },
    {
      "Nie można się do mnie dodzwonić z sieci x, z sieci y można.": `Najczęściej takie problemy są spowodowane przez operatora, od którego wykonywane jest połączenie. Operator nie ma prawidłowo skonstruowanych cenników i ruch jest kierowany w złym kierunku. W takich przypadkach należy zgłosić się do operatora, od którego wykonywane były połączenia i poinformować go, że nie można się dodzwonić na dany numer VoIP.`,
    },
    {
      "Podczas gdy prowadzę rozmowę i ktoś do mnie dzwoni słyszy normalny sygnał zamiast sygnału zajętości": `Twoje urządzenie VoIP (bramka /telefon) ma włączoną opcję połączeń oczekujących (call waiting). Aby sygnał zajętości był słyszalny w sytuacji gdy prowadzisz w tym czasie rozmowę należy wyłączyć tę opcję. W tym celu zaloguj się do panelu konfiguracyjnego swojego urządzenia i zmień parametr odpowiadający za tę funkcjonalność.W urządzeniach  Cisco / Linksys  znajdziesz tę opcję w widoku  Admin  > Advanced,  zakładka  user1 /2, opcję ” cw settings ” ustaw na  NO w telefonach  Yealink :w menu  Phone  >  Features  >  Call waiting : ustaw na   disabled w telefonach  Siemens Gigaset: w menu  Settings  >  Telephony  > Audio  > opcja ” Allow 1 VoIP call only :”  Jej zaznaczenie spowoduje, że przy kolejnym połączeniu przychodzącym abonent dzwoniący usłyszy sygnał zajętości. Niestety opcja ta spowoduje, że będzie można wykonywać tylko jedno połączenie na raz z danej bazy.W przypadku innych urządzeń sugerujemy sprawdzenie w instrukcji obsługi jaki parametr odpowiada za obsługę połączeń oczekujących (call waiting)`,
    },
    {
      "Wybieranie numeru trwa bardzo długo": `Proszę wprowadzić w konfiguracji urządzenia/programu bezpośrednie adresy DNS:
8.8.8.8
8.8.4.4
Adresy należy wprowadzić w panelu konfiguracyjnym urządzenia VoIP:
W bramkach VoIP Cisco / Linksys (bramki z wbudowanym routerem, np. Cisco SPA2102, Cisco SPA3102) menu Router > Wan Setup > Primary DNS : 8.8.8.8, Secondary
DNS : 8.8.4.4W bramkach VoIP Cisco / Linksys (bramki bez routera, np: Cisco PAP2T, Cisco SPA941)menu System > Primary DNS :8.8.8.8, Secondary DNS :8.8.4.4
Telefony VoIP Yealink: menu Network , zaznacz opcję Static , Primary DNS :8.8.8.8, Secondary DNS :8.8.4.4
Telefony VoIP Siemens Gigaset: menu Settings > IP Configuration > IP Address type : static, Preferred DNS server : 8.8.8.8, Alternate DNS server : 8.8.4.4
Prosimy jednak zachować ostrożność przy ręcznej konfiguracji IP. Wprowadzenie niepoprawnych danych może spowodować utratę łączności bazy z internetem.`,
    },
    {
      "Połączenia przychodzące nie są rejestrowane w spisie połączeń w panelu użytkownika": `Jeżeli połączenia nie są widoczne w panelu użytkownika muszą być one wykonywane bezpośrednio na adres IP i port urządzenia. Aby wyeliminować tą niedogodność należy zmienić lokalny port SIP w urządzaniu na inny niż 5060, np. 5070.Porty SIP należy wprowadzić w panelu konfiguracyjnym urządzenia VoIP:W bramkach VoIP Cisco / Linksys widok Admin > Advanced , zakładka Line > Parametr „SIP Port:”Telefony VoIP Yealink: Account > Advanced > „Local SIP Port” Telefony VoIP Siemens Gigaset:menu Settings > Telephony > Advanced Settings > „SIP Port”`,
    },
    {
      "Ja mogę dzwonić, ale nie można dodzwonić się na mój numer": `Problem jest prawdopodobnie spowodowany przez zbyt wysoka wartość parametru czasu odświeżania rejestracji. Sugerujemy ustawić go na 60 sekund. W tym celu należy zalogować się do panelu konfiguracyjnego urządzenia i zmienić właściwy parametr (w różnych urządzeniach VoIP oznaczony jest inną nazwą).Bramki i telefony VOIP Cisco / Linksyswidok Admin > Advanced , zakładka Line parametr Register expires : 60Telefony VoIP Yealinkmenu Account > Advanced > Login Expire : 60Telefony Siemens Gigaset menu Settings > Telephony > Connections > Edytować dane konto, kliknąć ” Show advanced settings „, parametr: Registration refresh time : 60`,
    },
    {
      "Można się do mnie dodzwonić tylko przez kilka minut po wykonaniu połączenia.": `Problem jest prawdopodobnie spowodowany przez zbyt wysoka wartość parametru czasu odświeżania rejestracji. Sugerujemy ustawić go na 60 sekund. W tym celu należy zalogować się do panelu konfiguracyjnego urządzenia i zmienić właściwy parametr (w różnych urządzeniach VoIP oznaczony jest inną nazwą).Bramki i telefony VOIP Cisco / Linksyswidok Admin > Advanced , zakładka Line parametr Register expires : 60Telefony VoIP Yealinkmenu Account > Advanced > Login Expire : 60Telefony Siemens Gigaset menu Settings > Telephony > Connections > Edytować dane konto, kliknąć ” Show advanced settings „, parametr Registration refresh time : 60`,
    },
    {
      "Z jakimi numerami mogę rozmawiać za darmo?": `W PolTel możesz rozmawiać z wszystkimi numerami w kraju i na świecie bez limitu – płacąc stały miesięczny abonament. Zapraszamy do sprawdzenia naszych abonamentów rozmów bez limitu dla klientów indywidualnych – link do cennika-abonamenty .`,
    },
    {
      "Jak dzwonić do kogoś, kto nie korzysta z usług POLTEL?": `Do osób niekorzystających z usług PolTel, posiadających zwykłe telefony stacjonarne lub komórkowe, będziesz dzwonił tak samo, jak przed korzystaniem z firmy PolTel VoIP. Co więcej nie musisz korzystać ze słuchawek, mikrofonu ani włączać komputera, jak w przypadku darmowych komunikatorów. Jeśli podłączysz swój telefon do internetu, będziesz mógł dzwonić tak, jak wcześniej, z tą różnicą, że nie musisz martwić się o wysokość swojego rachunku.`,
    },
    {
      "Czy mogę dzwonić przez VOIP, jeśli nie posiadam Internetu?": `Tak. PolTel pozwala na dzwonienie nawet jeśli nie posiadasz dostępu do internetu. Możesz dzwonić z dowolnego telefonu komórkowego lub telefonu stacjonarnego. Dzięki tej usłudze , nawet jeśli znajdujesz się poza zasięgiem sieci internetowej, możesz dzwonić w ramach wykupionego abonamentu.Usługa ta pozwala połączyć się z numerem, który wybierzesz i możesz przez dowolnego operatora zadzwonić na podany numer, a następnie zostaniesz poproszony o wprowadzenie docelowego numeru.W ten sposób, możesz zrealizować np. połączenie zagraniczne , więc kilkukrotnie taniej, niż gdybyś dzwonił bezpośrednio przez innego operatora.

Jak to zrobić?
Skontaktuj się z naszym konsultantem – najlepiej przed podpisaniem umowy.`,
    },
    {
      "Jakie porty muszą być odblokowane dla działania usługi?": `DNS (53/UDP)
RTP (10000:20000,4000:6500/UDP)
SIP (5060/UDP)
HTTP (80/TCP)`,
    },
    {
      "Po nawiązaniu połączenia nie słychać głosu.": `Problemy z brakiem dźwięku spowodowane są zwykle ustawieniami routera, do którego podłączona jest bramka. Nie powinny być tam ustawione żadne przekierowania portów. Należy też sprawdzić czy nie są ustawione jakieś reguły firewalla blokujące transmisję RTP (porty UDP 10000:20000 oraz 4000:6500). W routerze mogą być również włączone funkcje próbujące wspomagać komunikację, zalecamy wyłączenie takich opcji (SIP Alg, UPnP).`,
    },
    {
      "Połączenia nieoczekiwanie się przerywają.": `Problem może być spowodowany ustawieniami routera, do którego podłączona jest bramka. Wszystkie opcje wspomagające komunikację powinny być wyłączone (SIP Alg, UPnP). Nie powinny być tam również ustawione żadne przekierowania portów oraz reguły firewalla ingerujące w sygnalizację na porcie 5060 UDP.`,
    },
  ]
  const faktury = [
    {
      "Jak otrzymywać faktury VAT?": `Na początku każdego miesiąca generowana jest faktura VAT i udostępniana jest drogą mailową lub tradycyjną pocztą.  Jeśli chcesz otrzymywać faktury  tradycyjną pocztą,  musisz przy podpisywaniu umowy zaznaczyć tą opcję. Standardowo wysyłamy Faktury Vat na adres mail podany w umowie.

  Dane do Faktury można zmienić – prosimy w tej sprawie pisać na adres:
  
  biuro@e-poltel.pl
  
  Faktury są wysyłane na początku każdego miesiąca. Np. jeśli korzystasz z dwóch lub więcej usług w kwietniu, to oba dokumenty (Faktury Vat) otrzymasz w jednej wysyłce na początku maja.
  
  Za wysyłkę dokumentów pobierana jest opłata 5 zł brutto – tradycyjną pocztą. Bezpłatnie w przypadku wysłania mailem.`,
    },
    {
      "Jak otrzymać fakturę dla firmy zagranicznej?": `W tym celu prosimy o kontakt z naszym doradcą.`,
    },
    {
      "Czy można otrzymać fakturę VAT w formacie PDF?": `Wysyłamy standardowo fakturę w formacie PDF na początku miesiąca. Jeśli faktura nie doszła, prosimy o kontakt z naszym konsultantem.`,
    },
    {
      "Jak zmienić dane do faktury?": `Aby zmienić dane osobowe należy skontaktować się z konsultantem.`,
    },
  ]

  const [answear, setAnswear] = React.useState("Bramka VoIP jest to małe urządzenie elektroniczne, które pozwala na podłączenie do internetu Twojego tradycyjnego aparatu telefonicznego.Dzięki temu możesz korzystać z telefonu jak dotychczas, bez konieczności włączania komputera i dzwonić po najkorzystniejszych stawkach za połączenia.");
  const [isOpen, setIsOpen] = React.useState({
    kroki: true,
    numery: false,
    polaczenia: false,
    faktury: false,
  })

  const isTablet = useMediaQuery({ query: '(max-width: 830px)' });

  return (
    <Layout>
      <section className="faq container">
        <h1>FAQ</h1>
        <h2>
          czyli najczęściej zadawane <br /> pytania i odpowiedzi
        </h2>
        <div className="faq-container">
          <div className="faq-questions">
            <div className="faq-category">
              <h3
                onClick={() => {
                  setIsOpen(prev => {
                    return prev.kroki ? { ...prev, kroki: false} : {kroki: true, polaczenia: false, numery: false, faktury: false};
                  })
                }}
              >
                pierwsze kroki
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{
                    transform: isOpen.kroki ? "rotate(180deg)" : "none",
                  }}
                  className="faq-icon"
                />
              </h3>

              <ul className={isOpen.kroki ? "open" : ""}>
                {kroki.map((q, i) => (
                  <><li
                    key={i}
                    onClick={() => {
                      setAnswear(q[Object.keys(q)])
                    }}
                    className={answear === q[Object.keys(q)] ? "clicked" : ""}
                  >
                    {Object.keys(q)}
                  </li>
                  {answear === q[Object.keys(q)] && isTablet && <p>{answear}</p>}
                  </>
                ))}
              </ul>
            </div>
            <div className="faq-category">
              <h3
                onClick={() => {
                  setIsOpen(prev => {
                    return isOpen.numery ? { ...prev, numery: false } : {kroki: false, polaczenia: false, numery: true, faktury: false}
                  })
                }}
              >
                numery telefonów
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{
                    transform: isOpen.numery ? "rotate(180deg)" : "none",
                  }}
                  className="faq-icon"
                />
              </h3>
              <ul className={isOpen.numery ? "open" : ""}>
                {numery.map((q, i) => (
                  <><li
                    key={i}
                    onClick={() => {
                      setAnswear(q[Object.keys(q)])
                    }}
                    className={answear === q[Object.keys(q)] ? "clicked" : ""}
                  >
                    {Object.keys(q)}
                  </li>
                  {answear === q[Object.keys(q)] && isTablet && <p>{answear}</p>}
                  </>
                ))}
              </ul>
            </div>
            <div className="faq-category">
              <h3
                onClick={() => {
                  setIsOpen(prev => {
                    return isOpen.polaczenia ? { ...prev, polaczenia: !prev.polaczenia }: {kroki: false, polaczenia: true, numery: false, faktury: false}
                  })
                }}
              >
                połączenia telefoniczne
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{
                    transform: isOpen.polaczenia ? "rotate(180deg)" : "none",
                  }}
                  className="faq-icon"
                />
              </h3>
              <ul className={isOpen.polaczenia ? "open" : ""}>
                {polaczenia.map((q, i) => (
                  <><li
                    key={i}
                    onClick={() => {
                      setAnswear(q[Object.keys(q)])
                    }}
                    className={answear === q[Object.keys(q)] ? "clicked" : ""}
                  >
                    {Object.keys(q)}
                  </li>
                  {answear === q[Object.keys(q)] && isTablet && <p>{answear}</p>}
                  </>
                ))}
              </ul>
            </div>
            <div className="faq-category">
              <h3
                onClick={() => {
                  setIsOpen(prev => {
                    return isOpen.faktury ? { ...prev, faktury: !prev.faktury }: {kroki: false, polaczenia: false, numery: false, faktury: true}
                  })
                }}
              >
                faktury VAT
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{
                    transform: isOpen.faktury ? "rotate(180deg)" : "none",
                  }}
                  className="faq-icon"
                />
              </h3>
              <ul className={isOpen.faktury ? "open" : ""}>
                {faktury.map((q, i) => (
                  <><li
                    key={i}
                    onClick={() => {
                      setAnswear(q[Object.keys(q)])
                    }}
                    className={answear === q[Object.keys(q)] ? "clicked" : ""}
                  >
                    {Object.keys(q)}
                  </li>
                  {answear === q[Object.keys(q)] && isTablet && <p>{answear}</p>}
                  </>
                ))}
              </ul>
            </div>
          </div>
          {! isTablet && <div className="faq-answear">
            <p>{answear}</p>
          </div>}
          
        </div>
        <h2>nie znalazłeś odpowiedzi na nurtujące Cię pytania?</h2>
        <Link to="/#kontakt">skontaktuj sie z nami</Link>
      </section>
    </Layout>
  )
}
export const Head = () => <Seo title="FAQ" />
