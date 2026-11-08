
import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const resumeUrl = "/Shaan_G_Teli_Resume.pdf";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "AuraMart",
      description:
        "A full-stack e-commerce website with a modern shopping experience. Some of the important features are Admin Dashboard, JWT authentication, COD payment system, and Order tracking.",
      image: "/auramart-logo.png",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      live: "https://auramart-nine.vercel.app/",
      github: "https://github.com/codehub-eeb/AURAMART",
      backend: "https://github.com/codehub-eeb/auramart-backend",
    },

    {
      title: "Intellecta",
      description:
        "An AI-powered study assistant designed to help students with their learning and study-related tasks.",
      image: "/intellecta-logo.png",
      tech: ["Python", "Streamlit", "AI"],
      live: "https://intellecta-ai-study-assistant.streamlit.app/",
      github: "https://github.com/codehub-eeb/INTELLECTA.git",
},

  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "C",
    "C++",
    "Java",
    "Git & GitHub",
    "Cybersecurity Basics",
  ];

  const education = [
    {
      degree: "B.E. Information Technology",
      college:
        "Excelssior Education Society's K.C. College of Engineering & Management Studies & Research",
      location: "Kopri, Thane (E)",
      year: "2028",
      status: "Third Year",
    },
  ];

  const certifications = [
    {
      title: "ADSA Graph Certificate",
      issuer: "Infosys Springboard",
      category: "Technical Course",
      month: "September 2025",
      detail: "Certificate code: https://verify.onwingspan.com/",
      file: "/certificates/adsa-graph.pdf",
    },
    {
      title: "C Programming Certificate",
      issuer: "Great Learning Academy",
      category: "Programming",
      month: " November 2024",
      detail: "Certificate code: https://www.mygreatlearning.com/certificate/BQIKVBJG",
      file: "/certificates/c-programming.pdf",
    },
    {
      title: "CNND Course Certificate",
      issuer: "Cisco Networking Academy",
      category: "Technical Course",
      month: " March 2026",
      detail: "Cisco Networking Academy",
      file: "/certificates/cnnd-course.pdf",
    },
    {
      title: "Data Structure Certificate",
      issuer: "Simplilearn| SkillUP",
      category: "Computer Science",
      month: " September 2025",
      detail: "Certificate code: 8916773",
      file: "/certificates/data-structure.pdf",
    },
    {
      title: "Getting Started with Machine Learning Algorithms",
      issuer: "Simplilearn| SkillUP",
      category: "AI / ML",
      month: "September 2026",
      detail: "Certificate code: 10756413",
      file: "/certificates/aiml-certificate.pdf",
    },
    {
      title: "Freedom with AI Certificate",
      issuer: "Freedom with AI Masterclass",
      category: "AI",
      month: "July 2025",
      detail: "Freedom with AI",
      file: "/certificates/freedom-with-ai.pdf",
    },
    {
      title: "Java Beginner Certificate",
      issuer: "Simplilearn| SkillUP",
      category: "Programming",
      month: "July 2025",
      detail: "Certificate code: 8675681",
      file: "/certificates/java-beginner.pdf",
    },
    {
      title: "Python Course Certificate",
      issuer: "Infosys Springboard",
      category: "Programming",
      month: "February 2025",
      detail: "Certificate code: https://verify.onwingspan.com/",
      file: "/certificates/python-course.pdf",
    },
    {
      title: "Cybersecurity",
      issuer: "Tech Mahindra Foundation · Skill India Digital Hub",
      category: "Cybersecurity",
      date: "04 October 2026",
      detail: "10-hour online skill course",
      file: "/certificates/cybersecurity-certificate.pdf",
    },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
  <span className="logo-blue">Sh</span>aan<span>.</span>
</a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="portfolio-navigation"
        >
          ☰
        </button>

        <div
          id="portfolio-navigation"
          className={`nav-links ${menuOpen ? "active" : ""}`}
        >
          {[
            "Home",
            "About",
            "Skills",
            "Projects",
            "Education",
            "Certifications",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}

          <a
            href={resumeUrl}
            className="nav-resume"
            download="Shaan_G_Teli_Resume.pdf"
            onClick={closeMenu}
          >
            Resume ↓
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero section" id="home">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-small">HELLO, I'M</p>

          <h1>
            Shaan <span>Teli</span>
          </h1>

          <h2>Full Stack Web Developer</h2>

          <p className="hero-description">
            Third-year Information Technology Engineering student passionate
            about Web Development, technology and building modern digital
            experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work
            </a>

            <a
              href={resumeUrl}
              className="secondary-btn"
              download="Shaan_G_Teli_Resume.pdf"
            >
              Download Resume ↓
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/codehub-eeb"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/shaan-teli-8419a2328"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="image-glow">
            <img src="/profile.png" alt="Shaan Teli" />
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="section about" id="about">
        <p className="section-label">GET TO KNOW ME</p>

        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-card">
          <p>
            I'm Shaan G. Teli, a third-year Information Technology Engineering
            student and Full-stack Web Development enthusiast. I enjoy
            exploring web technologies and creating projects that solve
            practical problems.
          </p>

          <p>
            I'm continuously learning and improving my development skills
            through academic work, personal projects and hands-on practice.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills" id="skills">
        <p className="section-label">WHAT I WORK WITH</p>

        <h2 className="section-title">
          My <span>Skills</span>
        </h2>

        <div className="skills-grid skills-panel">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-chip"
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects" id="projects">
        <p className="section-label">SOME OF MY WORK</p>

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} logo`}
                />
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-tags">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Frontend Code ↗
                  </a>

                  {project.backend && (
                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Backend Code ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section education" id="education">
        <p className="section-label">MY ACADEMIC JOURNEY</p>

        <h2 className="section-title">
          <span>Education</span>
        </h2>

        {education.map((item) => (
          <div className="education-card" key={item.degree}>
            <h3>{item.degree}</h3>
            <h4>{item.college}</h4>
            <p>{item.location}</p>
            <p>{item.status}</p>
            <span>Expected Graduation: {item.year}</span>
          </div>
        ))}
      </section>

      {/* CERTIFICATIONS */}
      <section className="section certifications" id="certifications">
        <p className="section-label">MY ACHIEVEMENTS</p>

        <h2 className="section-title">
          Certifications <span>&amp; Courses</span>
        </h2>

        <div className="certifications-grid">
          {certifications.map((certificate, index) => (
            <motion.div
              className="certification-card"
              key={certificate.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="certificate-card-top">
                <div className="certificate-icon" aria-hidden="true">
                  <span>✦</span>
                </div>
                <span className="certificate-category">{certificate.category}</span>
              </div>

              <div className="certificate-content">
                <h3>{certificate.title}</h3>
                <p className="certificate-issuer">{certificate.issuer}</p>
                {certificate.date && (
                  <p className="certificate-date">{certificate.date}</p>
                )}
                {certificate.detail && (
                  <p className="certificate-detail">{certificate.detail}</p>
                )}
              </div>

              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
                aria-label={`View ${certificate.title}`}
              >
                View Certificate <span aria-hidden="true">↗</span>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          Designed &amp; Built by <span>Shaan Teli</span>
        </p>

        <div className="footer-contact">
          <a href="mailto:shaanteli12@gmail.com">
            shaanteli12@gmail.com
          </a>

          <a href="tel:+919137199451">
            +91 9137199451
          </a>

          <span>Mumbai Suburban, Maharashtra</span>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/codehub-eeb"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/shaan-teli-8419a2328"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>

        <p>
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
