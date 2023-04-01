import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import ME4 from '../../assets/me4.png'
// import ME5 from '../../assets/me5.jpeg'


import HeaderSocial from './HeaderSocial'
const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sauliha Shakeel</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA/>
        <HeaderSocial/>


        <div className="me">
          <img src= {ME4} alt="me" />
        </div>
        <a href="#contact " className='scroll__down'> Scroll Down</a>

      </div>
    </header>
  )
}

export default header