import React, { useEffect, useState } from 'react';
import bgImage from '../../assets/Images/bg.png';
import LeftSide from '../../components/MainComponent/LeftSide';
import RightSide from '../../components/MainComponent/RightSide';

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    let timeoutId;

    const tick = (current) => {
      let nextProgress = 0;
      let delay = 1800; // default delay is 1.8s

      if (current === 0) nextProgress = 25;
      else if (current === 25) nextProgress = 50;
      else if (current === 50) nextProgress = 75;
      else if (current === 75) nextProgress = 100;
      else if (current === 100) {
        nextProgress = 102;
        delay = 3000;
      } else if (current === 102) {
        nextProgress = 103;
        delay = 2000;
      } else if (current === 103) {
        nextProgress = 105;
        delay = 3000;
      } else if (current === 105) {
        nextProgress = 106;
        delay = 1800;
      } else if (current === 106) {
        nextProgress = 107;
        delay = 1800;
      } else if (current === 107) {
        nextProgress = 108;
        delay = 1800;
      } else if (current === 108) {
        nextProgress = 110;
        delay = 3000;
      } else if (current === 110) {
        nextProgress = 111;
        delay = 1000;
      } else if (current === 111) {
        nextProgress = 112;
        delay = 1000;
      } else if (current === 112) {
        nextProgress = 115;
        delay = 3000;
      } else if (current === 115) {
        nextProgress = 122;
        delay = 3000;
      } else if (current === 122) {
        nextProgress = 125;
        delay = 3000;
      } else if (current === 125) {
        nextProgress = 128;
        delay = 3000;
      } else if (current === 128) {
        nextProgress = 130;
        delay = 3000;
      } else if (current === 130) {
        nextProgress = 135;
        delay = 3000;
      } else if (current === 135) {
        nextProgress = 140;
        delay = 3000;
      } else if (current === 140) {
        nextProgress = 145;
        delay = 3000;
      } else if (current === 145) {
        nextProgress = 148;
        delay = 2000;
      } else if (current === 148) {
        nextProgress = 150;
        delay = 2000;
      } else if (current === 150) {
        nextProgress = 152;
        delay = 2000;
      } else if (current === 152) {
        nextProgress = 155;
        delay = 2000;
      } else if (current === 155) {
        nextProgress = 160;
        delay = 2000;
      } else if (current === 160) {
        nextProgress = 162;
        delay = 2000;
      } else if (current === 162) {
        nextProgress = 165;
        delay = 2000;
      } else if (current === 165) {
        nextProgress = 170;
        delay = 2000;
      } else if (current === 170) {
        nextProgress = 175;
        delay = 2000;
      } else if (current === 175) {
        nextProgress = 225; // Directly to 100 Points
        delay = 2500;
      } else if (current >= 225 && current < 675) {
        nextProgress = current + 25; // Steps by 50 Points
        delay = 2000;
      } else if (current >= 675) {
        nextProgress = 0;
        delay = 5000;
      }

      timeoutId = setTimeout(() => {
        setProgress(nextProgress);
        tick(nextProgress);
      }, delay);
    };

    tick(progress);

    return () => clearTimeout(timeoutId);
  }, [isPlaying, progress]);

  return (
    <div className="relative w-full min-h-screen pb-16">
      <img src={bgImage} alt="Background" className="w-full h-auto object-cover" />
      <div className="absolute top-10 left-0 w-full flex justify-center">
        <div className="w-full max-w-[1700px] px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#E9DDD4]/40 pb-2">
            <div className="text-[#333333] text-5xl xl:text-7xl font-normal font-['Libre_Caslon_Text'] uppercase leading-tight">
              Shine Brighter as You Level Up
            </div>

            {/* Play/Pause Demo Toggle Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-3 bg-white/90 hover:bg-white border border-[#E9DDD4] hover:border-[#947863] px-6 py-3.5 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300 font-semibold text-[14px] text-[#4A4A4A] tracking-wider uppercase cursor-pointer select-none active:scale-[0.98] mr-2 shrink-0"
            >
              {isPlaying ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-[#947863]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                  </svg>
                  <span>Pause Demo</span>
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#947863]">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                  <span>Play Demo</span>
                </>
              )}
            </button>
          </div>

          {/* Content Grid */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <LeftSide progress={progress} setProgress={setProgress} />
            <RightSide progress={progress} />
          </div>
        </div>
      </div>
    </div>
  );
}
