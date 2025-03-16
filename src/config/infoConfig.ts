export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Yulun (Ryan) Wu'
export const headline = 'A 12th grade student at Shanghai Soong Ching Ling School'
export const introduction =
  "你好！侬好！Hello！Hola！(The four languages I can speak) I'm from Shanghai and an alumnus from Vanke Bilingual School and Shanghai Soong Ching Ling School. I am a terrarium designer, a boy scout, a camp counselor, a developer, and a traditional Chinese medicine leaner."
export const email = 'wuyulun10@gmail.com'
export const githubUsername = 'yulunRyan'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Still working on this...",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I want to share some of my thinkings."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@harvard?lang=en',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/349721082',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
