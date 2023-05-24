'use client';

const Footer = () => (
  <div className="w-full flex flex-col">
    <footer className="w-full h-[51px] flex justify-between items-center border-top text-secondary-gray">
      <div className="flex h-full">
        <p className="min-w-[100px] my-500:flex hidden">
          find me on:
        </p>
        <a href="https://www.linkedin.com/in/kaznovskyi/" target="_blank" rel="noreferrer" className="p-0 w-[51px]">
          <i className="ri-linkedin-box-fill w-[50px] h-full" />
        </a>
      </div>
      <a href="https://github.com/yevheniy73" target="_blank" rel="noreferrer" className="border-left">
        @yevheniy73
      </a>
    </footer>
  </div>
);

export default Footer;
