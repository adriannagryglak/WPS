import * as React from "react"
import { Link } from "gatsby"
import "./navbar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => (
  <nav className="header-navbar">
    <ul>
        <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
        <li><Link>abonament bez limitu</Link></li>
        <li><Link>centrale ip pbx</Link></li>
        <li><Link>nagrywanie rozmów</Link></li>
        <li><Link>telekonferencje</Link></li>
    </ul>
    <div className="logo">POLTEL</div>
  </nav>
)

export default Navbar
