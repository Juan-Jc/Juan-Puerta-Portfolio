import React from 'react'
import './portfolio.css'
import IMG from '../../assets/color-palet.png'

const data = [
  {
  id: 1,
  title: 'This is a Portfolio Item Title',
  img: IMG,
  code: 'https://github.com',
  demo: 'https://github.com',
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