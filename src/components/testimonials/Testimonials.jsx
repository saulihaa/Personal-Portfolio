import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
// import AVTR2 from '../../assets/avatar2.jpg'
// import AVTR3 from '../../assets/avatar3.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    avatar:AVTR1,
    name:'The Complete HTML5 Course: From Beginning to Expert',
    by:'Offered By :  Creative Online School',
    head: 'WHAT I HAVE LEARNT:',
    review:'Will be proficient on HTML5 from Basic to Advanced .Will be able to create amazing site using HTML5 .Will be able to work with Audio and Video in HTML5 .Hands on experience on Data Input and Buttons. Hands on experience on Absolute and Relative Links .Hands on experience on Tags and Lists .Basics and Advanced Concepts on CSS. Basics and Advanced Concepts of jQuer' ,
    cert:'https://www.udemy.com/certificate/UC-d3618ab2-1f69-4fd3-83b2-ecf360cc0b7c/'
  },
  {
    avatar:AVTR1,
    name:'Complete Modern JavaScript Firebase BootCamp the beginner',
    by:'Offered By :  Creative Online School',
    head: 'WHAT I HAVE LEARNT:',
    review:'Go from a total beginner to an advanced JavaScript developer .Asynchronous JavaScript: The event loop, promises, async/await, AJAX and APIs .OOP including ES5 prototypes & ES6 classes .ES6 features like arrow functions, classes, default and rest parameters, etc.',
    cert:'https://www.udemy.com/certificate/UC-94e9f1b3-6c01-4c96-bb0e-274b2e725e94/'


  },

{
  avatar:AVTR1,
  name:'Python And Flask Framework Complete Course For Beginners',
  by:'Offered By :  Creative Online School',
  head: 'WHAT I HAVE LEARNT:',
  review:'Python Basics To Advanced Concepts .Go from Beginner to Advanced in Python Programming by learning all of the basics to Object Orientated Programming.Write scripts for general productivity tasks Read and comprehend Python code Gain knowledge in regard to general programming concepts. Use variables to store, retrieve and calculate information .Utilize core programming tools such as functions and loops .Flask Framework Basics To Advanced .Flask Framework - Variable Rules, URL Building , HTTP Method' ,
  cert:'https://www.udemy.com/certificate/UC-849df06c-26e9-4492-b216-d3bc46ed70df/'
},
{
  avatar:AVTR1,
  name:'The Complete Google Forms Course - Sending & Analyzing Forms',
  by:'Offered By :  Creative Online School',
  head: 'WHAT I HAVE LEARNT:',
  review:'Design custom forms to easily and efficiently collect information .Set up data filters and validations to better phrase questions. Interpret & analyze collected responses .Transform ordinary forms to quizzes for educational use .Distribute forms to any audience through multiple ways',
  cert:'https://www.udemy.com/certificate/UC-4312a6b9-8ce6-4072-a921-4bbd71078d38/'
}
]

const testimonials = () => {
  return (
    <section id='testimonials'>
    <h5>Course</h5>
    <h2>Certifications</h2>
    <Swiper className="container testimonials__container"
     // install Swiper modules
     modules={[ Pagination]}
     spaceBetween={40}
     slidesPerView={1}
     pagination={{ clickable: true }}
     >
      {
        data.map(({avatar,name,by,head,review,cert}, index)=>{
          return (
            <SwiperSlide key={index} className='testimonial'>
        <div className="client__avtar">
          <img src={avatar} alt="" />
          </div>
          <h5 className='client__name'>{name}</h5>
          <p>{by}</p>
            <small className='client__review'>{head}</small>
            <small className='client__review'>{review} </small>
            <h4> <a href={cert} target="__blank">Show Credentials</a></h4>
      </SwiperSlide>
          )
        })
      }
     
    </Swiper>
  </section>
  )
}

export default testimonials