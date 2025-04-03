"use client";

import Image from "next/image";
import Heading from "./sub/Heading";

import {arrowLeftIcon, experienceData} from "@/assets";
import {motion, useScroll, useSpring} from "framer-motion";
import {useRef} from "react";

function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start 95%", "end end"],
  });

  const scrollYSpring = useSpring(scrollYProgress, {stiffness: 100, damping: 30});

  return (
    <div className='relative py-20 px-20 lg:px-96'>
      <Heading text='Experience & Education' />
      <Image
        src='/education.png'
        alt='Education'
        width={400}
        height={400}
        className='absolute -top-4 right-60 opacity-70 hidden xl:block'
      />
      <div
        ref={containerRef}
        className='relative w-full h-full py-10 flex flex-col justify-center items-center gap-y-20 lg:gap-y-10'
      >
        {experienceData.map((data, index) => (
          <div
            key={`id-${index}`}
            className={`rw-full sm:w-[600px] xl:w-[480px] px-0 sm:px-12 static xl:relative -left-[300p ${
              index % 2 == 0
                ? "-left-[300px] xl:-left-[240px] lg:-left-0"
                : "left-[300px] xl:left-[240px] lg:left-0"
            }`}
          >
            <motion.div
              initial={{opacity: 0, x: index % 2 === 0 ? -80 : 80}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 0.7, type: "spring", stiffness: 60}}
              className='relative flex flex-col gap-y-3 border border-red-300 bg-white p-4 rounded-md tracking-wide'
            >
              <h1 className='text-gray-700 text-lg lg:text-xl'>{data.title}</h1>
              <p className='text-gray-800'>
                <span className='block font-light'>Education: </span>
                <span className='block pl-2 font-extralight'>{data.education}</span>
              </p>
              <div className='text-gray-800'>
                <span className='font-light'>Experience: </span>
                <ul className='pl-2'>
                  <li className='my-1 font-extralight'>{data.experience}</li>
                </ul>
              </div>
              <span
                className={`absolute top-20 text-red-300 -translate-y-1/2 hidden xl:block ${
                  index % 2 === 0 ? "left-full rotate-180" : "right-full"
                }`}
              >
                {arrowLeftIcon}
              </span>
            </motion.div>
            <div
              className={`hidden xl:grid w-14 absolute top-20 rounded-full z-10 bg-white aspect-square border border-gray-300 place-items-center text-red-400 font-light -translate-y-1/2 ${
                index % 2 === 0
                  ? " -translate-x-1/2 left-1/2 xl:left-full"
                  : " translate-x-1/2 right-1/2 xl:right-full"
              }`}
            >
              {data.year}
            </div>
          </div>
        ))}
        {/* Gray vertical line in the middle */}
        <motion.div
          initial={{scaleY: 0}}
          style={{scaleY: scrollYSpring}}
          className='-z-1 xl:block absolute w-1 h-full bg-gray-300 rounded-full origin-top'
        ></motion.div>
      </div>
    </div>
  );
}

export default Experience;
