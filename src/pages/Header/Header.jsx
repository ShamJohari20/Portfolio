import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import "./Header.css";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => location.pathname.slice(1) || "home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHideHeader(true); // Scrolling down
      } else {
        setHideHeader(false); // Scrolling up
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    { id: "experience", icon: FaBriefcase, text: "Experience", path: "/experience" },
    { id: "education", icon: FaGraduationCap, text: "Education", path: "/education" },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  ];

  return (
    <header className={`portfolio-header ${hideHeader ? "hide" : ""}`}>
      <div className="header-container">
        <div className="gradient-border">
          <nav className="nav-wrapper">
            <div className="mobile-top">
              <Link to="/" className="logo">Portfolio</Link>
              <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <FaBars />
              </button>
            </div>

            <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
              {navLinks.map(({ id, icon: Icon, text, path }) => (
                <Link
                  key={id}
                  to={path}
                  onClick={() => {
                    setActiveLink(id);
                    setIsMenuOpen(false);
                  }}
                  className={`nav-item ${activeLink === id ? "active" : ""}`}
                >
                  <Icon className="nav-icon" />
                  <span className="nav-text">{text}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
