import React from 'react';

const FolderContent = () => (
    <button 
        type="button"
        className="w-full h-[40px] text-left flex flex-row justify-start items-center gap-[10px] pl-[34px] pr-[16px] py-[6px]"
    >
        <img src="./file-icon.svg" alt="file" className="icon file-icon" />
        folder content
    </button>
);

export default FolderContent;
