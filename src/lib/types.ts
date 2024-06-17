import { StaticImageData } from 'next/image'
import { FunctionComponentElement } from 'react'
import { IconBaseProps, IconType } from 'react-icons'
import { links, skills } from './data'
import { Theme } from '@/context/ThemeContext'

export type About = {
  /**
   * Enter html to describe yourself. `<strong></strong>` for bold and `<em></em>` for italic
   */
  text: string
}

export interface Artifact {
  /**
   * Give your artifact a title like 'Design Project for Nonprofit'
   */
  title: string
  /**
   * Describe your artifact
   */
  description: string
  /**
   * An image to represent your artifact
   */
  image?: StaticImageData | string
  /**
   * Enter a comma-separated list of items inside square brackets like this:
   * ['Adobe Photoshop', 'Microsoft Excel', 'First Aid']
   */
  tags: Skill[]
  /**
   * Upload an image into the /public/images folder
   * Then import the image at the top of this file like this:
   * import nameOfImage from '../public/images/nameOfImageFile.jpg'
   * Then use nameOfImage for the imageUrl property.
   */
  imageUrl?: StaticImageData | string
  /**
   * Enter a url to the page you want visitors to explore
   */
  url: string
}

export interface Button {
  /**
   * What should the button say?
   */
  label?: string
  /**
   * Where should the button take them?
   */
  link: string
  /**
   * What style would you like for your button?
   */
  style: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link'
  /**
   * If you want a icon, specify it here.
   */
  icon?: FunctionComponentElement<IconBaseProps>
  /**
   * Describe the link for screen readers
   */
  alt?: string
}

export interface Experience {
  /**
   * Give your work or educational experience a title
   * i.e. 'Paramedic' or 'Associate in Arts'
   */
  title: string
  /**
   * Where is this employer or school? Provide a City and state like this:
   * 'Toms River, NJ'
   */
  location: string
  /**
   * Describe your experience like this:
   * 'I worked as a paramedic for XYZ organization and I was responsible for...'
   */
  description: string
  /**
   * If this is a work experience use HiOutlineBriefcase
   * If this is an educational experience use LuGraduationCap
   */
  icon?: FunctionComponentElement<IconBaseProps>
  /**
   * Provide the year you started i.e. '2019'
   */
  start: string
  /**
   * Provide the year you ended or if you are still there use present like this:
   * '2024' or 'Present'
   */
  end: string
}

export type Intro = {
  /**
   * Portrait should be an image in public/images folder
   * Import it at the top in the images section (around line 16)
   */
  portrait: StaticImageData | string
  /**
   * Enter text that describes the image to help people with visual impairment
   */
  portraitAlt: string
  /**
   * Add an emoji to appear near your photo
   * or leave this empty if you don't want an emoji
   */
  emoji: string
  /**
   * This is your 5 second elevator pitch to introduce yourself.
   * Enter html to describe yourself. `<strong></strong>` for bold and `<em></em>` for italic
   */
  description: string
  /**
   * Add buttons that appear under your description. The first is usually a link to your resume
   * Then you can add buttons to other things like social accounts.
   */
  buttons: Button[]
}

export interface Link {
  /**
   * This is the text that will appear in your navigation menu
   */
  name: string

  /**
   * The hash string (i.e. anchor link) must start with a # symbol and words are
   * separated by dashes like this: #about-me
   */
  hash: string // i.e. "#projects"
}

export interface Sitemetadata {
  /**
   * Your registered domain:
   * i.e. firstnamelastname.com or firstnamelastname.netlify.app
   */
  domain: string
  /**
   * This is what the tab in your browser will say.
   * Use your Full Name
   */
  title: string
  /**
   * Enter your First Name here
   */
  firstName: string
  /**
   * Enter your last name here
   */
  lastName: string
  /**
   * Describe yourself in 140 to 160 characters. Use a chatbot to help you trim this to the proper length.
   */
  description: string
  /**
   * This text will appear at the bottom of your site
   */
  footer: string
  /**
   * This image will appear as the preview when shared on social media
   */
  metaimage: StaticImageData | string
  /**
   * Decide if you want the dark or light theme to be the default user experience
   */
  defaultTheme: Theme
}

type Skill = (typeof skills)[number]
export type SectionName = (typeof links)[number]['name']
