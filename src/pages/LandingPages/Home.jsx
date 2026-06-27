import React from 'react';
import bgImage from '../../assets/Images/bg.png';
import LeftSide from '../../components/MainComponent/LeftSide';
import RightSide from '../../components/MainComponent/RightSide';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <img src={bgImage} alt="Background" className="w-full h-auto object-cover" />
      <div className="absolute top-10 left-0 w-full flex justify-center">
        <div className="w-full max-w-[1700px] px-4">
          <div className="text-zinc-800 text-7xl font-normal font-['Libre_Caslon_Text'] uppercase leading-[91.08px]">
            Shine Brighter as You Level Up
          </div>

          {/* Content Grid */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <LeftSide />
            <RightSide />
          </div>
        </div>
      </div>
    </div>
  );  
}
