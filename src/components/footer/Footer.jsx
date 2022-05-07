import React from 'react'
import './footer.css'
import {FiInstagram, FiYoutube} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {BsTwitch} from 'react-icons/bs'
import LOGO from '../../assets/logo-jc-white.png'
const Footer = () => {
  return (
    <footer>
      <div className="footer__logo">
        <img src={LOGO} alt="triskel logo jotace" className="footer__logo-img" />
      </div>
      
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com"><FiInstagram className='footer__socials-icon' /></a>
        <a href="https://youtube.com"><FiYoutube className='footer__socials-icon' /></a>
        <a href="https://twitter.com"><IoLogoTwitter className='footer__socials-icon' /></a>
        <a href="https://twitch.com"><BsTwitch className='footer__socials-icon' /></a>
      </div>
      <div className="footer__copyright">
        <small> &copy; Jotace. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer