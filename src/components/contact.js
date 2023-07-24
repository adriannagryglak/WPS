import React from 'react'
import ContactForm from './contactForm';
import Phone from "../images/svg/phone.svg";
import Mail from "../images/svg/mail.svg";
import Map from "./map"
export default function Contact() {

  return (
    <section className='contact container'>

        <div className='contact-container'>
            <Map/>
            <div className='title-container'>
                <h1>znajdźmy się</h1>
                <div className='gold-stripe'></div>
                <p>Potrzebujesz pomocy? Skorzystaj z naszego formularza kontaktowego, napisz e-mail lub zadzwoń. Nasz zespół jest gotowy, by Cię wesprzeć i rozwiązać wszelkie problemy.</p>
                <div className='contact-icons-container'>
                    <a href='tel:+48503450896'><Phone /></a>
                    <a href='mailto:kontakt@extrabox.com.pl'><Mail /></a>
                </div>
                <ContactForm />
            </div>
        </div>

        <video>
          <source src="../assets/hero-video.mp4" type='video/mp4' />
        </video>
        
    </section>
  )
}
