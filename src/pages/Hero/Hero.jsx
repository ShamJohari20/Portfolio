import { useState, useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import "./Hero.css";

const isTouchDevice = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(pointer: coarse)").matches;

const GridBackground = () => (
  <div className="hero-grid-background">
    <div className="hero-grid-mask">
      <svg className="hero-grid-svg" aria-hidden="true">
        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect className="hero-grid-rect" width="40" height="40" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  </div>
);

export default function Hero() {
  const [code] = useState(`const profile = {
    name: 'Sham Johari',
    title: 'Full Stack Developer',
    skills: [
        'HTML', 'CSS', 'JavaScript', 'Bootstrap','Tailwind', 'ReactJS',
        'Java SE', 'Java EE', 'Spring', 'Spring Boot', 'SQL', 'PL/SQL',
        'AWS', 'DevSecOps'
    ],
    isHardWorker: true,
    isQuickLearner: true,
    isProblemSolver: true,
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5
        );
    }
};`);

  const roles = [
    "Software Engineer",
    "Front End Developer",
    "Back End Developer",
    "Full Stack Java Developer",
  ];

  const codeCardRef = useRef(null);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  useEffect(() => {
    const card = codeCardRef.current;
    if (!card || isTouchDevice()) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(800px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`;
      card.style.transition = "transform 0.1s";
    };

    const handleMouseLeave = () => {
      card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
      card.style.transition = "transform 0.4s cubic-bezier(.03,.98,.52,.99)";
    };

    const handleMouseEnter = () => {
      card.style.transition = "transform 0.2s cubic-bezier(.03,.98,.52,.99)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    card.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
      card.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // For mobile, flatten the code card style
  const codeCardStyle = isTouchDevice()
    ? {
        transform: "none",
        willChange: "auto",
        boxShadow:
          "0 6px 18px 0 rgba(244,114,182,0.14),0 1px 8px 0 rgba(40,40,80,0.18),0 16px 32px -6px rgba(0,0,0,0.20),0 0.5px 2px 0 rgba(244,114,182,0.05)",
      }
    : {};

  return (
    <main className="hero">
      <div className="hero__spacing-container">
        <section className="hero__section">
          <GridBackground />

          <div className="hero__meteors-container">
            <Meteors number={10} />
          </div>

          <div className="hero__container">
            <div className="hero__content">
              <div className="hero__decorative-blur hero__decorative-blur--blue" />
              <div className="hero__decorative-blur hero__decorative-blur--teal" />

              <div className="hero__welcome-badge">
                <div className="hero__badge-dot" />
                <span className="hero__badge-text">Welcome to my universe</span>
              </div>

              <div className="hero__name-section">
                <h1 className="hero__heading">
                  <SparklesText text="Hello" />
                  <span className="hero__name">
                    I'm <span className="hero__name--highlight">Sham Johari</span>
                  </span>
                </h1>
                <div className="hero__name-glow" />
              </div>

              <div className="hero__role-badge">
                <i className="fas fa-rocket hero__role-icon" />
                <FlipWords words={roles} className="hero__flip-words" />
              </div>

              <div className="hero__description">
                <p>
                  Full Stack Dev | HTML, CSS, JS, Bootstrap, Tailwind CSS, React JS | 
                  Java SE & Java EE, Spring, Spring Boot, Microservices | 
                  Oracle SQL & PL/SQL | DevSecOps | AWS
                </p>
              </div>

              <div className="hero__cta-buttons">
                <a href="https://github.com/ShamJohari20" className="hero__cta-button hero__cta-button--primary">
                  <span className="hero__button-content">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right hero__button-icon" />
                  </span>
                </a>

                <a href="#" className="hero__cta-button hero__cta-button--secondary">
                  <span className="hero__button-content">
                    <span>Get Resume</span>
                    <i className="fas fa-envelope hero__button-icon" />
                  </span>
                </a>
              </div>
            </div>

            <div className="hero__code-container">
              <div
                className="hero__code-window developer-card-3d"
                ref={codeCardRef}
                style={codeCardStyle}
              >
                <div className="hero__window-header">
                  <div className="hero__window-dot hero__window-dot--red" />
                  <div className="hero__window-dot hero__window-dot--yellow" />
                  <div className="hero__window-dot hero__window-dot--green" />
                  <span className="hero__window-title">
                    <i className="fas fa-code" /> developer.js
                  </span>
                </div>
                <pre className="language-javascript">
                  <code className="language-javascript">{code}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Enhanced Floating Bubbles */}
          <div className="hero__floating-bubbles">
            <div className="hero__floating-bubble hero__floating-bubble--frontend">
              <div className="bubble-content">
                <i className="fas fa-wand-magic-sparkles bubble-icon" />
                <span>Front End</span>
              </div>
              <div className="bubble-glow" />
            </div>

            <div className="hero__floating-bubble hero__floating-bubble--backend">
              <div className="bubble-content">
                <i className="fas fa-code bubble-icon" />
                <span>Back End</span>
              </div>
              <div className="bubble-glow" />
            </div>

            <div className="hero__floating-bubble hero__floating-bubble--database">
              <div className="bubble-content">
                <i className="fas fa-lightbulb bubble-icon" />
                <span>DataBase</span>
              </div>
              <div className="bubble-glow" />
            </div>
          </div>

          <div className="hero__scroll-bubble">
            <div className="bubble-content">
              <i className="fas fa-mouse bubble-icon" />
              <span>About Me</span>
            </div>
            <i className="fas fa-chevron-down bubble-arrow" />
            <div className="bubble-glow" />
          </div>
        </section>
      </div>
      <PortfolioPage />
    </main>
  );
}