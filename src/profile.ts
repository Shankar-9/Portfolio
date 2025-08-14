export type Socials = {
  github?: string
  linkedin?: string
  twitter?: string
  website?: string
}

export type Profile = {
  name: string
  role: string
  summary: string
  location: string
  email: string
  phone?: string
  experienceYears?: number
  resumeUrl?: string
  socials: Socials
  presentRole?: {
    company: string
    role: string
    team?: string
    logo: string
    image?: string
  }
}

export const profile: Profile = {
  name: 'Shankar Palagani',
  role: 'Software Developer',
  summary:
    'B.Tech (ECE) student at NIT Raipur (2021–2025, CGPA ~8.8). I build full‑stack apps and applied ML/Computer Vision pipelines; experience interning at Texas Instruments and shipping web solutions.',
  location: 'India',
  email: 'palaganigowrishankar8@gmail.com',
  phone: '+91 95429 73947',
  experienceYears: 1,
  resumeUrl: '/Resume.pdf',
  socials: {
    github: 'https://github.com/Shankar-9',
    linkedin: 'https://www.linkedin.com/in/shankar-palagani-1b0a18215/',
    twitter: '',
    website: ''
  },
  presentRole: {
    company: 'Texas Instruments',
    role: 'Software Developer',
    team: 'Finance Team',
    logo: './public/Texas.png',
    image: './public/Texas.png'
  }
}
