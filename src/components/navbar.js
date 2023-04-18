import * as React from "react"
import { Link } from "gatsby"
import "./navbar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => (
  <nav className="header-navbar">
    <ul>
        <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
        <li><Link to="/abonament-bez-limitu" activeClassName="active-link">abonament bez limitu</Link></li>
        <li><Link to="/centrale-ip-box" activeClassName="active-link">centrale ip pbx</Link></li>
        <li><Link to="/nagrywanie-rozmow" activeClassName="active-link">nagrywanie rozmów</Link></li>
        <li><Link to="/telekonferencje" activeClassName="active-link">telekonferencje</Link></li>
    </ul>
    <div className="logo">
      <Link to="/">POLTEL</Link>
    </div>
  </nav>
)

export default Navbar
