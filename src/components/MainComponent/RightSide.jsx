import React, { useState } from 'react';
import LockSVG from '../SVG/LockSVG';
import UnlockSVG from '../SVG/UnlockSVG';
import Star2SVG from '../SVG/Star2SVG';
import GiftSVG from '../SVG/GiftSVG';
import { MdOutlineLocalShipping } from "react-icons/md";


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
  const [isLocked, setIsLocked] = useState(true);
  return (
    <div className="lg:col-span-7 flex flex-col gap-10">
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
                (reward.id === 3 && progress >= 115);

              let displayText = reward.text;
              if (progress >= 115) {
                if (reward.id === 1) displayText = "WELCOME GIFT\nONE-TIME 15% OFF";
                if (reward.id === 2) displayText = "FREE SHIPPING\nON ALL ORDERS";
              }

              return (
                <div
                  key={reward.id}
                  className={`bg-white rounded-[16px] flex flex-col items-center justify-center p-3 h-[189px] text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] border transition-all duration-500 ${isUnlocked ? 'border-[#C5B5A5]' : 'border-transparent'}`}
                >
                  <div className="relative w-16 h-16 flex items-center justify-center mb-2">
                    <svg viewBox="0 0 50 50" className="absolute inset-0 w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.04)]">
                      <defs>
                        <linearGradient id="paint_unlocked_octagon_bg" x1="0" y1="0" x2="50" y2="50" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#947863" />
                          <stop offset="0.5" stopColor="#E9DDD4" />
                          <stop offset="1" stopColor="#947863" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M14.5 0.5 L35.5 0.5 L49.5 14.5 L49.5 35.5 L35.5 49.5 L14.5 49.5 L0.5 35.5 L0.5 14.5 Z" 
                        fill={isUnlocked ? "url(#paint_unlocked_octagon_bg)" : "white"} 
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
                      ) : (
                        <GiftSVG className="w-[30px] h-[30px] relative z-10 text-[#9C9C9C]" />
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
        <div className="bg-[#F9F6F5]/60 backdrop-blur-md rounded-[20px] p-10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-white/40 relative">
          <div className={`relative flex items-center w-full px-6 py-2 bg-white rounded-2xl transition-all duration-300 ${isLocked ? 'blur-[4px] opacity-30 select-none pointer-events-none' : ''}`}>
            {/* The progress bar line */}
            <div className="absolute left-[48px] right-[60px] h-[3px] bg-[linear-gradient(90deg,#DCD0C7_0%,#B8A394_25%,#E9DDD4_50%,#B8A394_75%,#432A3E_100%)] animate-shimmer" />

            {/* The 4 steps/icons */}
            <div className="flex justify-between w-full relative z-10 items-center">
              {/* Icon 1: Octagon Badge */}
              <div className="flex items-center justify-center drop-shadow-[0_2px_5px_rgba(0,0,0,0.12)] animate-float-1">
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
              <div className="flex items-center justify-center drop-shadow-[0_2px_5px_rgba(0,0,0,0.12)] animate-float-2">
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
              <div className="flex items-center justify-center animate-float-3">
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
              <div className="flex items-center justify-center animate-float-4">
                <Star2SVG />
              </div>
            </div>
          </div>

          {/* Locked Overlay */}
          {isLocked && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
              <div className="flex items-center gap-3 mb-2">
                {progress >= 115 ? (
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
                {progress >= 115 
                  ? "UNLOCKED STARLIGHT TIER LEVEL" 
                  : progress >= 112 
                    ? "LEVEL UP TO STARLIGHT TIER" 
                    : progress >= 102 
                      ? "LEVEL UP TO SHINY TIER" 
                      : "SIGN UP TO JOIN VIP LOYALTY UNIVERSE CLUB"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
