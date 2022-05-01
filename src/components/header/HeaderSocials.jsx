import React from 'react'
import {BsLinkedin, BsGithub,BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com'target='blank'><BsLinkedin color='var(--primary-color)' /></a>
        <a href='https://github.com'target='blank'><BsGithub color='var(--primary-color)' /></a>
        <a href='https://instagram.com'target='blank'><BsInstagram color='var(--primary-color)' /></a>
    </div>
  )
}

export default HeaderSocials