/* LEGO Batman Theme Components */

// LEGO Brick Stud (those circular bumps)
export const LegoStud = ({ size = 20, color = "#FFD700" }) => (
  <div
    style={{
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      background: `radial-gradient(circle at 30% 30%, ${color}, ${adjustBrightness(color, -20)})`,
      boxShadow: `inset 0 -2px 4px rgba(0,0,0,0.3), 0 2px 2px rgba(0,0,0,0.2)`,
      display: 'inline-block',
    }}
  />
);

// LEGO Brick Card Component
export const LegoBrick = ({ children, color = "#2C2C2C", studs = 6, className = "" }) => {
  const studRows = Math.ceil(studs / 2);
  
  return (
    <div 
      className={`lego-brick ${className}`}
      style={{
        backgroundColor: color,
        border: `2px solid ${adjustBrightness(color, -15)}`,
        borderRadius: '4px',
        position: 'relative',
        boxShadow: 'var(--shadow-brick)',
      }}
    >
      {/* LEGO Studs on top */}
      <div 
        style={{
          position: 'absolute',
          top: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'grid',
          gridTemplateColumns: `repeat(${Math.min(studs, 2)}, 1fr)`,
          gap: '8px',
        }}
      >
        {[...Array(Math.min(studs, 4))].map((_, i) => (
          <LegoStud key={i} size={16} color={adjustBrightness(color, 20)} />
        ))}
      </div>
      
      <div style={{ paddingTop: '1.5rem' }}>
        {children}
      </div>
    </div>
  );
};

// Helper function to adjust color brightness
function adjustBrightness(color, percent) {
  const num = parseInt(color.replace("#",""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000
    + (G<255?G<1?0:G:255)*0x100
    + (B<255?B<1?0:B:255))
    .toString(16).slice(1);
}

// Batman Logo Component
export const BatmanLogo = ({ size = 60, className = "" }) => (
  <svg
    className={className}
    width={size}
    height={size * 0.6}
    viewBox="0 0 100 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50 30 L20 45 L15 40 L10 45 L5 40 L0 50 L15 55 L25 45 L35 50 L45 35 L50 40 L55 35 L65 50 L75 45 L85 55 L100 50 L95 40 L90 45 L85 40 L80 45 L50 30 Z"
      fill="#FFD700"
    />
    <ellipse cx="35" cy="35" rx="5" ry="8" fill="#1A1A1A" />
    <ellipse cx="65" cy="35" rx="5" ry="8" fill="#1A1A1A" />
  </svg>
);

// LEGO Office Quote Bubble
export const LegoQuote = ({ quote, author, color = "#FFD700" }) => (
  <div
    style={{
      backgroundColor: color,
      color: '#1A1A1A',
      padding: '2rem',
      borderRadius: '8px',
      position: 'relative',
      boxShadow: 'var(--shadow-brick)',
      border: `3px solid ${adjustBrightness(color, -20)}`,
      fontWeight: 'bold',
    }}
  >
    <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontStyle: 'italic' }}>
      "{quote}"
    </p>
    {author && (
      <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: 0 }}>
        - {author}
      </p>
    )}
    
    {/* Speech bubble triangle */}
    <div
      style={{
        position: 'absolute',
        bottom: '-15px',
        left: '30px',
        width: 0,
        height: 0,
        borderLeft: '15px solid transparent',
        borderRight: '15px solid transparent',
        borderTop: `15px solid ${color}`,
      }}
    />
  </div>
);
