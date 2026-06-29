import React from 'react';
import { Lock, Sparkle } from 'lucide-react';
import CirclesIcon1SVG from '../SVG/CirclesIcon1SVG';
import GradientRingSVG from '../SVG/GradientRingSVG';
import StarSVG from '../SVG/StarSVG';
import LockSVG from '../SVG/LockSVG';
import UnlockSVG from '../SVG/UnlockSVG';
import rignImg from '../../assets/Images/rign.png';
import ShipSVG from '../SVG/ShipSVG';
import Star3SVG from '../SVG/Star3SVG';
import Star4SVG from '../SVG/Star4SVG';
import rign from '../../assets/Images/rign.png';
import ring2 from '../../assets/Images/ring2.png';

export default function LeftSide({ progress, setProgress }) {
  // Determine style of the '+40 Sparkle Points' text
  const getPointsTextStyle = () => {
    if (progress === 50) return 'text-[#947863] font-bold';
    if (progress >= 75) return 'text-[#947863]/70 font-semibold line-through decoration-[#947863]/90 decoration-2';
    return 'text-[#9C9C9C] font-semibold';
  };

  return (
    <div className="lg:col-span-5 flex flex-col gap-6">
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
                {/* Outermost ring handles Galaxy tier progress */}
                <GradientRingSVG
                  progress={progress >= 160 ? 105 : progress >= 155 ? 100 : progress >= 152 ? 75 : progress >= 150 ? 50 : progress >= 148 ? 25 : null}
                  id="ring1"
                  galaxyTheme={progress >= 145}
                  className={`absolute w-[190px] h-[190px] transition-all duration-700 z-30 ${progress >= 175 ? 'opacity-0 scale-95 pointer-events-none' : progress >= 160 ? 'opacity-100' : progress >= 105 ? '' : 'animate-[spin-slow_40s_linear_infinite]'}`}
                  style={progress >= 105 && progress < 160 ? { transform: 'rotate(125deg)', animation: 'none' } : progress >= 160 ? { animation: 'spin 20s linear infinite' } : {}}
                />

                {/* Final Rign Image */}
                <img
                  src={progress >= 675 ? ring2 : rign}
                  alt="Galaxy Ring"
                  className={`absolute w-[190px] h-[190px] object-contain transition-all duration-700 z-40 ${progress >= 175 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                  style={progress >= 175 ? { animation: 'spin 40s linear infinite' } : {}}
                />
                {/* Ring 2 shows 25% progress at progress >= 122, 50% at >= 125, 75% at >= 128, 100% at >= 130, and becomes wavy (105) at >= 140 */}
                <GradientRingSVG
                  progress={progress >= 140 ? 105 : progress >= 130 ? 100 : progress >= 128 ? 75 : progress >= 125 ? 50 : progress >= 122 ? 25 : null}
                  id="ring2"
                  galaxyTheme={progress >= 145}
                  className={`absolute w-[165px] h-[165px] transition-all duration-700 ${progress >= 160 ? 'opacity-0 scale-95 pointer-events-none' : progress >= 145
                    ? 'opacity-50'
                    : progress >= 105
                      ? ''
                      : 'animate-[spin-slow_30s_linear_infinite_reverse]'
                    }`}
                  style={progress >= 105 ? { transform: 'rotate(0deg)', animation: 'none' } : {}}
                />
                <GradientRingSVG
                  progress={
                    progress === 105 || progress === 106 ? 40 :
                      progress === 107 ? 70 :
                        progress === 108 || progress === 110 ? 100 :
                          progress === 111 || progress >= 112 ? 105 : null
                  }
                  id="ring3"
                  galaxyTheme={progress >= 145}
                  className={`absolute w-[140px] h-[140px] transition-all duration-700 ${progress >= 160 ? 'opacity-0 scale-95 pointer-events-none' : progress === 110
                    ? 'opacity-0 scale-95 pointer-events-none'
                    : progress === 111
                      ? 'opacity-100'
                      : progress >= 112
                        ? 'opacity-50'
                        : progress >= 105
                          ? ''
                          : 'animate-[spin-slow_20s_linear_infinite]'
                    }`}
                  style={progress >= 105 ? { transform: 'rotate(0deg)', animation: 'none' } : {}}
                />
                {/* Innermost ring acts as the progress ring */}
                <GradientRingSVG
                  progress={progress >= 105 ? 105 : progress}
                  id="ring4"
                  galaxyTheme={progress >= 145}
                  className={`absolute w-[115px] h-[115px] transition-all duration-700 ${progress >= 160 ? 'opacity-0 scale-95 pointer-events-none' : progress === 102
                    ? 'opacity-0 scale-95 pointer-events-none'
                    : progress === 103
                      ? 'opacity-100'
                      : progress >= 105
                        ? 'opacity-50'
                        : 'animate-[spin-slow_10s_linear_infinite_reverse]'
                    }`}
                  style={progress >= 100 ? { transform: 'rotate(0deg)', animation: 'none' } : {}}
                />

                <div className={`absolute w-[95px] h-[95px] bg-white rounded-full flex items-center justify-center transition-all duration-700 z-20 ${progress >= 175 ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100'}`}>
                  {progress >= 145 ? (
                    <Star4SVG className="w-[67px] h-[67px] relative z-10" />
                  ) : progress >= 112 ? (
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
                {progress >= 175 ? (
                  <span className="text-[80px] font-bold text-[#1E1E1E] leading-none transition-all duration-500">
                    {progress >= 675 ? "+1000" : (progress - 175) * 2}
                  </span>
                ) : progress >= 155 ? (
                  <span className="text-[80px] font-bold text-[#1E1E1E] leading-none transition-all duration-500">
                    1000
                  </span>
                ) : progress >= 152 ? (
                  <span className="text-[80px] font-bold text-[#1E1E1E] leading-none transition-all duration-500">
                    850
                  </span>
                ) : progress >= 145 ? (
                  <span
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #483951 0%, #675470 50%, #483951 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                    className="text-[80px] font-bold leading-none transition-all duration-500"
                  >
                    700
                  </span>
                ) : progress >= 140 ? (
                  <span
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #947863 0%, #E9DDD4 50%, #947863 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                    className="text-[80px] font-bold leading-none transition-all duration-500"
                  >
                    700
                  </span>
                ) : progress >= 130 ? (
                  <span className="text-[80px] font-bold text-[#1E1E1E] leading-none transition-all duration-500">
                    700
                  </span>
                ) : progress >= 128 ? (
                  <span className="text-[80px] font-bold text-[#1E1E1E] leading-none transition-all duration-500">
                    575
                  </span>
                ) : progress >= 125 ? (
                  <span className="text-[80px] font-bold text-[#1E1E1E] leading-none transition-all duration-500">
                    350
                  </span>
                ) : progress >= 122 ? (
                  <span className="text-[80px] font-bold text-[#1E1E1E] leading-none transition-all duration-500">
                    225
                  </span>
                ) : progress === 112 ? (
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
              else if (progress === 115) setProgress(122);
              else if (progress === 122) setProgress(125);
              else if (progress === 125) setProgress(128);
              else if (progress === 128) setProgress(130);
              else if (progress === 130) setProgress(135);
              else if (progress === 135) setProgress(140);
              else if (progress === 140) setProgress(145);
              else if (progress === 145) setProgress(148);
              else if (progress === 148) setProgress(150);
              else if (progress === 150) setProgress(152);
              else if (progress === 152) setProgress(155);
              else if (progress === 155) setProgress(160);
              else if (progress === 160) setProgress(162);
              else if (progress === 162) setProgress(165);
              else if (progress === 165) setProgress(170);
              else if (progress >= 170) {
                if (progress === 170) setProgress(175);
                else if (progress === 175) setProgress(225);
                else if (progress >= 675) setProgress(0);
                else setProgress(progress + 25);
              }
            }}
            className="w-full bg-white rounded-[16px] p-6 flex flex-col overflow-hidden relative transition-all duration-500 min-h-[156px]"
          >
            <div className="relative w-full transition-all duration-500 flex flex-col">
              {/* S-BRILLET Container (slides up and fades out when progress >= 105) */}
              <div
                className={`transition-all duration-700 ease-in-out flex flex-col gap-4 ${progress >= 105
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
                    <span className={`text-[28px] font-normal font-['Libre_Caslon_Text'] tracking-wide mt-1 transition-all duration-500 ${progress >= 100
                      ? 'text-[#333333]/70 line-through decoration-[#947863]/90 decoration-2'
                      : 'text-[#333333]'
                      }`}>S-BRILLET</span>
                  </div>
                  <span className={`text-[15px] font-bold uppercase transition-all duration-500 ${progress >= 100
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
                className={`transition-all duration-700 ease-in-out flex flex-col gap-4 ${progress >= 115
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

              {/* STARLIGHT Container (slides in from below when progress >= 115 and < 145) */}
              <div
                className={`transition-all duration-700 ease-in-out flex flex-col gap-4 ${progress >= 115 && progress < 145
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
                    <span className={`text-[28px] font-normal font-['Libre_Caslon_Text'] tracking-wide mt-1 transition-all duration-500 ${progress >= 140
                      ? 'text-black line-through'
                      : 'text-black'
                      }`}>STARLIGHT</span>
                  </div>
                  <span className={`text-[15px] font-bold uppercase transition-all duration-500 ${progress >= 135
                    ? 'text-[#947863]/60 line-through decoration-[#947863]/90 decoration-2'
                    : progress >= 130
                      ? 'text-[#947863]'
                      : 'text-[#333333]'
                    }`}>
                    (700 Sparkle Points)
                  </span>
                </div>

                <div className="h-[2px] w-full bg-linear-to-r from-[#947863] via-[#E9DDD4] to-[#947863] opacity-60"></div>

                <div className="flex justify-between items-center pt-1">
                  <div className="flex items-center gap-2">
                    {progress >= 125 ? (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" fill="url(#paint_starlight_checkmark_bg1)" />
                        <path d="M8.5 12.5L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                          <linearGradient id="paint_starlight_checkmark_bg1" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
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
                    <span className={`text-[17px] font-medium transition-colors duration-500 ${progress >= 125 ? 'text-[#947863]' : 'text-[#333333]'}`}>Purchase Items</span>
                  </div>
                  <span className={`text-[17px] font-semibold transition-colors duration-500 ${progress >= 135
                    ? 'text-[#947863]/60 line-through decoration-[#947863]/90 decoration-2'
                    : progress >= 125
                      ? 'text-[#947863]'
                      : 'text-[#333333]'
                    }`}>
                    $1 = +1.25 Sparkle Points
                  </span>
                </div>

                <div className="flex justify-between items-center pt-1">
                  <div className="flex items-center gap-2">
                    {progress >= 128 ? (
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
                    <span className={`text-[17px] font-medium transition-colors duration-500 ${progress >= 128 ? 'text-[#947863]' : 'text-[#333333]'}`}>Refer a Friend</span>
                  </div>
                  <span className={`text-[17px] font-semibold transition-colors duration-500 ${progress >= 135
                    ? 'text-[#947863]/60 line-through decoration-[#947863]/90 decoration-2'
                    : progress >= 128
                      ? 'text-[#947863]'
                      : 'text-[#333333]'
                    }`}>
                    +125 Sparkle Points
                  </span>
                </div>
              </div>

              {/* GALAXY Container (slides in from below when progress >= 145) */}
              <div
                className={`transition-all duration-700 ease-in-out flex flex-col gap-4 ${progress >= 145
                  ? 'opacity-100 translate-y-0'
                  : 'h-0 opacity-0 translate-y-[150%] pointer-events-none overflow-hidden'
                  }`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C12 8.5 15.5 12 22 12C15.5 12 12 15.5 12 22C12 15.5 8.5 12 2 12C8.5 12 12 8.5 12 2Z" stroke="url(#paint_galaxy_icon)" strokeWidth="1.2" fill="none" />
                      <path d="M12 6C12 10 14 12 18 12C14 12 12 14 12 18C12 14 10 12 6 12C10 12 12 10 12 6Z" fill="url(#paint_galaxy_icon)" opacity="0.8" />
                      <defs>
                        <linearGradient id="paint_galaxy_icon" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#483951" />
                          <stop offset="0.5" stopColor="#675470" />
                          <stop offset="1" stopColor="#483951" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="text-[28px] font-normal font-['Libre_Caslon_Text'] tracking-wide mt-1 text-[#333333]">
                      {progress >= 155 ? "ULTRA GALAXY" : "GALAXY"}
                    </span>
                  </div>
                  <span className="text-[15px] font-bold uppercase text-[#333333]">
                    {progress >= 155 ? "(+1000 Sparkle Points)" : "(1000 Sparkle Points)"}
                  </span>
                </div>

                <div className="h-[2px] w-full bg-linear-to-r from-[#483951] via-[#675470] to-[#483951] opacity-60"></div>

                <div className="flex justify-between items-center pt-1">
                  <div className="flex items-center gap-2">
                    {progress >= 150 ? (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" fill="url(#paint_galaxy_checkmark_bg1)" />
                        <path d="M8.5 12.5L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                          <linearGradient id="paint_galaxy_checkmark_bg1" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#483951" />
                            <stop offset="0.5" stopColor="#675470" />
                            <stop offset="1" stopColor="#483951" />
                          </linearGradient>
                        </defs>
                      </svg>
                    ) : (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#333333]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <span className={`text-[17px] font-medium transition-colors duration-500 ${progress >= 150 ? 'text-[#483951]' : 'text-[#333333]'}`}>Purchase Items</span>
                  </div>
                  <span className={`text-[17px] font-semibold transition-colors duration-500 ${progress >= 150 ? 'text-[#483951]' : 'text-[#333333]'
                    }`}>
                    $1 = +1.50 Sparkle Points
                  </span>
                </div>

                <div className="flex justify-between items-center pt-1">
                  <div className="flex items-center gap-2">
                    {progress >= 152 ? (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" fill="url(#paint_galaxy_checkmark_bg2)" />
                        <path d="M8.5 12.5L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                          <linearGradient id="paint_galaxy_checkmark_bg2" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#483951" />
                            <stop offset="0.5" stopColor="#675470" />
                            <stop offset="1" stopColor="#483951" />
                          </linearGradient>
                        </defs>
                      </svg>
                    ) : (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#333333]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <span className={`text-[17px] font-medium transition-colors duration-500 ${progress >= 152 ? 'text-[#483951]' : 'text-[#333333]'}`}>Refer a Friend</span>
                  </div>
                  <span className={`text-[17px] font-semibold transition-colors duration-500 ${progress >= 152 ? 'text-[#483951]' : 'text-[#333333]'
                    }`}>
                    +150 Sparkle Points
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

        <div className="bg-[#F9F6F5]/60 backdrop-blur-md rounded-[20px] p-6 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-white/40 flex flex-col items-center justify-center gap-6">

          <div className="flex items-center justify-center gap-5 md:gap-8 w-full">
            {progress >= 115 ? (
              (progress >= 145 ? [
                { type: 'text', val: '25%' },
                { type: 'text', val: '35%' },
                { type: 'text', val: '45%' },
                { type: 'icon', val: '✦' }
              ] : [
                { type: 'text', val: '20%' },
                { type: 'text', val: '25%' },
                { type: 'text', val: '35%' },
                { type: 'icon', val: '✦' }
              ]).map((item, idx) => {
                const isFilled = (progress >= 145) ? (
                  (idx === 0 && progress >= 148) ||
                  (idx === 1 && progress >= 150) ||
                  (idx === 2 && progress >= 152) ||
                  (idx === 3 && progress >= 155)
                ) : (
                  (idx === 0 && progress >= 115) ||
                  (idx === 1 && progress >= 125) ||
                  (idx === 2 && progress >= 128) ||
                  (idx === 3 && progress >= 130)
                );
                return (
                  <div key={idx} className="relative w-[68px] h-[68px] flex items-center justify-center">
                    {/* Jewel Diamond Shape */}
                    <svg viewBox="0 0 24 24" fill={isFilled ? (progress >= 145 ? "url(#paint_galaxy_diamond_bg)" : "url(#paint_starlight_diamond_bg)") : "white"} xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                      <defs>
                        <linearGradient id="paint_starlight_diamond_bg" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#947863" />
                          <stop offset="0.5" stopColor="#E9DDD4" />
                          <stop offset="1" stopColor="#947863" />
                        </linearGradient>
                        <linearGradient id="paint_galaxy_diamond_bg" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#483951" />
                          <stop offset="0.5" stopColor="#675470" />
                          <stop offset="1" stopColor="#483951" />
                        </linearGradient>
                      </defs>
                      <path d="M5 2H19L24 9L12 22L0 9L5 2Z" />
                    </svg>
                    {item.type === 'text' ? (
                      <span className={`relative z-10 text-[15px] font-bold -mt-1 select-none ${isFilled ? 'text-white' : 'text-[#333333]'}`}>
                        {item.val}
                      </span>
                    ) : (
                      <span className={`relative z-10 text-[20px] font-bold -mt-1 select-none ${isFilled ? 'text-white' : 'text-[#333333]'}`}>
                        {item.val}
                      </span>
                    )}
                  </div>
                );
              })
            ) : (
              [1, 2, 3, 4].map((i) => (
                <div key={i} className="relative w-[68px] h-[68px] flex items-center justify-center">
                  {/* Jewel Diamond Shape */}
                  <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                    <path d="M5 2H19L24 9L12 22L0 9L5 2Z" />
                  </svg>
                  {/* The user's custom Lock/Unlock SVG */}
                  <LockSVG className="w-[20px] h-[28px] relative z-10 -mt-3" />
                </div>
              ))
            )}
          </div>

          <span className="text-[#333333] text-2xl font-medium tracking-wide uppercase">
            {progress >= 160
              ? "MAX GALAXY TIER LEVEL ACHIEVED"
              : progress >= 155
                ? "GET 1 + 1 FREE ON NEXT ORDER"
                : progress >= 152
                  ? "BUY 3RD | SAVE 45%"
                  : progress >= 150
                    ? "BUY 2ND | SAVE 35%"
                    : progress >= 148
                      ? "BUY 1ST | SAVE 25%"
                      : progress >= 145
                        ? "UNLOCKED GALAXY TIER LEVEL"
                        : progress >= 130
                          ? "GET 1 + 1 FREE ON NEXT ORDER"
                          : progress >= 128
                            ? "BUY 3RD | SAVE 35%"
                            : progress >= 125
                              ? "BUY 2ND | SAVE 25%"
                              : progress >= 115
                                ? "BUY 1ST | SAVE 20%"
                                : progress >= 110
                                  ? "LEVEL UP TO STARLIGHT TIER"
                                  : "LEVEL UP TO SHINY TIER"}
          </span>
        </div>
      </div>
    </div>
  );
}
