export interface NavItem {
  label: string
  link: string
  className: string
  ref?: React.RefObject<HTMLAnchorElement | null>
}

export const aboutItems = [
  {
    label: 'Project done',
    number: 45,
  },
  {
    label: 'Years of experience',
    number: 10,
  },
]

export const skillItem = [
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool',
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface',
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction',
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server',
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework',
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database',
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework',
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface',
  },
]

export const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Full stack music app',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://github.com/sanek57/',
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Free stock photo app',
    tags: ['API', 'SPA'],
    projectLink: 'https://github.com/sanek57/',
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'Recipe app',
    tags: ['Development', 'API'],
    projectLink: 'https://github.com/sanek57/',
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'Real state website',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/sanek57/',
  },
  {
    imgSrc: '/images/project-5.jpg',
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    projectLink: 'https://github.com/sanek57/',
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/sanek57/',
  },
]
