import { motion } from 'framer-motion'
import { FaArrowDown, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import './Hero.css'
import { profile } from '../config/configLoader'
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
    <section id="home" className="hero hero-split">
      <div className="container hero-split-grid">
        <motion.div className="hero-left" initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="eyebrow">Hello, It's Me</p>
          <h1 className="split-name">
            {typedName}
            <span className="caret" />
          </h1>
          <h2 className="typed"><span>{roleText}</span></h2>

          <p className="split-summary">{profile.summary}</p>

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

        <motion.div className="hero-right" initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="hex-frame">
            <img src={profile.profileImage} alt={profile.name} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
