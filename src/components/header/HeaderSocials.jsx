import React from 'react'
import {BsLinkedin, BsGithub,BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/JuanCamiloPuerta'target='blank'><BsLinkedin color='var(--primary-color)' /></a>
        <a href='https://github.com/Juan-Jc'target='blank'><BsGithub color='var(--primary-color)' /></a>
        <a href='https://instagram.com/jotacemusic/'target='blank'><BsInstagram color='var(--primary-color)' /></a>
    </div>
  )
}

export default HeaderSocials