import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaUser, FaCode, FaLightbulb, FaGraduationCap, FaBriefcase, FaSchool, FaUniversity, FaMapPin } from 'react-icons/fa';
import './About.css';
import { profile } from '../profile';

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

  const highlights = [
    {
      icon: FaCode,
      title: 'Full‑Stack Development',
      description:
        'Building fast, accessible web apps with React, TypeScript, Node/Express and REST APIs. Focus on clean architecture and DX.'
    },
    {
      icon: FaLightbulb,
      title: 'Data, ML & CV',
      description:
        'Practical experience with TensorFlow, OpenCV, and analytics dashboards (SAC). Passionate about turning data into insight.'
    },
    {
      icon: FaUser,
      title: 'Finance Engineering',
      description:
        'Currently contributing as a Software Developer in the Finance team at Texas Instruments—reliable tooling and reporting.'
    }
  ];

  const journeyData = [
    { 
      year: '2019', 
      title: 'High School', 
      desc: '10 CGPA',
      icon: FaSchool,
      category: 'education',
      completed: true,
      color: '#f97316', // orange
      alternate: 'above' // above the road
    },
    { 
      year: '2021', 
      title: 'Intermediate', 
      desc: '98.1%',
      icon: FaGraduationCap,
      category: 'education',
      completed: true,
      color: '#22c55e', // green
      alternate: 'below' // below the road
    },
    { 
      year: '2024', 
      title: 'Internship', 
      desc: 'Texas Instruments',
      icon: FaBriefcase,
      category: 'career',
      completed: true,
      color: '#3b82f6', // blue
      alternate: 'above' // above the road
    },
    { 
      year: '2025', 
      title: 'B.Tech', 
      desc: 'NIT Raipur',
      icon: FaUniversity,
      category: 'education',
      completed: false,
      color: '#ef4444', // red
      alternate: 'below' // below the road
    },
    { 
      year: '2025', 
      title: 'Texas Instruments', 
      desc: 'Joined as Developer',
      icon: FaBriefcase,
      category: 'career',
      completed: false,
      color: '#8b5cf6', // purple
      alternate: 'above' // above the road
    },
  ];

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
              <a href="/Resume.pdf" download style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
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

        {/* 3D Road Map Journey */}
        <motion.div
          className="roadmap-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="roadmap-title">My Journey Roadmap</h3>
          <div className="roadmap-3d-container">
            <div className="roadmap-3d">
              {/* 3D Road Path */}
              <svg className="road-path" viewBox="0 0 800 400" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1f2937" />
                    <stop offset="50%" stopColor="#374151" />
                    <stop offset="100%" stopColor="#1f2937" />
                  </linearGradient>
                  <filter id="roadShadow">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
                  </filter>
                </defs>
                {/* Main road path - increased stroke width */}
                <path 
                  d="M 50 350 Q 200 200 400 250 Q 600 300 750 200" 
                  stroke="url(#roadGradient)" 
                  strokeWidth="30" 
                  fill="none" 
                  strokeLinecap="round"
                  filter="url(#roadShadow)"
                />
                {/* Road markings - increased stroke width */}
                <path 
                  d="M 50 350 Q 200 200 400 250 Q 600 300 750 200" 
                  stroke="#ffffff" 
                  strokeWidth="4" 
                  fill="none" 
                  strokeDasharray="20,20"
                  strokeLinecap="round"
                />
              </svg>
              
              {/* Map Pins */}
              <div className="map-pins">
                {journeyData.map((milestone, index) => (
                  <motion.div
                    key={milestone.year + milestone.title}
                    className={`map-pin ${milestone.completed ? 'completed' : 'pending'} ${milestone.alternate}`}
                    style={{ '--pin-color': milestone.color } as React.CSSProperties}
                    initial={{ opacity: 0, y: milestone.alternate === 'above' ? -100 : 100, scale: 0.5 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: index * 0.4
                      }
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: milestone.alternate === 'above' ? -8 : 8,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }
                    }}
                  >
                    {/* Data box - positioned above or below based on alternate */}
                    <motion.div 
                      className={`pin-content ${milestone.alternate === 'above' ? 'pin-content-above' : 'pin-content-below'}`}
                      initial={{ opacity: 0, y: milestone.alternate === 'above' ? -30 : 30, scale: 0.8 }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          delay: index * 0.4 + 0.3
                        }
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: milestone.alternate === 'above' ? -3 : 3,
                        scale: 1.02,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 15
                        }
                      }}
                    >
                      <motion.div 
                        className="pin-year"
                        initial={{ scale: 0, rotate: -10 }}
                        whileInView={{ 
                          scale: 1, 
                          rotate: 0,
                          transition: {
                            type: "spring",
                            stiffness: 500,
                            damping: 15,
                            delay: index * 0.4 + 0.5
                          }
                        }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.05,
                          rotate: 2,
                          transition: {
                            type: "spring",
                            stiffness: 600,
                            damping: 10
                          }
                        }}
                      >
                        {milestone.year}
                      </motion.div>
                      <motion.h4 
                        className="pin-title"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ 
                          opacity: 1, 
                          x: 0,
                          transition: {
                            duration: 0.5,
                            delay: index * 0.4 + 0.7
                          }
                        }}
                        viewport={{ once: true }}
                      >
                        {milestone.title}
                      </motion.h4>
                      <motion.p 
                        className="pin-desc"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ 
                          opacity: 1, 
                          x: 0,
                          transition: {
                            duration: 0.5,
                            delay: index * 0.4 + 0.9
                          }
                        }}
                        viewport={{ once: true }}
                      >
                        {milestone.desc}
                      </motion.p>
                    </motion.div>

                    {/* Map Pin Icon - always on the road */}
                    <motion.div 
                      className="pin-icon"
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ 
                        scale: 1, 
                        rotate: -45,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 15,
                          delay: index * 0.4 + 0.2
                        }
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: -45,
                        transition: {
                          type: "spring",
                          stiffness: 500,
                          damping: 10
                        }
                      }}
                    >
                      <FaMapPin />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
