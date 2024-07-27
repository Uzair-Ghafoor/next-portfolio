import XIcon from '../assets/icons/x-social.svg';
import TiktokIcon from '../assets/icons/tiktok.svg';
import YoutubeIcon from '../assets/icons/youtube.svg';
import InstaIcon from '../assets/icons/insta.svg';

export const Footer = () => {
  return (
    <footer className=' py-5 bg-black text-white/60 border-t border-white/30'>
      <div className='container'>
        <div className=' flex sm:flex-row sm:justify-between flex-col gap-4'>
          <div className=' text-center'>
            @ 2024 Your Company, Inc. All rights reserved
          </div>
          <div className=' flex justify-center gap-2.5'>
            <XIcon />
            <TiktokIcon />
            <InstaIcon />
            <YoutubeIcon />
          </div>
        </div>
      </div>
    </footer>
  );
};
