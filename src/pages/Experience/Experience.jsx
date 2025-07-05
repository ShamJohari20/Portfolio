import React, { useRef, useEffect } from "react";
import { Code2, Layers, Network } from "lucide-react";
import "./Experience.css";

const calc3DTransform = (e, card) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateY = ((x - centerX) / centerX) * 12;
  const rotateX = -((y - centerY) / centerY) * 12;
  const shadowX = ((centerX - x) / centerX) * 20;
  const shadowY = ((centerY - y) / centerY) * 20 + 16;
  const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 180;
  const borderGradient = `linear-gradient(${angle}deg, #ec4899, #3b82f6, #8b5cf6)`;
  return { rotateX, rotateY, shadowX, shadowY, borderGradient };
};

const ExperienceCard = ({ icon: Icon, title, company, period, description }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const { rotateX, rotateY, shadowX, shadowY, borderGradient } = calc3DTransform(e, card);
    card.style.setProperty("--rotateX", `${rotateX}deg`);
    card.style.setProperty("--rotateY", `${rotateY}deg`);
    card.style.setProperty("--shadowX", `${shadowX}px`);
    card.style.setProperty("--shadowY", `${shadowY}px`);
    card.style.setProperty("--borderGradient", borderGradient);
    card.classList.add("is-3d-hovered");
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rotateX", `0deg`);
    card.style.setProperty("--rotateY", `0deg`);
    card.style.setProperty("--shadowX", `0px`);
    card.style.setProperty("--shadowY", `12px`);
    card.style.setProperty("--borderGradient", `linear-gradient(90deg, #ec4899, #3b82f6, #8b5cf6)`);
    card.classList.remove("is-3d-hovered");
  };

  return (
    <div
      className="experience-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="experience-card-glass" />
      <div className="experience-card-border" />
      <div className="experience-card-content">
        <div className="experience-icon-container">
          <div className="experience-icon-pulse" />
          <Icon className="experience-icon" />
        </div>
        <h3 className="experience-card-title">{title}</h3>
        <div className="experience-card-meta">
          <span className="experience-card-company">{company}</span>
          <span className="experience-card-period">{period}</span>
        </div>
        <p className="experience-card-description">{description}</p>
        <div className="experience-card-corner experience-card-corner-top-right" />
        <div className="experience-card-corner experience-card-corner-bottom-left" />
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenisScript = document.createElement("script");
      lenisScript.src = "https://cdn.jsdelivr.net/npm/@studio-freight/lenis";
      lenisScript.onload = () => {
        const lenis = new window.Lenis({
          duration: 1.2,
          smooth: true,
          direction: "vertical",
          gestureDirection: "vertical",
          smoothTouch: true,
          touchMultiplier: 2,
        });
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      };
      document.body.appendChild(lenisScript);
    }
  }, []);

  const experiences = [
    {
      icon: Network,
      title: "Full Stack Java Course",
      company: "Naresh IT",
      period: "Dec 2024 - Present",
      description:
        "The training covered both frontend and backend technologies. It included hands on projects, real time coding practice, and preparation for full cycle web application development and deployment.",
    },
    {
      icon: Layers,
      title: "Full Stack Java Intern",
      company: "Zidio Development",
      period: "Jan 2025 - Apr 2025",
      description:
        "Completed an internship gaining hands on experience with Java, Spring Boot, React, and SQL. Contributed to real time projects, collaborated in Agile teams, and enhanced frontend backend integration skills.",
    },
    {
      icon: Code2,
      title: "Java Development",
      company: "TNSIF",
      period: "Dec 2023 - Apr 2024",
      description:
        "Completed industry oriented Java training focused on core Java concepts. The program focused on practical learning through coding assignments, mock interviews, and employability skills development.",
    },
  ];

  return (
    <section className="experience-section animate-in" ref={scrollRef}>
      <div className="experience-bg-base" />
      <div className="experience-grid-bg" />
      <div className="experience-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="experience-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      <div className="experience-container">
        <div className="experience-header">
          <div className="experience-title-wrapper">
            <h2 className="experience-title">Professional Journey</h2>
            <div className="experience-title-shadow" />
          </div>
          <p className="experience-subtitle">
            "Transforming ideas into digital reality, one project at a time"
          </p>
        </div>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
      <div className="experience-bg-blur-circle experience-bg-blur-circle-cyan" />
      <div className="experience-bg-blur-circle experience-bg-blur-circle-purple" />
    </section>
  );
};

export default ExperienceSection;
