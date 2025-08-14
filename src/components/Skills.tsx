import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Skills.css'
import { skills } from '../config/configLoader'

type SkillItem = { 
  name: string; 
  Icon: React.ComponentType<any>; 
  color?: string; 
  projects?: string[] 
}

const Section = ({ title, items }: { title: string; items: SkillItem[] }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="skills-section">
      <h3>{title}</h3>
      <div className="skills-icons">
        {items.map((s, i) => (
          <motion.div
            key={s.name}
            className="icon-card"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.03 }}
            onMouseEnter={() => setHoveredSkill(s.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="icon" style={{ color: s.color || '#0f172a' }}>
              <s.Icon />
            </div>
            <span className="icon-name">{s.name}</span>
            
            {/* Tooltip */}
            {hoveredSkill === s.name && s.projects && s.projects.length > 0 && (
              <motion.div
                className="skill-tooltip"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="tooltip-header">
                  <span>Projects using {s.name}:</span>
                </div>
                <div className="tooltip-content">
                  {s.projects.map((project, index) => (
                    <div key={index} className="tooltip-project">
                      • {project}
                    </div>
                  ))}
                </div>
                <div className="tooltip-arrow"></div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const { languages, frameworks, dataML, tools } = skills;

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Tools</h2>
          <p>Technologies and platforms I work with</p>
        </div>

        <Section title="Languages" items={languages} />
        <Section title="Frameworks & Libraries" items={frameworks} />
        <Section title="Data & ML" items={dataML} />
        <Section title="Tools & Platforms" items={tools} />
      </div>
    </section>
  )
}

export default Skills
