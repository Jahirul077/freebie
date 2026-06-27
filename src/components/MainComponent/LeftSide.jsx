import React from 'react';
import { Lock, Sparkle } from 'lucide-react';
import CirclesIcon1SVG from '../SVG/CirclesIcon1SVG';
import GradientRingSVG from '../SVG/GradientRingSVG';
import StarSVG from '../SVG/StarSVG';
import LockSVG from '../SVG/LockSVG';
import UnlockSVG from '../SVG/UnlockSVG';

export default function LeftSide() {
  return (
    <div className="lg:col-span-5 flex flex-col gap-10">
      {/* EARN SPARKLE POINTS Section */}
      <div className="flex flex-col gap-3">
        <h2 className="text-[#4A4A4A] text-[15px] font-medium tracking-wide uppercase ml-1">
          Earn Sparkle Points
        </h2>

        <div className="bg-[#F9F6F5]/60 backdrop-blur-md rounded-[20px] p-5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-white/40">
          <div className="flex flex-col md:flex-row gap-5 mb-5">

            {/* Concentric Circles & Icon */}
            <div className="flex-1 flex items-center justify-center py-4">
              <div className="w-[180px] h-[180px] relative flex items-center justify-center">
                <GradientRingSVG className="absolute w-[190px] h-[190px] animate-[spin-slow_40s_linear_infinite]" />
                <GradientRingSVG className="absolute w-[165px] h-[165px] animate-[spin-slow_30s_linear_infinite_reverse]" />
                <GradientRingSVG className="absolute w-[140px] h-[140px] animate-[spin-slow_20s_linear_infinite]" />
                <GradientRingSVG className="absolute w-[115px] h-[115px] animate-[spin-slow_10s_linear_infinite_reverse]" />

                <div className="absolute w-[95px] h-[95px] bg-white rounded-full flex items-center justify-center">
                  <CirclesIcon1SVG />
                </div>
              </div>
            </div>

            {/* Points Box */}
            <div className="bg-white rounded-[16px] flex-[1.2] flex flex-col items-center justify-center py-8">
              <div className="flex items-center gap-1">
                <span className="text-[80px] font-bold text-[#1E1E1E] leading-none">0</span>
                <StarSVG />
              </div>
              <span className="font-inter text-[20px] font-semibold uppercase leading-[20px] tracking-normal align-middle">
                SPARKLE POINTS
              </span>
            </div>
          </div>

          {/* S-BRILLET Bar */}
          <div className="w-full bg-white rounded-[16px] p-6 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2H22L30 10V22L22 30H10L2 22V10L10 2Z" fill="url(#paint_brillet)" />
                  <path d="M16 9C16 13.5 19 16 23 16C19 16 16 18.5 16 23C16 18.5 13 16 9 16C13 16 16 13.5 16 9Z" fill="white" />
                  <defs>
                    <linearGradient id="paint_brillet" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#947863" />
                      <stop offset="0.5" stopColor="#E9DDD4" />
                      <stop offset="1" stopColor="#947863" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-[28px] font-normal font-['Libre_Caslon_Text'] text-[#333333] tracking-wide mt-1">S-BRILLET</span>
              </div>
              <span className="text-[15px] font-bold text-[#333333] uppercase">(0 Sparkle Points)</span>
            </div>
            
            <div className="h-[2px] w-full bg-linear-to-r from-[#947863] via-[#E9DDD4] to-[#947863] opacity-60"></div>
            
            <div className="flex justify-between items-center pt-1">
              <div className="flex items-center gap-2">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#333333]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[17px] font-medium text-[#333333]">Sign Up</span>
              </div>
              <span className="text-[17px] font-bold text-[#333333]">+40 Sparkle Points</span>
            </div>
          </div>
        </div>
      </div>

      {/* UNLOCK BUNDLE DEALS Section */}
      <div className="flex flex-col gap-3">
        <h2 className="text-[#4A4A4A] text-[15px] font-medium tracking-wide uppercase ml-1">
          Unlock Bundle Deals
        </h2>

        <div className="bg-[#F9F6F5]/60 backdrop-blur-md rounded-[20px] p-6 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-white/40 flex flex-col items-center justify-center gap-6 transition-all duration-300 hover:shadow-[0_12px_24px_rgba(0,0,0,0.05)] hover:border-white/60">

          <div className="flex items-center justify-center gap-5 md:gap-8 w-full">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative w-[68px] h-[68px] flex items-center justify-center group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                {/* Jewel Diamond Shape */}
                <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                  <path d="M5 2H19L24 9L12 22L0 9L5 2Z" />
                </svg>
                {/* The user's custom Lock/Unlock SVG */}
                <LockSVG className="w-[20px] h-[28px] relative z-10 -mt-3 transition-transform duration-300 group-hover:scale-110 animate-wiggle-hover" />
              </div>
            ))}
          </div>

          <span className="text-[#333333] text-2xl font-medium tracking-wide uppercase">
            LEVEL UP TO SHINY TIER
          </span>
        </div>
      </div>
    </div>
  );
}
