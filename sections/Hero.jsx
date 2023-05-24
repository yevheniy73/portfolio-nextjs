'use client';

import React from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Typewriter from 'typewriter-effect';
import { messages } from '../constants/index';

function Card({ children, opacity }) {
  return (
    <div className={`embla__slide flex justify-start items-center w-[500px] h-[175px] px-8 bg-primary-dark rounded-[12px] border-[1px] border-primary-blue text-[12px]`}>
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  );
}

const Hero = () => {

  const [emblaRef] = useEmblaCarousel({ loop: true, axis: 'y'}, [Autoplay()])

  const opacities = [60, 80, 100, 80, 60];

  return (
    <section id="hero" className="w-full flex justify-between items-center gap-8 flex-row">
      <div className="z-10">
        <div className="css-blurry-gradient-blue"></div>
        <div className="css-blurry-gradient-green"></div>
        <div className="head relative z-[11]">
          <span className="text-white text-[18px]">Hi, I am</span>

          <h2 className="text-white my-500:text-[58px] text-[44px] my-md:max-w-full my-500:max-w-[260px] max-w-[200px] my-md:h-auto h-[175px]">
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

          <h2 className="text-secondary-purple sm:text-[32px] text-[22px]">&gt; Software Developer</h2>

          <p className="mt-[80px]">// view my resume</p>
          <span className="text-white inline-flex whitespace-pre"><p className="text-secondary-purple">const </p><p className="text-secondary-green">resume </p>=
            <a href="/Yevhen_Kaznovskyi_CV.pdf" target="_blank" className="sm:block hidden my-resume text-accent-peach">" https://yevhen.vercel.app/resume"</a>
            <a href="/Yevhen_Kaznovskyi_CV.pdf" target="_blank" class="sm:hidden block my-resume text-accent-peach">" /resume"</a>
          </span>

        </div>
      </div>
      <div className="max-h-[180px] z-10 my-1320:block hidden relative top-0">
        <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {messages.map((message, index) => (
              <Card opacity={opacities[index]} key={index}>
                {message}
              </Card>
            ))}
          </div>
        </div>
      </div>
      </div>

    </section>
  );

}

export default Hero;
