import Image from "next/image";
import Heading from "./sub/Heading";

function Experience() {
  return (
    <div className='relative py-20 px-20 lg:px-82'>
      <Heading text='Experience & Education' />
      <Image
        src='/education.png'
        alt='Education'
        width={400}
        height={400}
        className='absolute -top-4 right-0 opacity-70 hidden xl:block'
      />
      <div className='w-full h-full py-10 flex flex-col justify-center items-center gap-y-20 lg:gap-y-10'>
        <div className='w-full sm:w-[600px] xl:w-[480px] px-0 sm:px-12 static xl:relative -left-[240px] '>
          <div className='relative flex flex-col gap-y-3 border border-red-300 bg-white p-4 rounded-md tracking-wide'>
            <h1 className='text-gray-700 text-lg lg:text-xl'>Foundation & Basics</h1>
            <p className='text-gray-800'>
              <span className='block font-light'>Education: </span>
              <span className='block pl-2 font-extralight'>education</span>
            </p>
            <div className='text-gray-800'>
              <span className='font-light'>Experience: </span>
              <ul className='pl-2'>
                <li className='my-1 font-extralight'>experience</li>
              </ul>
            </div>
            <span className='absolute top-20 left-full text-red-300'>icon</span>
          </div>
          <div className='w-14 absolute top-20 left-full rounded-full aspect-square border border-gray-300 grid place-items-center text-red-400 font-light'>
            2022
          </div>
        </div>
        <div className='absolute w-1 h-full bg-gray-300 rounded-full'></div>
      </div>
    </div>
  );
}

export default Experience;
