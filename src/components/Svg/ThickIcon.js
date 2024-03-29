import React from 'react';

const ThickIcon = (props) => {
  return (
    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 1L3.5 6L1 3.72727"
        stroke="#1EA4CE"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
    </svg>
  );
};

export default ThickIcon;
