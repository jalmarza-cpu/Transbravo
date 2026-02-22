import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12 w-12" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Transbravo Logo"
    >
      {/* Hexagon Outline */}
      <path 
        d="M50 4 L92 28 V76 L50 100 L8 76 V28 L50 4Z" 
        stroke="#FFCC00" 
        strokeWidth="6"
        fill="none"
        strokeLinejoin="round"
      />
      
      {/* T Stem (Dark Grey/Black) - The vertical base of the T */}
      <path 
        d="M40 90 V45 H60 V90 H40Z" 
        fill="#262626"
      />

      {/* Excavator Arm (Yellow) - Forming the top bar of the T */}
      {/* Stylized boom and stick shape */}
      <path 
        d="M20 42 L48 22 L78 35 L85 52 L75 56 L70 48 L72 40 L50 30 L25 46 Z" 
        fill="#FFCC00"
      />
      
      {/* Detail: Bucket hinge pin/circle */}
      <circle cx="78" cy="35" r="2" fill="#262626" />
    </svg>
  );
};