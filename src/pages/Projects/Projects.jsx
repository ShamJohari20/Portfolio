import { useRef } from "react";
import { ReactLenis } from "lenis/react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "./Projects.css";

import textifyImg from "@/assets/images/textify.png";
import wishmateImg from "@/assets/images/wishmate.png";
import connexaImg from "@/assets/images/connexa.png";
import AWImg from "@/assets/images/AW.png";
import GXCImg from "@/assets/images/GXC.png";
import TDLImg from "@/assets/images/TDL.png";
import TTTImg from "@/assets/images/TTT.png";
import PDWAImg from "@/assets/images/PDWA.png";
import RPSImg from "@/assets/images/RPS.png";
import calculatorImg from "@/assets/images/calculator.png";
import timelyImg from "@/assets/images/timely.png";
import BNImg from "@/assets/images/BN.png";

const projects = [
  {
    title: "Textify",
    description: "Text Art Editor",
    link: textifyImg,
    color: "#5196fd",
    githubLink: "https://github.com/ShamJohari20/Textify",
    liveLink: "https://sj-textfiy.netlify.app/",
  },
  {
    title: "WishMate",
    description: "Smart Birthday Wisher",
    link: wishmateImg,
    color: "#8f89ff",
    githubLink: "https://github.com/ShamJohari20/WishMate",
    liveLink: "https://sj-wishmate.vercel.app/",
  },
  {
    title: "ConneXa",
    description: "Real Time Chat Platform",
    link: connexaImg,
    color: "#ffffff",
    githubLink: "https://github.com/ShamJohari20/ConneXa",
    liveLink: "https://sj-connexa.vercel.app/",
  },
  {
    title: "Aesthetic Weather",
    description: "A beautiful weather app with animations and clean design.",
    link: AWImg,
    color: "#ed649e",
    githubLink: "https://github.com/ShamJohari20/Aesthetic-Weather",
    liveLink: "https://sj-aesthetic-weather.netlify.app/",
  },
  {
    title: "GlobeXchange",
    description: "Real-time currency converter with live exchange rates.",
    link: GXCImg,
    color: "#b2f2c9",
    githubLink: "https://github.com/ShamJohari20/GlobeXchange",
    liveLink: "https://sj-globexchange.vercel.app/",
  },
  {
    title: "To Do List",
    description: "Simple app to manage and track your tasks.",
    link: TDLImg,
    color: "#d66dd8",
    githubLink: "https://github.com/ShamJohari20/toDoList",
    liveLink: "https://sj-todolist.vercel.app/",
  },
  {
    title: "Tic Tac Toe",
    description: "Play Xs and Os with a friend in a fun game.",
    link: TTTImg,
    color: "#ffb3b3",
    githubLink: "https://github.com/ShamJohari20/tic-tac-toe",
    liveLink: "https://sjtictactoe.netlify.app/",
  },
  {
    title: "Play Dice With AI",
    description: "Roll the dice against AI and test your luck.",
    link: PDWAImg,
    color: "#b266b2",
    githubLink: "https://github.com/ShamJohari20/Play-Dice-With-AI-",
    liveLink: "https://shamjohari20.github.io/Play-Dice-With-AI-/",
  },
  {
    title: "Rock Paper Scissors",
    description: "Classic game against an AI opponent.",
    link: RPSImg,
    color: "#b0c4de",
    githubLink: "https://github.com/ShamJohari20/Rock-Paper-Scissors",
    liveLink: "https://shamjohari20.github.io/Rock-Paper-Scissors/",
  },
  {
    title: "Calculator",
    description: "Simple calculator for basic operations.",
    link: calculatorImg,
    color: "#ed649e",
    githubLink: "https://github.com/ShamJohari20/Calculator",
    liveLink: "https://shamjohari20.github.io/Calculator/",
  },
  {
    title: "Timely",
    description: "Minimal stopwatch app to track time.",
    link: timelyImg,
    color: "#00bfff",
    githubLink: "https://github.com/ShamJohari20/Timely",
    liveLink: "https://sj-timely.vercel.app/",
  },
  {
    title: "BusNow",
    description: "App to book and manage bus tickets.",
    link: BNImg,
    color: "#c084fc",
    githubLink: "https://github.com/ShamJohari20/BusNow",
    liveLink: "https://sj-busnow.vercel.app/",
  },
];

export default function Projects() {
  const container = useRef(null);
  return (
    <ReactLenis root>
      <main className="projects-root" ref={container}>
        <section className="projects-section">
          {projects.map((project, i) => (
            <Card
              key={`p_${i}`}
              i={i}
              url={project.link}
              title={project.title}
              color={project.color}
              description={project.description}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </section>
        <div style={{ height: "1px" }}></div>
      </main>
    </ReactLenis>
  );
}

function Card({ i, title, description, url, color, githubLink, liveLink }) {
  const handleMouseMove = (e) => {
    const card = document.getElementById(`card-${i}`);
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.95)`;
  };

  const handleMouseLeave = () => {
    const card = document.getElementById(`card-${i}`);
    card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale(0.95)`;
  };

  return (
    <div className="card-container">
      <div
        className="project-card"
        id={`card-${i}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-inner">
          <div className="card-image">
            <motion.img
              src={url}
              alt={title}
              className="image"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="overlay"
              style={{ backgroundColor: color }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            <div className="project-number">Project {i + 1}</div>
          </div>
          <div className="card-content">
            <div className="card-header">
              <span className="dot" style={{ backgroundColor: color }}></span>
              <div className="divider"></div>
            </div>
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
            <div className="card-footer">
              <div className="footer-divider"></div>
              <div className="footer-links">
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="link"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.61V22" />
                  </svg>
                  <span style={{ color }}>Code</span>
                </motion.a>
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="link"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span style={{ color }}>Live</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
