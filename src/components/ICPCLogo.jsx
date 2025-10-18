import React from 'react';

/*
  Simplified ICPC-style logo: three contest balloons (red, yellow, blue) with thin strings.
  This is an original minimalist representation (not the official trademark artwork) to avoid infringement.
*/
export function ICPCLogo({ width = 60, height = 28, style = {} }) {
  const balloonRadius = 8;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 90 42"
      role="img"
      aria-label="ICPC logo"
      style={style}
    >
      {/* Balloons */}
      <circle cx="18" cy="14" r={balloonRadius} fill="#C73A36" stroke="#751e1b" strokeWidth="1.2" />
      <circle cx="45" cy="14" r={balloonRadius} fill="#E5B840" stroke="#8a6a14" strokeWidth="1.2" />
      <circle cx="72" cy="14" r={balloonRadius} fill="#2F6FBF" stroke="#1b3e68" strokeWidth="1.2" />
      {/* Knots */}
      <path d="M18 22 l0 4" stroke="#82403D" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M45 22 l0 4" stroke="#8a6a14" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M72 22 l0 4" stroke="#1b3e68" strokeWidth="1.4" strokeLinecap="round" />
      {/* Subtle shine */}
      <path d="M14 10 q2 2 0 4" stroke="rgba(255,255,255,.35)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M41 10 q2 2 0 4" stroke="rgba(255,255,255,.35)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M68 10 q2 2 0 4" stroke="rgba(255,255,255,.35)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Text */}
      <text x="45" y="38" textAnchor="middle" fontSize="10" fontFamily="Arial, sans-serif" fill="#C2C2C4" letterSpacing="1">ICPC</text>
    </svg>
  );
}

export default ICPCLogo;
