import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/pages/regulamin.scss"

export default function Regulamin() {
  return (
    <Layout>
      <section className="regulamin">
        <h1>Regulamin</h1>
        <h2 className="container">
          świadczenia usług telekomunikacyjnych POLTEL z dnia 01.06.2020
        </h2>
        <div className="regulamin-container container">
          <div>
            <h3>§ 1. PRZEDMIOT REGULAMINU</h3>
            <ol>
              <li>
                Niniejszy Regulamin, wydany na podstawie ustawy z dnia 16 lipca
                2004 roku Prawo Telekomunikacyjne (dalej „Ustawa”), określa
                zakres i warunki świadczenia Usług na rzecz Abonenta przez
                POLTEL Spółka z Ograniczoną Odpowiedzialnością Spółka
                Komandytowa z siedzibą w Brzegu Dolnym (56-120) przy ul.
                Sportowej 20, wpisaną do Rejestru Przedsiębiorców Krajowego
                Rejestru Sądowego przez Sąd Rejonowy Dla Łodzi Śródmieścia w
                Łodzi, XX Wydział Gospodarczy Krajowego Rejestru Sądowego pod nr
                KRS 0000422976, NIP 8361856608.
              </li>
            </ol>
          </div>
          <div>
            <h3>§ 2. DEFINICJE</h3>
            <ol>
              <li>
                Dla potrzeb niniejszego Regulaminu, Strony wprowadzają
                następujące definicje:
                <ol>
                  <li>
                    Abonent – podmiot, który korzysta z usług sieci POLTEL.
                  </li>
                  <li>
                    Adres zakończenia sieci – informacje dotyczące lokalizacji
                    zakończenia sieci, fizyczny punkt, w którym Abonent
                    otrzymuje dostęp do publicznej sieci telefonicznej. Dane te
                    obejmują m.in. adres zamieszkania i/lub adres
                    korespondencyjny i/lub adres wykonywania działalności
                    gospodarczej; imię, nazwisko i/lub nazwę firmy oraz formę
                    organizacyjną abonenta, w przypadku klienta prywatnego numer
                    PESEL. Dane te zgodnie z Prawem Telekomunikacyjnym są
                    gromadzone i nieodpłatnie udostępniane centralnemu punktowi
                    systemu powiadamiania ratunkowego (zarządzanego przez
                    Prezesa UKE) – w przypadku połączeń do numeru alarmowego
                    „112” oraz do numerów alarmowych ustalonych dla Policji,
                    Państwowej Straży Pożarnej i dysponenta zespołów ratownictwa
                    medycznego, chyba że służba ustawowo powołana do niesienia
                    pomocy, wykorzystująca dany numer alarmowy, posiada własny
                    punkt centralny mogący współpracować z systemem.
                    Przekazywanie tych danych nie wymaga zgody Abonenta.
                  </li>
                  <li>
                    Awaria – zdarzenie wpływające na stan techniczny sieci lub
                    jej elementów uniemożliwiający lub w znacznym stopniu
                    utrudniający świadczenie usług telekomunikacyjnych.
                  </li>
                  <li>
                    Billing – szczegółowy wykaz połączeń zrealizowanych na rzecz
                    Abonenta, dostępny na indywidualnym koncie Abonenta w ramach
                    Panelu Administracyjnego.
                  </li>
                  <li>
                    Cennik – wykaz Usług zawierający zestawienie rodzaju i
                    wysokość opłat za Usługi świadczone przez Operatora na rzecz
                    Abonenta, publikowany na stronie www.e- poltel.pl oraz na
                    Panelu Administracyjnym. Jeśli klient nie otrzyma przy
                    podpisywaniu Umowy indywidualnego Cennika, obowiązującym
                    przez cały okres trwania umowy jest ten opublikowany na
                    stronie www.e-poltel.pl oraz na Panelu Administracyjnym.
                  </li>
                  <li>
                    E-faktura – faktura VAT dostarczana do Abonenta drogą poczty
                    elektronicznej, na wskazany przez Abonenta adres mailowy.
                  </li>
                  <li>
                    {" "}
                    Konto – podstrona Serwisu, za pośrednictwem której Abonent
                    może korzystać z Usługi świadczonej przez Operatora. Dostęp
                    do Konta możliwy jest po dokonaniu przez Abonenta
                    jednorazowej Rejestracji i zalogowaniu do Konta.
                  </li>
                  <li>
                    Konto SIP – wirtualna usługa umożliwiająca wykonywanie
                    połączeń z wykorzystaniem protokołu SIP. Autoryzacja
                    przebiega poprzez podanie loginu, hasła 1 czerwca 2020 2
                    oraz wskazanie serwera IP. Można do niej przypisać jeden lub
                    więcej numerów publicznych, ustawić prezentację numeru
                    wychodzącego lub jej brak. Umożliwia wykonywanie jednego lub
                    więcej jednoczesnych połączeń.
                  </li>
                  <li>
                    Numer PSTN – unikatowy numer z telefonicznej sieci
                    publicznej udostępniony przez Operatora z dostępnych u
                    operatora stref numeracyjnych, lub przeniesiony ze stref
                    numeracyjnych podlegających innym Operatorom, z woli
                    Abonenta, na mocy dokumentu Wniosek o Przeniesienie Numeru.
                  </li>
                  <li>
                    Okres Rozliczeniowy – okres, za który dokonywane są
                    rozliczenia zobowiązań Abonenta wobec Operatora z tytułu
                    świadczonych usług telekomunikacyjnych, rozpoczynający się
                    pierwszego dnia danego miesiąca i kończący ostatniego dnia
                    tego samego miesiąca.
                  </li>
                  <li>
                    Operator – POLTEL Spółka z Ograniczoną Odpowiedzialnością
                    Spółka Komandytowa z siedzibą w Brzegu Dolnym (56-120) przy
                    ul. Sportowej 20, KRS: 0000422976 NIP: 836- 185-66-08.
                  </li>
                  <li>
                    Opłata Abonamentowa – cykliczna opłata, której wysokość i
                    terminy uiszczania przez Abonenta na rzecz Operatora
                    określone są w Umowie.
                  </li>
                  <li>
                    Opłata Instalacyjna – opłata jednorazowa, ustalana
                    indywidualnie w Umowie, składa się na nią koszt wdrożenia
                    rozwiązań pozwalających na rozpoczęcie świadczenia Usług.
                  </li>
                  <li>
                    Opłata Pocztowa – opłata w wysokości określonej w Cenniku,
                    doliczana do każdej faktury wysyłanej inną drogą niż
                    wyznaczona przez Abonenta poczta elektroniczna. Wysyłka
                    faktur pocztą elektroniczną jest bezpłatna.
                  </li>
                  <li>
                    Panel Administracyjny – strona internetowa pod adresem
                    https://panel.e-poltel.pl, służąca do zarządzania usługami
                    telekomunikacyjnymi.
                  </li>
                  <li>
                    PJSIP – nowsza wersja protokołu SIP stosowana w najnowszych
                    centralach telefonicznych wykorzystujących technologię VoIP.
                  </li>
                  <li>
                    Prawo Telekomunikacyjne – Ustawa z dnia 16 lipca 2004 r.
                    Prawo telekomunikacyjne (Dz.U. 2004 nr 171 poz. 1800 ze
                    zm.).
                  </li>
                  <li>
                    Pre-Paid – System nabywania usług, za które płacimy przed
                    skorzystaniem z nich, na zasadach przedpłaty.
                  </li>
                  <li>
                    Post Paid – System nabywania usług, za które płacimy po
                    skorzystaniu z nich. Opłaty naliczane są cyklicznie (np. co
                    miesiąc), zazwyczaj w formie Abonamentu.
                  </li>
                  <li>
                    Rachunek – faktura VAT wystawiana przez Operatora za
                    świadczone Usług.
                  </li>
                  <li>
                    Regulamin – niniejszy regulamin świadczenia Usług dla
                    Abonentów, stanowiący integralną część Umowy.
                  </li>
                  <li>
                    RTP – protokół transmisyjny, który transmituje media
                    pomiędzy końcowymi terminalami VoIP.
                  </li>
                  <li>
                    Sieć POLTEL – infrastruktura, która pozwala na realizację
                    usług telekomunikacyjnych, znajdująca się w ośrodku
                    przetwarzania danych, zespolonych i współpracujących ze
                    sobą, a niezbędnych do funkcjonowania usług.
                  </li>
                  <li>
                    Siła Wyższa – zdarzenie zewnętrzne, niezależne od Strony,
                    którego nie można było przewidzieć i któremu nie można
                    zapobiec przy dołożeniu należytej staranności, a w
                    szczególności: i. wojna, w tym wojna domowa, zamieszki,
                    rozruchy, akty sabotażu lub terroru, ii. katastrofy
                    naturalne lub katastrofy o innym charakterze. iii. zjawiska
                    atmosferyczne np. wyładowania atmosferyczne, wichury itp. 1
                    czerwca 2020 3
                  </li>
                  <li>
                    SIP (Session Initiation Protocol – protokół inicjacji sesji)
                    – protokół internetowy umożliwiający nawiązywanie połączeń
                    głosowych oraz wideo, najczęściej wykorzystywany w usłudze
                    VoIP. Umożliwia on też szyfrowanie ruchu.
                  </li>
                  <li>
                    SIPTRUNK – wirtualna usługa umożliwiająca wykonywanie
                    połączeń z wykorzystaniem protokołu SIP. W przeciwieństwie
                    do Konta SIP wymiana ruchu nie wymaga autoryzacji z użyciem
                    loginu i hasła, a jedynie wskazania adresów IP, pomiędzy
                    którymi operatorzy będą kierować połączenia. Komunikacja
                    zazwyczaj odbywa się z wykorzystaniem portów UDP: 5060, UDP:
                    5061 (szyfrowane), TCP: 5060. Umożliwia wykonywanie jednego
                    lub więcej jednoczesnych połączeń.
                  </li>
                  <li>
                    SRTP – protokół transmisyjny, który transmituje szyfrowane
                    media pomiędzy końcowymi terminalami VoIP.
                  </li>
                  <li>
                    Sztuczny ruch – generowanie ruchu telekomunikacyjnego,
                    rejestrowanego w systemie bilingowym, którego celem jest
                    uzyskanie nieuprawnionych korzyści finansowych, bądź na
                    szkodę Operatora.
                  </li>
                  <li>
                    Terminal VoIP – urządzenie końcowe po stronie Abonenta
                    zapewniające przyłączenie do sieci POLTEL, w szczególności
                    telefon IP lub bramka VoIP obsługujące protokół SIP.
                    Umożliwia rejestrację jednego lub więcej Kont SIP lub
                    uruchomienie usługi SIP TRUNK.
                  </li>
                  <li>
                    Ulga – ulga finansowa przyznawana indywidualnie, szczegółowo
                    określona w Umowie zawieranej na warunkach promocyjnych.
                  </li>
                  <li>
                    Umowa – umowa o świadczenie usług telekomunikacyjnych, na
                    podstawie której Operator zobowiązuje się do świadczenia
                    Usługi zgodnie z Regulaminem, a Abonent zobowiązuje się do
                    przestrzegania wszystkich warunków zawartych w tymże
                    Regulaminie.
                  </li>
                  <li>
                    Usługi – Usługi wymienione w Cenniku i świadczone przez
                    Operatora zgodnie z postanowieniami niniejszego Regulaminu,
                    w szczególności Usługa polegająca na realizacji połączeń
                    telekomunikacyjnych przez Abonenta przy użyciu Terminala
                    VoIP podłączonego do sieci Internet.
                  </li>
                  <li>
                    Ustawa o świadczeniu usług drogą elektroniczną – Ustawa z
                    dnia 18 lipca 2002r. o świadczeniu usług drogą elektroniczną
                    (Dz.U. 2002r., Nr 144, poz. 1244 ze zm.)
                  </li>
                  <li>
                    Wniosek o Przeniesienie Numeru – obok Umowy niezbędny do
                    prawidłowego świadczenia Usług dokument przygotowany przez
                    Operatora pozwalający na prawomocne przeniesienie wskazanego
                    i należącego do Abonenta publicznego Numeru PSTN do Sieci
                    POLTEL.Zamówienie – oświadczenie Abonenta złożone za
                    pośrednictwem strony https://e-poltel.pl, lub telefonicznie,
                    zawierające dane Abonenta oraz specyfikację zamawianej przez
                    niego usługi.
                  </li>
                </ol>
              </li>
              <li>
                Pojęcia nie zdefiniowane w § 2, a zdefiniowane w Prawie
                Telekomunikacyjnym, użyte zostały w Regulaminie zgodnie ze
                znaczeniami nadanymi im przez Prawo Telekomunikacyjne.
              </li>
            </ol>
          </div>
          <div>
            <h3>§ 3. UMOWA O ŚWIADCZENIE USŁUG</h3>
            <ol>
              <li>
                Przez zawarcie Umowy POLTEL zobowiązuje się do świadczenia Usług
                zgodnie z Umową i Regulaminem, a Abonent zobowiązuje się do
                uiszczania Opłat za wykonane Usługi oraz przestrzegania
                postanowień Regulaminu.
              </li>
              <li>
                Umowa zawierana jest na warunkach standardowych lub
                promocyjnych. Warunki standardowe określa Cennik, warunki
                promocyjne określa Umowa.
              </li>
              <li>
                Zawarcie i wykonywanie Umowy przez POLTEL uzależnione jest od
                istnienia technicznych i prawnych możliwości realizacji Usług na
                rzecz Abonenta w danej lokalizacji. 1 czerwca 2020 4
              </li>
              <li>
                Usługi są dostępne po podpisaniu Umowy i instalacji i/lub
                konfiguracji urządzeń.
              </li>
              <li>
                POLTEL zastrzega sobie prawo do sporządzania elektronicznych
                kopii doręczonych dokumentów i przechowywania ich przez okres
                wykonywania zobowiązań wynikających z Umowy oraz zobowiązań
                Operatora względem Prezesa UKE i Prawa Telekomunikacyjnego.
              </li>
              <li>
                Abonent zawierając Umowę oświadcza, że posiada pełną zdolność do
                czynności prawnych lub w przypadku, gdy posiada ograniczoną
                zdolność do czynności prawnych uzyskał zgodę przedstawiciela
                ustawowego.
              </li>
              <li>
                Abonent zobowiązany jest do wskazania adresu do korespondencji
                oraz/lub adres poczty elektronicznej, za pomocą którego Operator
                będzie kontaktował się w sprawach dotyczących płatności i
                rozliczeń za Usługi.
              </li>
              <li>
                Abonent jest zobowiązany do niezwłocznej aktualizacji swoich
                danych, w szczególności: adresu, numeru NIP, numerów telefonów,
                adresu poczty elektronicznej.
              </li>
              <li>
                Cennik i Regulamin są udostępnione Abonentowi na stronie
                internetowej www.e-poltel.pl przed podpisaniem Umowy. Podpisanie
                Umowy jest równoznaczne z akceptacją Regulaminu i Cennika.
              </li>
            </ol>
          </div>
          <div>
            <h3>§ 4. ROZWIĄZANIE UMOWY I WYGAŚNIĘCIE UMOWY</h3>
            <ol>
              <li>
                Abonent ma prawo rozwiązać Umowę:{" "}
                <ol>
                  <li>
                    Dla umowy standardowej: z zachowaniem trzymiesięcznego
                    okresu wypowiedzenia ze skutkiem na koniec miesiąca
                    kalendarzowego.
                  </li>
                  <li>
                    Dla umowy promocyjnej: z zachowaniem jednomiesięcznego
                    okresu wypowiedzenia ze skutkiem na koniec miesiąca
                    kalendarzowego.
                  </li>
                </ol>
              </li>
              <li>
                Wypowiedzenie Umowy wymaga zachowania formy pisemnej pod rygorem
                nieważności.
              </li>
              <li>
                Za dzień złożenia wypowiedzenia Umowy przez Abonenta przyjmuje
                się dzień doręczenia wypowiedzenia na adres korespondencyjny
                POLTEL.
              </li>
              <li>
                W dniu upływu okresu wypowiedzenia Umowy ulega ona rozwiązaniu,
                a POLTEL zaprzestaje świadczenia Abonentowi Usług.
              </li>
              <li>
                W okresie wypowiedzenia naliczane są Opłaty wynikające z Umowy.
              </li>
              <li>
                Rozwiązanie lub wygaśnięcie Umowy może spowodować bezpowrotną
                utratę konfiguracji usług oraz danych Abonenta przechowywanych w
                systemie danych i wykorzystywanych przez Abonenta przy
                korzystaniu z Usług, na co Abonent wyraża zgodę.
              </li>
              <li>
                Operator może rozwiązać umowę ze skutkiem natychmiastowym,
                jeżeli Abonent narusza postanowienia Umowy, niniejszego
                Regulaminu lub przepisy prawa.
              </li>
              <li>
                Operator może wyłączyć rozmowy wychodzące, gdy minęło ponad 30
                dni od wymaganego terminu płatności za Fakturę VAT za poprzedni
                okres rozliczeniowy.
              </li>
              <li>
                POLTEL jest uprawniony do jednostronnej zmiany warunków Umowy, w
                tym określonych w Regulaminie lub Cenniku w przypadku istotnych
                zmian warunków rynkowych, technologicznych, konkurencyjnych,
                organizacyjnych, kosztów utrzymania albo kosztów świadczenia
                Usługi. O powodzie wprowadzenia zmian POLTEL każdorazowo
                poinformuje Abonenta. Treść każdej proponowanej przez POLTEL
                zmiany warunków Umowy, w tym określonych w Regulaminie lub
                Cenniku publikowana będzie na stronie internetowej
                https://e-poltel.pl z wyprzedzeniem co najmniej jednego miesiąca
                przed wprowadzeniem tych zmian w życie oraz zostanie dostarczona
                Abonentowi za pośrednictwem poczty elektronicznej na wskazany w
                tym celu adres e-mail.
              </li>
              <li>
                Rozwiązanie przez Abonenta Umowy zawartej na warunkach
                promocyjnych skutkuje rezygnacją Abonenta z warunków promocji.
                Nakłada to na Abonenta obowiązek wyrównania przyznanej ulgi,
                zgodnie z Umową Świadczenia Usług.
              </li>
            </ol>
          </div>
          <div>
            <h3>§ 5. ZAKRES USŁUG</h3>
            <ol>
              <li>
                Rodzaje Usług określone są w Cenniku i na stronie
                https://e-poltel.pl w szczególności przedmiotem oferowanych
                usług jest realizacja połączeń telekomunikacyjnych przez
                Abonenta przy użyciu Terminala VoIP podłączonego do sieci
                Internet.
              </li>
              <li>
                Operator może rozszerzyć zakres oferowanych usług bez
                konieczności zmiany Regulaminu i Cennika.
              </li>
            </ol>
          </div>
          <div>
            <h3>
              § 6. Opłaty za świadczenie Usług, warunki promocyjne, rabaty
            </h3>
            <ol>
              <li>Wysokość opłat określa Umowa lub Cennik.</li>
              <li>
                Korespondencja dotycząca płatności i rozliczeń Abonenta będzie
                kierowana przez Operatora na adres jaki wskazał w umowie.
              </li>
              <li>
                Operator zobowiązany jest do wystawienia faktury VAT płatnej w
                terminie określonym w Umowie. W przypadku braku określenia
                terminu faktura VAT powinna być opłacona w ciągu 14 dni od jej
                prawidłowego doręczenia. Faktury Abonenta przechowywane są na
                serwerze POLTEL, klient posiada do nich wgląd na swoim Koncie.
              </li>
              <li>
                Dniem zapłaty jest dzień uznania płatności na rachunku bankowym
                Operatora.
              </li>
              <li>
                W przypadku zwłoki w płatności, Operatorowi przysługuje prawo do
                naliczenia odsetek ustawowych za czas zwłoki, a także
                zablokowanie połączeń wychodzących do czasu uregulowania
                należności oraz rozwiązanie umowy z zachowaniem 14-dniowego
                okresu wypowiedzenia.
              </li>
              <li>
                W sytuacji naliczenia odsetek ustawowych Operator ma prawo
                naliczyć Opłatę Manipulacyjną w wysokości wskazanej w Cenniku.
              </li>
              <li>
                Płatności dokonywane są wyłącznie za pośrednictwem rachunku
                bankowego, a przedstawiciele Operatora nie uprawnieni do
                pobierania żadnych świadczeń związanych z Umową.
              </li>
              <li>
                {" "}
                POLTEL zastrzega sobie prawo do zmian w wysokości cen za Usługi
                w okresie trwania Umowy. Treść każdej zmiany w Cenniku
                publikowana będzie na stronie internetowej https://e-poltel.pl z
                wyprzedzeniem co najmniej jednego miesiąca przed wprowadzeniem
                tych zmian w życie oraz zostanie dostarczona Abonentowi, który
                udostępnił swoje dane za pośrednictwem poczty elektronicznej na
                wskazany w tym celu adres poczty elektronicznej. Abonent jest
                uprawniony do wypowiedzenia Umowy ze skutkiem na dzień wejścia w
                życie wprowadzanych zmian. Brak wypowiedzenia Umowy w tym trybie
                oznacza przyjęcie przez Abonenta bez zastrzeżeń wszystkich zmian
                Umowy, w tym zawartych w Regulaminie lub w Cenniku.
              </li>
              <li>
                Operator dokłada wszelkich starań, aby faktury zawierały
                prawidłowe dane Abonenta, o ile zostały one prawidłowo
                przekazane Operatorowi. W przypadku powiadomienia Operatora o
                zmianach danych w terminie uniemożliwiającym wprowadzenie zmian
                w fakturach za dany Okres Rozliczeniowy Operator wystawi notę
                korygującą.
              </li>
              <li>
                Jeśli Abonent uruchomi usługę Nagrywania Rozmów Operator
                przechowuje nagrania połączeń przez okres 6 miesięcy.
                Odsłuchiwanie i pobieranie nagrań jest bezpłatne. Po upływie 6
                miesięcy od momentu odbycia rozmowy, nagranie jest
                archiwizowane. Zarchiwizowane nagrania przechowywane są przez
                cały okres trwania Umowy. Na życzenie Abonenta istnieje
                możliwość wcześniejszego usunięcia nagrania z archiwum.
                Odpowiedzialność za poinformowanie uczestników rozmów o
                nagrywaniu spoczywa na Abonencie. Istnieje możliwość kopiowania
                nagrań na wskazany przez Abonenta serwer FTP (opłata zgodna z
                Cennikiem). Konfiguracja usługi odbywa się poprzez Panel
                Administracyjny.
              </li>
              <li>
                Wysokość rabatów oraz warunki promocyjne ustalane są
                indywidualnie dla każdego klienta i określane w Umowie o
                świadczenie usług.
              </li>
            </ol>
          </div>
          <div>
            <h3>§ 7. ODPOWIEDZIALNOŚĆ OPERATORA</h3>
            <ol>
              <li>
                Abonent przyjmuje do wiadomości i akceptuje, że usługa VoIP nie
                jest tożsama z usługą telefonii konwencjonalnej. Z uwagi na
                aktualny stopień rozwoju technologicznego oraz cechy dostępnych
                rozwiązań technicznych odnoszących się m.in. do przepustowości
                oraz stabilności łączy internetowych, w określonych przypadkach
                mogą występować ograniczenia usług zapewnianych przez Operatora,
                mogą być związane z zakresem lub jakością dostępnego połączenia.
                Konsekwencje wcześniej wymienionych ograniczeń nie stanowią
                niewykonania lub nienależytego wykonania Umowy.
              </li>
              <li>
                POLTEL nie ponosi odpowiedzialności, jeżeli niewykonanie lub
                nienależyte wykonanie Umowy nastąpiło wskutek Siły Wyższej,
                działania osoby trzeciej, za którą POLTEL nie ponosi
                odpowiedzialności lub niezachowania przez Abonenta przepisów
                bądź postanowień Regulaminu lub powszechnie obowiązujących
                przepisów prawa.
              </li>
              <li>
                Warunkiem świadczenia przez Operatora usługi najwyższej jakości
                jest przestrzeganie przez Abonenta postanowień podjętych w
                Załączniku Technicznym dołączonym do Umowy.
              </li>
              <li>
                Operator nie ponosi odpowiedzialności za:{" "}
                <ol>
                  <li>
                    opóźnienia, obniżoną jakość lub przerwy transmisji
                    wynikające z właściwości łącza internetowego Abonenta;
                  </li>
                  <li>
                    uszkodzenia infrastruktury telekomunikacyjnej lub
                    energetycznej będące następstwem zdarzeń losowych lub
                    spowodowanych przez Abonenta;
                  </li>
                  <li>
                    ochronę danych przekazywanych i odbieranych przez Abonenta,
                    o ile wyżej wymieniony obowiązek nie wynika z przepisów
                    prawa powszechnie obowiązującego;
                  </li>
                  <li>
                    szkody wynikające z błędnego lub niepełnego podania danych
                    przez Abonenta;
                  </li>
                  <li>
                    problemy techniczne, lub problemy związane z jakością
                    połączeń wynikające z nieprzestrzegania przez Abonenta
                    postanowień Załącznika Technicznego dołączonego do Umowy;
                  </li>
                  <li>bezpieczeństwo infrastruktury telefonicznej Abonenta;</li>
                </ol>
              </li>
              <li>
                Operator nie gwarantuje dostępu do połączeń audiotekstowych
                (SMS).
              </li>
              <li>
                POLTEL nie ponosi odpowiedzialności za błędną konfigurację Usług
                wykonaną przez Abonenta, w szczególności POLTEL nie odpowiada za
                błędne połączenie z numerem alarmowym, jeżeli Abonent wskazał
                błędną lokalizację Zakończenia Sieci lub używa Urządzenia
                innego, niż wskazane.
              </li>
              <li>
                POLTEL nie ponosi odpowiedzialności za przekazywane przez
                Abonenta dane, z uwagi na fakt, iż nie jest inicjatorem
                transmisji, nie wybiera odbiorcy danych oraz nie usuwa albo nie
                modyfikuje danych będących przedmiotem transmisji.
              </li>
              <li>
                POLTEL nie ponosi odpowiedzialności za nieuprawnione
                skorzystanie z Usług przez podmiot inny niż Abonent. Za
                korzystanie z Usług odpowiada wyłącznie Abonent. Abonent
                zobowiązany jest zabezpieczyć na własny koszt dostęp do Usług w
                taki sposób, aby mogły z niej korzystać wyłącznie osoby
                upoważnione, w szczególności poprzez wprowadzenie i zachowanie w
                poufności stosownego loginu i hasła, oprogramowanie
                zabezpieczające przed atakiem poprzez sieć, a także inne
                zabezpieczenia informatyczne i fizyczne.
              </li>
              <li>
                POLTEL nie jest zobowiązany do sprawdzania danych
                przekazywanych, przechowywanych lub udostępnianych POLTEL przez
                Abonenta. Wyłączenie odpowiedzialności POLTEL obejmuje także
                automatyczne i krótkotrwałe pośrednie przechowywanie
                transmitowanych danych Abonenta, jeżeli działanie to ma
                wyłącznie na celu przeprowadzenie transmisji, a dane nie są
                przechowywane dłużej, niż jest to w zwykłych warunkach konieczne
                dla zrealizowania transmisji.
              </li>
              <li>
                Operator nie prowadzi informacji o numerach telefonicznych
                Abonentów Usługi POLTEL.
              </li>
              <li>
                Operator zastrzega sobie prawo do ewentualnych przewidzianych
                przerw konserwacyjnych. Każdorazowo zawiadomi Abonentów o
                planowanych przerwach mailowo lub na stronie internetowej:
                https://e-poltel.pl z wyprzedzeniem co najmniej 3-dniowym.
              </li>
              <li>
                Operator ponosi odpowiedzialność za niewykonanie lub nienależyte
                wykonanie U sług podlegających opłacie, na zasadach określonych
                przepisami prawa z wyłączeniem ewentualnych utraconych przez
                Abonenta korzyści.
              </li>
            </ol>
          </div>
          <div>
            <h3>§ 8. ZOBOWIĄZANIA ABONENTA</h3>
            <ol>
              <li>
                Abonent odpowiada za wszystkie zrealizowane Usługi z jego
                urządzenia, niezależnie od tego, kto zlecał Usługę lub z niej
                korzystał.
              </li>
              <li>
                Abonent odpowiada za bezpieczeństwo własnej infrastruktury
                telefonicznej, z włączeniem terminali VoIP. Straty finansowe i
                inne powstałe w wyniku braków w zabezpieczeniu infrastruktury
                telefonicznej ponosi Abonent.
              </li>
              <li>
                Abonent jest zobowiązany do terminowego dostarczania
                potwierdzonych, wiarygodnych informacji oraz danych, niezbędnych
                dla POLTEL w celu właściwego świadczenia Usług.
              </li>
              <li>
                Abonent jest zobowiązywany podać i w wypadku zmiany aktualizować
                dane Zakończenia Sieci.
              </li>
              <li>
                Abonent jest zobowiązany wykorzystywać Usługi POLTEL wyłącznie w
                celach akceptowanych przez prawo. W związku z tym, nie ma prawa:
                <ol>
                  <li>
                    przechwytywać lub monitorować, a także naruszać proces
                    wymiany informacji lub wprowadzać w nim zmiany, jeżeli nie
                    jesteś stroną danego procesu wymiany;
                  </li>
                  <li>
                    masowo rozpowszechniać jakiekolwiek informacje handlowe,
                    których rozpowszechnianie zostało zakazane przez
                    obowiązujące przepisy prawne;
                  </li>
                  <li>
                    wykorzystywać swój Panel Klienta lub POLTEL w sposób
                    niezgodny z regulaminem;
                  </li>
                  <li>
                    wykorzystywać jakiekolwiek materiały zniesławiające,
                    obsceniczne, nieodpowiednie dla dzieci, lub które w
                    jakikolwiek sposób naruszają prawa autorskie, prawa
                    własności intelektualnej, znaki towarowe, lub w inny sposób
                    szkodliwe i nieakceptowalne.
                  </li>
                </ol>
              </li>
              <li>
                {" "}
                Abonent będzie uiszczał z tytułu Usług opłaty zgodnie z
                postanowieniami określonymi w Umowie.
              </li>
              <li>
                Abonent ma obowiązek zapewniać posiadanie przez siebie wszelkich
                niezbędnych zatwierdzeń, zezwoleń lub upoważnień w zakresie
                Usług realizowanych za pośrednictwem POLTEL, w tym Usług
                oferowanych swoim klientom końcowym. Abonent odpowiada za treść,
                jakość oraz dostawę Usług oferowanych swoim klientom końcowym
                oraz ma obowiązek zapewniać, aby usługi te były zgodne z
                przepisami prawa. W razie konieczności Abonent zobowiązuje się
                do dostarczenia wszystkich niezbędnych dokumentów na
                potwierdzenie możliwości korzystania z Usług.
              </li>
              <li>
                Niedozwolonym jest nadużywanie połączeń przez Abonenta w sposób
                niezgodny z przedstawioną ofertą. W konkretnej ofercie nie można
                łączyć usług – wymagana jest podpisana nowa umowa. Operator ma
                prawo, po pisemnym uprzedzeniu klienta i wyznaczeniu terminu na
                podpisanie nowej umowy, wyłączyć usługi połączeń wychodzących w
                przypadku nadużywania oferty na wszystkich numerach w poprzednio
                podpisanej umowie. Ma to zastosowanie w przypadku podpisania
                umowy na abonament bez limitu i używania go do usług typu call
                center. Operator po wykryciu takiego nadużycia, może zablokować
                wszystkie połączenia na numerach w podpisanej umowie, do czasu
                podpisania nowej umowy z Abonenta.
              </li>
            </ol>
          </div>
          <div>
            <h3>§ 9. POMOC TECHNICZNA</h3>
            <ol>
              <li>
                Obsługa serwisowa obejmuje czynności zmierzające do zapewnienia
                stałej dostępności usługi VoIP. Jeśli nie zaznaczono inaczej,
                usługa zostanie uruchomiona na łączach internetowych klienta.
              </li>
              <li>
                Operator zapewnia Abonentowi dostęp do telefonicznej informacji
                w zakresie prawidłowego działania urządzeń i usługi pod numerem
                telefonu: (71) 777-66-00, w godzinach 08:00-17:00.
              </li>
              <li>
                Operator zobowiązuje się do usunięcia zgłoszonych Awarii
                niezwłocznie, nie później, niż do 24 godzin od zgłoszenia
                Awarii.
              </li>
              <li>
                W przypadku braku możliwości usunięcia Awarii w powyżej
                wskazanym terminie, Abonent uzyskuje prawo do zryczałtowanego
                odszkodowania w wysokości 1/30 miesięcznego abonamentu (netto)
                za każde kolejne 24 godziny przerwy w dostawie Usługi.
              </li>
              <li>
                W przypadku przerw w świadczeniu Usług VoIP przekraczających 3
                pełne dni robocze w okresie rozliczeniowym, wynikających z winy
                Operatora, Abonent ma prawo odstąpić od Umowy.
              </li>
              <li>
                Jeśli nie zaznaczono inaczej w Umowie w przypadku wezwania
                technika serwisu do awarii, która nie leży po stronie Operatora,
                Operator ma prawo naliczyć opłatę zgodnie z Cennikiem.
              </li>
            </ol>
          </div>
          <div>
            <h3>§ 10. POSTĘPOWANIE REKLAMACYJNE</h3>
            <ol>
              <li>
                Abonentowi przysługuje prawo do wniesienia reklamacji dotyczącej
                jakości świadczonych usług lub wysokości naliczonych opłat.
              </li>
              <li>
                Reklamacje należy zgłaszać na piśmie na adres korespondencyjny:
                POLTEL, ul. Sportowa 20, 56-120 Brzeg Dolny, telefonicznie: 71
                777 66 00 lub za pośrednictwem poczty elektronicznej na adres:
                serwis@e-poltel.pl.
              </li>
              <li>
                Reklamacja powinna zawierać:{" "}
                <ol>
                  <li>
                    imię i nazwisko lub pełną nazwę firmy oraz miejsce
                    zamieszkania lub adres siedziby Abonenta;
                  </li>
                  <li>określenie przedmiotu reklamacji;</li>
                  <li>
                    przedstawienie okoliczności uzasadniających reklamację;
                  </li>
                  <li>numer „Umowy o świadczenie usług VoIP”;</li>
                  <li>datę i przybliżoną godzinę wystąpienia problemu;</li>
                  <li>
                    wskazanie numeru telefonu, z którego nie udało się nawiązać
                    połączenia oraz numeru telefonu, z którym nie udało się
                    nawiązać połączenia (w przypadku reklamacji połączeń);
                  </li>
                  <li>
                    wysokość kwoty odszkodowania lub innej należności (w
                    przypadku gdy Abonent żąda ich wypłaty);
                  </li>
                  <li>
                    numer konta bankowego lub adres właściwy do wypłaty
                    odszkodowania lub innej należności albo wniosek o ich
                    zaliczenie na poczet przyszłych płatności (w przypadku gdy
                    Abonent żąda ich wypłaty);
                  </li>
                  <li>
                    podpis Abonenta – w przypadku reklamacji złożonej w formie
                    pisemnej;
                  </li>
                </ol>
              </li>
              <li>
                W przypadku, gdy zgłoszenie reklamacyjne zawiera braki
                uniemożliwiające jego rozpoznanie lub wypłatę świadczeń
                należnych Abonentowi, Operator niezwłocznie wzywa Abonenta do
                uzupełnienia zgłoszenia, określając termin nie krótszy niż 7 dni
                i wskazuje informacje wymagające uzupełnienia. Po bezskutecznym
                upływie wyznaczonego terminu reklamację pozostawia się bez
                rozpoznania, o czym informuje się Abonenta.
              </li>
              <li>
                Reklamacje złożone bez danych umożliwiających identyfikację,
                pozostawia się bez rozpoznania.
              </li>
              <li>
                W sprawach nieuregulowanych w tej umowie do postępowania
                reklamacyjnego stosuje się przepisy ustawy „Prawo
                Telekomunikacyjne”.
              </li>
              <li>
                Zgłoszenie reklamacji co do wysokości opłat określonych na
                fakturze nie zwalnia Abonenta od obowiązku zapłaty reklamowanej
                kwoty.
              </li>
              <li>
                Operator potwierdza przyjęcie reklamacji na piśmie za
                pośrednictwem poczty elektronicznej na adres wskazany przez
                Abonenta przy zawarciu Umowy lub podany w zgłoszeniu
                reklamacyjnym.
              </li>
              <li>
                Operator udziela odpowiedzi na reklamację w formie pisemnej w
                terminie 30 dni od jej wniesienia.
              </li>
            </ol>
          </div>
          <div>
            <h3>§ 11. OCHRONA DANYCH OSOBOWYCH</h3>
            <ol>
              <li>
                Dane osobowe przetwarzane są w celu obsługi i realizacji
                zamówień, prawidłowego świadczenia usług telekomunikacyjnych w
                celach rachunkowych i podatkowych oraz w celu wypełnienia
                ciążących na Administratorze obowiązków prawnych (m.in. z ustawy
                Prawo telekomunikacyjne).
              </li>
              <li>
                Administratorem danych jest Poltel Sp. z o.o. Sp. k. z siedzibą
                w Brzegu Dolnym (56-120) przy ul. Sportowej 20. Aby skontaktować
                się z nami, wyślij wiadomość pod e-mail: biuro@epoltel.pl lub
                zadzwoń pod numer tel. 71 777 66 00.
              </li>
              <li>
                Gromadzone dane dotyczą: imię, nazwisko/nazwa firmy lub urzędu;
                adres; numer telefonu; adres zakończenia sieci; adres poczty
                elektronicznej przeznaczonej do wysyłki faktur VAT, imię,
                nazwisko, numer telefonu i adres poczty elektronicznej osoby
                kontaktowej.
              </li>
              <li>
                Inspektorem Ochrony Danych jest Poltel.Sp z o.o. Sp. K. . Aby
                skontaktować się z nim, wyślij wiadomość pod e-mail:
                biuro@e-poltel.pl lub zadzwoń pod numer tel. 71 777 66 00.
              </li>
              <li>
                Odbiorcami danych osobowych są obsługujące administratora firmy
                kurierskie, hostingodawca, operator płatności i zewnętrzna
                obsługa księgowa.
              </li>
              <li>
                Dane będą przechowywane w czasie niezbędnym do zrealizowania
                celu, maksymalnie przez okres 10-stu lat od daty zakończenia
                świadczenia usług (dane służące do obsługi i realizacji
                zamówienia) oraz 6-ciu lat (informacje rozliczeniowe)
              </li>
              <li>
                Osobie, której dane dotyczą przysługuje prawo dostępu do swoich
                danych, ich sprostowania, usunięcia, ograniczenia przetwarzania,
                wniesienia sprzeciwu wobec ich przetwarzania, prawo do
                przenoszenia danych, a także prawo wniesienia skargi do organu
                nadzorczego. Dane osobowe są przetwarzane na podstawie art. 6
                pkt 1 lit. b) i f) RODO.
              </li>
              <li>
                Podanie danych jest dobrowolne, ale stanowi warunek zawarcia
                umowy. Niepodanie tych danych uniemożliwi jej zawarcie.
              </li>
              <li>
                Jeśli Abonent uruchomi usługę Nagrywania Rozmów Operator ma
                dostęp do przechowywanych nagrań. Dane te nie będą przetwarzane
                bez wiedzy Abonenta, z wyjątkiem sytuacji opisanych w Prawie
                Telekomunikacyjnym Art. 179 ust. 3.
              </li>
            </ol>
          </div>
          <div>
            <h3>§ 12. POSTANOWIENIA KOŃCOWE</h3>
            <ol>
              <li>
                Operator nie gwarantuje bezpieczeństwa przekazu w sieciach
                telekomunikacyjnych, w szczególności w sieci Internet.
              </li>
              <li>
                Operator ma prawo organizować promocje, zmieniające w
                wyznaczonym okresie zasady i warunki świadczenia Usług określone
                w powszechnie obowiązującym prawie polskim. Wszelkie spory będą
                rozstrzygane przez polski sąd powszechny właściwy miejscowo dla
                Operatora.
              </li>
              <li>
                W sprawach nieuregulowanych niniejszym Regulaminem będą miały
                zastosowanie przepisy prawa powszechnie obowiązującego, w
                szczególności kodeksu cywilnego i ustawy Prawo
                telekomunikacyjne.
              </li>
              <li>
                Regulamin w powyższym brzmieniu, wszedł w życie z dniem 1
                czerwca 2020 r. Regulamin może być zmieniony w każdym czasie
                poprzez umieszczenie zmiany Regulaminu na stronie
                https://e-poltel.pl
              </li>
            </ol>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Regulamin" />
