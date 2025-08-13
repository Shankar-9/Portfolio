export type ExperienceItem = {
  company: string
  title: string
  location?: string
  start: string
  end: string
  summary?: string
  bullets?: string[]
}

export type EducationItem = {
  school: string
  degree: string
  field?: string
  start: string
  end: string
  details?: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Texas Instruments',
    title: 'Software Development Intern',
    location: 'Bangalore, India',
    start: 'May 2024',
    end: 'Jan 2025',
    summary:
      'Worked across asset systems, ML/CV PoCs and internal tooling. Contributed to web and mobile utilities.',
    bullets: [
      'Built bulk upload module for Asset Management System (SAP UI5, JavaScript) and enabled legacy systems support.',
      'Document extraction PoC using PaddleOCR + CV; table‑level data extraction logic.',
      'YOLOv5 based multi‑QR detection model and pipeline with a self‑curated dataset.',
      'Tracking and resolution via Jira; contributed to codebase using Bitbucket with CI/CD in Jenkins.',
      'Converted web apps to mobile‑ready APKs using Cordova.',
      'SAP Analytics Cloud (SAC): PoC to transition from BPC to SAC with OData services for backend integration.'
    ]
  },
  {
    company: 'Unstop (Full‑stack E‑commerce Website)',
    title: 'Personal Project',
    location: '',
    start: 'Mar 2023',
    end: 'Mar 2023',
    summary: 'End‑to‑end e‑commerce app with auth, product management and cart functionality.',
    bullets: ['Stack: React, Node.js, Express.js, MongoDB, REST API, JWT Auth, CSS, JavaScript, HTML']
  },
  {
    company: 'KIN Synthesis – Image Generation',
    title: 'Open Research/Project',
    start: 'Apr 2024',
    end: 'Apr 2024',
    summary: 'Synthesizing child face images from parent faces and vice‑versa using deep learning.',
    bullets: ['Skills: Python, PyTorch, OpenCV, Pretrained Models, FaceNet, Dlib, MTCNN, Image Blending']
  },
  {
    company: 'Document Information Extraction',
    title: 'ML Pipeline',
    start: 'Jun 2024',
    end: 'Jun 2024',
    bullets: ['Python, PyTorch, PaddleOCR, LayoutLMv3, TATR, Label Studio, OpenCV, Numpy, Pandas']
  },
  {
    company: 'Multi‑QR Detection and Decoding',
    title: 'CV Project',
    start: 'May 2024',
    end: 'May 2024',
    bullets: ['YOLOv5, PyTorch, OpenCV, Pyzbar, pylibdmtx, Label Studio, Python']
  }
]

export const education: EducationItem[] = [
  {
    school: 'National Institute of Technology, Raipur',
    degree: 'B.Tech',
    field: 'Electronics and Communication Engineering',
    start: '2021',
    end: '2025',
    details: ['CGPA: 8.81 (Current)']
  },
  {
    school: 'Sasi Junior College, Velevinnu',
    degree: 'Intermediate',
    start: '2019',
    end: '2021',
    details: ['Percentage: 98.1%']
  },
  {
    school: 'Vikas High School, Chatrati',
    degree: 'Schooling',
    start: '2019',
    end: '2019',
    details: ['CGPA: 10']
  }
]
