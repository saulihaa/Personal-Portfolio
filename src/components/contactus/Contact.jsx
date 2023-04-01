import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_82yshbp', 'template_u4qlbvb', form.current, 'VKSqm0tO3IMmpg6uf')
      e.target.reset()
      
  };
  const notify = () => toast.info("Message sent!",{
    theme: "dark",
  });
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>gangoosauliha@gmail.com</h5>
          <a href="mailto:gangoosauliha@gmail.com" target="_blank"> Send a message</a>
        </article>
        <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Gangoo Sauliha</h5>
          <a href="https://m.me/sauliha.shakeel.3" target="_blank"> Send a message</a>
        </article>
        <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+91 6005025385</h5>
          <a href="https://wa.me/+916005025385" target="_blank"> Send a message</a>
        </article>
        </div>
        {/* END IF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className='btn btn-primary' onClick={notify}>Send Message</button>

        </form>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Contact