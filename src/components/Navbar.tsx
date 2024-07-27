import Image from 'next/image';
import logoImage from '../assets/images/logosaas.png';
import MenuIcon from '../assets/icons/menu.svg';
export const Navbar = () => {
  return (
    <div className=' bg-black'>
      <div className='px-4'>
        <div className=' py-4 flex items-center justify-between'>
          <div className=' relative '>
            <div className=' absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F8FBFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] blur-md' />
            <Image
              src={logoImage}
              alt='sass logo'
              className=' h-12 w-12 relative'
            />
          </div>
          {/* mobile hamburger */}
          <div className=' border border-white border-opacity-30 h-10 w-10 inline-flex rounded-lg justify-center items-center sm:hidden'>
            <MenuIcon className='text-white' />
          </div>
          <nav className='text-white hidden sm:flex items-center gap-6'>
            <a href='#' className=' opacity-60 hover:opacity-100 transition'>
              About
            </a>
            <a href='#' className=' opacity-60 hover:opacity-100 transition'>
              Features
            </a>
            <a href='#' className=' opacity-60 hover:opacity-100 transition'>
              Updates
            </a>
            <a href='#' className=' opacity-60 hover:opacity-100 transition'>
              Help
            </a>
            <a href='#' className=' opacity-60 hover:opacity-100 transition'>
              Customers
            </a>
            <button
              className='  bg-white py-2
            px-4 rounded-lg text-black'
            >
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
