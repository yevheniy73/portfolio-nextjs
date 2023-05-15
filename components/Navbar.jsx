'use client';

import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className='w-full hidden lg:flex flex-col'>
      <nav id='desktop-nav' className='w-full h-[56px] flex justify-between items-center border-bot text-secondary-gray'>
        <div className='flex h-full'>
          <a href='/' className='min-w-[300px]'>
            _yevhen-kaznovskyi
          </a>
          <a href='/' className={pathname === '/' ? 'active' : ''}>
            _hello
          </a>
          <a href='/about-me' className={pathname.startsWith('/about-me') ? 'active' : ''}>
            _about-me
          </a>
          <a href='/projects' className={pathname.startsWith('/projects') ? 'active' : ''}>
            _projects
          </a>
        </div>
        <a href='/contact-me' className={`${pathname.startsWith('/contact-me') ? 'active' : ''} border-left`}>
          _contact-me
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
