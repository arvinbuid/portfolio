import Image from "next/image";
import Heading from "./sub/Heading";
import { aboutText, downloadIcon } from "@/assets";
import { arrowLeftIcon } from "@/assets";

function About() {
  return (
    <div id='about' className='min-h-screen flex flex-col items-center'>
      <Heading text='About Me' />
      <div className='w-full flex items-center justify-center sm:justify-between'>
        <Image
          src='/about-me.png'
          alt='About Image'
          width={300}
          height={300}
          className='hidden md:flex md:w-[200px]'
        />
        <div className='relative max-w-[800px] bg-zinc-100 p-5 text-justify rounded-lg dark:bg-zinc-700'>
          <span className='absolute -left-5 top-17 scale-[2.5] text-zinc-100 hidden md:block'>
            {arrowLeftIcon}
          </span>
          <p className='text-lg lg:text-xl font-light text-gray-700 first-letter:pl-3 dark:text-gray-300'>
            {aboutText}
          </p>
          <a
            href='/work-resume.pdf'
            download=''
            className='bg-red-400 px-3 py-2 w-max flex justify-center mt-6 text-md rounded-xl border border-gray-300 text-white hover:bg-red-500 transition-colors'
          >
            <span>Download CV</span>
            <span className='ml-2'>{downloadIcon}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
