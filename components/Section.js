import React from 'react';

const Section = ({ iconChev = './ChevronRight.svg', iconFolder, buttonText, buttonId }) => (
  <>
    <button id={buttonId} type="button" className="w-full h-[28px] text-left flex flex-row justify-start items-center gap-[10px] pl-[16px]">
      <img src={iconChev} alt="Chevron" className="icon" />
      <img src={iconFolder} alt="Folder" className="icon" />
      {buttonText}
    </button>
  </>
);

export default Section;
