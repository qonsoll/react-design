const base = {
  fontFamily: 'Times',
  grid: {
    breakpoints: ['sm', 'md', 'lg', 'xl', 'xxl'],
    columns: 12,
    gutters: {
      xs: '8px',
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '16px',
      xxl: '16px'
    },
    negativeGutters: {
      xs: '-8px',
      sm: '-8px',
      md: '-12px',
      lg: '-16px',
      xl: '-16px',
      xxl: '-16px'
    }
  },
  colorDarkenBlending: ['15%'],
  colorLightenBlending: [
    '75%',
    '50%',
    '25%',
    '20%',
    '15%',
    '12%',
    '10%',
    '7%',
    '4%'
  ]
}

// Spacing
// const space = [2, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512]
const space = {
  2: '2px',
  4: '4px',
  8: '8px',
  12: '12px',
  16: '16px',
  20: '20px',
  24: '24px',
  28: '28px',
  32: '32px',
  36: '36px',
  40: '40px',
  44: '44px',
  48: '48px',
  52: '52px',
  56: '56px',
  60: '60px',
  64: '64px'
}

// Typography
const fontSizes = {
  h1: '40px',
  h2: '32px',
  h3: '24px',
  h4: '20px',
  h5: '16px',
  h6: '14px',
  body1: '16px',
  body2: '14px',
  caption1: '12px',
  caption2: '10px'
}

const lineHeights = {
  h1: '48px',
  h2: '40px',
  h3: '32px',
  h4: '28px',
  h5: '24px',
  h6: '20px',
  body1: '24px',
  body2: '20px',
  caption1: '16px',
  caption2: '12px'
}

const letterSpacings = {
  caption1: '0.6',
  caption2: '0.6'
}

const fonts = {
  heading: 'Arial'
}

const fontWeights = {
  semibold: 600,
  regular: 400
}

// Theme colors
const colors = {
  accent: '#FFC95D',
  theme: '#9088E5',
  light: '#FAFAFB',
  dark: '#1F1F24',
  danger: '#FF0000',
  warning: '#FFAA00',
  success: '#11A000',
  info: '#88D2E5',
  white: '#ffffff',
  black: '#000000',
  linkedin: '#0077B5',
  facebook: '#3b5998',
  google: '#DB4437'
}

// Grid
const breakpoints = ['576px', '768px', '992px', '1200px', '1600px']
// Aliases
breakpoints.sm = '576px'
breakpoints.md = '768px'
breakpoints.lg = '992px'
breakpoints.xl = '1200px'
breakpoints.xxl = '1600px'

const sizes = {
  container: {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px',
    xxl: '1320px'
  }
}

// Borders
const borderWidths = {
  1: '1px',
  2: '2px',
  3: '3px',
  4: '4px',
  5: '5px'
}

const borderStyles = {
  solid: 'solid',
  dashed: 'dashed'
}

const radii = {
  sm: '4px',
  md: '8px',
  lg: '16px',
  xl: '32px'
}

const zIndexes = {
  speedDial: 1050,
  mobileStepper: 1000,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}

const StyledSystem = {
  space,
  fontSizes,
  lineHeights,
  letterSpacings,
  fonts,
  fontWeights,
  colors,
  breakpoints,
  sizes,
  borderWidths,
  borderStyles,
  radii,
  zIndexes
}

export {
  base,
  space,
  fontSizes,
  lineHeights,
  letterSpacings,
  fonts,
  fontWeights,
  colors,
  breakpoints,
  sizes,
  borderWidths,
  borderStyles,
  radii,
  zIndexes
}

export default StyledSystem
