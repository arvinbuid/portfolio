import Image from "next/image";
import {heroIcons} from "@/assets";

function Hero() {
  return (
    <div className='h-screen grid place-items-center'>
      <div>
        <div className='flex flex-col items-center justify-center gap-y-3 font-light capitalize'>
          <div className='flex justify-center items-center'>
            <Image
              src='/person.png'
              width={400}
              height={400}
              alt='hero'
              priority={true}
              className='h-auto w-[150px]'
            />
            <span className='absolute text-3xl font-semibold text-white'>Hi</span>
          </div>
          <h1 className='mt-52 text-center absolute text-3xl tracking-wider font-bold text-gray-500'>
            My name is Arvin Buid &
          </h1>
          <p className='text-lg tracking-wider text-gray-700 mt-10'>I am a Web Developer</p>
        </div>
        <div className='mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600'>
          {heroIcons.map((icon) => (
            <a
              href='#'
              key={icon.key}
              className='hover:bg-red-400 hover:text-white rounded-lg transition-colors'
            >
              {icon}
            </a>
          ))}
        </div>
        <a
          href='#'
          className='mx-auto mt-7 text-center block text-white w-max bg-red-400 rounded-lg px-3 py-1 font-light capitalize hover:bg-red-500 transition-colors'
        >
          Talk to me
        </a>
      </div>
    </div>
  );
}

export default Hero;
