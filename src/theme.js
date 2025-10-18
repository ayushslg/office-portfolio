// The Office Theme Configuration
export const theme = {
  colors: {
    // Primary Colors
    primary: {
      beige: '#F5F1E8',        // Dunder Mifflin main background
      blue: '#4A90A4',         // Corporate blue for accents
      white: '#FFFFFF',        // Paper white for cards
      gray: '#7B7D7D',         // Carpet gray for borders
    },
    
    // Accent Colors
    accent: {
      gold: '#D4AF37',         // Dundee Award gold
      beetRed: '#8B1538',      // Dwight's beets
      orange: '#FF6B35',       // Safety orange
      green: '#2D5016',        // Forest green
    },
    
    // Text Colors
    text: {
      primary: '#2C2C2C',      // Headings
      body: '#4A4A4A',         // Paragraphs
      muted: '#7B7D7D',        // Captions
      light: '#FFFFFF',        // Light text
    },
    
    // Background Colors
    background: {
      main: '#F5F1E8',         // Main background
      card: '#FFFFFF',         // Card background
      dark: '#333333',         // Dark sections
      light: '#FAFAFA',        // Light sections
    },
  },
  
  // Typography
  fonts: {
    primary: '"Arial", "Helvetica", sans-serif',
    heading: '"Arial Black", "Arial Bold", sans-serif',
    accent: '"Comic Sans MS", cursive',
    mono: '"Courier New", monospace',
  },
  
  fontSizes: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
  },
  
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  
  // Spacing
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
  },
  
  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    base: '0.25rem',  // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    full: '9999px',
  },
  
  // Shadows (paper stack effect)
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    paper: '2px 2px 8px rgba(0, 0, 0, 0.15)',
    paperStack: '0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.05)',
  },
  
  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    base: '200ms ease-in-out',
    slow: '300ms ease-in-out',
  },
}

export default theme
