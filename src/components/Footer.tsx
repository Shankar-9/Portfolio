import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Footer.css'
import { profile } from '../profile'

const Footer = () => {
  const year = new Date().getFullYear()

  const socials = [
    { label: 'GitHub', href: profile.socials.github, Icon: FaGithub },
    { label: 'LinkedIn', href: profile.socials.linkedin, Icon: FaLinkedin },
    { label: 'Email', href: `mailto:${profile.email}`, Icon: FaEnvelope },
  ].filter(s => !!s.href)

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#present', label: 'Present Role' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <motion.div className="f-brand" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h4>{profile.name}</h4>
          <p>{profile.role}</p>
        </motion.div>

        <motion.nav className="f-links" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {links.map(l => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </motion.nav>

        <motion.div className="f-socials" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {socials.map(s => (
            <a key={s.label} href={s.href as string} target={s.label !== 'Email' ? '_blank' : undefined} rel="noreferrer" aria-label={s.label} className="f-social-link">
              <s.Icon />
            </a>
          ))}
        </motion.div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>© {year} {profile.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
