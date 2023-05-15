'use client';

const message = `<div className="head z-10">
  <span className="text-white text-[18px]">Hi, I am</span>
  <h1 className="text-white text-[58px]">Yevhen Kaznovskyi</h1>
  <h2 className="text-purple text-[32px]">Software developer</h2>
</div>`;

const message2 = `#desktop-nav a:hover,
#desktop-nav a:focus {
  color: #fff;
  background: #1E2D3D;
}`

const Hero = () => (
 
  <section id="hero" className="w-full flex items-center justify-between gap-8">
    <div>
      <div className="css-blurry-gradient-blue"></div>
      <div className="css-blurry-gradient-green"></div>
      <div className="head z-10">
        <span className="text-white text-[18px]">Hi, I am</span>
        <h1 className="text-white text-[58px]">Yevhen Kaznovskyi</h1>
        <h2 className="text-secondary-purple text-[32px]">&gt; Software developer</h2>
      </div>
    </div>
    <div className="z-10 relative">
      <div className="flex justify-start items-center w-[540px] h-[175px] p-8 bg-primary-dark rounded-[12px] border-[1px] border-primary-blue text-[12px] opacity-70 -mt-[120px] left-16 absolute z-0">
        <pre>
          <code>{message2}</code>
        </pre> 
      </div>
      <div className="flex justify-center items-center w-[540px] h-[175px] p-2 bg-primary-dark rounded-[12px] border-[1px] border-primary-blue text-[12px] relative z-1">
        <pre>
          <code>{message}</code>
        </pre> 
      </div>
    </div>

  </section>
);

export default Hero;
