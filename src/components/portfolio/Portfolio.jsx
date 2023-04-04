import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

const data =[
{
  id:1,
  image: IMG1,
  title: 'E-Library Management System Using PHP',
  github: 'https://github.com/saulihaa/Elibrary',
  demo:'https://zamanlibrary.000webhostapp.com/'
},
{
  id:2,
  image: IMG2,
  title: 'Responsive User login System With Admin panel Using PHP',
  github: 'https://github.com/saulihaa/Login-system-with-admin',
  demo:'https://sauliha.000webhostapp.com/'
},
{
  id:3,
  image: IMG3,
  title: 'Food Delivery Responsive site',
  github: 'https://github.com/saulihaa/myOnlineMeal',
  demo:'https://saulihaa.github.io/myOnlineMeal/'
},
{
  id:4,
  image: IMG4,
  title: 'Responsive Web Design',
  github: 'https://github.com/saulihaa/Responsive-site',
  demo:'https://saulihaa.github.io/Responsive-site/'
},
// {
//   id:5,
//   image: IMG5,
//   title: 'Portfolio',
//   github: 'https://github.com',
//   demo:'https://dribble.com'
// },
// {
//   id:6,
//   image: IMG6,
//   title: 'Portfolio',
//   github: 'https://github.com',
//   demo:'https://dribble.com'
// }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo})=>{
          return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github}className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default portfolio