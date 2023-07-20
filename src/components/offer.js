import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { CustomCursorContext } from './customCursorContext'

export default function Offer() {

  const { setType } = useContext(CustomCursorContext);

  return (
    <section className='container offer'>
      <p >
        Nasza wypożyczalnia to nie tylko miejsce, gdzie znajdziesz sprawną i bezpieczną flotę pojazdów, ale również zespół doświadczonych specjalistów, którzy zawsze służą radą i pomocą. Nie wiesz, jaki pojazd będzie najlepszy dla Twojego ładunku? Spokojnie, doradzimy Ci, co najlepiej spełni Twoje oczekiwania. Jednym słowem- nie ma się do czego przyczepić.
      </p>
      <div onMouseEnter={() => { setType('hovered') }} onMouseLeave={() => { setType('default') }}>
        <Link className='link-container'>
          zobacz całą ofertę
          <div className="gold-stripe"></div>
        </Link>
      </div>






    </section>
  )
}
