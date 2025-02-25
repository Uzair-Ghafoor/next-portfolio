'use client';
import Helix from '../assets/images/helix2.png';
import Emoji from '../assets/images/emojistar.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
export const CallToAction = () => {
  const conainterRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: conainterRef,
    offset: ['start end', 'end end'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  return (
    <div
      ref={conainterRef}
      className=' bg-black text-white py-[72px] sm:py-24 text-center'
    >
      <div className='container max-w-xl relative'>
        <motion.div style={{ translateY }}>
          <Image
            className=' hidden lg:inline-flex absolute top-6 left-[calc(100%+36px)]'
            src={Helix}
            alt=''
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            className=' hidden sm:inline-flex absolute -top-[120px] right-[calc(100%+24px)]'
            src={Emoji}
            alt=''
          />
        </motion.div>
        <h2 className=' font-bold text-5xl sm:text-6xl tracking-tighter'>
          Get instant access
        </h2>
        <p className=' text-xl text-white/50 mt-5'>
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className=' mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row'>
          <input
            type='email'
            placeholder='your@email.com'
            className=' h-12 bg-white/20 rounded-lg font-medium placeholder:text-[#9CA3AF] flex-1 p-3'
          />
          <button className=' bg-white text-black h-12 rounded-lg px-5'>
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};
