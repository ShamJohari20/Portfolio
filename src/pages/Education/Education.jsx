import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import "./Education.css";
import {
  Award,
  Calendar,
  BookOpen,
  Trophy,
  MapPin
} from "lucide-react";
import { motion } from "framer-motion";

// Helper for pointer detection
const isTouchDevice = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(pointer: coarse)").matches;

// 3D transform calculation utility
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

const EducationCard = ({ edu, index, hoveredIndex, setHoveredIndex }) => {
  const cardRef = useRef(null);
  const isTouch = isTouchDevice();

  // Handlers for 3D hover (desktop only)
  const handleMouseMove = (e) => {
    if (isTouch) return;
    const card = cardRef.current;
    if (!card) return;
    const { rotateX, rotateY, shadowX, shadowY, borderGradient } = calc3DTransform(e, card);
    card.style.setProperty("--rotateX", `${rotateX}deg`);
    card.style.setProperty("--rotateY", `${rotateY}deg`);
    card.style.setProperty("--shadowX", `${shadowX}px`);
    card.style.setProperty("--shadowY", `${shadowY}px`);
    card.style.setProperty("--borderGradient", borderGradient);
    card.classList.add("is-3d-hovered");
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    if (isTouch) return;
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rotateX", `0deg`);
    card.style.setProperty("--rotateY", `0deg`);
    card.style.setProperty("--shadowX", `0px`);
    card.style.setProperty("--shadowY", `12px`);
    card.style.setProperty("--borderGradient", `linear-gradient(90deg, #ec4899, #3b82f6, #8b5cf6)`);
    card.classList.remove("is-3d-hovered");
    setHoveredIndex(null);
  };

  // Flat style for mobile/touch devices
  const cardStyle = isTouch
    ? {
        transform: "none",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        perspective: "none",
        willChange: "auto"
      }
    : {};

  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { y: 50, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className={`education-card${hoveredIndex === index ? " is-3d-hovered" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onFocus={() => setHoveredIndex(index)}
      onBlur={() => setHoveredIndex(null)}
      aria-labelledby={`education-${index}-title`}
      tabIndex="0"
      style={cardStyle}
    >
      <div className="education-card-content">
        <div className="education-card-header">
          <div className="education-card-degree" id={`education-${index}-title`}>
            <span className="education-mascot" aria-hidden="true">
              {edu.mascot}
            </span>
            <h3>{edu.degree}</h3>
          </div>
          <p className="education-school">
            <BookOpen className="icon" aria-hidden="true" />
            {edu.school}
          </p>
          <p className="education-location">
            <MapPin className="icon-small" aria-hidden="true" />
            {edu.location}
          </p>
          <p className="education-year">
            <Calendar className="icon-small" aria-hidden="true" />
            {edu.year}
          </p>
        </div>

        {edu.description && (
          <p className="education-description">{edu.description}</p>
        )}

        <div className="education-achievements">
          <h4>
            <Trophy className="icon-small yellow" aria-hidden="true" />
            <span>Key Achievements</span>
          </h4>
          <div className="achievement-list">
            {edu.achievements.map((achievement, i) => (
              <div key={i} className="achievement-item">
                <Award className="icon-small" aria-hidden="true" />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {edu.skills?.length > 0 && (
          <div className="education-skills">
            <h4 className="visually-hidden">Skills Learned</h4>
            {edu.skills.map((skill, i) => (
              <span key={i} className="skill-item">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

EducationCard.propTypes = {
  edu: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  hoveredIndex: PropTypes.number,
  setHoveredIndex: PropTypes.func.isRequired,
};

const educationData = [
  {
    degree: "Bachelor of Engineering (BE)",
    school: "Mauli Group of Institution's College of Engineering & Technology",
    location: "Shegaon, India",
    mascot: "🎓",
    year: "2020 - 2024",
    achievements: ["CGPA: 9.23", "Branch: Computer Science & Engineering"],
    skills: ["Front End", "Back End", "DataBase", "Data Science"],
    description: "Completed my bachelor's degree with honors, focusing on modern web technologies and core software development principles. Actively participated in technical workshops and extracurricular activities.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "J. V. Mehta jr. College",
    location: "Khamgaon, India",
    mascot: "📚",
    year: "2019 - 2020",
    achievements: ["Percentage: 64.15%", "Subject: General Science"],
    skills: ["Physics", "Chemistry", "Mathematics", "Biology"],
    description: "Completed higher secondary education with focus on science stream. Took part in fun learning activities like projects, quizzes, and group challenges.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Kokare Vidhyalaya",
    location: "Dhoropgaon, India",
    mascot: "🏫",
    year: "2017 - 2018",
    achievements: ["Percentage: 79.40%", "Subject: General"],
    skills: ["Mathematics", "Science", "Marathi", "English", "Hindi"],
    description: "Completed secondary school with good marks. Built confidence and learned problem solving through engaging subjects and classroom activities.",
  },
];

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section id="education" className="education-section">
      <div className="education-grid-background" aria-hidden="true" />

      <div className="education-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="education-header"
        >
          <h2 className="education-title">Educational Journey</h2>
          <p className="education-subtitle">
            Discover how academic excellence shapes innovative thinking and
            professional growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="education-card-grid"
        >
          {educationData.map((edu, index) => (
            <EducationCard
              key={index}
              edu={edu}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;