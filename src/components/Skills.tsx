"use client";

import Image from "next/image";
import Heading from "./sub/Heading";
import { skillsData } from "@/assets";
import { motion } from "framer-motion";

function Skills() {
  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: i * 0.07
      },
    }),
    hidden: {
      opacity: 0,
      y: 30
    }
  };

  return (
    <div id="skills" className='min-h-screen flex flex-col justify-center items-center gap-y-20 py-20'>
      <Heading text='Skills' />
      <div className='w-full flex justify-items-start flex-wrap gap-x-4 gap-y-4 lg:gap-y-10'>
        {skillsData.map((skill, index) => (
          <motion.div
            custom={index}
            variants={variants}
            whileHover={{ scale: 1.1 }}
            viewport={{ margin: '50px', once: true }}
            initial='hidden'
            whileInView='visible'
            key={index}
            className='flex justify-center items-center px-4 lg:px-5 py-2 gap-x-4 gap-y-8 lg:gap-y-6 border border-yellow-500 rounded-xl bg-zinc-100 dark:bg-zinc-700'
          >
            <Image
              src={skill.icon}
              width={100}
              height={100}
              alt='Skills Image'
              className='h-auto w-[40px]'
            />
            <p className='text-sm text-gray-600 select-none dark:text-gray-300'>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
