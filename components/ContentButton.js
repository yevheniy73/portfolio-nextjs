import React, { useState } from 'react';

const ContentButton = ({text }) => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const buttonClassName = `my-triangle w-full h-[40px] flex flex-row justify-start items-center gap-[10px] border-bot text-left px-4 text-white ${isActive ? 'active' : ''}`;

  return (
    <button type="button" className={buttonClassName} onClick={handleClick}>
      <img src="triangle.svg" alt="triangle" className="icon triangle" />
      {text}
    </button>
  );
};

export default ContentButton;
