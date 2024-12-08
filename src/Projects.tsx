import jobrover from "./assets/jobrover.png";
import worldwise from "./assets/worldwise.png";
import theWildOasis from "./assets/the-wild-oasis.png";
import natours from "./assets/natours.png";
import nextchat from "./assets/next-chat.png";

import HTML from "./assets/techstack/html5.png";
import CSS3 from "./assets/techstack/css3.png";
import JS from "./assets/techstack/javascript.svg";
import Typescript from "./assets/techstack/typescript.svg";
import NodeJS from "./assets/techstack/nodejs.svg";
import Express from "./assets/techstack/express.png";
import Pug from "./assets/techstack/pug.svg";
import MongoDB from "./assets/techstack/mongodb.png";
import React from "./assets/techstack/react.svg";
import NextJS from "./assets/techstack/nextjs.svg";
import Clerk from "./assets/techstack/clerk.png";
import ReactLeaflet from "./assets/leaflet.svg";
import ReactRouter from "./assets/techstack/react-router.svg";
import ReactQuery from "./assets/techstack/react-query.svg";
import PHP from "./assets/techstack/php.svg";
import MySQL from "./assets/techstack/mysql.svg";
import Convex from "./assets/techstack/convex.png";
import StyledComponents from "./assets/techstack/styled-components.svg";
import Supabase from "./assets/techstack/supabase-icon.svg";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

