import React from 'react';

const ContentButton = ({ onClick, text }) => (
  <button type="button" className="w-full h-[40px] border-bot text-left px-4 text-white" onClick={onClick}>
    {text}
  </button>
);

export default ContentButton;

