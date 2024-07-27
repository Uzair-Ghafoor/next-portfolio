'use client';
import Image from 'next/image';
import ArrowWIcon from '../assets/icons/arrow-w.svg';
import cursorImage from '../assets/images/cursor.png';
import messageImage from '../assets/images/message.png';
import { motion } from 'framer-motion';
export const Hero = () => {
  return (
    <div className='py-[72px] lg:h-[100vh] md:h-[95vh]  text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46ED8_82%)] relative overflow-hidden'>
      <div className='container relative'>
        <div className='flex items-center justify-center'>
          <a
            href='#'
            className='inline-flex gap-3 border border-white/30 py-1 px-2 rounded-lg'
          >
            <span className='bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text'>
              Version 2.0 is here
            </span>
            <span className='flex items-center justify-center gap-2'>
              <span>Read More</span>
              <ArrowWIcon />
            </span>
          </a>
        </div>
        <div className='relative mt-8'>
          <h1 className='text-7xl sm:text-9xl font-bold tracking-tighter text-center'>
            One Task <br /> at a Time
          </h1>
          <motion.div
            className='absolute left-0 md:left-[-8%] top-[90px] lg:left-[16%] hidden md:block'
            drag
            dragSnapToOrigin
          >
            <Image
              className=''
              height='200'
              width='200'
              src={cursorImage}
              alt='cursor image'
              draggable='false'
            />
          </motion.div>
          <motion.div
            className=' absolute right-0 md:right-[-9%] top-[65px] lg:right-[15%] hidden md:block'
            drag
            dragSnapToOrigin
          >
            <Image
              height='200'
              width='200'
              src={messageImage}
              alt='message image'
              draggable='false'
            />
          </motion.div>
        </div>
        <div className='flex justify-center'>
          <p className='text-center text-xl font-normal max-w-md mt-8 leading-8 tracking-[-0.792px]'>
            Celebrate the joy of accomplishment with an app designed to track
            progress, motivate your efforts, and celebrate your success.
          </p>
        </div>
        <div className='flex justify-center mt-8'>
          <button className='z-40 bg-white text-black py-3 px-5 rounded-lg font-medium'>
            Get for free
          </button>
        </div>
      </div>
      <div className='absolute h-[375px] w-[800px] sm:w-[1536px] sm:h-[768px] md:w-[1800px] md:h-[1000px] lg:w-[2700px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border py-[72px] sm:py-[96px] border-[#B48CDE] bg-[radial-gradient(ellipse_closest-side,#000_90%,#9560EB_100%)] md:top-[calc(100%-145px)] top-[calc(100%-96px)] lg:top-[calc(100%-175px)]' />
    </div>
  );
};
