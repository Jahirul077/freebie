import React from 'react';

export default function GradientRingSVG({ className, strokeWidth = "6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" overflow="visible" xmlns="http://www.w3.org/2000/svg">
      <circle 
        cx="50" 
        cy="50" 
        r="50" 
        stroke="url(#paint0_linear_9401_103215)" 
        strokeWidth={strokeWidth} 
        vectorEffect="non-scaling-stroke" 
      />
      <defs>
        <linearGradient id="paint0_linear_9401_103215" x1="0" y1="50" x2="100" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DADADA"/>
          <stop offset="0.5" stopColor="#B4B4B4"/>
          <stop offset="1" stopColor="#DADADA"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
