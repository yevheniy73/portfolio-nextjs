'use client';

import React from "react";
import Typewriter from 'typewriter-effect';

const message = `options={{
  strings: ['Yevhen Kaznovskyi'],
  autoStart: true,
  loop: true,
  delay: 120,
  pauseFor: 1800,
}}`;

const message2 = `#desktop-nav a:hover,
#desktop-nav a:focus {
  color: #fff;
  background: #1E2D3D;
}`

const message3 = `<div className='w-full h-full flex items-center px-[125px]'>
  <Hero />
</div>`

const message4 = `#portfolio {
  border-radius: 7px;
  border: 1px solid #1E2D3D;
  overflow: hidden;
  background-color: #011627;
}`

const message5 = `.css-blurry-gradient-green {
  filter: blur(70px);
  height: 300px;
  opacity: .5;
  width: 300px;
  z-index: 10
}`

const Hero = () => (
 
  <section id="hero" className="w-full flex justify-between my-md:items-center items-start my-md:gap-8 gap-48 my-md:flex-row flex-col">
    <div className="md:min-w-[400px] my-md:z-10 z-[11]">
      <div className="css-blurry-gradient-blue"></div>
      <div className="css-blurry-gradient-green"></div>
      <div className="head">
        <span className="text-white text-[18px]">Hi, I am</span>

        <h2 className="text-white text-[58px]">
          <Typewriter
            options={{
              strings: ['Yevhen Kaznovskyi'],
              autoStart: true,
              loop: true,
              delay: 120,
              pauseFor: 1800,
            }}
          />
        </h2>

        <h2 className="text-secondary-purple text-[32px]">&gt; Software Developer</h2>
      </div>
    </div>
    <div className="z-10 my-sm:flex flex-col gap-5 hidden my-md:relative absolute my-md:top-0 top-[150px] my-md:blur-[0] blur-[3px] my-md:overflow-visible overflow-hidden my-md:bottom-0 bottom-[100px]">

      <div className="flex justify-start items-center w-[500px] h-[175px] p-8 bg-primary-dark rounded-[12px] border-[1px] border-primary-blue text-[12px] opacity-60 relative z-0">
        <pre>
          <code>{message4}</code>
        </pre> 
      </div>

      <div className="flex justify-start items-center w-[500px] h-[175px] p-8 bg-primary-dark rounded-[12px] border-[1px] border-primary-blue text-[12px] opacity-80 relative z-1">
        <pre>
          <code>{message2}</code>
        </pre> 
      </div>

      <div className="flex justify-start items-center w-[500px] h-[175px] p-8 bg-primary-dark rounded-[12px] border-[1px] border-primary-blue text-[12px] relative z-2">
        <pre>
          <code>{message}</code>
        </pre> 
      </div>

      <div className="flex justify-start items-center w-[500px] h-[175px] p-8 bg-primary-dark rounded-[12px] border-[1px] border-primary-blue text-[12px] opacity-80 relative z-1">
        <pre>
          <code>{message3}</code>
        </pre> 
      </div>

      <div className="flex justify-start items-center w-[500px] h-[175px] p-8 bg-primary-dark rounded-[12px] border-[1px] border-primary-blue text-[12px] opacity-60 relative z-0">
        <pre>
          <code>{message5}</code>
        </pre> 
      </div>

    </div>

  </section>
);

export default Hero;
