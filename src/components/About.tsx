import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import './About.css';
import { profile, about } from '../config/configLoader';
import JourneyBook from './JourneyBook';

const About = () => {
  const downloadResume = () => {
    console.log('Downloading resume...');
  };

  const aboutData = {
    name: profile.name,
    title: profile.role,
    experience: `${profile.experienceYears}+ years`,
    location: profile.location,
    email: profile.email,
    phone: profile.phone || ''
  };

  const highlights = about.highlights;
  const journeyData = about.journey;

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Who I Am</h3>
            <p>
              I'm {aboutData.name}, a {aboutData.title} with {aboutData.experience} of hands‑on experience
              building full‑stack products and data‑driven solutions. I study B.Tech (ECE) at NIT Raipur
              and enjoy shipping features that are reliable and delightful to use.
            </p>
            <p>
              Recently I have been working in the Finance engineering space at Texas Instruments,
              where I contribute to internal tools, data pipelines and reporting dashboards—bridging
              product thinking with analytics and automation.
            </p>
            <p>
              Beyond day‑to‑day development, I explore Computer Vision and ML (YOLO, PaddleOCR, OpenCV)
              and love crafting UIs with smooth interactions and strong accessibility.
            </p>

            <div className="about-info">
              <div className="info-item">
                <strong>Name:</strong> {aboutData.name}
              </div>
              <div className="info-item">
                <strong>Title:</strong> {aboutData.title}
              </div>
              <div className="info-item">
                <strong>Experience:</strong> {aboutData.experience}
              </div>
              <div className="info-item">
                <strong>Location:</strong> {aboutData.location}
              </div>
              <div className="info-item">
                <strong>Email:</strong> {aboutData.email}
              </div>
              {aboutData.phone && (
                <div className="info-item">
                  <strong>Phone:</strong> {aboutData.phone}
                </div>
              )}
            </div>

            <motion.button
              className="btn btn-primary"
              onClick={downloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="./Resume.pdf" download style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
                <FaDownload /> Download Resume
              </a>
            </motion.button>
          </motion.div>

          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="highlight-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="highlight-icon">
                  <highlight.icon />
                </div>
                <h4>{highlight.title}</h4>
                <p>{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Journey Book */}
        <JourneyBook journeyData={journeyData} />
      </div>
    </section>
  );
};

export default About;
