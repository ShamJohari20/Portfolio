import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <span className="footer__copyright">
          © {new Date().getFullYear()} Sham Johari. All rights reserved.
        </span>
        <nav className="footer__links">
          <a
            href="https://github.com/ShamJohari20"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="footer__icon-link github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sham-johari/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer__icon-link linkedin"
          >
            <FaLinkedin />
          </a>
          {/* <a
            href="https://twitter.com/shamjohari20"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="footer__icon-link twitter"
          >
            <FaTwitter />
          </a> */}
          {/* <a
            href="https://facebook.com/shamjohari20"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="footer__icon-link facebook"
          >
            <FaFacebook />
          </a> */}
          <a
            href="https://www.instagram.com/shamjohari_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footer__icon-link instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:shamjohari101@gmail.com"
            aria-label="Email"
            className="footer__icon-link email"
          >
            <FaEnvelope />
          </a>
        </nav>
      </div>
    </footer>
  );
}