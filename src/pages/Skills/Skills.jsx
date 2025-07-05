import React, { useEffect, useRef, useMemo, lazy, Suspense } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Lazy load the heavy IconCloud component
const IconCloudDemo = lazy(() => import("@/components/globe"));

// Directly import Lucide icons for better tree-shaking
import Code2 from "lucide-react/dist/esm/icons/code-2";
import Paintbrush from "lucide-react/dist/esm/icons/paintbrush";
import Database from "lucide-react/dist/esm/icons/database";
import Cpu from "lucide-react/dist/esm/icons/cpu";
import Cloud from "lucide-react/dist/esm/icons/cloud";
import Server from "lucide-react/dist/esm/icons/server";

// Import React icons individually
import { FaReact, FaDocker, FaGitAlt, FaLinux, FaAws, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiPostgresql, SiMongodb, SiSpring, SiSpringboot, SiOracle, SiNetlify, SiEclipseide, SiIntellijidea, SiRedux, SiFirebase, SiVercel, SiVite, SiBootstrap, SiJavascript } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

import "./Skills.css";

const SkillCard = React.memo(({ icon: Icon, title, skills, color, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const angleY = (x - centerX) / 20;
      const angleX = (centerY - y) / 20;

      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.03)`;
      card.style.boxShadow = `
        ${-angleY * 3}px ${angleX * 3}px 30px rgba(59, 130, 246, 0.3),
        inset 0 0 15px rgba(100, 100, 255, 0.1)
      `;
    };

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
      card.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Card
      ref={cardRef}
      className="skill-card"
      style={{
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transformStyle: "preserve-3d",
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div className="shimmer-bg animate-shimmer"></div>
      <CardContent className="card-content">
        <div className="card-header">
          <div className={`card-icon ${color}-icon`}>
            <Icon className="icon-size" />
          </div>
          <h3 className="card-title">{title}</h3>
        </div>
        <div className="skills-wrapper">
          {skills.map((skill, idx) => (
            <Badge
              key={`${skill.name}-${idx}`}
              className="skill-badge"
              style={{
                transitionDelay: `${idx * 0.05}s`,
                transform: "translateZ(20px)"
              }}
            >
              <span className="badge-icon">{skill.icon}</span>
              <span className="badge-text">{skill.name}</span>
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
});

const SkillsSection = () => {
  const skillCategories = useMemo(() => [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "blue",
      skills: [
        { name: "HTML5", icon: <BsFileEarmarkCode className="icon-color html" /> },
        { name: "CSS3", icon: <BsFileEarmarkCode className="icon-color css" /> },
        { name: "JavaScript", icon: <SiJavascript className="icon-color js" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="icon-color bootstrap" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="icon-color tailwind" /> },
        { name: "React.js", icon: <FaReact className="icon-color react" /> },
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "green",
      skills: [
        { name: "Java SE", icon: <FaJava className="icon-color java" /> },
        { name: "Java EE", icon: <FaJava className="icon-color java" /> },
        { name: "Spring", icon: <SiSpring className="icon-color spring" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="icon-color springboot" /> },
        { name: "REST APIs", icon: <BsGrid1X2 className="icon-color rest" /> },
      ],
    },
    {
      icon: Database,
      title: "Database & Querying",
      color: "purple",
      skills: [
        { name: "Oracle SQL", icon: <SiOracle className="icon-color oracle" /> },
        { name: "PL/SQL", icon: <SiOracle className="icon-color plsql" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="icon-color postgres" /> },
        { name: "MongoDB", icon: <SiMongodb className="icon-color mongo" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "orange",
      skills: [
        { name: "AWS", icon: <FaAws className="icon-color aws" /> },
        { name: "Docker", icon: <FaDocker className="icon-color docker" /> },
        { name: "CI/CD", icon: <FcWorkflow className="icon-color" /> },
        { name: "Kubernetes", icon: <BsGrid1X2 className="icon-color kube" /> },
        { name: "Git", icon: <FaGitAlt className="icon-color git" /> },
        { name: "Linux", icon: <FaLinux className="icon-color linux" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "pink",
      skills: [
        { name: "VS Code", icon: <TbBrandVscode className="icon-color vscode" /> },
        { name: "Eclipse", icon: <SiEclipseide className="icon-color eclipse" /> },
        { name: "IntelliJ IDEA", icon: <SiIntellijidea className="icon-color intellij"/> },
        { name: "Redux", icon: <SiRedux className="icon-color redux" /> },
        { name: "Firebase", icon: <SiFirebase className="icon-color firebase" /> }, 
        { name: "Netlify", icon: <SiNetlify className="icon-color netlify" /> },
        { name: "Vercel", icon: <SiVercel className="icon-color" /> },
        { name: "Vite", icon: <SiVite className="icon-color vite" /> },
      ],
    },
    {
      icon: Paintbrush,
      title: "Creative Skills",
      color: "yellow",
      skills: [
        { name: "UI Animation", icon: <MdAnimation className="icon-color pink" /> },
        { name: "Coding", icon: <MdAnimation className="icon-color green" /> },
        { name: "Problem Solving", icon: <Cpu className="icon-color violet" /> },
        { name: "Project Building", icon: <MdAnimation className="icon-color orange" /> },
      ],
    },
  ], []);

  const sectionRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        if (!sectionRef.current) return;

        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY.current || 
            Math.abs(currentScrollY - sectionRef.current.offsetTop) < window.innerHeight * 2) {
          const section = sectionRef.current;
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom >= 0;

          if (isVisible) {
            section.classList.add("animate-in");
          }
        }
        lastScrollY.current = currentScrollY;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      ref={sectionRef}
      className="skills-section"
      id="skills"
    >
      <div className="grid-bg"></div>
      <section className="skills-container">
        <div className="icon-cloud floating">
          <Suspense fallback={<div className="icon-cloud-placeholder" />}>
            <IconCloudDemo />
          </Suspense>
        </div>

        <div className="section-header">
          <div className="title-decorator left"></div>
          <h2 className="section-title">
            <span className="title-gradient">Technical Expertise</span>
          </h2>
          <div className="title-decorator right"></div>
          <p className="section-subtitle">
            Technologies I've mastered and love working with
          </p>
        </div>

        <div className="skills-grid-wrapper">
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="fade-up"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <SkillCard {...category} index={index} />
              </div>
            ))}
          </div>
        </div>

        <div className="decoration-elements">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="pulse-ring"></div>
        </div>
      </section>
    </main>
  );
};

export default React.memo(SkillsSection);