const Projects = () => {
  return (
    <>
      <div className='text-start p-5'>
        <h3 className='text-xl font-bold text-primary text-start'>My Projects</h3>
        <p className='text-muted-foreground'>My recent projects: </p>
      </div>

      {/* Projects */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        {/* the-wild-oasis */}
        <aside className='flex flex-col border rounded overflow-hidden h-auto w-full shadow m-auto max-w-[300px]'>
          <div className='relative h-[180px] overflow-hidden flex justify-center'>
            <img
              src={theWildOasis}
              alt='e-commerce'
              className='ease-in-out duration-100 w-full hover:scale-105 object-contain object-center'
            />
          </div>
          <div className='flex flex-col ml-4 pt-2 items-start'>
            <div>
              <h5 className='text-lg font-semibold text-start'>The Wild Oasis</h5>
              <p className='flex items-center gap-1 text-blue-500 text-xs'>PERSONAL PROJECT</p>
            </div>
          </div>
          <div className='flex flex-col px-2 gap-3 h-auto'>
            <p className='text-sm text-start text-muted-foreground ml-1.5 mt-2'>
              An internal web application where the employees of the fictional Wild Oasis company
              can manage bookings, check-ins & check-outs of a guests, cabins and many more.
            </p>

            {/* techstack icons */}
            <div className='flex flex-wrap gap-1.5 col-span-3 my-2 ml-2 '>
              {/* HTML Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={HTML} alt='html5-icon' className='w-[20px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>HTML5</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* CSS3 Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={CSS3} alt='css3-icon' className='w-[20px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>CSS3</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Javascript */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={JS} alt='javascript-icon' className='w-[22px] rounded-sm mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Javascript</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* ReactJS Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={React} alt='reactjs-icon' className='w-[22px] rounded-sm mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>ReactJS</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* React Router */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={ReactRouter} alt='tailwindcss-icon' className='w-[22px] mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>React Router</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* React Query */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={ReactQuery} alt='react-query-icon' className='w-[24px] mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>React Query</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Styled Components */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src={StyledComponents}
                      alt='styled-components-icon'
                      className='w-[25px] mt-[3px]'
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Styled Components</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Supabase */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={Supabase} alt='supabase-icon' className='w-[22px] mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Supabase</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* source code & live preview */}
            <div className='flex flex-col mb-1'>
              {/* github source code button*/}
              <a href='https://github.com/arvinbuid/the-wild-oasis' className='text-xs w-full'>
                <button className='text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mb-2 flex gap-1 items-center justify-center w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-10 w-10 p-2 text-blue-600'
                  >
                    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                    <path d='M9 18c-4.51 2-5-2-7-2'></path>
                  </svg>
                  Source Code
                </button>
              </a>

              {/* live preview */}
              <a
                href='https://the-wild-oasis-personal-me.netlify.app/login'
                className='text-xs w-full'
              >
                <button className='text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mb-2 flex gap-1 items-center justify-center w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-10 w-10 p-2 text-blue-600'
                  >
                    <circle cx='12' cy='12' r='3'></circle>
                    <path d='M21 12c0-3.9-4.5-9-9-9s-9 5.1-9 9 4.5 9 9 9 9-5.1 9-9z'></path>
                  </svg>
                  Live Preview
                </button>
              </a>
            </div>
          </div>
        </aside>

        {/* next-chat */}
        <aside className='flex flex-col border rounded overflow-hidden h-auto w-full shadow m-auto max-w-[300px]'>
          <div className='relative h-[180px] overflow-hidden flex justify-center'>
            <img
              src={nextchat}
              alt='e-commerce'
              className='ease-in-out duration-100 w-full hover:scale-105 object-contain object-center'
            />
          </div>
          <div className='flex flex-col ml-4 pt-2 items-start'>
            <div>
              <h5 className='text-lg font-semibold text-start'>Next Chat</h5>
              <p className='flex items-center gap-1 text-blue-500 text-xs'>PERSONAL PROJECT</p>
            </div>
          </div>
          <div className='flex flex-col px-2 gap-3 h-auto'>
            <p className='text-sm text-start text-muted-foreground ml-1.5 mt-2'>
              A web application to chat users and create group chats to share memories with another
              users. Designed to give the users a great user experience with its light and dark
              theme and modern looking feel.
            </p>

            {/* techstack icons */}
            <div className='flex flex-wrap gap-1.5 col-span-3 my-2 ml-2 '>
              {/* HTML Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={HTML} alt='html5-icon' className='w-[20px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>HTML5</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* CSS3 Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={CSS3} alt='css3-icon' className='w-[20px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>CSS3</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Typescript */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src={Typescript}
                      alt='javascript-icon'
                      className='w-[22px] rounded-sm mt-[3px]'
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Typescript</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* NextJS Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={NextJS} alt='nextjs-icon' className='w-[23.5px] mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>NextJS</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Convex Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={Convex} alt='convex-icon' className='w-[24px] mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Convex</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Clerk Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={Clerk} alt='nextjs-icon' className='w-[19px] mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Clerk</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* source code & live preview */}
            <div className='flex flex-col mb-1'>
              {/* github source code button*/}
              <a href='https://github.com/arvinbuid/next-chat' className='text-xs w-full'>
                <button className='text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mb-2 flex gap-1 items-center justify-center w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-10 w-10 p-2 text-blue-600'
                  >
                    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                    <path d='M9 18c-4.51 2-5-2-7-2'></path>
                  </svg>
                  Source Code
                </button>
              </a>

              {/* live preview */}
              <a href='https://next-chat-teal-nine.vercel.app' className='text-xs w-full'>
                <button className='text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mb-2 flex gap-1 items-center justify-center w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-10 w-10 p-2 text-blue-600'
                  >
                    <circle cx='12' cy='12' r='3'></circle>
                    <path d='M21 12c0-3.9-4.5-9-9-9s-9 5.1-9 9 4.5 9 9 9 9-5.1 9-9z'></path>
                  </svg>
                  Live Preview
                </button>
              </a>
            </div>
          </div>
        </aside>

        {/* natours */}
        <aside className='flex flex-col border rounded overflow-hidden h-auto w-full shadow m-auto max-w-[300px]'>
          <div className='relative h-[180px] overflow-hidden flex justify-center'>
            <img
              src={natours}
              alt='e-commerce'
              className='ease-in-out duration-100 w-full hover:scale-105 object-contain object-center'
            />
          </div>
          <div className='flex flex-col ml-4 pt-2 items-start'>
            <div>
              <h5 className='text-lg font-semibold text-start'>Natours</h5>
              <p className='flex items-center gap-1 text-blue-500 text-xs'>PERSONAL PROJECT</p>
            </div>
          </div>
          <div className='flex flex-col px-2 gap-3 h-auto'>
            <p className='text-sm text-start text-muted-foreground ml-1.5 mt-2'>
              A web application of the fictional company Natours to purchase and book a tour online.
              The tours offer a different variety of tours, from hiking, camping, stargazing, and
              many more.
            </p>

            {/* techstack icons */}
            <div className='flex flex-wrap gap-1.5 col-span-3 my-2 ml-2 '>
              {/* HTML Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={HTML} alt='html5-icon' className='w-[20px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>HTML5</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* CSS3 Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={CSS3} alt='css3-icon' className='w-[20px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>CSS3</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Javascript */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={JS} alt='javascript-icon' className='w-[22px] rounded-sm mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Javascript</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* NodeJS Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={NodeJS} alt='reactjs-icon' className='w-[20px] rounded-sm mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Node.js</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Express Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={Express} alt='tailwindcss-icon' className='w-[22px] mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Express</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Pug Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={Pug} alt='react-leaflet-icon' className='w-[22px] mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Pug</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* MongoDB Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={MongoDB} alt='react-leaflet-icon' className='w-[28px] mt-[7px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>MongoDB</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* source code & live preview */}
            <div className='flex flex-col mb-1'>
              {/* github source code button*/}
              <a href='https://github.com/arvinbuid/natours' className='text-xs w-full'>
                <button className='text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mb-2 flex gap-1 items-center justify-center w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-10 w-10 p-2 text-blue-600'
                  >
                    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                    <path d='M9 18c-4.51 2-5-2-7-2'></path>
                  </svg>
                  Source Code
                </button>
              </a>

              {/* live preview */}
              <a href='https://natours-phct.onrender.com/' className='text-xs w-full'>
                <button className='text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mb-2 flex gap-1 items-center justify-center w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-10 w-10 p-2 text-blue-600'
                  >
                    <circle cx='12' cy='12' r='3'></circle>
                    <path d='M21 12c0-3.9-4.5-9-9-9s-9 5.1-9 9 4.5 9 9 9 9-5.1 9-9z'></path>
                  </svg>
                  Live Preview
                </button>
              </a>
            </div>
          </div>
        </aside>

        {/* worldwise */}
        <aside className='flex flex-col border rounded overflow-hidden h-auto w-full shadow m-auto max-w-[300px]'>
          <div className='relative h-[180px] overflow-hidden flex justify-center'>
            <img
              src={worldwise}
              alt='e-commerce'
              className='ease-in-out duration-100 w-full hover:scale-105 object-contain object-center'
            />
          </div>
          <div className='flex flex-col ml-4 pt-2 items-start'>
            <div>
              <h5 className='text-lg font-semibold text-start'>WorldWise</h5>
              <p className='flex items-center gap-1 text-blue-500 text-xs'>PERSONAL PROJECT</p>
            </div>
          </div>
          <div className='flex flex-col px-2 gap-3 h-auto'>
            <p className='text-sm text-start text-muted-foreground ml-1.5 mt-2'>
              An interactive web application that lets users mark a location on the world map that
              they have been to and share their experiences there. React Leaflet Third Party Library
              Package was utilized for the application.
            </p>

            {/* techstack icons */}
            <div className='flex flex-wrap gap-1.5 col-span-3 my-2 ml-2 '>
              {/* HTML Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={HTML} alt='html5-icon' className='w-[20px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>HTML5</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* CSS3 Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={CSS3} alt='css3-icon' className='w-[20px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>CSS3</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Javascript */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={JS} alt='javascript-icon' className='w-[22px] rounded-sm mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Javascript</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* ReactJS Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={React} alt='reactjs-icon' className='w-[22px] rounded-sm mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>ReactJS</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* React Router */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={ReactRouter} alt='tailwindcss-icon' className='w-[22px] mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>React Router</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* React Leaflet */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src={ReactLeaflet}
                      alt='react-leaflet-icon'
                      className='w-[55px] mt-[3px]'
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>React Leaflet</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* source code & live preview */}
            <div className='flex flex-col mb-1'>
              {/* github source code button*/}
              <a href='https://github.com/arvinbuid/worldwise' className='text-xs w-full'>
                <button className='text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mb-2 flex gap-1 items-center justify-center w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-10 w-10 p-2 text-blue-600'
                  >
                    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                    <path d='M9 18c-4.51 2-5-2-7-2'></path>
                  </svg>
                  Source Code
                </button>
              </a>

              {/* live preview */}
              <a href='https://worldwise-me.netlify.app/' className='text-xs w-full'>
                <button className='text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mb-2 flex gap-1 items-center justify-center w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-10 w-10 p-2 text-blue-600'
                  >
                    <circle cx='12' cy='12' r='3'></circle>
                    <path d='M21 12c0-3.9-4.5-9-9-9s-9 5.1-9 9 4.5 9 9 9 9-5.1 9-9z'></path>
                  </svg>
                  Live Preview
                </button>
              </a>
            </div>
          </div>
        </aside>

        {/* jobrover */}
        <aside className='flex flex-col border rounded overflow-hidden h-auto w-full shadow m-auto max-w-[300px]'>
          <div className='relative h-[180px] overflow-hidden flex justify-center'>
            <img
              src={jobrover}
              alt='e-commerce'
              className='ease-in-out duration-100 w-full hover:scale-105 object-contain object-center'
            />
          </div>
          <div className='flex flex-col ml-4 pt-2 items-start'>
            <div>
              <h5 className='text-lg font-semibold text-start'>Jobrover</h5>
              <p className='flex items-center gap-1 text-blue-500 text-xs'>PERSONAL PROJECT</p>
            </div>
          </div>
          <div className='flex flex-col px-2 gap-3 h-auto'>
            <p className='text-sm text-start text-muted-foreground ml-1.5 mt-2'>
              Job listing application to search and apply jobs online. Employers can also register
              an account to post a job listing in the system. It was made using vanilla PHP and
              composer for autoloading.
            </p>

            {/* techstack icons */}
            <div className='flex flex-wrap gap-1.5 col-span-3 my-2 ml-2 '>
              {/* HTML Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={HTML} alt='html5-icon' className='w-[20px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>HTML5</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* CSS3 Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={CSS3} alt='css3-icon' className='w-[20px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>CSS3</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* PHP Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={PHP} alt='php-icon' className='w-[38px] rounded-sm mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>PHP</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* MySQL Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={MySQL} alt='mysql-icon' className='w-[35px] rounded-sm mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>MySQL</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* source code & live preview */}
            <div className='flex flex-col mb-1'>
              {/* github source code button*/}
              <a href='https://github.com/arvinbuid/jobrover' className='text-xs w-full'>
                <button className='text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mb-2 flex gap-1 items-center justify-center w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-10 w-10 p-2 text-blue-600'
                  >
                    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                    <path d='M9 18c-4.51 2-5-2-7-2'></path>
                  </svg>
                  Source Code
                </button>
              </a>

              {/* live preview */}
              <a href='https://jobrover.tech' className='text-xs w-full'>
                <button className='text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mb-2 flex gap-1 items-center justify-center w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-10 w-10 p-2 text-blue-600'
                  >
                    <circle cx='12' cy='12' r='3'></circle>
                    <path d='M21 12c0-3.9-4.5-9-9-9s-9 5.1-9 9 4.5 9 9 9 9-5.1 9-9z'></path>
                  </svg>
                  Live Preview
                </button>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Projects;
