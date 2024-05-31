import { LuGraduationCap } from 'react-icons/lu'
import { HiOutlineBriefcase } from 'react-icons/hi'
import React, { FunctionComponentElement } from 'react'
import { StaticImageData } from 'next/image'
import { IconBaseProps } from 'react-icons'

export const artifacts: Array<Artifact> = [
  {
    title: 'Title of Artifact/Project',
    description: 'Description of artifact or project.',
    tags: ['List', 'Items', 'From', 'Skills', 'Below'],
  },
] as const

export const experience: Array<Experience> = [
  {
    title: 'Name of Educational Institution',
    location: 'City, State',
    description: 'Name of Program, Certificate, or Degree',
    icon: React.createElement(LuGraduationCap),
    start: 'Start year',
    end: 'End Year or Present',
  },
  {
    title: 'Name of Organization',
    location: 'City, State',
    description: 'Describe your work.',
    icon: React.createElement(HiOutlineBriefcase),
    start: 'Start year',
    end: 'End Year or Present',
  },
] as const

export const links: Array<Link> = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Hello',
    hash: '',
  },
] as const

export const skills = ['Public Speaking', 'Microsoft Office'] as const

/**
 * Type info
 */

interface Artifact {
  /**
   * Give your artifact a title like 'Design Project for Nonprofit'
   */
  title: string
  /**
   * Describe your artifact
   */
  description: string
  /**
   * Enter a comma-separated list of items inside square brackets like this:
   * ['Adobe Photoshop', 'Microsoft Excel', 'First Aid']
   */
  tags: string[]
  /**
   * Upload an image into the /public/images folder
   * Then import the image at the top of this file like this:
   * import nameOfImage from '../public/images/nameOfImageFile.jpg'
   * Then use nameOfImage for the imageUrl property.
   */
  imageUrl?: StaticImageData | string
}

interface Experience {
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
  description: string
  icon?: FunctionComponentElement<IconBaseProps>
  start: string
  end: string
}

interface Link {
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
