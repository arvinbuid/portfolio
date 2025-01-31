import HTML from "./assets/techstack/html5.png";
import CSS3 from "./assets/techstack/css3.png";
import JS from "./assets/techstack/javascript.svg";
import Tailwind from "./assets/techstack/tailwind.svg";
import React from "./assets/techstack/react.svg";
import Redux from "./assets/techstack/redux.svg";
import StyledComponents from "./assets/techstack/styled-components.svg";
import Pug from "./assets/techstack/pug.svg";
import Git from "./assets/techstack/git.svg";
import Typescript from "./assets/techstack/typescript.svg";
import NextJS from "./assets/techstack/nextjs.svg";
import NodeJS from "./assets/techstack/nodejs.svg";
import Express from "./assets/techstack/express.png";
import PHP from "./assets/techstack/php.svg";
import Laravel from "./assets/techstack/laravel.svg";
import Postgres from "./assets/techstack/postgresql.svg";
import MySQL from "./assets/techstack/mysql.svg";
import MongoDB from "./assets/techstack/mongodb.png";
import Supabase from "./assets/techstack/supabase-icon.svg";
// import Postman from "./assets/techstack/postman.svg";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

const Techstack = () => {
  return (
    <article className='mt-10 mb-4 grid grid-cols-12 col-span-full sm:col-span-6 sm:border-l md:ps-4'>
      <div className='col-span-full '>
        <div className='flex flex-col gap-2 items-center h-full p-2 w-full'>
          <h1 className='text-md'>Frontend</h1>
          <div className='flex flex-wrap gap-3 items-center justify-center mt-[-10px]'>
            {/* HTML Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={HTML} alt='html5-icon' width={35} height={35} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>HTML5</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* CSS Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={CSS3} alt='css3-icon' width={35} height={35} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>CSS3</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Javascript Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    src={JS}
                    className='rounded-md mt-2'
                    alt='javascript-icon'
                    width={35}
                    height={35}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Javascript</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Typescript Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    src={Typescript}
                    className='rounded-md mt-2'
                    alt='typescript-icon'
                    width={35}
                    height={35}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Typescript</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Tailwind Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    src={Tailwind}
                    className='mt-2'
                    alt='tailwindcss-icon'
                    width={35}
                    height={35}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tailwind CSS</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* ReactJS Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={React} className='mt-2' alt='reactjs-icon' width={35} height={35} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>ReactJS</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Redux Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={Redux} className='mt-2' alt='redux-icon' width={35} height={35} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Redux</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Styled Components Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    src={StyledComponents}
                    className='mt-2'
                    alt='styled-components-icon'
                    width={35}
                    height={35}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Styled Components</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Pug Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={Pug} className='mt-2' alt='bootstrap' width={40} height={40} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Pug</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Git Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={Git} className='mt-2' alt='git-icon' width={35} height={35} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Git</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Postman Tooltip */}
            {/* <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={Postman} className='mt-2' alt='postman' width={35} height={35} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Postman</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider> */}
          </div>
        </div>
      </div>
      <div className='col-span-full'>
        <div className='flex flex-col gap-2 items-center h-full p-2 w-full'>
          <h1 className='text-md'>Backend & Databases</h1>
          <div className='flex flex-wrap gap-3 items-center justify-center '>
            {/* NodeJS Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={NodeJS} alt='firebase-icon' width={30} height={30} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Node.js</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* ExpressJS Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={Express} alt='express-icon' width={37} height={37} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Express.js</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* NextJS Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={NextJS} alt='nextjs-icon' width={38} height={38} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>NextJS</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* PHP Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={PHP} alt='php-icon' width={40} height={40} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>PHP</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* PostgreSQL Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={Postgres} alt='mysql-icon' width={36} height={36} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>PostgreSQL</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Laravel Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={Laravel} alt='mysql-icon' width={34} height={34} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Laravel</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* MySQL Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={MySQL} alt='mysql-icon' width={40} height={40} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>MySQL</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* MongoDB Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={MongoDB} alt='mongodb-icon' width={53} height={53} className='pt-1' />
                </TooltipTrigger>
                <TooltipContent>
                  <p>MongoDB</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Supabase Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={Supabase} alt='supabase-icon' width={35} height={35} className='pt-1' />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Supabase</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Techstack;
