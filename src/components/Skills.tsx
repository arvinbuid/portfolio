"use client";

import Image from "next/image";
import Heading from "./sub/Heading";

function Skills() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-y-20 py-20 px-20 lg:px-96'>
      <Heading text='Skills' />
      <div className='w-full flex justify-between flex-wrap gap-x-8 gap-y-6 lg:gap-y-10'>
        <div className='flex justify-center items-center px-4 lg:px-5 py-2 gap-x-4 gap-y-8 lg:gap-y-6 border border-yellow-500 rounded-xl bg-zinc-100'>
          <Image
            src='/skills/nextjs.png'
            width={100}
            height={100}
            alt='Skills Image'
            className='h-auto w-[40px]'
          />
          <p className='text-sm text-gray-600'>Next.js</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
