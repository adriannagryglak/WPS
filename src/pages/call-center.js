import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo';
import "../styles/pages/call-center.scss"
import { useMediaQuery } from 'react-responsive'

export default function CallCenterPage() {
    const [sectionActive, setSectionActive] = React.useState("oferta");
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
    return (
        <Layout>
            <section className={isMobile ? 'call-center double-content-subpage' :"call-center double-content-subpage container"}>
                <div className={isMobile ? 'container': ''}>
                <h1>call center</h1>
                <div className={sectionActive === "oferta" ? "double-subpage-switches " : 'double-subpage-switches right'}>
                    <h3 className={sectionActive === "oferta" ? "active" : ""} onClick={() => { setSectionActive("oferta") }}>oferta</h3>
                    <h3 className={sectionActive === "technologie" ? "active" : ""} onClick={() => { setSectionActive("technologie") }}>technologia</h3>
                </div>
                </div>
                <div className={isMobile ? "double-subpage-content container" : "double-subpage-content"}>
                    {sectionActive === "oferta" ? <>
                        <h2>ŁĄCZA DO OPERATORÓW TELEKOMUNIKACYJNYCH/ USŁUGI OPERATORSKIE</h2>
                        <p>Wykorzystujemy hybrydowe technologie transmisji danych głosowych, umożliwiając naszym klientom zastosowanie wszystkich dostępnych, oferowanych na rynku łącz do aktalnych operatorów telekomunikacyjnych lub skorzystanie z naszych usług jako operatora.</p>
                        <ul>
                            <li>
                                <h4>TELEFONIA PRZEWODOWA</h4>
                                <p><strong>ISDN PRI (E1)</strong> – cyfrowe, niezawodne łącza do sieci PSTN zapewniające w standardzie europejskim realizację 30 jednoczesnych połączeń telefonicznych na jednym interfejsie. Liczba interfejsów w naszym systemie jest nieograniczona 
                                <br /><br />
                                <strong>ISDN BRI</strong> – cyfrowe, niezawodne łącza do sieci PSTN zapewniające w standardzie europejskim realizację 2 jednoczesnych połączeń telefonicznych na jednym interfejsie. Liczba interfejsów w naszym systemie jest nieograniczona
                                    <br /><br />
                                    <strong>Łącza analogowe</strong> – najstarsze łącza telekomunikacyjne umożliwiające realizację tylko jednego połączenia telefonicznego na jednym interfejsie. Zastosowanie tego rodzaju łącz w Call Center jest uzasadnione jedynie w szczególnych przypadkach</p>
                            </li>
                            <li>
                                <h4>TELEFONIA BEZPRZEWODOWA</h4>
                                <p><strong>GSM</strong> – możliwość realizacji dowolnej liczby połączeń przez operatorów telefonii komórkowej. Połączenia do sieci komórkowych zapewniają realizację tanich połączeń na telefony komórkowe oraz przyjmowanie połączeń od klientów korzystających z telefonów komórkowych – oferujemy przez to naszym klientom możliwość realizacji tańszych połączeń na usługi infolinii. Ponadto istnieje możliwość zdalnej pracy konsultantów, w terenie, na telefonie komórkowym.</p>
                            </li>
                            <li>
                                <h4>TELEFONIA VOIP</h4>
                                <p>Najnowocześniejsza z technologii wykorzystywanych w telekomunikacji. Głos jest transmitowany w sieciach komputerowych, w tym w sieci Internet. Dzięki zastosowaniu VoIP klienci mogą realizować tanie lub darmowe połączenia telefoniczne przez operatorów VoIP lub bezpośrednio pomiędzy lokalizacjami firmy znajdującymi się w różnych częściach świata. Nasze systemy wspierają protokoły SIP, H323, Skype i IAX2.</p>
                            </li>
                        </ul>
                        <h2>SYSTEM CALL/CONTACT CENTER</h2>
                        <p>System Call/Contact Center jest narzędziem pozwalającym zrealizować szereg następujących zadań:</p>
                        <ul>
                            <li>
                                <h4>ZORGANIZOWANIE SKUTECZNEGO DZIAŁU TELEMARKETINGU</h4>
                                <p>Nasza firma dostarcza kompletne rozwiązania dla telemarketingu, ściśle odpowiadające potrzebom danej firmy. Oferujemy sprzęt i oprogramowanie niezbędne do stworzenia poprawnej infrastruktury do obsługi działań telemarketingowych.
                                    Główne cechy systemu to:</p>
                                <ul>
                                    <li><h5>ROZBUDOWANY AUTODIALER – MOŻLIWOŚĆ REALIZACJI KAMPANII TYPU:</h5>
                                        <ul>
                                            <li><strong>Voice Broadcast</strong> – masowa realizacja setek tysięcy połączeń do kontaktów znajdujących się w bazach danych. Po odebraniu klient usłyszy zapowiedź. Ponadto klient może zostać ponadto skierowany na dowolne drzewo IVR</li>
                                            <li><strong>Preview Dialing</strong> – telemarketer otrzymuje przed nawiązaniem połączenia kartę kontaktu zawierającą wszystkie informacje, historię rozmów, statusy sprawy itp. To telemarketer decyduje o tym, kiedy połączenie telefoniczne zostanie wykonane, może odłożyć sprawę do realizacji na później albo zignorować kontakt</li>
                                            <li><strong>Progressive Dialer</strong> – telemarketer otrzymuje kartę kontaktu zawierającą wszystkie informacje, historię rozmów, statusy sprawy itp., przed nawiązaniem połączenia, ale to system decyduje o tym, kiedy połączenie telefoniczne zostanie wykonane. Dzięki takiemu rozwiązaniu zmuszamy telemarketera do szybszego zapoznawania się z kontaktem i przyspieszamy tym samym realizację połączeń</li>
                                            <li><strong>Power Dialer</strong>system zestawia połączenia z klientami i przekazuje podjęte przez nich rozmowy bezpośrednio do telemarketerów. Ten tryb pracy służy do masowego, szybkiego zestawiania połączeń między klientami, a telemarketerami</li>

                                        </ul></li>
                                    <li>
                                        <h5>MOŻLIWOŚĆ ŁATWEGO MONITOROWANIA WIELU ELEMENTÓW KAMPANII TELEMARKETINGOWYCH:</h5>
                                        <ul>
                                            <li>graficzna prezentacja bieżących statystyk związanych z pracą działu telemarketingu</li>
                                            <li>bieżący status połączeń telefonicznych</li>
                                            <li>bieżący status telemarketerów</li>
                                            <li>zarządzanie połączeniami telefonicznymi w trybie on-line</li>
                                            <li>zarządzanie konsultantami w trybie on-line</li>

                                        </ul>
                                    </li>
                                    <li><h5>RAPORTOWANIE KAMPANII TELEMARKETINGOWYCH</h5><p>– umożliwia tworzenie dowolnych raportów z efektywności działań telemarketingu. Do dyspozycji klientów oddajemy szereg raportów predefiniowanych oraz kreator raportów pozwalający na tworzenie zestawień o dowolnej zawartości i prezentujących dowolne dane</p></li>
                                    <li><h5>PANEL KONSULTANTA</h5>
                                        <p>– pozwala na zwiększenie efektywności pracy telemarketerów, poprawną obsługę klientów i zautomatyzowanie pracy w jednym oknie roboczym. Elementy panelu:</p>
                                        <ul>
                                            <li>Historia kontaktów</li>
                                            <li>Notatki z rozmów</li>
                                            <li>Ankiety</li>
                                            <li>Skrypty rozmów</li>
                                            <li>Terminarz</li>
                                            <li>Faks</li>
                                            <li>Czat</li>
                                            <li>SMS</li>
                                            <li>Wbudowany telefon programowy – SoftPhone</li>

                                        </ul></li>
                                    <li><h5>BIURO OBSŁUGI KLIENTA</h5><p>Oferujemy budowę profesjonalnego systemu dla BOK, korzystając z nasępujących modułów:</p>
                                        <ul>
                                            <li><strong>Centrala telefoniczna VoIP/IP PBX</strong></li>
                                            <li><strong>Moduł IVR (Interactive Voice Response)</strong>, czyli menu obsługi głosowej – zapewnia automatyczną, głosową obsługę klienta.</li>
                                            <li><strong>Moduł ACD (Automatic Call Distribution) </strong>obsługujący dystrybucję połączeń do konsultantów wg określonej strategii i innych parametrów.</li>
                                            <li><strong>Moduł monitorowania </strong>– zapewnia ciągły podgląd pracy BOK w czasie rzeczywistym.</li>
                                            <li><strong>Moduł raportowania </strong>– umożliwia tworzenie dowolnych raportów z działania BOK. Do dyspozycji klientów kreator raportów pozwalający na tworzenie raportów o dowolnej zawartości i prezentujących dowolne dane.</li>
                                            <li><strong>Panel konsultanta</strong> – pozwala na zwiększenie efektywności pracy konsultantów, poprawną obsługę klientów i jej zautomatyzowanie w jednym oknie roboczym.</li>

                                        </ul></li>
                                    <li><h5>PRZEPROWADZANIE ANKIET (CATI)</h5>
                                        <p><strong>CATI (Computer Assisted Telephone Interview)</strong> to wspomagany komputerowo wywiad telefoniczny, czyli metoda zbierania informacji w ilościowych badaniach rynku i opinii publicznej. Polega ona na automatycznym zestawianiu połączeń telefonicznych do odbiorców, podczas których ankieterzy czytają wyświetlane na ekranie pytania i notują odpowiedzi klientów. Ankieterzy korzystają z tzw. skryptów rozmów. Wyniki ankiet, koszty operacyjne, czas trwania całego procesu, itp. powinny podlegać szczegółowemu raportowaniu.
                                            <br /><br />
                                            Proponujemy także rozwiązanie pozwalające na całkowicie automatyczne prowadzenie wywiadu telefonicznego – <strong>BEZ UDZIAŁU ANKIETERÓW </strong>. System może samoczynnie zestawiać połączenia głosowe i po odebraniu telefonu przez udzielających odpowiedzi wprowadzać ich do menu obsługi głosowej IVR, które stanowi ankietę. System może także generować połączenie do klienta po zakończonej uprzednio rozmowie z konsultantem, a także konsultant może transferować klienta na IVR stanowiący ankietę. System sam odczytuje pytania, a odbiorca udziela odpowiedzi wciskając odpowiednie cyfry na klawiaturze telefonu. Wszystkie odpowiedzi są zbierane przez system i podlegają takim samym możliwością technicznym jak raportowanie odpowiedzi notowanych przez ankieterów.</p>

                                    </li>
                                    <li><h5>MASOWE PRZEKAZYWANIE INFORMACJI DROGĄ TELEFONICZNĄ</h5><p><strong>INFORMATOR TELEFONICZNY</strong><br /><br />Wysokie koszty poczty tradycyjnej i mała skuteczność kampanii email marketingowej zostawiają pole dla kampanii telefonicznych. Połączenia realizowane są masowo na telefony stacjonarne i komórkowe. Po odebraniu telefonu odbiorcy słyszą nagrane zapowiedzi.</p></li>
                                </ul>
                            </li>
                            <li><h4>BUDOWA CALL/CONTACT CENTER</h4><p>
                                Dajemy nowym klientom możliwość łatwego i <strong>szybkiego startu</strong> biznesu Call Center na najwyższym, światowym poziomie.
                                <br /><br />
                                Oferujemy kompleksową obsługę i budowę call center: począwszy od biurek i sprzętu, a kończąc na specjalistycznym oprogramowaniu, usługach operatorskich i osobistym opiekunie oddziału.</p></li>
                        </ul>
                    </> : <>
                    <h2>ELEMENTY SYSTEMU CALL/CONTACT CENTER</h2>
                    <h6>KOMPLETNY SYSTEM CALL/CONTACT CENTER SKŁADA SIĘ Z NASTĘPUJĄCYCH ELEMENTÓW:</h6>
                    <ul>
                        <li>SPRZĘT
                            <ul>
                                <li>Serwery</li>
                                <li>Słuchawki</li>
                                <li>Karty telekomunikacyjne (ISDN PRI/BRI, FXS/FXO)</li>
                                <li>Bramy GSM / SMS</li>
                                <li>Telefony sprzętowe lub programowe (SoftPhone)</li>
       
                            </ul>
                        </li>
                        <li>OPROGRAMOWANIE
                            <ul>
                                <li><strong>Centrala telefoniczna VoIP/IP PBX</strong> – zapewnia obsługę połączeń telefonicznych przychodzących i wychodzących. Jej główne zalety to:
                                <ul>
                                    <li>Intuicyjna, okienkowa aplikacja konfiguracyjna pozwalająca na kompletną konfigurację wszystkich elementów centrali telefonicznej</li>
                                    <li>Centralne zarządzanie całą infrastrukturą – w systemie dużego usługodawcy Call Center jest to bardzo istotne, z uwagi na potrzebę pracy z wykorzystaniem wielu central</li>
                                    <li>Duża wydajność i niezawodność</li>
                                    <li>Brak ograniczeń na liczbę grup ACD, IVR, abonentów wewnętrznych</li>
                                    <li>Łączenie wielu central w jeden spójny system</li>
                                    <li>Call / Contact Center – zapewnia realizację wszystkich usług specyficznych dla branży Call Center. Główne zalety pracy w środowisku usługodawcy Call Center to:
                                        <ul>
                                            <li>Ukierunkowanie systemu na akcję – proces biznesowy, a nie na grupę ACD (tzw. kolejkę), system IVR, czy centralę telefoniczną wykorzystywaną do obsługi połączeń</li>
                                            <li>Możliwość dowolnego grupowania konsultantów, koordynatorów i administratorów</li>
                                            <li>Zaawansowane zarządzanie uprawnieniami użytkowników</li>
                                            <li>Definiowanie dowolnej liczby szablonów skryptów rozmów, kart kontaktu, szablonów ankiet, notatek z rozmowy</li>
                                            <li>Monitorowanie w czasie rzeczywistym zorientowane na akcję – proces biznesowy</li>
                                            <li>Raportowanie zorientowane na akcję. Kreator raportów umożliwiający tworzenia dowolnych szablonów raportów, specyficznych dla każdego klienta, dla którego świadczone są usługi Call Center</li>
                                            <li><strong>Auto Dialer</strong> umożliwiający jednoczesną realizację wielu różnych kampanii w trybach:
                                            <ul>
                                                <li>Voice Broadcast – masowa realizacja setek tysięcy połączeń do kontaktów znajdujących się w bazach danych. Po odebraniu klient usłyszy zapowiedź. W naszym systemie klient może zostać ponadto skierowany na dowolne drzewo IVR</li>
                                                <li>Preview Dialing – telemarketer otrzymuje kartę kontaktu zawierającą wszystkie informacje, historię rozmów, statusy sprawy itp., przed nawiązaniem połączenia. To telemarketer decyduje o tym, kiedy połączenie telefoniczne zostanie zestawione, może odłożyć sprawę do realizacji na później albo może zignorować kontakt</li>
                                                <li>Progressive Dialer – telemarketer otrzymuje kartę kontaktu zawierającą wszystkie informacje, historię rozmów, statusy sprawy itp., przed nawiązaniem połączenia, ale to system decyduje o tym, kiedy połączenie telefoniczne zostanie zestawione. Dzięki takiemu rozwiązaniu zmuszamy telemarketera do szybszego zapoznawania się z kontaktem i przyspieszamy tym samym realizację połączeń</li>
                                                <li>Panel konsultanta o indywidualnie dopasowywanym ułożeniu i dostępności okienek roboczych dla procesu biznesowego lub nawet pojedynczego konsultanta</li>
                                                <li>Szerokie możliwości integracji z zewnętrznymi systemami informatycznymi, np. CRM</li>
                                                
                                                </ul></li>
                                            <li>Dedykowane, specjalizowane rozwiązania, takie jak np. konwerter protokołów SIP / H323, umożliwiający terminowanie ruchu w wolumenie około 500 jednoczesnych połączeń telefonicznych z funkcjami dodatkowymi, związanymi z przenoszeniem specyficznych informacji w kanale sygnalizacyjnym</li>

                                        </ul>
                                    </li>
                                   
                                </ul>
                                </li>

                            </ul>
                        </li>
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

export const Head = () => <Seo title="Call center" />