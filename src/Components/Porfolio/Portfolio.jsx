import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/BargainBazaar.png";
import IMG2 from "../../assets/Meme.png";
import IMG3 from "../../assets/Figma.png";
import IMG4 from "../../assets/YourMeal.png";
import IMG5 from "../../assets/Poll-Application.jpeg";
import IMG6 from "../../assets/100pythonProjects.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'BargainBazaar Website',
    github: 'https://github.com/Tasmii/BargainBazaar-Ecommerce-Website-in-ReactJS',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Meme Generator',
    github: 'https://github.com/Tasmii/Meme-Generator',
  },
  {
    id: 3,
    image: IMG3,
    title: 'CampusConnect',
    figma: 'https://www.figma.com/design/WQjXtqmj35zcezKltowSwi/Patient-Hub?m=auto&t=O3d3aFZFSk7VmbB3-6',
  },
  {
    id: 4,
    image: IMG4,
    title: 'YourMeal App',
    github: 'https://github.com/Tasmii/Your-Meal',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Poll Application Website',
    github: 'https://github.com/Tasmii/Polls-Application-Django-Project-',
  },
  {
    id: 6,
    image: IMG6,
    title: '100 Python Projects',
    github: 'https://github.com/Tasmii/100-Days-of-Code-The-Complete-Python-Pro-Bootcamp-for-2023',
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, figma }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  {
                    id === 3 ? (
                      <a href={figma} className='btn' target="_blank" rel="noopener noreferrer">Figma</a>
                    ) : (
                      <a href={github} className='btn' target="_blank" rel="noopener noreferrer">Github</a>
                    )
                  }
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
