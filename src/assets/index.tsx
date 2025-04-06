import { RiBriefcaseLine, RiCopyrightLine, RiGithubLine, RiHistoryLine, RiHome5Line, RiMoonFoggyFill, RiProjectorLine, RiSunFoggyFill, RiUserLine } from "@remixicon/react";

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
    name: 'The Wild Oasis',
    desc: 'An internal web application where the employees of the fictional Wild Oasis company can manage bookings, check-ins & check-outs of a guests, cabins and many more..',
    url: '/projects/the-wild-oasis.png',
    tech: ['HTML', 'CSS', 'ReactJS'],
  },
  {
    name: 'Dapper Fit',
    desc: 'A modern Ecommerce platform built with Next.js, Typescript, Prisma and ShadCN where a user can order and pay clothes online. A user can sign up/login and admin can manage order and products.',
    url: '/projects/dapper-fit.png',
    tech: ['HTML', 'CSS', 'Typescript', 'React', 'NextJS'],
  },
  {
    name: 'Synapse',
    desc: 'Fullstack social media web application made with NextJS 15 & modern web technologies. Users can post, comment like, received real time notifications and follow other users. Responsive to all devices with toggle dark mode functionality.',
    url: '/projects/synapse.png',
    tech: ['HTML', 'CSS', 'Typescript', 'React', 'NextJS'],
  },
  {
    name: 'HirePulse',
    desc: 'A fullstack MERN application for managing and tracking job applications. Users can do CRUD operations & admin can manage users job application. Responsive to all devices with light/dark functionality.',
    url: '/projects/hirepulse.png',
    tech: ['HTML', 'CSS', 'Typescript', 'NodeJS', 'MongoDB'],
  },
  {
    name: 'Workhive',
    desc: 'Job listing application to search and apply jobs online. Employers can also register an account to post a job listing in the syste and job seekers can apply for jobs.',
    url: '/projects/workhive.png',
    tech: ['HTML', 'CSS', 'PHP', 'Laravel'],
  },
]

export const projectsButton = [
  'All',
  'HTML',
  'CSS',
  'Typescript',
  'ReactJS',
  'NextJS',
  'NodeJS',
  'PHP',
  'Laravel',
  'PostgreSQL',
  'MySQL',
  'MongoDB'
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