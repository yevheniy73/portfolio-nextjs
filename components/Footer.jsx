'use client';
import 'remixicon/fonts/remixicon.css';

const Footer = () => (
  <div className="w-full hidden lg:flex flex-col">
    <footer className="w-full h-[56px] flex justify-between items-center border-top text-secondary-gray">
      <div className="flex h-full">
        <p className='min-w-[100px]'>
          find me on:
        </p>
        <a href="https://www.linkedin.com/in/kaznovskyi/" target="_blank" className="p-0 w-[56px]">
          <i className="ri-linkedin-box-fill w-[55px] h-full"></i>
        </a>
      </div>
      <a href="https://github.com/yevheniy73" target="_blank" className='border-left'>
        @yevheniy73
      </a>
    </footer>
  </div>
);
export default Footer;