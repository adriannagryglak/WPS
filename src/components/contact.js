import React from "react"
import "./contact.scss"
import { Formik, Form, Field } from 'formik';
//import { basicSchema } from "../schemas";
import { useState } from 'react';

export default function Contact() {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [agree, setAgree] = useState(false);

  const onSubmit = async (values, actions) =>{

    fetch("https://formsubmit.co/ajax/adrianna.juda@live.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        imię : values.name,
        email: values.email,
        telefon: values.tel ? values.tel : "nie podano",
        wiadomość: values.message,
    })
})
    .then(response => response.json())
    .then(actions.resetForm())
    .then(setIsSubmitted(true))
    .catch(error => {
      actions.resetForm()
      setIsSubmitted(false);
      setError(error);
      });
  }

  return (
    <section className="contact container">
      <h1>skontaktuj się z nami</h1>
      <p>
        Jeśli nasuwa Ci się jakieś pytanie, chciałbyś podjąć z nami współpracę
        lub dołączyć do naszego zespołu, napisz do nas! Chcielibyśmy Cię poznać!
      </p>
      <Formik 
      initialValues={{
        email: "", 
        name: "", 
        tel: "", 
        message: "", 
        agreement: false,
      }} 
      //validationSchema={basicSchema} 
      onSubmit={onSubmit}>
      {({errors, touched, isSubmitting})=>(
        <Form className="contact-form" 
        // action="https://formsubmit.co/piotr@czyrski.pl" method="POST" 
        >
        
            <label htmlFor="name" className='hidden-accessible'>Imię lub nazwa firmy</label>
            <Field className={errors.name && touched.name ? "error":""} id="name" type="text" name="name" placeholder="imię lub nazwa firmy" />
            {errors.name && touched.name && <p className='error-paragraph'>{errors.name}</p>}
    
                  <label htmlFor="tel" className='hidden-accessible'>telefon</label>
                  <Field className={errors.tel && touched.tel ? "error":""} id="tel" type="tel" name="tel" placeholder="telefon" />
                  {errors.tel && touched.tel && <p className='error-paragraph'>{errors.tel}</p>}

            <label htmlFor="email" className='hidden-accessible' >adres e-mail</label>
            <Field className={errors.email && touched.email ? "error":""} id="email"  type="email" name="email" placeholder="adres e-mail" />
            {errors.email && touched.email && <p className='error-paragraph'>{errors.email}</p>}
            <label htmlFor="mess" className='hidden-accessible'>wiadomość</label>
            <Field className={errors.message && touched.message ? "error":""} as="textarea" id="mess" name="message" placeholder="wiadomość" />
            {errors.message && touched.message && <p className='error-paragraph'>{errors.message}</p>}

          
        
            <button disabled={isSubmitting} type="submit">wyślij</button>
            {isSubmitted && <p className='submitted-paragraph'>Dziękujemy za wysłanie wiadomości!</p>}
            {error && <p className='submitted-paragraph'>Przepraszamy, coś poszło nie tak. Spróbuj wysłać wiadomość jeszcze raz</p>}
        </Form>
      )} 
    </Formik> 
    </section>
  )
}
