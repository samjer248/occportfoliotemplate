import { About, Artifact, Experience, Intro, Link } from '@/lib/types'
import React from 'react'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { LuGraduationCap } from 'react-icons/lu'
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa6'
/**
 * ADD IMAGES BELOW AS NEEDED
 */
import portrait from '../../public/portrait.jpg'
import artifact1 from '../../public/artifacts/artifact1.png'
/**
 * END IMAGES
 */
/**
 * BEGIN SEO DATA
 * Set your site title and tell search engines about yourself
 */
export const sitemetadata = {
  title: 'Your Name',
  description: 'Replace with a description of you that is 145-160 characters.',
  dark: false,
  footer: 'Your Name | All rights reserved',
}
/**
 * END SEO DATA
 */

/**
 * BEGIN SECTION DATA
 */

export const intro: Intro = {
  portrait: portrait,
  portraitAlt: 'Describe your profile picture',
  emoji: '👋',
  description: `Hello <strong>I'm Ryan</strong>. I'm a graduate of Ocean County College. I enjoy <em>solving problems</em> and helping others with their goals.`,
  buttons: [
    {
      label: 'Download Resume',
      link: '/resume.pdf',
      style: 'default',
      icon: React.createElement(FaDownload),
    },
    {
      link: 'https://linkedin.com/',
      style: 'outline',
      icon: React.createElement(FaLinkedin),
      alt: 'Visit my LinkedIn profile',
    },
  ],
}

export const about: About = {
  text: `After graduating with a degree in <strong>Accounting</strong>, I decided to pursue my passion for programming. I enrolled in a coding bootcamp and learned <strong>full-stack web development</strong>. <em>My favorite part of programming</em> is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. My core stack is React, Next.js, Node.js, and MongoDB. I am also familiar with TypeScript and Prisma. I am always looking to learn new technologies. I am currently looking for a full-time position as a software developer.<br /> <em>When I'm not coding</em>, I enjoy playing video games, watching movies, and playing with my dog. I also enjoy <strong>learning new things</strong>. I am currently learning about <strong>history and philosophy</strong>. I'm also learning how to play the guitar.`,
}

/**
 * Artifacts are the projects that you want to highlight
 */
export const artifacts: Array<Artifact> = [
  {
    title: 'Title of Artifact/Project',
    description:
      'Description of artifact or project. I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    image: artifact1,
    tags: ['APA Formatting', 'Persuasive Writing'],
    url: 'https://www.linkedin.com/pulse/understanding-your-digital-footprint-how-can-help-job-sam/',
  },
  {
    title: 'Second Artifact Title',
    description:
      'Describe to your prospective employers and colleagues why this artifact is special. What learning happened while you worked on this? What impact might it have had on others?',
    image: artifact1,
    tags: ['Microsoft Office', 'Adobe CC'],
    url: 'https://www.linkedin.com/pulse/understanding-your-digital-footprint-how-can-help-job-sam/',
  },
] as const

export const skills = [
  'Adobe CC',
  'Public Speaking',
  'Microsoft Office',
  'APA Formatting',
  'Persuasive Writing',
] as const

export const experience: Array<Experience> = [
  {
    title: 'Ocean County College',
    location: 'Toms River, NJ',
    description: 'Associate in Science, CSIT',
    icon: React.createElement(LuGraduationCap),
    start: '2018',
    end: '2020',
  },
  {
    title: 'Apple, Inc',
    location: 'Cupertino, CA',
    description: "Design and develop the world's most innovative products.",
    icon: React.createElement(HiOutlineBriefcase),
    start: '2020',
    end: 'Present',
  },
] as const

/**
 * END SECTION DATA
 */
/**
 * THE ITEMS BELOW APPEAR IN YOUR NAVIGATION MENU
 */
export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Artifacts',
    hash: '#artifacts',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
] as const

export const socials = [
  {
    icon: React.createElement(FaLinkedin),
    url: 'https://linkedin.com',
    alt: 'Find me on LinkedIn',
  },
  {
    icon: React.createElement(FaTiktok),
    url: 'https://tiktok.com',
    alt: 'Find me on TikTok',
  },
]
