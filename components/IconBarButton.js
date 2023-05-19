import React from 'react';

const IconBarButton = ({ active, icon, onClick }) => (
  <button
    type="button"
    className={`p-0 w-full h-[50px] opacity-40 ${active ? 'active' : ''}`}
    onClick={onClick}
  >
    <i className={icon} />
  </button>
);

export default IconBarButton;
