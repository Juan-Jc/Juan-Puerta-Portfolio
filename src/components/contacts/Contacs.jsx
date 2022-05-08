import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin, BsGithub,BsInstagram} from 'react-icons/bs'


const Contacs = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon' />
          <h4>Email</h4>
          <h5>juan.puerta1994@gmail.com</h5>
          <a href="mailto: juan.puerta1994@gmail.com" target='_blank'> Send a message</a>
        </article>
        <article className="contact__option">
          <BsLinkedin className='contact__option-icon' />
          <h4>LinkedIn</h4>
          <h5>LinkedIn Profile</h5>
          <a href="https://linkedin.com/in/JuanCamiloPuerta" target='_blank'>Look my LinkedIn</a>
        </article>
        <article className="contact__option">
          <BsGithub className='contact__option-icon' />
          <h4>GitHub</h4>
          <h5>GitHub Profile</h5>
          <a href="https://github.com/Juan-Jc" target='_blank'>Look my Github</a>
        </article>
        <article className="contact__option">
          <BsInstagram className='contact__option-icon' />
          <h4>Instagram</h4>
          <h5>Instagram Profile</h5>
          <a href="https://instagram.com/jotacemusic/" target='_blank'>Send a message Ig</a>
        </article>
        </div>

      </div>
    </section>
  )
}

export default Contacs