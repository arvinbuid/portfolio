import { RiBriefcaseLine, RiCopyrightLine, RiEyeLine, RiGithubLine, RiHistoryLine, RiHome5Line, RiMoonFoggyFill, RiProjectorLine, RiSunFoggyFill, RiUserLine } from "@remixicon/react";

export const heroIcons = [
  <RiGithubLine key='github-icon' />,
];

import { RiDownloadLine, RiArrowLeftSFill } from "@remixicon/react";

export const downloadIcon = <RiDownloadLine />;
export const arrowLeftIcon = <RiArrowLeftSFill />;

export const aboutText =
  "Hello. I'm Arvin Buid, a web developer from Cavite, Philippines. I am comfortable working with frontend technologies like HTML, CSS, Javascript, and React.js but I can also work with the backend technologies like Node.js. I'm passionate about web development and constantly learning new technologies to improve my skills and understanding about web development.";

export const experienceData = [
  {
    year: 2018,
    title: "Foundation and Basics",
    education: "High School Diploma: Took TVL/ICT Programming strand, and other related subjects.",
    experience: [
      "HTML, CSS, Javascript: Learn through online resources and senior high school internship.",
    ],
  },
  {
    year: 2022,
    title: "Advanced Learning and Internship Experience",
    education:
      "Bachelor's Degree in Information Technology: Graduated a 4 year BSIT course major in web development.",
    experience: [
      "Internship Experience: Secure internship to render 486 hours of work doing IT related tasks and web development.",
    ],
  },
];

export const skillsData = [
  {
    name: "HTML",
    icon: "/skills/html.png",
  },
  {
    name: "CSS",
    icon: "/skills/css.png",
  },
  {
    name: "JS",
    icon: "/skills/js.png",
  },
  {
    name: "TypeScript",
    icon: "/skills/ts.png",
  },
  {
    name: "ReactJS",
    icon: "/skills/react.png",
  },
  {
    name: "Next.js",
    icon: "/skills/nextjs.png",
  },
  {
    name: "Node.js",
    icon: "/skills/nodejs.png",
  },
  {
    name: "PHP",
    icon: "/skills/php.png",
  },
  {
    name: "Laravel",
    icon: "/skills/laravel.png",
  },
  {
    name: "PostgreSQL",
    icon: "/skills/postgres.png",
  },
  {
    name: "MySQL",
    icon: "/skills/mysql.png",
  },
  {
    name: "MongoDB",
    icon: "/skills/mongodb.png",
  },
];

export const projectsData = [

  {
    name: 'Dapper Fit',
    desc: 'A modern Ecommerce platform built with Next.js, Typescript, Prisma and ShadCN where a user can order and pay clothes online. A user can sign up/login and admin can manage order and products.',
    url: '/projects/dapper-fit.png',
    tech: ['HTML', 'CSS', 'Typescript', 'ReactJS', 'NextJS', 'PostgreSQL'],
    githubLink: 'https://github.com/arvinbuid/dapper-fit',
    livePreview: "https://dapper-fit.vercel.app/"
  },
  {
    name: 'PrimeCare',
    desc: 'An interactive healthcare appointment management system where the patients set an appointment with a doctor, and the doctor can manage their appointments. SMS notifications, admin passkey to manage appointments, and real-time tracking and monitoring with Sentry.',
    url: '/projects/primecare.png',
    tech: ['HTML', 'CSS', 'Typescript', 'ReactJS', 'NextJS'],
    githubLink: 'https://github.com/arvinbuid/primecare',
    livePreview: "https://primecare-kappa.vercel.app/"
  },
  {
    name: 'The Wild Oasis',
    desc: 'An internal web application where the employees of the fictional Wild Oasis company can manage bookings, check-ins & check-outs of a guests, cabins and many more..',
    url: '/projects/the-wild-oasis.png',
    tech: ['HTML', 'CSS', 'Javascript', 'ReactJS'],
    githubLink: 'https://github.com/arvinbuid/the-wild-oasis',
    livePreview: "https://the-wild-oasis-personal-me.netlify.app/login"
  },
  {
    name: 'Workhive',
    desc: 'Job listing application to search and apply jobs online. Employers can also register an account to post a job listing in the syste and job seekers can apply for jobs.',
    url: '/projects/workhive.png',
    tech: ['HTML', 'CSS', 'PHP', 'Laravel', 'MySQL'],
    githubLink: 'https://github.com/arvinbuid/workhive',
    livePreview: "#"
  },
  {
    name: 'HirePulse',
    desc: 'A fullstack MERN application for managing and tracking job applications. Users can do CRUD operations & admin can manage users job application. Responsive to all devices with light/dark functionality.',
    url: '/projects/hirepulse.png',
    tech: ['HTML', 'CSS', 'Typescript', 'NodeJS', 'MongoDB'],
    githubLink: 'https://github.com/arvinbuid/hirepulse',
    livePreview: "https://hirepulse.onrender.com"
  },
  {
    name: 'Synapse',
    desc: 'Fullstack social media web application made with NextJS 15 & modern web technologies. Users can post, comment like, received real time notifications and follow other users. Responsive to all devices with toggle dark mode functionality.',
    url: '/projects/synapse.png',
    tech: ['HTML', 'CSS', 'Typescript', 'ReactJS', 'NextJS', 'PostgreSQL'],
    githubLink: 'https://github.com/arvinbuid/synapse',
    livePreview: "https://synapse-six-sand.vercel.app/"
  },
]

export const projectsButton = [
  'All',
  'HTML',
  'CSS',
  'Javascript',
  'Typescript',
  'ReactJS',
  'NextJS',
  'NodeJS',
  'PHP',
  'Laravel',
  'MySQL',
  'PostgreSQL',
  'MongoDB'
]

export const projectIcons = [
  <RiGithubLine key='github-icon' />,
  <RiEyeLine key='live-icon' />
]

export const copyRightIcon = <RiCopyrightLine />


export const navbarData = [
  {
    id: 'home',
    name: 'Home',
    icon: <RiHome5Line />,
  },
  {
    id: 'about',
    name: 'About',
    icon: <RiUserLine />,
  },
  {
    id: 'experience',
    name: 'MyRoad',
    icon: <RiHistoryLine />,
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: <RiBriefcaseLine />,
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <RiProjectorLine />,
  },
]

export const sunIcon = <RiSunFoggyFill />
export const moonIcon = <RiMoonFoggyFill />