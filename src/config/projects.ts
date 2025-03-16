// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'Freshman scholarship, 2023 third prize scholarship, 2024 first prize scholarship',
    description: '',
    date: '2022-2024',
    location: 'SCLS, Shanghai',
  },
  {
    name: 'American Computer Science League (intermediate) Team gold, Individual Top Scores',
    description: '',
    date: '2023',
    location: 'China',
  },
]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: 'Environmental research',
    description: 'Researched on elevating the performance of plastic-degrading bacteria; investigated combined pollution of mercury and microplastics ',
    link: { href: '', label: 'GitHub Cards' },
    tags: ['Microplastic', 'pollution', 'Ideonella Sakaiensis']
  },
 
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: 'Camp counselor ',
    description:
      'Coached kids outdoor survival skills as senior boy scout(8 years); led 3 hiking trips, raising environmental awareness; mental supporter for 100+ kids',
    date: '2023',
    location: 'Chiang Mai, Thailand',
  },
  {
    name: 'Terrarium designer; environmental educator',
    description:
      'Created 55+ closed ecosystems; raised and investigated 5 species of insects; recorded plant growth; uploaded tutorial videos, total 30k+views',
    date: '2023-2025',
    location: 'Shanghai',
  },
  {
    name: 'Game and AI designer',
    description:
      'Designed 5 games using pygame (shared and played by classmates), 1 AI and 1 webpage for college counseling; practiced advanced algorithms ',
    date: '2022-2025',
    location: 'Shanghai',
  },
]
