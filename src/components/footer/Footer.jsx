import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'
const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>SAULIHA</a>
      <ul className='permalinks'>
         <li><a href="#about">About</a></li>
         <li><a href="#experience">Experirnce</a></li>
         <li>
         <a href="#services">Services</a>
         </li>
         <li>
         <a href="#portfolio">Portfolio</a>
         </li>
         <li>
         <a href="#testimonials">Testimonials</a>
         </li>
         <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/sauliha.shakeel.3" target='_blank'> <FaFacebookF/></a>
        <a href="https://www.instagram.com/sau_liha_shakeel/" target='_blank'> <BsInstagram/></a>
        <a href="https://twitter.com"> <FaTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small> &copy;SAULIHA SHAKEEL. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default footer