'use client';

import React from "react";
import Typewriter from 'typewriter-effect';
import { messages } from '../constants/index';


function Card({ children, opacity }) {
  return (
    <div className={`flex justify-start items-center w-[500px] h-[175px] p-8 bg-primary-dark rounded-[12px] border-[1px] border-primary-blue text-[12px] opacity-${opacity}`}>
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  );
}

const Hero = () => {

  const opacities = [60, 80, 100, 80, 60];

  return (
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
      
        {messages.map((message, index) => (
          <Card opacity={opacities[index]} key={index}>
            {message}
          </Card>
        ))}

      </div>

    </section>
  );

}

export default Hero;
