const theme = {}

//// GRID
theme.breakpoints = ['576px', '768px', '1024px', '1200px', '1600px']

theme.grid = {}
theme.grid.gutters = { xs: 16, sm: 16, md: 24, lg: 24, xl: 24, xxl: 32 }
theme.grid.paddings = [
  theme.grid.gutters.xs,
  theme.grid.gutters.sm,
  theme.grid.gutters.md,
  theme.grid.gutters.lg * 2,
  theme.grid.gutters.xl * 2,
  theme.grid.gutters.xxl * 2
]

//// COLORS
theme.color = {}

// Primary pure
theme.color.primary = {}
theme.color.primary.default = '#f6704d'
// theme.color.primary.lighten1 = '#1d6fdc'
// theme.color.primary.lighten2 = '#1d6fdc'
// theme.color.primary.lighten3 = '#1d6fdc'
// theme.color.primary.lighten4 = '#1d6fdc'
// theme.color.primary.lighten5 = '#1d6fdc'
// theme.color.primary.lighten6 = '#e3eefa'
// theme.color.primary.lighten7 = '#1d6fdc'
// theme.color.primary.lighten8 = '#1d6fdc'
// theme.color.primary.lighten9 = '#1d6fdc'

// Primary transparent
theme.color.primary.t = {}
theme.color.primary.t.lighten1 = 'rgba(246,112,77,0.75)'
theme.color.primary.t.lighten2 = 'rgba(246,112,77,0.5)'
theme.color.primary.t.lighten3 = 'rgba(246,112,77,0.25)'
theme.color.primary.t.lighten4 = 'rgba(246,112,77,0.20)'
theme.color.primary.t.lighten5 = 'rgba(246,112,77,0.15)'
theme.color.primary.t.lighten6 = 'rgba(246,112,77,0.12)'
theme.color.primary.t.lighten7 = 'rgba(246,112,77,0.10)'
theme.color.primary.t.lighten8 = 'rgba(246,112,77,0.08)'
theme.color.primary.t.lighten9 = 'rgba(246,112,77,0.04)'

// Dark pure
theme.color.dark = {}
theme.color.dark.default = '#111'
theme.color.dark.lighten1 = '#4d4d4d'
theme.color.dark.lighten2 = '#888'
theme.color.dark.lighten3 = '#c3c3c3'
theme.color.dark.lighten4 = '#cfcfcf'
theme.color.dark.lighten5 = '#dcdcdc'
theme.color.dark.lighten6 = '#e2e2e2'
theme.color.dark.lighten7 = '#e5e5e5'
theme.color.dark.lighten8 = '#ececec'
theme.color.dark.lighten9 = '#e6e6e6'

// Dark transparent
theme.color.dark.t = {}
theme.color.dark.t.lighten1 = 'rgba(17,17,17,0.75)'
theme.color.dark.t.lighten2 = 'rgba(17,17,17,0.5)'
theme.color.dark.t.lighten3 = 'rgba(17,17,17,0.25)'
theme.color.dark.t.lighten4 = 'rgba(17,17,17,0.20)'
theme.color.dark.t.lighten5 = 'rgba(17,17,17,0.15)'
theme.color.dark.t.lighten6 = 'rgba(17,17,17,0.12)'
theme.color.dark.t.lighten7 = 'rgba(17,17,17,0.10)'
theme.color.dark.t.lighten8 = 'rgba(17,17,17,0.08)'
theme.color.dark.t.lighten9 = 'rgba(17,17,17,0.04)'

// White pure
theme.color.white = {}
theme.color.white.default = '#fff'
// theme.color.white.lighten1 = '#fff'
// theme.color.white.lighten2 = '#fff'
// theme.color.white.lighten3 = '#fff'
// theme.color.white.lighten4 = '#fff'
// theme.color.white.lighten5 = '#fff'
// theme.color.white.lighten6 = '#fff'
// theme.color.white.lighten7 = '#fff'
// theme.color.white.lighten8 = '#fff'
// theme.color.white.lighten9 = '#fff'

