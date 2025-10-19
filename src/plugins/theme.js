
export const typography = {
  h1: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '6rem',        // 96px
    fontWeight: 300,         // Light
    lineHeight: '6rem',
    letterSpacing: '-0.015625em',
  },
  h2: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '3.75rem',     // 60px
    fontWeight: 300,         // Light
    lineHeight: '3.75rem',
    letterSpacing: '-0.0083333333em',
  },
  h3: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '3rem',        // 48px
    fontWeight: 400,         // Regular
    lineHeight: '3.125rem',
    letterSpacing: 'normal',
  },
  h4: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '2.125rem',    // 34px
    fontWeight: 400,         // Regular
    lineHeight: '2.5rem',
    letterSpacing: '0.0073529412em',
  },
  h5: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '1.5rem',      // 24px
    fontWeight: 500,         // Medium - for section headers
    lineHeight: '2rem',
    letterSpacing: 'normal',
  },
  h6: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '1.25rem',     // 20px
    fontWeight: 500,         // Medium
    lineHeight: '2rem',
    letterSpacing: '0.0125em',
  },
  subtitle1: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '1rem',        // 16px - for job titles, subtitles
    fontWeight: 400,         // Regular
    lineHeight: '1.75rem',
    letterSpacing: '0.009375em',
  },
  subtitle2: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '0.875rem',    // 14px - for secondary subtitles
    fontWeight: 500,         // Medium
    lineHeight: '1.375rem',
    letterSpacing: '0.0071428571em',
  },
  body1: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '1rem',        // 16px - main body text
    fontWeight: 400,         // Regular
    lineHeight: '1.5rem',
    letterSpacing: '0.03125em',
  },
  body2: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '0.875rem',    // 14px - secondary body text
    fontWeight: 400,         // Regular
    lineHeight: '1.25rem',
    letterSpacing: '0.0178571429em',
  },
  button: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '0.875rem',    // 14px - button text
    fontWeight: 500,         // Medium
    lineHeight: '2.25rem',
    letterSpacing: '0.0892857143em',
    textTransform: 'uppercase',
  },
  caption: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '0.75rem',     // 12px - small text, labels
    fontWeight: 400,         // Regular
    lineHeight: '1.25rem',
    letterSpacing: '0.0333333333em',
  },
  overline: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '0.75rem',     // 12px - overline text
    fontWeight: 500,         // Medium
    lineHeight: '2rem',
    letterSpacing: '0.1666666667em',
    textTransform: 'uppercase',
  },
}

export const themeConfig = {
  defaultTheme: 'light',

  themes: {
    light: {
      dark: false,
      colors: {
        // Primary Colors
        primary: '#42A5F5',      // Blue - Contact button, links, primary interactions
        secondary: '#66BB6A',    // Green - Download CV button, success states
        accent: '#FFA726',       // Amber - Highlights, warnings
        error: '#EF5350',        // Red - Error states
        info: '#29B6F6',         // Light Blue - Informational elements
        success: '#66BB6A',      // Green - Success states (same as secondary)
        warning: '#FFA726',      // Amber - Warning states (same as accent)

        // Skill Progress Bar Colors
        // These are used for the visual skill indicators
        skillBlue: '#42A5F5',    // Example: Photoshop CS, Communication
        skillGreen: '#66BB6A',   // Example: Illustrator CS, Language
        skillAmber: '#FFA726',   // Example: Sketch, General Knowledge
        skillPurple: '#AB47BC',  // Additional skill differentiation
        skillTeal: '#26A69A',    // Additional skill differentiation

        // Background Colors
        background: '#FAFAFA',   // Off-white page background
        surface: '#FFFFFF',      // White card backgrounds

        // Text Colors
        'on-background': '#212121',  // Dark text on light backgrounds
        'on-surface': '#212121',     // Dark text on surface (cards)
        'text-primary': '#212121',   // Primary text color
        'text-secondary': '#757575', // Secondary text, labels, subtitles
        'text-disabled': '#BDBDBD',  // Disabled text, borders, dividers

        // Status Indicators
        available: '#66BB6A',    // Green - Availability indicator
        unavailable: '#EF5350',  // Red - Unavailable status

        // Interactive Elements
        'nav-hover': '#42A5F5',  // Navigation link hover state
        'icon-default': '#757575', // Social media icons, default state
        'icon-hover': '#42A5F5',   // Icons on hover
      },
    },
    dark: {
      dark: true,
      colors: {
        // Primary Colors
        primary: '#42A5F5',      // Blue - maintains consistency across themes
        secondary: '#66BB6A',    // Green - maintains consistency
        accent: '#FFA726',       // Amber
        error: '#EF5350',        // Red
        info: '#29B6F6',         // Light Blue
        success: '#66BB6A',      // Green
        warning: '#FFA726',      // Amber

        // Skill Progress Bar Colors (same as light theme for consistency)
        skillBlue: '#42A5F5',
        skillGreen: '#66BB6A',
        skillAmber: '#FFA726',
        skillPurple: '#AB47BC',
        skillTeal: '#26A69A',

        // Background Colors
        background: '#121212',   // Dark background
        surface: '#1E1E1E',      // Dark card backgrounds

        // Text Colors
        'on-background': '#FFFFFF',  // White text on dark backgrounds
        'on-surface': '#FFFFFF',     // White text on dark surfaces
        'text-primary': '#FFFFFF',   // Primary text (white)
        'text-secondary': '#B0B0B0', // Secondary text (light gray)
        'text-disabled': '#6B6B6B',  // Disabled text

        // Status Indicators
        available: '#66BB6A',    // Green
        unavailable: '#EF5350',  // Red

        // Interactive Elements
        'nav-hover': '#42A5F5',  // Navigation hover
        'icon-default': '#B0B0B0', // Icons default state
        'icon-hover': '#42A5F5',   // Icons hover state
      },
    },
  },
}
