import React from 'react'
import { motion } from 'framer-motion'
import {
  FaReact, FaNodeJs, FaCss3Alt, FaGitAlt, FaDocker, FaHtml5, FaPython, FaGithub, FaNetworkWired
} from 'react-icons/fa'
import {
  SiTypescript, SiMongodb, SiPostgresql, SiFirebase, SiTensorflow, SiOpencv, SiPandas,
  SiNumpy, SiTailwindcss, SiNextdotjs, SiJavascript, SiCplusplus, SiC, SiExpress,
  SiBitbucket, SiPostman, SiSap
} from 'react-icons/si'
import './Skills.css'

type SkillItem = { name: string; Icon: React.ComponentType<any>; color?: string }

const Section = ({ title, items }: { title: string; items: SkillItem[] }) => (
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
        >
          <div className="icon" style={{ color: s.color || '#0f172a' }}>
            <s.Icon />
          </div>
          <span className="icon-name">{s.name}</span>
        </motion.div>
      ))}
    </div>
  </div>
)

const Skills = () => {
  const languages: SkillItem[] = [
    { name: 'Python', Icon: FaPython, color: '#3776AB' },
    { name: 'C', Icon: SiC, color: '#A8B9CC' },
    { name: 'C++', Icon: SiCplusplus, color: '#00599C' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    { name: 'HTML5', Icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6' },
    { name: 'SQL (PostgreSQL)', Icon: SiPostgresql, color: '#336791' },
    { name: 'SAP ABAP (Basics)', Icon: SiSap, color: '#0FAAFF' },
  ]

  const frameworks: SkillItem[] = [
    { name: 'React.js', Icon: FaReact, color: '#61DAFB' },
    { name: 'Next.js', Icon: SiNextdotjs, color: '#000000' },
    { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
    { name: 'Express.js', Icon: SiExpress, color: '#000000' },
    { name: 'TailwindCSS', Icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
  ]

  const dataML: SkillItem[] = [
    { name: 'TensorFlow', Icon: SiTensorflow, color: '#FF6F00' },
    { name: 'OpenCV', Icon: SiOpencv, color: '#5C3EE8' },
    { name: 'Pandas', Icon: SiPandas, color: '#150458' },
    { name: 'NumPy', Icon: SiNumpy, color: '#013243' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
  ]

  const tools: SkillItem[] = [
    { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
    { name: 'GitHub', Icon: FaGithub, color: '#181717' },
    { name: 'Bitbucket', Icon: SiBitbucket, color: '#2684FF' },
    { name: 'REST APIs', Icon: FaNetworkWired, color: '#0EA5E9' },
    { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
    { name: 'Docker', Icon: FaDocker, color: '#2496ED' },
  ]

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
