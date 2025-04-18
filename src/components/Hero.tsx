"use client";

import Image from "next/image";
import { heroIcons } from "@/assets";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";
import { useState } from "react";

function Hero() {
  const [windowOffset, setWindowOffset] = useState({ innerWidth: 0, innerHeight: 0 });
  const [mouseMove, setMouseMove] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);
  };

  const handleMouseEnter = () => {
    setWindowOffset({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
    setMouseMove(true);
  };

  const { innerWidth, innerHeight } = windowOffset;

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -20]);

  return (
    <div
      id="home"
      className='h-screen grid place-items-center'
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className='flex flex-col items-center justify-center gap-y-3 font-light capitalize'>
          <motion.div
            className='flex justify-center items-center'
            style={{ rotateX: mouseMove ? rotateX : 0, rotateY: mouseMove ? rotateY : 0 }}
          >
            <Image
              src='/person.png'
              width={400}
              height={400}
              alt='hero'
              priority={true}
              className='h-auto w-[150px]'
            />
            <motion.span
              className='absolute text-3xl font-semibold text-white'
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 0 : 1,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -40 : 1,
              }}
              transition={{ opacity: { delay: 0.4 } }}
            >
              Hi
            </motion.span>
          </motion.div>
          <h1 className='mt-50 text-center absolute text-2xl sm:text-3xl tracking-wider font-bold text-gray-500 dark:text-gray-200 transition-colors whitespace-nowrap'>
            My name is Arvin Buid &
          </h1>
          <p className='text-lg tracking-wider text-gray-700 mt-10 dark:text-gray-400 transition-colors'>{`I'm a Web Developer`}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className='mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600'>
          {heroIcons.map((icon) => (
            <a
              href='https://github.com/arvinbuid'
              key={icon.key}
              className='hover:bg-red-400 hover:text-white rounded-lg transition-colors'
            >
              {icon}
            </a>
          ))}
        </motion.div>
        <motion.a
          href='#'
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className='mx-auto mt-7 text-center block text-white w-max bg-red-400 rounded-lg px-3 py-1 font-light capitalize hover:bg-red-500 transition-colors'
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Talk to me
        </motion.a>
      </div>
    </div>
  );
}

export default Hero;
