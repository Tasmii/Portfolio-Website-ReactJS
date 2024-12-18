import React, { useState, useEffect } from 'react';
import './Header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import Typewriter from 'react-typewriter-effect';

const Header = () => {
  useEffect(() => {
    const eyes = document.querySelectorAll('.pupil');
    document.addEventListener('mousemove', (e) => {
      eyes.forEach((pupil) => {
        const rect = pupil.parentElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 1;
        const centerY = rect.top + rect.height / 1;

        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        const angle = Math.atan2(deltaY, deltaX);
        const offsetX = Math.cos(angle) * 10;
        const offsetY = Math.sin(angle) * 10;

        pupil.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    });
  }, []);

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tasmiya Ilahi</h1>
        <h5 className="text-light">
          <Typewriter
            textStyle={{
              fontSize: '1.2rem',
              color: 'rgba(255,255,255,0.6)',
              textAlign: 'center',
            }}
            startDelay={100}
            cursorColor="rgba(255,255,255,0.6)"
            multiText={[
              'Fullstack Web Developer',
              'Data Analyst',
              'Product Manager',
              'UI/UX Designer',
            ]}
            multiTextLoop
            multiTextDelay={2000}
            typeSpeed={100}
            deleteSpeed={80}
            loop={true}
          />
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <div className="pacman">
            {/* Pac-Man Body */}
            <div className="pacman-body">
              {/* Eyes */}
              <div className="eye left-eye">
                <div className="pupil"></div>
              </div>
              <div className="eye right-eye">
                <div className="pupil"></div>
              </div>
              {/* Mouth */}
              <div className="mouth"></div>
            </div>
          </div>
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;