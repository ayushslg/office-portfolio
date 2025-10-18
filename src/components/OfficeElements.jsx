/* Office Decorative Elements */

// Paper Clip SVG Component
export const PaperClip = ({ className = "", style = {} }) => (
  <svg 
    className={className}
    style={style}
    width="40" 
    height="80" 
    viewBox="0 0 40 80" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M20 10 C10 10, 5 15, 5 25 L5 55 C5 65, 10 70, 20 70 C30 70, 35 65, 35 55 L35 20 C35 15, 32 12, 28 12 C24 12, 21 15, 21 20 L21 50 C21 53, 23 55, 25 55 C27 55, 29 53, 29 50 L29 25" 
      stroke="#7B7D7D" 
      strokeWidth="3" 
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

// Push Pin SVG Component
export const PushPin = ({ className = "", style = {}, color = "#8B1538" }) => (
  <svg 
    className={className}
    style={style}
    width="30" 
    height="40" 
    viewBox="0 0 30 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15" cy="8" r="7" fill={color} />
    <circle cx="15" cy="8" r="5" fill={color} opacity="0.8" />
    <path d="M15 12 L15 35" stroke="#333" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 30 L15 38 L18 30" fill="#333" />
  </svg>
);

// Stapler Icon Component
export const Stapler = ({ className = "", style = {} }) => (
  <svg 
    className={className}
    style={style}
    width="60" 
    height="30" 
    viewBox="0 0 60 30" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="5" y="15" width="50" height="10" rx="2" fill="#2C2C2C" />
    <path d="M10 15 L50 5 L55 5 L55 15 Z" fill="#4A4A4A" />
    <rect x="20" y="17" width="3" height="6" fill="#7B7D7D" />
    <rect x="27" y="17" width="3" height="6" fill="#7B7D7D" />
    <rect x="34" y="17" width="3" height="6" fill="#7B7D7D" />
  </svg>
);

// Post-it Note Component
export const PostIt = ({ color = "#FFE5B4", children, className = "" }) => (
  <div 
    className={`post-it ${className}`}
    style={{
      backgroundColor: color,
      padding: '1rem',
      minWidth: '150px',
      minHeight: '150px',
      boxShadow: '2px 2px 8px rgba(0,0,0,0.15)',
      position: 'relative',
      transform: 'rotate(-2deg)',
      fontFamily: '"Comic Sans MS", cursive',
    }}
  >
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    }} />
    <div style={{ paddingTop: '1.5rem' }}>
      {children}
    </div>
  </div>
);

// Confidential Stamp Component
export const ConfidentialStamp = ({ className = "" }) => (
  <div 
    className={`confidential-stamp ${className}`}
    style={{
      border: '3px solid #8B1538',
      borderRadius: '8px',
      padding: '0.5rem 1rem',
      display: 'inline-block',
      transform: 'rotate(-15deg)',
      opacity: 0.7,
    }}
  >
    <div style={{
      fontFamily: '"Courier New", monospace',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#8B1538',
      letterSpacing: '2px',
    }}>
      CONFIDENTIAL
    </div>
  </div>
);

// Corner Ribbon Component - LEGO Style
export const CornerRibbon = ({ text = "FEATURED", className = "" }) => (
  <div 
    className={`corner-ribbon ${className}`}
    style={{
      position: 'absolute',
      top: '15px',
      right: '-5px',
      backgroundColor: '#E6001A',
      color: '#FFFFFF',
      padding: '0.5rem 2rem',
      fontFamily: 'Arial Black, sans-serif',
      fontWeight: 'bold',
      fontSize: '0.85rem',
      letterSpacing: '1px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
      zIndex: 10,
      textTransform: 'uppercase',
    }}
  >
    {text}
    <div style={{
      position: 'absolute',
      bottom: '-8px',
      right: 0,
      width: 0,
      height: 0,
      borderLeft: '10px solid transparent',
      borderRight: '10px solid #A00012',
      borderTop: '8px solid #A00012',
    }} />
  </div>
);
