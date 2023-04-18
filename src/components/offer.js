import React from "react"
import "./offer.scss"
import { Link } from "gatsby"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { faPhoneVolume, faHeadset, faServer, faDesktop, faUserTie, faUsersLine, faBuilding } from '@fortawesome/free-solid-svg-icons'
import Phone from "../images/svg/phone.svg"
import Server from "../images/svg/server.svg"
import Headset from "../images/svg/head.svg"
import Desktop from "../images/svg/desktop.svg"
import User from "../images/svg/buisness.svg"
import Users from "../images/svg/users.svg"
import Building from "../images/svg/build.svg"
import { useInView, animated } from "react-spring"

export default function Offer() {
  const [ref, inView] = useInView()

  return (
    <section className="offer container">
      <h1>poznaj naszą ofertę</h1>
      <div className="offer-container">
        {/* <FontAwesomeIcon icon={faPhoneVolume} className='offer-icon'/> */}
        <Link className="offer-item" to="/abonament-bez-limitu">
          <Phone className="offer-icon" />
          <h3>
            abonament <br />
            bez limitu
          </h3>
        </Link>

        {/* <FontAwesomeIcon icon={faServer} className='offer-icon'/> */}
        <Link className="offer-item" to="/centrale-ip-box">
          <Server className="offer-icon" />
          <h3>
            centrale <br />
            ip pbx
          </h3>
        </Link>

        {/* <FontAwesomeIcon icon={faHeadset} className='offer-icon'/> */}
        <Link className="offer-item" to="/nagrywanie-rozmow">
          <Headset className="offer-icon" />
          <h3>nagrywanie rozmów</h3>
        </Link>

        {/* <FontAwesomeIcon icon={faDesktop} className='offer-icon'/> */}
        <Link className="offer-item" to="/telekonferencje">
          <Desktop className="offer-icon" />
          <h3>telekonferencje</h3>
        </Link>

        {/* <FontAwesomeIcon icon={faUserTie} className='offer-icon'/> */}
        <Link className="offer-item" to="/klient-indywidualny">
          <User className="offer-icon" />
          <h3>
            klient <br />
            indywidualny
          </h3>
        </Link>

        {/* <FontAwesomeIcon icon={faUsersLine} className='offer-icon'/> */}
        <Link className="offer-item" to="/klient-biznesowy">
          <Users className="offer-icon" />
          <h3>
            klient <br />
            biznesowy
          </h3>
        </Link>

        {/* <FontAwesomeIcon icon={faBuilding} className='offer-icon'/> */}
        <Link className="offer-item" to="/urzedy-i-instytucje">
          <Building className="offer-icon" />
          <h3>
            urzędy i <br />
            instytucje
          </h3>
        </Link>
      </div>
      <animated.p ref={ref} className="offer-caption"         style={{
          opacity: inView ? 1 : 0,
          transition: "1s ease",
        }}>
        Oferta w ramach usług serwisu systemów telekomunikacyjnych, obejmuje
        instalację i konfigurację central abonenckich i innych urządzeń, systemy
        taryfikacji i łączności bezprzewodowej, okablowanie strukturalne, bramki
        GSM, bramki VoIP i inne. Ponadto świadczymy usługi konserwacji i pełnego
        wsparcia technicznego. Wszystkie wyżej wymienione usługi świadczymy dla
        sprzętu następujących producentów: Slican, Platan, Siemens, Alcatel,
        Panasonic, Cisco, Linksys, Yealink, Grandstream i wielu innych.
      </animated.p>
    </section>
  )
}
