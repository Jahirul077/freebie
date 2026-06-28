import React from 'react';

export default function GradientRingSVG({ className, strokeWidth = "6", progress }) {
  const hasProgress = typeof progress === 'number';
  const circumference = 314.159;
  const displayProgress = progress >= 100 ? 100 : progress;
  const strokeDashoffset = hasProgress ? circumference - (circumference * displayProgress) / 100 : 0;

  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" overflow="visible" xmlns="http://www.w3.org/2000/svg">
      {/* Gray Base Circle */}
      <circle
        cx="50"
        cy="50"
        r="50"
        stroke="url(#paint0_linear_9401_103215)"
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
      />
      {/* Gold Progress Overlay Circle */}
      {hasProgress && progress > 0 && progress !== 102 && progress !== 103 && progress !== 105 && (
        <circle
          cx="50"
          cy="50"
          r="50"
          stroke="url(#paint0_linear_gold_progress)"
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
          transform="rotate(-90 50 50)"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-700 ease-in-out"
          style={{ strokeLinecap: 'round' }}
        />
      )}
      {/* Wavy/Rough Gold Ring at 103% & 105% */}
      {hasProgress && (progress === 103 || progress === 105) && (
        <circle
          cx="50"
          cy="50"
          r="50"
          stroke="url(#paint0_linear_gold_progress)"
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
          filter="url(#wavy-noise)"
          className="transition-all duration-500"
        />
      )}
      <defs>
        <filter id="wavy-noise" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <linearGradient id="paint0_linear_9401_103215" x1="0" y1="50" x2="100" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DADADA" />
          <stop offset="0.5" stopColor="#B4B4B4" />
          <stop offset="1" stopColor="#DADADA" />
        </linearGradient>
        <linearGradient id="paint0_linear_gold_progress" x1="0" y1="50" x2="100" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#947863" />
          <stop offset="0.5" stopColor="#E9DDD4" />
          <stop offset="1" stopColor="#947863" />
        </linearGradient>
      </defs>
    </svg>
  );
}
