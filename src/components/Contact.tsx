import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { contact, profile } from '../config/configLoader';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setError(null);

    try {
      const ownerPayload = {
        subject: form.subject,
        name: form.name,
        message: form.message,
        email: form.email,
      } as any;

      const ackPayload = {
        name: form.name,
        email: form.email,
      } as any;

      await Promise.all([
        emailjs.send(contact.emailjs.serviceId, contact.emailjs.templateOwner, ownerPayload, contact.emailjs.publicKey),
        emailjs.send(contact.emailjs.serviceId, contact.emailjs.templateAck, ackPayload, contact.emailjs.publicKey),
      ]);

      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err: any) {
      setError(err?.message || 'Something went wrong. Please try again later.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    { icon: FaEnvelope, title: 'Email', value: contact.email, link: `mailto:${contact.email}` },
    { icon: FaPhone,    title: 'Phone', value: contact.phone, link: `tel:${contact.phone.replace(/\s/g, '')}` },
    { icon: FaMapMarkerAlt, title: 'Location', value: contact.location, link: '#' }
  ];

  const socialLinks = [
    { icon: FaGithub, href: profile.socials.github, label: 'GitHub' },
    { icon: FaLinkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, href: profile.socials.twitter, label: 'Twitter' },
    { icon: FaInstagram, href: profile.socials.instagram, label: 'Instagram' }
  ].filter((s) => !!s.href);

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div className="section-header" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2>Get In Touch</h2>
          <p>Let's work together on your next project</p>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-info" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
            <h3>Let's Connect</h3>
            <p>I'm always interested in hearing about new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!</p>

                         <div className="contact-details">
               {contactInfo.map((info, index) => (
                 <motion.a key={info.title} href={info.link} className="contact-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }} viewport={{ once: true }} whileHover={{ x: 10 }}>
                   <div className="contact-icon"><info.icon /></div>
                   <div className="contact-text"><h4>{info.title}</h4><p>{info.value}</p></div>
                 </motion.a>
               ))}
             </div>

             {socialLinks.length > 0 && (
               <motion.div 
                 className="social-links" 
                 initial={{ opacity: 0, y: 20 }} 
                 whileInView={{ opacity: 1, y: 0 }} 
                 transition={{ duration: 0.6, delay: 0.7 }} 
                 viewport={{ once: true }}
               >
                 <h4>Follow Me</h4>
                 <div className="social-icons">
                   {socialLinks.map((social, index) => (
                     <motion.a
                       key={social.label}
                       href={social.href}
                       target="_blank"
                       rel="noreferrer"
                       className="social-icon"
                       initial={{ opacity: 0, scale: 0.8 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                       viewport={{ once: true }}
                       whileHover={{ scale: 1.1, y: -2 }}
                       whileTap={{ scale: 0.95 }}
                       aria-label={social.label}
                     >
                       <social.icon />
                     </motion.a>
                   ))}
                 </div>
               </motion.div>
             )}
          </motion.div>

          <motion.div className="contact-form" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
            <form onSubmit={onSubmit}>
              <div className="grid-2">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" placeholder="Your Name" value={form.name} onChange={onChange} required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" placeholder="you@example.com" value={form.email} onChange={onChange} required />
                </div>
              </div>

              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" placeholder="How can I help?" value={form.subject} onChange={onChange} required />
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={6} placeholder="Tell me a bit about your idea..." value={form.message} onChange={onChange} required />
              </div>

              <button className="btn btn-primary" disabled={status==='sending'}>
                {status==='sending' ? 'Sending...' : (<><FaPaperPlane /> Send Message</>)}
              </button>

              {status==='sent' && <div className="success">Thanks! Your message has been sent.</div>}
              {status==='error' && <div className="error">{error}</div>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
