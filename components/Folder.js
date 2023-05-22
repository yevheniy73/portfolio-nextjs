import React from 'react';

const Folder = ({ iconChev = './ChevronRight.svg', iconFolder, buttonText, buttonId, onClick, active }) => (
  <button
    id={buttonId}
    type="button"
    className={`${active ? 'active' : ''} w-full h-[40px] text-left flex flex-row justify-start items-center gap-[10px] px-[16px] py-[6px]`}
    onClick={onClick}
  >
    <img src={iconChev} alt="Chevron" className="icon chevon" />
    <img src={iconFolder} alt="Folder" className="icon" />
    {buttonText}
  </button>
);

export default Folder;
