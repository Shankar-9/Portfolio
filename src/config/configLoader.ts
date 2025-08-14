import portfolioConfig from './portfolio.json';
import {
  FaReact, FaNodeJs, FaCss3Alt, FaGitAlt, FaDocker, FaHtml5, FaPython, FaGithub, FaNetworkWired,
  FaCode, FaLightbulb, FaUser, FaDownload, FaArrowDown, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaExternalLinkAlt, FaTwitter, FaInstagram
} from 'react-icons/fa';
import {
  SiTypescript, SiMongodb, SiPostgresql, SiFirebase, SiTensorflow, SiOpencv, SiPandas,
  SiNumpy, SiTailwindcss, SiNextdotjs, SiJavascript, SiCplusplus, SiC, SiExpress,
  SiBitbucket, SiPostman, SiSap
} from 'react-icons/si';

// Icon mapping object
const iconMap: { [key: string]: React.ComponentType<any> } = {
  // React Icons
  FaReact, FaNodeJs, FaCss3Alt, FaGitAlt, FaDocker, FaHtml5, FaPython, FaGithub, FaNetworkWired,
  FaCode, FaLightbulb, FaUser, FaDownload, FaArrowDown, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaExternalLinkAlt, FaTwitter, FaInstagram,
  
  // Simple Icons
  SiTypescript, SiMongodb, SiPostgresql, SiFirebase, SiTensorflow, SiOpencv, SiPandas,
  SiNumpy, SiTailwindcss, SiNextdotjs, SiJavascript, SiCplusplus, SiC, SiExpress,
  SiBitbucket, SiPostman, SiSap
};

// Function to get icon component by name
export const getIconComponent = (iconName: string): React.ComponentType<any> => {
  const IconComponent = iconMap[iconName];
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found, using default icon`);
    return FaCode; // Default fallback icon
  }
  return IconComponent;
};

// Function to process skills data with icon components
export const getSkillsData = () => {
  const skills = portfolioConfig.skills;
  
  return {
    languages: skills.languages.map(skill => ({
      ...skill,
      Icon: getIconComponent(skill.icon)
    })),
    frameworks: skills.frameworks.map(skill => ({
      ...skill,
      Icon: getIconComponent(skill.icon)
    })),
    dataML: skills.dataML.map(skill => ({
      ...skill,
      Icon: getIconComponent(skill.icon)
    })),
    tools: skills.tools.map(skill => ({
      ...skill,
      Icon: getIconComponent(skill.icon)
    }))
  };
};

// Function to process about highlights data with icon components
export const getAboutData = () => {
  const about = portfolioConfig.about;
  
  return {
    highlights: about.highlights.map(highlight => ({
      ...highlight,
      icon: getIconComponent(highlight.icon)
    })),
    journey: about.journey
  };
};

// Export the main configuration
export const config = portfolioConfig;

// Export individual sections for easy access
export const profile = config.profile;
export const about = getAboutData();
export const skills = getSkillsData();
export const projects = config.projects;
export const contact = config.contact;
export const navigation = config.navigation;
