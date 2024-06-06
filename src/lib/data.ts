import { Artifact, Experience, Link } from '@/lib/types'
import React from 'react'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { LuGraduationCap } from 'react-icons/lu'

export const artifacts: Array<Artifact> = [
  {
    title: 'Title of Artifact/Project',
    description: 'Description of artifact or project.',
    tags: ['List', 'Items', 'From', 'Skills', 'Below'],
    url: 'https://www.linkedin.com/pulse/understanding-your-digital-footprint-how-can-help-job-sam/',
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

export const links: Link[] = [
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
    hash: '#hello',
  },
  {
    name: 'Link4',
    hash: '#link4',
  },
] as const

export const skills = ['Public Speaking', 'Microsoft Office'] as const
