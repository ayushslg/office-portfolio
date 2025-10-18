import React from 'react'

// Batman Logo SVG
export function BatmanLogo({ size = '40px' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path
        d="M50 10 L65 30 L75 30 L85 50 L70 50 L70 70 C70 75 65 80 60 80 L40 80 C35 80 30 75 30 70 L30 50 L15 50 L25 30 L35 30 Z"
        fill="#FFD700"
        stroke="#D4AF37"
        strokeWidth="2"
      />
      <circle cx="35" cy="35" r="4" fill="#000000" />
      <circle cx="65" cy="35" r="4" fill="#000000" />
    </svg>
  )
}

// LEGO Brick Component
export function LegoBrick({ color = '#D4AF37', children, className = '' }) {
  return (
    <div className={`lego-brick ${className}`} style={{ '--brick-color': color }}>
      <div className="brick-studs">
        <span className="stud"></span>
        <span className="stud"></span>
        <span className="stud"></span>
      </div>
      <div className="brick-content">{children}</div>
      <div className="brick-shadow"></div>
    </div>
  )
}

// Small LEGO Accent blocks (scattered decoration)
export function LegoAccent({ position = { top: '20px', right: '20px' }, color = '#D4AF37' }) {
  return (
    <div 
      className="lego-accent"
      style={{
        ...position,
        background: color,
        position: 'absolute',
      }}
    />
  )
}

// Batman Bat Symbol Decoration
export function BatSymbol() {
  return (
    <svg width="30" height="30" viewBox="0 0 100 100" fill="none" style={{ opacity: 0.3 }}>
      <path
        d="M50 10 C30 10 20 30 20 50 C20 70 30 80 50 80 C70 80 80 70 80 50 C80 30 70 10 50 10 M30 35 L40 45 L35 55 M70 35 L60 45 L65 55"
        stroke="#D4AF37"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// LEGO Grid Background Pattern
export function LegoGridBG() {
  return (
    <div className="lego-grid-bg">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={`grid-${i}`} className="grid-cell" />
      ))}
    </div>
  )
}
