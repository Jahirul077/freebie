import React, { useId } from 'react';

export default function GiftSVG({ className, strokeColor }) {
  const gradientId = useId().replace(/:/g, '');
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={strokeColor || `url(#${gradientId})`} 
      strokeWidth="1.5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#947863" />
          <stop offset="0.5" stopColor="#E9DDD4" />
          <stop offset="1" stopColor="#947863" />
        </linearGradient>
      </defs>
      {/* Hand outline */}
      <path d="M3 14c2-1 4-1 6 1s4 2 7 1a5 5 0 0 0 3-3M6 14v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Gift Box */}
      <rect x="7" y="5" width="10" height="8" rx="1.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Ribbon */}
      <path d="M12 5v8M7 9h10" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bow loops */}
      <path d="M12 5c-1-1.5-2.5-1.5-2.5 0S11 5 12 5zm0 0c1-1.5 2.5-1.5 2.5 0S13 5 12 5z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
