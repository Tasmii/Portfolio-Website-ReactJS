import React from 'react'
import './about.css'
import ME from '../../assets/About-me.jpg'
import { SiLeetcode } from "react-icons/si";
import { FaCode } from "react-icons/fa";
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card' >
              <SiLeetcode className='about__icon' />
              <h5>Problem Solving</h5>
              <small>100+ questions solved on Leetcode, Hackerrank and GeekforGeeks</small>
            </article>
            {/* <article className='about__card'>
              <FaGraduationCap className='about__icon' />
              <h5>Graduation</h5>
              <small>BTech CSE batch 2025</small>
            </article> */}
            <article className='about__card' >
              <FaCode className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Projects including Ecommerce and AI platforms</small>
            </article>
          </div>
          <p>
          Dedicated B.Tech CSE student adept in Full Stack Web Development utilizing MERN stack and proficient in Python programming. A dedicated UI/UX design enthusiast, blending technical expertise with creativity to craft seamless digital experiences.
          </p>
          <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>
    </section >
  )
}
export default About