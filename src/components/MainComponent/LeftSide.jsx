import React from 'react';
import { Lock, Sparkle } from 'lucide-react';
import CirclesIcon1SVG from '../SVG/CirclesIcon1SVG';
import GradientRingSVG from '../SVG/GradientRingSVG';
import StarSVG from '../SVG/StarSVG';
import LockSVG from '../SVG/LockSVG';
import UnlockSVG from '../SVG/UnlockSVG';
import ShipSVG from '../SVG/ShipSVG';
import Star3SVG from '../SVG/Star3SVG';

export default function LeftSide({ progress, setProgress }) {
  // Determine style of the '+40 Sparkle Points' text
  const getPointsTextStyle = () => {
    if (progress === 50) return 'text-[#947863] font-bold';
    if (progress >= 75) return 'text-[#947863]/70 font-semibold line-through decoration-[#947863]/90 decoration-2';
    return 'text-[#9C9C9C] font-semibold';
  };

  return (
    <div className="lg:col-span-5 flex flex-col gap-10">
      {/* EARN SPARKLE POINTS Section */}
      <div className="flex flex-col gap-3">
        <h2 className="text-[#4A4A4A] text-[15px] font-medium tracking-wide uppercase ml-1">
          Earn Sparkle Points
        </h2>

        <div className={`bg-[#F9F6F5]/60 backdrop-blur-md rounded-[20px] p-5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border transition-all duration-1000 ${progress >= 25 ? 'border-[#E9DDD4]' : 'border-white/40'}`}>
          <div className="flex flex-col md:flex-row gap-5 mb-5">

            {/* Concentric Circles & Icon */}
            <div className="flex-1 flex items-center justify-center py-4">
              <div className="w-[180px] h-[180px] relative flex items-center justify-center">
                {/* Outermost three rings are always gray base (active=false) */}
                <GradientRingSVG active={false} id="ring1" className={`absolute w-[190px] h-[190px] transition-all duration-700 ${progress >= 105 ? '' : 'animate-[spin-slow_40s_linear_infinite]'}`} />
                <GradientRingSVG active={false} id="ring2" className={`absolute w-[165px] h-[165px] transition-all duration-700 ${progress >= 105 ? '' : 'animate-[spin-slow_30s_linear_infinite_reverse]'}`} />
                <GradientRingSVG 
                  progress={
                    progress === 105 || progress === 106 ? 40 : 
                    progress === 107 ? 70 : 
                    progress === 108 || progress === 110 ? 100 : 
                    progress === 111 || progress >= 112 ? 105 : null
                  } 
                  id="ring3" 
                  className={`absolute w-[140px] h-[140px] transition-all duration-700 ${
                    progress === 110 
                      ? 'opacity-0 scale-95 pointer-events-none' 
                      : progress === 111 
                        ? 'opacity-100'
                        : progress >= 112
                          ? 'opacity-50'
                          : progress >= 105 
                            ? '' 
                            : 'animate-[spin-slow_20s_linear_infinite]'
                  }`} 
                />
                {/* Innermost ring acts as the progress ring */}
                <GradientRingSVG 
                  progress={progress >= 105 ? 105 : progress} 
                  id="ring4" 
                  className={`absolute w-[115px] h-[115px] transition-all duration-700 ${
                    progress === 102 
                      ? 'opacity-0 scale-95 pointer-events-none' 
                      : progress >= 105 
                        ? 'opacity-50' 
                        : progress === 100 
                          ? '' 
                          : 'animate-[spin-slow_10s_linear_infinite_reverse]'
                  }`} 
                  style={progress === 100 ? { transform: 'rotate(0deg)', animation: 'none' } : {}} 
                />

                <div className="absolute w-[95px] h-[95px] bg-white rounded-full flex items-center justify-center">
                  {progress >= 112 ? (
                    <Star3SVG className="w-[67px] h-[67px] relative z-10" />
                  ) : progress >= 105 ? (
                    <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="20,0 37.3,10 37.3,30 20,40 2.7,30 2.7,10" fill="url(#paint_hexagon_grad_center)" stroke="#C5B5A5" strokeWidth="0.8" />
                      <path d="M20,12 C20,17 23,20 28,20 C23,20 20,23 20,28 C20,23 17,20 12,20 C17,20 20,17 20,12 Z" fill="white" opacity="0.9" />
                      <defs>
                        <linearGradient id="paint_hexagon_grad_center" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#947863" />
                          <stop offset="0.5" stopColor="#E9DDD4" />
                          <stop offset="1" stopColor="#947863" />
                        </linearGradient>
                      </defs>
                    </svg>
                  ) : (
                    <CirclesIcon1SVG active={progress >= 25} />
                  )}
                </div>
              </div>
            </div>

            {/* Points Box */}
            <div className={`bg-white rounded-[16px] flex-[1.2] flex flex-col items-center justify-center py-8 border transition-all duration-1000 ${progress >= 105 ? 'border-[#C5B5A5]' : progress >= 25 ? 'border-[#E9DDD4]' : 'border-transparent'}`}>
              <div className="flex items-center gap-1">
                {progress === 112 ? (
                  <span 
                    style={{ 
                      backgroundImage: 'linear-gradient(90deg, #947863 0%, #E9DDD4 50%, #947863 100%)', 
                      WebkitBackgroundClip: 'text', 
                      WebkitTextFillColor: 'transparent' 
                    }} 
                    className="text-[80px] font-bold leading-none transition-all duration-500"
                  >
                    100+
                  </span>
                ) : progress >= 108 ? (
                  <span className="text-[80px] font-bold text-[#1E1E1E] leading-none transition-all duration-500">
                    100
                  </span>
                ) : (
                  <span className="text-[80px] font-bold text-[#1E1E1E] leading-none transition-all duration-500">
                    {progress === 107 ? '70+' : progress >= 100 ? '40' : progress >= 75 ? '40+' : '0+'}
                  </span>
                )}
                <StarSVG />
              </div>
              <span className="font-inter text-[20px] font-semibold uppercase leading-[20px] tracking-normal align-middle">
                SPARKLE POINTS
              </span>
            </div>
          </div>

          {/* S-BRILLET / SHINY Bar */}
          <div 
            onClick={() => {
              if (progress === 0) setProgress(25);
              else if (progress === 25) setProgress(50);
              else if (progress === 50) setProgress(75);
              else if (progress === 75) setProgress(100);
              else if (progress === 100) setProgress(102);
              else if (progress === 102) setProgress(103);
              else if (progress === 103) setProgress(105);
              else if (progress === 105) setProgress(106);
              else if (progress === 106) setProgress(107);
              else if (progress === 107) setProgress(108);
              else if (progress === 108) setProgress(110);
              else if (progress === 110) setProgress(111);
              else if (progress === 111) setProgress(112);
              else if (progress === 112) setProgress(115);
              else if (progress === 115) setProgress(116);
              else if (progress === 116) setProgress(117);
              else if (progress === 117) setProgress(118);
              else if (progress === 118) setProgress(0);
            }}
            className="w-full bg-white rounded-[16px] p-6 flex flex-col overflow-hidden relative transition-all duration-500 min-h-[156px] cursor-pointer hover:shadow-md hover:border-[#E9DDD4] active:scale-[0.99]"
          >
            <div className="relative w-full transition-all duration-500 flex flex-col">
              {/* S-BRILLET Container (slides up and fades out when progress >= 105) */}
              <div 
                className={`transition-all duration-700 ease-in-out flex flex-col gap-4 ${
                  progress >= 105 
                    ? 'h-0 opacity-0 translate-y-[-150%] pointer-events-none overflow-hidden' 
                    : 'opacity-100 translate-y-0'
                }`}
              >
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
                     <span className={`text-[28px] font-normal font-['Libre_Caslon_Text'] tracking-wide mt-1 transition-all duration-500 ${
                      progress >= 100 
                        ? 'text-[#333333]/70 line-through decoration-[#947863]/90 decoration-2' 
                        : 'text-[#333333]'
                    }`}>S-BRILLET</span>
                  </div>
                  <span className={`text-[15px] font-bold uppercase transition-all duration-500 ${
                    progress >= 100 
                      ? 'text-[#947863]/70 line-through decoration-[#947863]/90 decoration-2' 
                      : progress >= 75
                        ? 'text-[#947863]'
                        : 'text-[#333333]'
                  }`}>
                    (0 Sparkle Points)
                  </span>
                </div>
                
                <div className="h-[2px] w-full bg-linear-to-r from-[#947863] via-[#E9DDD4] to-[#947863] opacity-60"></div>
                
                <div className="flex justify-between items-center pt-1">
                  <div className="flex items-center gap-2">
                    {progress >= 75 ? (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#333333]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 scale-100">
                        <circle cx="16" cy="16" r="12" fill="url(#paint_brillet_bullet)" stroke="#C5B5A5" strokeWidth="0.8" />
                        <circle cx="16" cy="16" r="5" fill="white" />
                        <defs>
                          <linearGradient id="paint_brillet_bullet" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#947863" />
                            <stop offset="0.5" stopColor="#E9DDD4" />
                            <stop offset="1" stopColor="#947863" />
                          </linearGradient>
                        </defs>
                      </svg>
                    )}
                    <span className="text-[17px] font-medium text-[#333333]">Sign Up</span>
                  </div>
                  
                  {progress === 50 ? (
                    <span 
                      style={{ 
                        backgroundImage: 'linear-gradient(90deg, #947863 0%, #E9DDD4 50%, #947863 100%)', 
                        WebkitBackgroundClip: 'text', 
                        WebkitTextFillColor: 'transparent' 
                      }} 
                      className="text-[17px] font-bold"
                    >
                      +40 Sparkle Points
                    </span>
                  ) : progress >= 75 ? (
                    <span className="text-[17px] font-semibold text-[#947863] line-through decoration-[#947863] decoration-2">
                      +40 Sparkle Points
                    </span>
                  ) : (
                    <span className="text-[17px] font-semibold text-[#9C9C9C]">
                      +40 Sparkle Points
                    </span>
                  )}
                </div>
              </div>

              {/* SHINY Container (slides in from below when progress >= 105 and slides up when progress >= 115) */}
              <div 
                className={`transition-all duration-700 ease-in-out flex flex-col gap-4 ${
                  progress >= 115
                    ? 'h-0 opacity-0 translate-y-[-150%] pointer-events-none overflow-hidden'
                    : progress >= 105 
                      ? 'opacity-100 translate-y-0' 
                      : 'h-0 opacity-0 translate-y-[150%] pointer-events-none overflow-hidden'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="20,0 37.3,10 37.3,30 20,40 2.7,30 2.7,10" fill="url(#paint_shiny_icon)" stroke="#C5B5A5" strokeWidth="0.8" />
                      <path d="M20,12 C20,17 23,20 28,20 C23,20 20,23 20,28 C20,23 17,20 12,20 C17,20 20,17 20,12 Z" fill="white" opacity="0.9" />
                      <defs>
                        <linearGradient id="paint_shiny_icon" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#947863" />
                          <stop offset="0.5" stopColor="#E9DDD4" />
                          <stop offset="1" stopColor="#947863" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="text-[28px] font-normal font-['Libre_Caslon_Text'] tracking-wide mt-1 text-[#333333]">SHINY</span>
                  </div>
                  {progress === 108 ? (
                    <span 
                      style={{ 
                        backgroundImage: 'linear-gradient(90deg, #947863 0%, #E9DDD4 50%, #947863 100%)', 
                        WebkitBackgroundClip: 'text', 
                        WebkitTextFillColor: 'transparent' 
                      }} 
                      className="text-[15px] font-bold uppercase"
                    >
                      (100 Sparkle Points)
                    </span>
                  ) : progress >= 110 ? (
                    <span className="text-[15px] font-bold uppercase text-[#947863] line-through decoration-[#947863] decoration-2">
                      (100 Sparkle Points)
                    </span>
                  ) : (
                    <span className="text-[15px] font-bold uppercase text-[#333333]">
                      (100 Sparkle Points)
                    </span>
                  )}
                </div>
                
                <div className="h-[2px] w-full bg-linear-to-r from-[#947863] via-[#E9DDD4] to-[#947863] opacity-60"></div>
                
                <div className="flex justify-between items-center pt-1">
                  <div className="flex items-center gap-2">
                    {progress >= 106 ? (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" fill="url(#paint_shiny_checkmark_bg)" />
                        <path d="M8.5 12.5L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                          <linearGradient id="paint_shiny_checkmark_bg" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#947863" />
                            <stop offset="0.5" stopColor="#E9DDD4" />
                            <stop offset="1" stopColor="#947863" />
                          </linearGradient>
                        </defs>
                      </svg>
                    ) : (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#333333]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <span className="text-[17px] font-medium text-[#333333]">Follow us on Instagram</span>
                  </div>
                  {progress === 106 ? (
                    <span 
                      style={{ 
                        backgroundImage: 'linear-gradient(90deg, #947863 0%, #E9DDD4 50%, #947863 100%)', 
                        WebkitBackgroundClip: 'text', 
                        WebkitTextFillColor: 'transparent' 
                      }} 
                      className="text-[17px] font-bold"
                    >
                      +30 Sparkle Points
                    </span>
                  ) : progress >= 107 ? (
                    <span className="text-[17px] font-semibold text-[#947863] line-through decoration-[#947863] decoration-2">
                      +30 Sparkle Points
                    </span>
                  ) : (
                    <span className="text-[17px] font-semibold text-[#9C9C9C]">
                      +30 Sparkle Points
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center pt-1">
                  <div className="flex items-center gap-2">
                    {progress >= 107 ? (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" fill="url(#paint_shiny_checkmark_bg2)" />
                        <path d="M8.5 12.5L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                          <linearGradient id="paint_shiny_checkmark_bg2" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#947863" />
                            <stop offset="0.5" stopColor="#E9DDD4" />
                            <stop offset="1" stopColor="#947863" />
                          </linearGradient>
                        </defs>
                      </svg>
                    ) : (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#333333]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <span className="text-[17px] font-medium text-[#333333]">Subscribe to Newsletter</span>
                  </div>
                  {progress === 107 ? (
                    <span 
                      style={{ 
                        backgroundImage: 'linear-gradient(90deg, #947863 0%, #E9DDD4 50%, #947863 100%)', 
                        WebkitBackgroundClip: 'text', 
                        WebkitTextFillColor: 'transparent' 
                      }} 
                      className="text-[17px] font-bold"
                    >
                      +30 Sparkle Points
                    </span>
                  ) : progress >= 108 ? (
                    <span className="text-[17px] font-semibold text-[#947863] line-through decoration-[#947863] decoration-2">
                      +30 Sparkle Points
                    </span>
                  ) : (
                    <span className="text-[17px] font-semibold text-[#9C9C9C]">
                      +30 Sparkle Points
                    </span>
                  )}
                </div>
              </div>

              {/* STARLIGHT Container (slides in from below when progress >= 115) */}
              <div 
                className={`transition-all duration-700 ease-in-out flex flex-col gap-4 ${
                  progress >= 115 
                    ? 'opacity-100 translate-y-0' 
                    : 'h-0 opacity-0 translate-y-[150%] pointer-events-none overflow-hidden'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C12 8.5 15.5 12 22 12C15.5 12 12 15.5 12 22C12 15.5 8.5 12 2 12C8.5 12 12 8.5 12 2Z" stroke="url(#paint_starlight_icon)" strokeWidth="1.2" fill="none" />
                      <path d="M12 6C12 10 14 12 18 12C14 12 12 14 12 18C12 14 10 12 6 12C10 12 12 10 12 6Z" fill="url(#paint_starlight_icon)" opacity="0.8" />
                      <defs>
                        <linearGradient id="paint_starlight_icon" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#947863" />
                          <stop offset="0.5" stopColor="#E9DDD4" />
                          <stop offset="1" stopColor="#947863" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="text-[28px] font-normal font-['Libre_Caslon_Text'] tracking-wide mt-1 text-[#333333]">STARLIGHT</span>
                  </div>
                  <span className="text-[15px] font-bold uppercase text-[#333333]">
                    (700 Sparkle Points)
                  </span>
                </div>
                
                <div className="h-[2px] w-full bg-linear-to-r from-[#947863] via-[#E9DDD4] to-[#947863] opacity-60"></div>
                
                <div className="flex justify-between items-center pt-1">
                  <div className="flex items-center gap-2">
                    {progress >= 116 ? (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" fill="url(#paint_starlight_checkmark_bg)" />
                        <path d="M8.5 12.5L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                          <linearGradient id="paint_starlight_checkmark_bg" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#947863" />
                            <stop offset="0.5" stopColor="#E9DDD4" />
                            <stop offset="1" stopColor="#947863" />
                          </linearGradient>
                        </defs>
                      </svg>
                    ) : (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#333333]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <span className="text-[17px] font-medium text-[#333333]">Purchase Items</span>
                  </div>
                  <span className="text-[17px] font-semibold text-[#333333]">
                    $1 = +1.25 Sparkle Points
                  </span>
                </div>

                <div className="flex justify-between items-center pt-1">
                  <div className="flex items-center gap-2">
                    {progress >= 117 ? (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" fill="url(#paint_starlight_checkmark_bg2)" />
                        <path d="M8.5 12.5L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                          <linearGradient id="paint_starlight_checkmark_bg2" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#947863" />
                            <stop offset="0.5" stopColor="#E9DDD4" />
                            <stop offset="1" stopColor="#947863" />
                          </linearGradient>
                        </defs>
                      </svg>
                    ) : (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#333333]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <span className="text-[17px] font-medium text-[#333333]">Refer a Friend</span>
                  </div>
                  <span className="text-[17px] font-semibold text-[#333333]">
                    +125 Sparkle Points
                  </span>
                </div>
              </div>
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
            {progress >= 115 ? (
              [
                { type: 'text', val: '20%' },
                { type: 'text', val: '25%' },
                { type: 'text', val: '35%' },
                { type: 'icon', val: '✦' }
              ].map((item, idx) => (
                <div key={idx} className="relative w-[68px] h-[68px] flex items-center justify-center group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                  {/* Jewel Diamond Shape */}
                  <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                    <path d="M5 2H19L24 9L12 22L0 9L5 2Z" />
                  </svg>
                  {item.type === 'text' ? (
                    <span className="relative z-10 text-[15px] font-bold text-[#333333] -mt-1 select-none">
                      {item.val}
                    </span>
                  ) : (
                    <span className="relative z-10 text-[20px] font-bold text-[#333333] -mt-1 select-none">
                      {item.val}
                    </span>
                  )}
                </div>
              ))
            ) : (
              [1, 2, 3, 4].map((i) => (
                <div key={i} className="relative w-[68px] h-[68px] flex items-center justify-center group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                  {/* Jewel Diamond Shape */}
                  <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                    <path d="M5 2H19L24 9L12 22L0 9L5 2Z" />
                  </svg>
                  {/* The user's custom Lock/Unlock SVG */}
                  <LockSVG className="w-[20px] h-[28px] relative z-10 -mt-3 transition-transform duration-300 group-hover:scale-110 animate-wiggle-hover" />
                </div>
              ))
            )}
          </div>

          <span className="text-[#333333] text-2xl font-medium tracking-wide uppercase">
            {progress >= 115 
              ? "UNLOCKED STARLIGHT TIER LEVEL" 
              : progress >= 110 
                ? "LEVEL UP TO STARLIGHT TIER" 
                : "LEVEL UP TO SHINY TIER"}
          </span>
        </div>
      </div>
    </div>
  );
}
