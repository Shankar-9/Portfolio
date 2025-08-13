import { motion } from 'framer-motion'
import './PresentRole.css'
import { profile } from '../profile'

const PresentRole = () => {
  const pr = profile.presentRole
  if (!pr) return null
  return (
    <section id="present" className="present">
      <div className="container">
        <motion.div className="present-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2>Present Role</h2>
          <p>What I'm working on right now</p>
        </motion.div>

        <div className="present-grid">
          <motion.div className="present-media" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {/* <div className="logo-wrap">
              <img src={pr.logo} alt={`${pr.company} Logo`} className="ti-logo" />
            </div> */}
            {pr.image && (
              <div className="photo-wrap">
                <img src={pr.image} alt={pr.company} />
              </div>
            )}
          </motion.div>

          <motion.div className="present-content" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3>{pr.company}</h3>
            <h4>{pr.role}{pr.team ? ` • ${pr.team}` : ''}</h4>
            <p>
              Building internal finance tools and services with a focus on reliability, data integrity and
              seamless stakeholder experience. Collaborating across teams to design, implement and deploy
              features that power business operations at scale.
            </p>
            <ul className="present-points">
              <li>Developing full‑stack features (React, Node/Express, REST).</li>
              <li>Data pipelines and reporting dashboards for finance stakeholders.</li>
              <li>Integration with enterprise systems (SAC/analytics, CI/CD, observability).</li>
            </ul>
            <div className="chips">
              <span>React</span><span>TypeScript</span><span>Node.js</span><span>Express</span><span>REST APIs</span><span>PostgreSQL</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PresentRole
