import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">SkillSets</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testimonials">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/tasmiyailahi/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Tasmii" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Tasmiya Ilahi. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer