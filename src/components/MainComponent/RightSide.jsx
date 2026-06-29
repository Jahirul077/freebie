import React, { useState } from 'react';
import LockSVG from '../SVG/LockSVG';
import UnlockSVG from '../SVG/UnlockSVG';
import Star2SVG from '../SVG/Star2SVG';
import GiftSVG from '../SVG/GiftSVG';
import { MdOutlineLocalShipping } from "react-icons/md";
import lineImg from '../../assets/Images/line.png';


const tierRewards = [
  { id: 1, text: "WELCOME GIFT\nONE-TIME 10% OFF" },
  { id: 2, text: "FREE SHIPPING\nON ORDERS $100+" },
  { id: 3, text: "FREE THEME\nMESSAGE CARD" },
  { id: 4, text: "BIRTHDAY GIFT\nREWARD $10" },
  { id: 5, text: "MEMBER\nSAVING 5% OFF" },
  { id: 6, text: "2-YEAR JEWELRY\nWARRANTY" },
  { id: 7, text: "VIEW NEW\nCOLLECTIONS" },
  { id: 8, text: "CONTACT LIVE\nSUPPORT CHAT" },
  { id: 9, text: "FREE JEWELLERY\nGIVEAWAY" },
  { id: 10, text: "VOTE NEW\nCOLLECTIONS" },
];

export default function RightSide({ progress }) {
  const getFillWidth = () => {
    if (progress < 175) return '0%';
    const points = (progress - 175) * 2;
    if (points <= 100) return `${(points / 100) * 12}%`;
    if (points <= 200) return `${12 + ((points - 100) / 100) * 15}%`; // 12% to 27%
    if (points <= 300) return `${27 + ((points - 200) / 100) * 16}%`; // 27% to 43%
    if (points <= 400) return `${43 + ((points - 300) / 100) * 15}%`; // 43% to 58%
    if (points <= 500) return `${58 + ((points - 400) / 100) * 16}%`; // 58% to 74%
    if (points <= 750) return `${74 + ((points - 500) / 250) * 16}%`; // 74% to 90%
    if (points <= 1000) return `${90 + ((points - 750) / 250) * 10}%`; // 90% to 100%
    return '100%';
  };

  return (
    <div className="lg:col-span-7 flex flex-col gap-7">
      {/* UNLOCK TIER REWARDS Section */}
      <div className="flex flex-col gap-3">
        <h2 className="text-[#4A4A4A] text-[15px] font-medium tracking-wide uppercase ml-1">
          Unlock Tier Rewards
        </h2>
        <div className="bg-[#F9F6F5]/60 backdrop-blur-md rounded-[20px] p-5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-white/40">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {tierRewards.map((reward) => {
              const isUnlocked =
                (reward.id === 1 && progress >= 105) ||
                (reward.id === 2 && progress >= 112) ||
                (reward.id === 3 && progress >= 115) ||
                (reward.id === 4 && progress >= 122) ||
                (reward.id === 5 && progress >= 125) ||
                (reward.id === 6 && progress >= 128) ||
                (reward.id === 7 && progress >= 130) ||
                (reward.id === 8 && progress >= 135) ||
                (reward.id === 9 && progress >= 140) ||
                (reward.id === 10 && progress >= 148);

              let displayText = reward.text;
              if (progress >= 145) {
                if (reward.id === 1) displayText = "WELCOME GIFT\nONE-TIME 20% OFF";
                if (reward.id === 2) displayText = "FREE SHIPPING\nON ALL ORDERS";
                if (reward.id === 4) displayText = "BIRTHDAY GIFT\nREWARD $20";
                if (reward.id === 5) displayText = "MEMBER\nSAVING 15% OFF";
              } else if (progress >= 115) {
                if (reward.id === 1) displayText = "WELCOME GIFT\nONE-TIME 15% OFF";
                if (reward.id === 2) displayText = "FREE SHIPPING\nON ALL ORDERS";
              }

              return (
                <div
                  key={reward.id}
                  className={`bg-white rounded-[16px] flex flex-col items-center justify-center p-3 h-[210px] text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] border transition-all duration-500 ${isUnlocked ? (progress >= 145 ? 'border-[#483951]/60 shadow-[0_4px_15px_rgba(72,57,81,0.06)]' : 'border-[#C5B5A5]') : 'border-transparent'}`}
                >
                  <div className="relative w-16 h-16 flex items-center justify-center mb-2">
                    <svg viewBox="0 0 50 50" className="absolute inset-0 w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.04)]">
                      <defs>
                        <linearGradient id="paint_unlocked_octagon_bg" x1="0" y1="0" x2="50" y2="50" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#947863" />
                          <stop offset="0.5" stopColor="#E9DDD4" />
                          <stop offset="1" stopColor="#947863" />
                        </linearGradient>
                        <linearGradient id="paint_unlocked_octagon_galaxy_bg" x1="0" y1="0" x2="50" y2="50" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#483951" />
                          <stop offset="0.5" stopColor="#675470" />
                          <stop offset="1" stopColor="#483951" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M14.5 0.5 L35.5 0.5 L49.5 14.5 L49.5 35.5 L35.5 49.5 L14.5 49.5 L0.5 35.5 L0.5 14.5 Z"
                        fill={isUnlocked ? (progress >= 145 ? "url(#paint_unlocked_octagon_galaxy_bg)" : "url(#paint_unlocked_octagon_bg)") : "white"}
                        stroke={isUnlocked ? "transparent" : "#EAEAEA"}
                        strokeWidth="1"
                      />
                    </svg>
                    {isUnlocked ? (
                      reward.id === 2 ? (
                        <MdOutlineLocalShipping className="w-[30px] h-[30px] relative z-10" color="white" />
                      ) : reward.id === 3 ? (
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      ) : reward.id === 4 ? (
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                          <line x1="12" y1="3" x2="12" y2="8" />
                          <path d="M12 3c.5 1 1 1 1 2s-.5 2-1 2-1-1-1-2 0-1 1-2z" fill="white" stroke="none" />
                          <path d="M6 14h12v-6H6zm-2 6h16v-6H4zM6 11h12M4 17h16" />
                        </svg>
                      ) : reward.id === 5 ? (
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                          <path d="M19 9c0-3.5-2.5-5-5-5h-4C7.5 4 5 5.5 5 9c0 4 2 6.5 2 9.5C7 21 9 22 12 22s5-1 5-3.5c0-3 2-5.5 2-9.5z" />
                          <path d="M6 10h12" />
                          <path d="M12 13v5" />
                          <path d="M14 14.5h-3c-1 0-1.5-.5-1.5-1.2s.5-1.2 1.5-1.2h1c1 0 1.5-.5 1.5-1.2s-.5-1.2-1.5-1.2h-3" />
                        </svg>
                      ) : reward.id === 6 ? (
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="M12 7c0 2 1.2 3 3 3c-1.8 0-3 1-3 3c0-2-1.2-3-3-3c1.8 0 3-1 3-3z" fill="white" stroke="none" />
                        </svg>
                      ) : reward.id === 7 ? (
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                          <path d="M12 9l2.5 3-2.5 3-2.5-3z" fill="white" stroke="none" />
                        </svg>
                      ) : reward.id === 8 ? (
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          <circle cx="12" cy="9" r="2" fill="white" stroke="none" />
                          <path d="M9 13c0-1.5 1.5-2 3-2s3 .5 3 2" fill="white" stroke="none" />
                        </svg>
                      ) : reward.id === 9 ? (
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                          <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" fill="white" stroke="none" />
                          <rect x="5" y="16" width="14" height="3" rx="1" fill="white" stroke="none" />
                        </svg>
                      ) : (
                        <GiftSVG className="w-[30px] h-[30px] relative z-10 text-white" />
                      )
                    ) : (
                      <LockSVG className="w-[22px] h-[28px] relative z-10 text-[#9C9C9C]" />
                    )}
                  </div>
                  <p className={`text-[13px] font-semibold leading-tight whitespace-pre-line tracking-tight uppercase mt-4 transition-colors duration-500 ${isUnlocked ? 'text-[#333333]' : 'text-[#9C9C9C]'}`}>
                    {displayText}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* SPEND SPARKLE POINTS Section */}
      <div className="flex flex-col gap-3">
        <h2 className="text-[#4A4A4A] text-[15px] font-medium tracking-wide uppercase ml-1">
          Spend Sparkle Points
        </h2>
        <div className="bg-[#F9F6F5]/60 backdrop-blur-md rounded-[20px] p-10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-white/40 relative overflow-hidden">
          {progress >= 175 ? (
            <div className="relative w-full h-[76px] flex items-center justify-center rounded-[16px] overflow-hidden drop-shadow-md">
              <img 
                src={lineImg} 
                alt="Spend Sparkle Points Rewards" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              
              {/* Progress Bar Container */}
              <div className="absolute left-0 right-0 top-[51%] h-[4px] bg-[#c2b9c5]/40 rounded-full -translate-y-1/2 z-0 mx-4">
                {/* Progress Bar Fill */}
                <div 
                  className="absolute left-0 top-0 bottom-0 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-1000"
                  style={{ width: getFillWidth() }}
                >
                  {/* Glowing Star Thumb */}
                  <div className="absolute -right-[14px] top-1/2 -translate-y-1/2 text-white drop-shadow-[0_0_12px_rgba(255,255,255,1)]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      {/* Large Star */}
                      <path d="M10 0C10 5.52285 14.4772 10 20 10C14.4772 10 10 14.4772 10 20C10 14.4772 5.52285 10 0 10C5.52285 10 10 5.52285 10 0Z" />
                      {/* Small Star */}
                      <path d="M20 12C20 14.2091 21.7909 16 24 16C21.7909 16 20 17.7909 20 20C20 17.7909 18.2091 16 16 16C18.2091 16 20 14.2091 20 12Z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="relative z-10 w-full h-full px-10 sm:px-14 py-[14px] flex justify-between items-center">
                {[
                  { label: '$5', points: '100 POINTS' },
                  { label: '$10', points: '200 POINTS' },
                  { label: '$15', points: '300 POINTS' },
                  { label: '$20', points: '400 POINTS' },
                  { label: '$30', points: '500 POINTS' },
                  { label: '$50', points: '750 POINTS' },
                ].map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-between h-full select-none">
                    <span className="text-[14px] sm:text-[15px] font-bold text-white tracking-wide leading-none">{step.label}</span>
                    <span className="text-[11px] sm:text-[13px] font-medium text-white/90 tracking-wide leading-none mt-auto">{step.points}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className={`relative flex items-center w-full px-6 py-2 bg-white rounded-2xl transition-all duration-1000 ${progress < 160 ? 'blur-[4px] opacity-30 select-none pointer-events-none' : 'blur-0 opacity-100'}`}>
            {/* The progress bar line */}
            <div className="absolute left-[48px] right-[60px] h-[3px] bg-[#E9DDD4]">
              <div 
                className="h-full bg-[linear-gradient(90deg,#947863_0%,#483951_100%)] transition-all duration-1000" 
                style={{ width: progress >= 170 ? '100%' : progress >= 165 ? '66%' : progress >= 162 ? '33%' : '0%' }}
              />
            </div>

            {/* The 4 steps/icons */}
            <div className="flex justify-between w-full relative z-10 items-center">
              {/* Icon 1: Octagon Badge */}
              <div className={`flex items-center justify-center drop-shadow-[0_2px_5px_rgba(0,0,0,0.12)] transition-all duration-700 ${progress >= 160 ? 'opacity-100 animate-float-1 scale-100' : 'opacity-40 grayscale scale-95'}`}>
                <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="11.7,0 28.3,0 40,11.7 40,28.3 28.3,40 11.7,40 0,28.3 0,11.7" fill="url(#paint_octagon_grad)" stroke="#C5B5A5" strokeWidth="0.8" />
                  <path d="M20,12 C20,17 23,20 28,20 C23,20 20,23 20,28 C20,23 17,20 12,20 C17,20 20,17 20,12 Z" fill="white" opacity="0.9" />
                  <defs>
                    <linearGradient id="paint_octagon_grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#947863" />
                      <stop offset="0.5" stopColor="#E9DDD4" />
                      <stop offset="1" stopColor="#947863" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Icon 2: Hexagon Badge */}
              <div className={`flex items-center justify-center drop-shadow-[0_2px_5px_rgba(0,0,0,0.12)] transition-all duration-700 ${progress >= 162 ? 'opacity-100 animate-float-2 scale-100' : 'opacity-40 grayscale scale-95'}`}>
                <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="20,0 37.3,10 37.3,30 20,40 2.7,30 2.7,10" fill="url(#paint_hexagon_grad)" stroke="#C5B5A5" strokeWidth="0.8" />
                  <path d="M20,12 C20,17 23,20 28,20 C23,20 20,23 20,28 C20,23 17,20 12,20 C17,20 20,17 20,12 Z" fill="white" opacity="0.9" />
                  <defs>
                    <linearGradient id="paint_hexagon_grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#947863" />
                      <stop offset="0.5" stopColor="#E9DDD4" />
                      <stop offset="1" stopColor="#947863" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Icon 3: Four-pointed Sparkle */}
              <div className={`flex items-center justify-center transition-all duration-700 ${progress >= 165 ? 'opacity-100 animate-float-3 scale-100' : 'opacity-40 grayscale scale-95'}`}>
                <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16,2 C16,11 21,16 30,16 C21,16 16,21 16,30 C16,21 11,16 2,16 C11,16 16,11 16,2 Z" fill="url(#paint_sparkle_grad)" stroke="#C5B5A5" strokeWidth="0.8" />
                  <path d="M16,8 C16,13 19,16 24,16 C19,16 16,19 16,24 C16,19 13,16 8,16 C13,16 16,13 16,8 Z" fill="white" />
                  <defs>
                    <linearGradient id="paint_sparkle_grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#E9DDD4" />
                      <stop offset="0.5" stopColor="#C5B5A5" />
                      <stop offset="1" stopColor="#947863" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Icon 4: Sparkles group */}
              <div className={`flex items-center justify-center transition-all duration-700 ${progress >= 170 ? 'opacity-100 animate-float-4 scale-100 text-[#483951]' : 'opacity-40 grayscale scale-95 text-[#947863]'}`}>
                <Star2SVG />
              </div>
            </div>
          </div>

          {/* Locked Overlay */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center z-20 transition-all duration-1000 ${progress < 160 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {progress >= 148 ? (
              <>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Star2SVG />
                </div>
                <p className="text-[13px] font-semibold text-[#333333] tracking-wider uppercase mt-1">
                  {progress >= 160 ? "MAX GALAXY TIER LEVEL ACHIEVED" : progress >= 155 ? "UNLOCKED GALAXY TIER REWARDS" : "COMPLETE GALAXY TIER TO UNLOCK REWARDS"}
                </p>
              </>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-2">
                    {progress >= 145 ? (
                      <>
                        <UnlockSVG className="w-[22px] h-[28px] animate-pulse text-[#483951]" />
                        <UnlockSVG className="w-[22px] h-[28px] animate-pulse text-[#483951]" />
                        <UnlockSVG className="w-[22px] h-[28px] animate-pulse text-[#483951]" />
                        <UnlockSVG className="w-[22px] h-[28px] animate-pulse text-[#483951]" />
                      </>
                    ) : progress >= 122 ? (
                      <>
                        <UnlockSVG className="w-[22px] h-[28px] animate-pulse text-[#947863]" />
                        <UnlockSVG className="w-[22px] h-[28px] animate-pulse text-[#947863]" />
                        <UnlockSVG className="w-[22px] h-[28px] animate-pulse text-[#947863]" />
                        <LockSVG className="w-[22px] h-[28px]" />
                      </>
                    ) : progress >= 115 ? (
                      <>
                        <UnlockSVG className="w-[22px] h-[28px] animate-pulse text-[#947863]" />
                        <UnlockSVG className="w-[22px] h-[28px] animate-pulse text-[#947863]" />
                        <UnlockSVG className="w-[22px] h-[28px] animate-pulse text-[#947863]" />
                        <LockSVG className="w-[22px] h-[28px]" />
                      </>
                    ) : progress >= 112 ? (
                      <>
                        <UnlockSVG className="w-[22px] h-[28px] animate-pulse text-[#947863]" />
                        <UnlockSVG className="w-[22px] h-[28px] animate-pulse text-[#947863]" />
                        <LockSVG className="w-[22px] h-[28px]" />
                        <LockSVG className="w-[22px] h-[28px]" />
                      </>
                    ) : progress >= 102 ? (
                      <>
                        <UnlockSVG className="w-[22px] h-[28px] animate-pulse text-[#947863]" />
                        <LockSVG className="w-[22px] h-[28px]" />
                        <LockSVG className="w-[22px] h-[28px]" />
                        <LockSVG className="w-[22px] h-[28px]" />
                      </>
                    ) : (
                      [1, 2, 3, 4].map((i) => (
                        <LockSVG key={i} className="w-[22px] h-[28px]" />
                      ))
                    )}
                  </div>
                  <p className="text-[13px] font-semibold text-[#333333] tracking-wider uppercase mt-1">
                    {progress >= 145
                      ? "UNLOCKED GALAXY TIER LEVEL"
                      : progress >= 122
                        ? "LEVEL UP TO GALAXY TIER"
                        : progress >= 115
                          ? "UNLOCKED STARLIGHT TIER LEVEL"
                          : progress >= 112
                            ? "LEVEL UP TO STARLIGHT TIER"
                            : progress >= 102
                              ? "LEVEL UP TO SHINY TIER"
                              : "SIGN UP TO JOIN VIP LOYALTY UNIVERSE CLUB"}
                  </p>
                </>
              )}
          </div>
          </>
          )}
        </div>
      </div>
    </div>
  );
}
