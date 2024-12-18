import React, { useState } from "react";
import "./Experience.css";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaBootstrap, FaCss3Alt, FaFigma, FaHtml5, FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariations = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Experience = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My SkillSet</h2>
      <div className="container experience__container">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="experience__grid"
        >
          {[
            { icon: <FaHtml5 />, name: "HTML" },
            { icon: <FaCss3Alt />, name: "CSS" },
            { icon: <DiMysql />, name: "MySQL" },
            { icon: <SiMongodb />, name: "MongoDB" },
            { icon: <SiExpress />, name: "Express" },
            { icon: <RiReactjsLine />, name: "React" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={iconVariations(index % 2 === 0 ? 2.5 : 6)}
              initial="initial"
              animate="animate"
              className="skill__card"
              onMouseEnter={() => setHoveredTech(item.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="skill__icon">{item.icon}</div>
              <div
                className={`skill__name ${
                  hoveredTech === item.name ? "visible" : "hidden"
                }`}
              >
                {item.name}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <br />
        <br />

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="experience__grid"
        >
          {[
            { icon: <TbBrandReactNative />, name: "React Native" },
            { icon: <FaPython />, name: "Python" },
            { icon: <FaFigma />, name: "Figma" },
            { icon: <FaBootstrap />, name: "Bootstrap" },
            { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
            { icon: <FaNodeJs />, name: "Nodejs" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={iconVariations(index % 2 === 0 ? 6:2.5)}
              initial="initial"
              animate="animate"
              className="skill__card"
              onMouseEnter={() => setHoveredTech(item.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="skill__icon">{item.icon}</div>
              <div
                className={`skill__name ${
                  hoveredTech === item.name ? "visible" : "hidden"
                }`}
              >
                {item.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
