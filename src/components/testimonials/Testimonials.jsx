import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR4 from '../../assets/hk1.png'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    avatar:AVTR4,
    name:'React (Basic) Certificate',
    by:'Certified By : HackerRank',
    head: 'Skills Certification Test:',
    review:'It covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation.',
    cert:'https://www.hackerrank.com/certificates/f4fc9665963d'
  },
  {
    avatar:AVTR4,
    name:'JavaScript (Basic) Certificate',
    by:'Certified By : HackerRank',
    head: 'Skills Certification Test:',
    review:'It covers topics like, Functions, Currying, Hoisting, Scope, Inheritance, Events and Error Handling.',
    cert:'https://www.hackerrank.com/certificates/a49d7d731319'
  },
  {
    avatar:AVTR4,
    name:'SQL (Basic) Certificate ',
    by:'Certified By : HackerRank',
    head: 'Skills Certification Test',
    review:'It includes simple queries, relationships, and aggregators.',
    cert:'https://www.hackerrank.com/certificates/be62d2eee3ba'
  },
  {
    avatar:AVTR4,
    name:'Problem Solving (Basic) Certificate ',
    by:'Certified By : HackerRank',
    head: 'Skills Certification Test',
    review:'It covers basic topics of Data Structures (such as Arrays, Strings) and Algorithms (such as Sorting and Searching).',
    cert:'https://www.hackerrank.com/certificates/5d0902642c39'
  },

  {
    avatar:AVTR4,
    name:'CSS Certificate',
    by:'Certified By : HackerRank',
    head: 'Skills Certification Test',
    review:'It covers topics like exploring Cascading and Inheritance, exploring text styling fundamentals, understanding the use of layouts in CSS, understand the boxing of elements in CSS, among others.',
    cert:'https://www.hackerrank.com/certificates/5d0902642c39'
  },
  {
    avatar:AVTR1,
    name:'The Complete HTML5 Course',
    by:'Offered By :  Creative Online School',
    head: 'WHAT I HAVE LEARNT:',
    review:'It covers topics like to create amazing site using HTML5 , to work with Audio and Video in HTML5 ,Hands on experience on Data Input and Buttons,Hands on experience on Absolute and Relative Links,Hands on experience on Tags and Lists.' ,
    cert:'https://www.udemy.com/certificate/UC-d3618ab2-1f69-4fd3-83b2-ecf360cc0b7c/'
  },
  {
    avatar:AVTR1,
    name:'Complete Modern JavaScript Firebase BootCamp',
    by:'Offered By :  Creative Online School',
    head: 'WHAT I HAVE LEARNT:',
    review:'Go from a total beginner to an advanced JavaScript developer .Asynchronous JavaScript: The event loop, promises, async/await, AJAX and APIs .OOP including ES5 prototypes & ES6 classes .ES6 features like arrow functions, classes, default and rest parameters, etc.',
    cert:'https://www.udemy.com/certificate/UC-94e9f1b3-6c01-4c96-bb0e-274b2e725e94/'


  },

{
  avatar:AVTR1,
  name:'Python And Flask Framework Complete',
  by:'Offered By :  Creative Online School',
  head: 'WHAT I HAVE LEARNT:',
  review:'Write scripts for general productivity tasks Read and comprehend Python code Gain knowledge in regard to general programming concepts. Use variables to store, retrieve and calculate information,Utilize core programming tools.' ,
  cert:'https://www.udemy.com/certificate/UC-849df06c-26e9-4492-b216-d3bc46ed70df/'
},
{
  avatar:AVTR1,
  name:'The Complete Google Forms Course',
  by:'Offered By :  Creative Online School',
  head: 'WHAT I HAVE LEARNT:',
  review:'Set up data filters and validations to better phrase questions. Interpret & analyze collected responses .Transform ordinary forms to quizzes for educational use .Distribute forms to any audience through multiple ways',
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