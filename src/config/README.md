# Portfolio Configuration System

This configuration system allows you to easily update your portfolio data without touching the React components. All your portfolio information is now centralized in a single JSON file.

## How to Update Your Portfolio

### 1. Main Configuration File
Edit `src/config/portfolio.json` to update your portfolio data. This file contains all the information displayed on your portfolio.

### 2. What You Can Update

#### Profile Information
```json
{
  "profile": {
    "name": "Your Name",
    "role": "Your Role",
    "summary": "Your summary description",
    "location": "Your Location",
    "email": "your.email@example.com",
    "phone": "+1 234 567 8900",
    "experienceYears": 2,
    "resumeUrl": "./path/to/your/resume.pdf",
    "profileImage": "./path/to/your/image.jpg",
         "socials": {
       "github": "https://github.com/yourusername",
       "linkedin": "https://linkedin.com/in/yourusername",
       "twitter": "https://twitter.com/yourusername",
       "instagram": "https://instagram.com/yourusername",
       "website": "https://yourwebsite.com"
     }
  }
}
```

#### About Section
```json
{
  "about": {
    "highlights": [
      {
        "icon": "FaCode",
        "title": "Your Skill Title",
        "description": "Description of your skill"
      }
    ],
    "journey": [
      {
        "year": "2023",
        "title": "Achievement",
        "desc": "Description of achievement"
      }
    ]
  }
}
```

#### Skills
```json
{
  "skills": {
         "languages": [
       {
         "name": "Python",
         "icon": "FaPython",
         "color": "#3776AB",
         "projects": ["Project 1", "Project 2"]
       }
     ],
    "frameworks": [...],
    "dataML": [...],
    "tools": [...]
  }
}
```

#### Projects
```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Title",
      "description": "Project description",
      "technologies": ["React", "Node.js"],
      "category": "fullstack",
      "github": "https://github.com/yourusername/project",
      "live": "https://project-demo.com",
      "featured": true
    }
  ]
}
```

#### Contact Information
```json
{
  "contact": {
    "email": "your.email@example.com",
    "phone": "+1 234 567 8900",
    "location": "Your Location",
    "emailjs": {
      "serviceId": "your_service_id",
      "templateOwner": "your_template_id",
      "templateAck": "your_ack_template_id",
      "publicKey": "your_public_key"
    }
  }
}
```

### 3. Available Icons

You can use any of these icon names in your configuration:

#### Font Awesome Icons (Fa*)
- `FaReact`, `FaNodeJs`, `FaCss3Alt`, `FaGitAlt`, `FaDocker`, `FaHtml5`, `FaPython`, `FaGithub`, `FaNetworkWired`
- `FaCode`, `FaLightbulb`, `FaUser`, `FaDownload`, `FaArrowDown`, `FaLinkedin`, `FaEnvelope`, `FaPhone`, `FaMapMarkerAlt`, `FaPaperPlane`, `FaExternalLinkAlt`, `FaTwitter`, `FaInstagram`

#### Simple Icons (Si*)
- `SiTypescript`, `SiMongodb`, `SiPostgresql`, `SiFirebase`, `SiTensorflow`, `SiOpencv`, `SiPandas`
- `SiNumpy`, `SiTailwindcss`, `SiNextdotjs`, `SiJavascript`, `SiCplusplus`, `SiC`, `SiExpress`
- `SiBitbucket`, `SiPostman`, `SiSap`

### 4. Adding New Icons

If you need a new icon that's not in the list:

1. Import it in `src/config/configLoader.ts`
2. Add it to the `iconMap` object
3. Use it in your JSON configuration

### 5. File Paths

For images and files, use relative paths from the `public` folder:
- Profile image: `./your-image.jpg`
- Resume: `./your-resume.pdf`
- Company logos: `./company-logo.png`

### 6. Project Categories

Available project categories:
- `frontend` - Frontend projects
- `backend` - Backend projects  
- `fullstack` - Full-stack projects

### 7. Benefits

- **Easy Updates**: Change your portfolio content without touching React code
- **Version Control**: Track changes to your portfolio data separately from code
- **Reusability**: Use the same configuration system for different portfolio themes
- **Maintainability**: All data is centralized in one place

### 8. Example Updates

To update your name and role:
```json
{
  "profile": {
    "name": "John Doe",
    "role": "Senior Software Engineer"
  }
}
```

To add a new project:
```json
{
  "projects": [
    {
      "id": 5,
      "title": "My New Project",
      "description": "A new amazing project",
      "technologies": ["React", "TypeScript"],
      "category": "frontend",
      "github": "https://github.com/username/project",
      "live": "https://project.com",
      "featured": true
    }
  ]
}
```

That's it! Your portfolio will automatically update with the new information when you save the JSON file and refresh the page.
