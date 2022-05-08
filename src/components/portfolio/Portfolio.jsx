import React from 'react'
import './portfolio.css'
import IMG from '../../assets/Contador-clicks.png'
import IMG1 from '../../assets/testimonios-section.png'
import IMG2 from '../../assets/calculator.png'
import IMG3 from '../../assets/todolist.png'
import IMG4 from '../../assets/batatabit.png'
import IMG5 from '../../assets/animationland.png'


const data = [
  {
  id: 1,
  title: 'Click Counter',
  img: IMG,
  code: 'https://github.com/Juan-Jc/Click-counter',
  demo: 'https://juan-jc.github.io/Click-counter/',
  },
  {
  id: 2,
  title: 'Testimonials FreeCodeCampClone',
  img: IMG1,
  code: 'https://github.com/Juan-Jc/Componente-seccion-testimonios',
  demo: 'https://juan-jc.github.io/Componente-seccion-testimonios/',
  },
  {
    id: 3,
    title: 'Calculator',
    img: IMG2,
    code: 'https://github.com/Juan-Jc/Calculator',
    demo: 'https://juan-jc.github.io/Calculator/',
    },
    {
      id: 4,
      title: 'ToDoList',
      img: IMG3,
      code: 'https://github.com/Juan-Jc/TodoList',
      demo: 'https://juan-jc.github.io/TodoList/',
      },
      {
        id: 5,
        title: 'Batatabit MobileFirst',
        img: IMG4,
        code: 'https://github.com/Juan-Jc/Mobile-First',
        demo: 'https://juan-jc.github.io/Mobile-First/',
        },
        {
          id: 6,
          title: 'AnimationLand - Css Game',
          img: IMG5,
          code: 'https://github.com/Juan-Jc/Animationland',
          demo: 'https://juan-jc.github.io/Animationland/',
          },  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, title, img, code, demo}) => 
            {
              return (
                <article key={id} className="portfolio__item" >
                  <div className="portfolio__item-image">
                    <img src={img} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={code} className='btn' target='_blank'>Github Code</a>
                    <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                  </div>
                </article>
              )
            }
          )
        }
      </div>
    </section>
  )
}

export default Portfolio