import { motion } from 'framer-motion'
import { FaArrowDown, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import './Hero.css'
import { profile } from '../profile'
import { useEffect, useState } from 'react'

const Hero = () => {
  const socials = [
    { Icon: FaGithub, href: profile.socials.github, label: 'GitHub' },
    { Icon: FaLinkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
  ].filter((s) => !!s.href)

  // Typewriter for name
  const [typedName, setTypedName] = useState('')
  useEffect(() => {
    const full = profile.name
    let i = 0
    const id = setInterval(() => {
      setTypedName(full.slice(0, i + 1))
      i += 1
      if (i >= full.length) {
        clearInterval(id)
      }
    }, 90)
    return () => clearInterval(id)
  }, [])

  // Looping typewriter for role
  const fullRole = 'Developer'
  const [roleText, setRoleText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  useEffect(() => {
    const nextTick = () => {
      if (!isDeleting) {
        const next = fullRole.slice(0, roleText.length + 1)
        setRoleText(next)
        if (next === fullRole) {
          setTimeout(() => setIsDeleting(true), 1000)
          return
        }
      } else {
        const next = fullRole.slice(0, roleText.length - 1)
        setRoleText(next)
        if (next === '') {
          setIsDeleting(false)
        }
      }
    }
    const delay = isDeleting ? 60 : 100
    const t = setTimeout(nextTick, delay)
    return () => clearTimeout(t)
  }, [roleText, isDeleting])

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <motion.div 
            className="hero-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow">Hello👋, It's Me ...</p>
            <h1 className="name">
              {typedName}
              <span className="caret" />
            </h1>
            <h2 className="role">
              <span>{roleText}</span>
            </h2>
            <p className="summary">{profile.summary}</p>

            <ul className="key-details">
              <li><span>Experience:</span> {profile.experienceYears}+ years</li>
              <li><span>Location:</span> {profile.location}</li>
              <li><span>Focus:</span> Full-Stack Development</li>
            </ul>

            <div className="hero-actions">
              <a className="btn btn-primary" href={profile.resumeUrl} download>
                <FaDownload /> Download CV
              </a>
              <a className="btn btn-secondary" href="#contact">Contact Me</a>
            </div>

            <div className="hero-socials">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="hero-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="profile-image">
              <img src="/Shankar.jpg" alt={profile.name} />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        className="scroll"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to next section"
      >
        <FaArrowDown />
      </motion.button>
    </section>
  )
}

export default Hero