// White transparent
theme.color.white.t = {}
theme.color.white.t.lighten1 = 'rgba(255,255,255,0.75)'
theme.color.white.t.lighten2 = 'rgba(255,255,255,0.5)'
theme.color.white.t.lighten3 = 'rgba(255,255,255,0.25)'
theme.color.white.t.lighten4 = 'rgba(255,255,255,0.20)'
theme.color.white.t.lighten5 = 'rgba(255,255,255,0.15)'
theme.color.white.t.lighten6 = 'rgba(255,255,255,0.12)'
theme.color.white.t.lighten7 = 'rgba(255,255,255,0.10)'
theme.color.white.t.lighten8 = 'rgba(255,255,255,0.08)'
theme.color.white.t.lighten9 = 'rgba(255,255,255,0.04)'

// Text colors
theme.color.text = {}

// Text dark
theme.color.text.dark = {}
theme.color.text.dark.accent = theme.color.primary.default
theme.color.text.dark.primary = theme.color.dark.default
theme.color.text.dark.secondary = 'rgba(17,17,17,0.65)'
theme.color.text.dark.disabled = theme.color.dark.t.lighten3

// Text light
// theme.color.text.light = {}
// theme.color.text.light.primary = 'rgba(255,255,255,0.85)'
// theme.color.text.light.secondary = 'rgba(255,255,255,0.65)'
// theme.color.text.light.disabled = 'rgba(255,255,255,0.35)'

//// GRADIENTS
theme.gradient = {}
theme.gradient.primary = 'linear-gradient(-45deg, #D0E3F4, #F2EDF1)'

//// SHADOWS
theme.shadow = {}
theme.shadow.card = '0 12px 8px -12px rgba(3, 11, 23, 0.2)'
// theme.shadow.appNav = `2px 0 2px 0 ${theme.color.dark.t.lighten3}, -3px 0 16px 10px ${theme.color.primary.t.lighten3}`

//// OUTLINE
theme.outline = {}
// theme.outline.appNavAvatar = `0 0 0 2px ${theme.color.white.default}`
theme.outline.avatar = `2px solid ${theme.color.dark.t.lighten7}`

//// TRANSITION
theme.transition = {}
theme.transition.default = 'all 0.3s'

//// BORDER RADIUS
theme.borderRadius = {}
theme.borderRadius.xxl = '20px'
theme.borderRadius.xl = '16px'
theme.borderRadius.lg = '12px'
theme.borderRadius.md = '8px'
theme.borderRadius.sm = '4px'
theme.borderRadius.xs = '2px'

//// BORDER
theme.border = {}
theme.border.uploadArea = `2px dashed ${theme.color.dark.t.lighten8}`

//// TYPOGRAPHY
theme.typography = {}

theme.typography.fontFamily = 'Rubik'

// Font sizes
theme.typography.fontSize = {}
theme.typography.fontSize.h1 = '40px'
theme.typography.fontSize.h2 = '32px'
theme.typography.fontSize.h3 = '24px'
theme.typography.fontSize.h4 = '20px'
theme.typography.fontSize.h5 = '16px'
theme.typography.fontSize.h6 = '14px'
theme.typography.fontSize.overline = '12px'
theme.typography.fontSize.body1 = '16px'
theme.typography.fontSize.body2 = '14px'
theme.typography.fontSize.caption1 = '12px'
theme.typography.fontSize.caption2 = '10px'

// Line heights
theme.typography.lineHeight = {}
theme.typography.lineHeight.h1 = '48px'
theme.typography.lineHeight.h2 = '40px'
theme.typography.lineHeight.h3 = '32px'
theme.typography.lineHeight.h4 = '28px'
theme.typography.lineHeight.h5 = '24px'
theme.typography.lineHeight.h6 = '20px'
theme.typography.lineHeight.overline = '16px'
theme.typography.lineHeight.body1 = '24px'
theme.typography.lineHeight.body2 = '20px'
theme.typography.lineHeight.caption1 = '16px'
theme.typography.lineHeight.caption2 = '12px'

// Font weights
theme.typography.fontWeight = {}
theme.typography.fontWeight.bold = 700
theme.typography.fontWeight.semibold = 600
theme.typography.fontWeight.medium = 500
theme.typography.fontWeight.regular = 400
theme.typography.fontWeight.light = 300

// Letter spacing
theme.typography.letterSpacing = {}
theme.typography.letterSpacing.none = 0
theme.typography.letterSpacing.default = 0.6

/// / DEFAULT COMPONENT SETTINGS
theme.defaultComponentSettings = {}

// Back button
theme.defaultComponentSettings.backButton = {}

theme.defaultComponentSettings.backButton.divided = true

export default theme
