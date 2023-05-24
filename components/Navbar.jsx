'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import 'remixicon/fonts/remixicon.css';

const Navbar = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="nav" className="w-full flex flex-col">
      <nav id="desktop-nav" className="w-full h-[56px] hidden lg:flex justify-between items-center border-bot text-secondary-gray">
        <div className="flex h-full">
          <a href="/" className="max-w-[310px] min-w-[310px]">
            _yevhen-kaznovskyi
          </a>
          <a href="/" className={pathname === '/' ? 'active' : ''}>
            _hello
          </a>
          <a href="/about-me" className={pathname.startsWith('/about-me') ? 'active' : ''}>
            _about-me
          </a>
          <a href="/projects" className={pathname.startsWith('/projects') ? 'active' : ''}>
            _projects
          </a>
        </div>
        <a href="/contact-me" className={`${pathname.startsWith('/contact-me') ? 'active' : ''} border-left`}>
          _contact-me
        </a>
      </nav>

      <nav id="mobile-nav" className="relative w-full h-[56px] lg:hidden flex justify-between items-center border-bot text-secondary-gray">
        <a href="/">
          _yevhen-kaznovskyi
        </a>
        <button type="button" onClick={handleMenuClick} className="w-[55px] h-full opacity-60">
          <i className="ri-menu-line w-[55px] h-full" />
        </button>

        {isMenuOpen && (
          <div className="absolute flex flex-col w-full top-[56px] bg-primary-blue z-[15] h-[calc(100vh-88px)]">
            <a href="/" className={pathname === '/' ? 'active' : ''}>
              _hello
            </a>
            <a href="/about-me" className={pathname.startsWith('/about-me') ? 'active' : ''}>
              _about-me
            </a>
            <a href="/projects" className={pathname.startsWith('/projects') ? 'active' : ''}>
              _projects
            </a>
            <a href="/contact-me" className={`${pathname.startsWith('/contact-me') ? 'active' : ''} border-left`}>
              _contact-me
            </a>
          </div>
        )}

      </nav>
    </div>
  );
};

export default Navbar;
