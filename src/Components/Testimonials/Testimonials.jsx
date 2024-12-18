import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/Cipherschools.jpg';
import AVTR2 from '../../assets/Udemy.png';
import AVTR3 from '../../assets/Udemy.png';
import AVTR4 from '../../assets/Simplilearn.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  { avatar: AVTR1, name: 'Python & Django Training ', review: 'Demonstrated expertise in Python, Django, HTML, CSS, and SQL, with efficient backend functionality and a user-friendly interface.' },
  { avatar: AVTR2, name: 'The Complete Web Development Bootcamp', review: 'Acquired comprehensive knowledge of full-stack web development, including frontend, backend, and deployment skills.' },
  { avatar: AVTR3, name: 'The Complete Data Structure and Algorithms Course in Python', review: 'Gained a solid foundation in data structures and algorithms using Python, focusing on efficient problem-solving techniques.' },
  { avatar: AVTR4, name: 'Product Management 101', review: 'Learned core principles of product management, including lifecycle strategies and market analysis.' },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Accomplishment and Specialization</h5>
      <h2>Certifications</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={40}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={`Avatar of ${name}`} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
