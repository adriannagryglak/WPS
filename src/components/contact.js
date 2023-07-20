import React from 'react'
import ContactForm from './contactForm';
import Phone from "../images/svg/phone.svg";
import Mail from "../images/svg/mail.svg";

export default function Contact() {

  return (
    <section className='contact container'>

        <div className='contact-container'>
            <ContactForm />
            <div className='title-container'>
                <h1>skontaktujmy się</h1>
                <div className='gold-stripe'></div>
                <p>Potrzebujesz pomocy? Skorzystaj z naszego formularza kontaktowego, napisz e-mail lub zadzwoń. Nasz zespół jest gotowy, by Cię wesprzeć i rozwiązać wszelkie problemy.</p>
                <div className='contact-icons-container'>
                    <a href='tel:+48503450896'><Phone /></a>
                    <a href='mailto:kontakt@extrabox.com.pl'><Mail /></a>
                </div>
            </div>
        </div>
        
    </section>
  )
}
