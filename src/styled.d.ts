import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      h1: string,
      h2: string,
      h3: string,
      h4: string,
      h5: string,
      h6: string,
      body1: string,
      body2: string,
      caption1: string,
      caption2: string
    },
    lineHeights: {
      h1: string,
      h2: string,
      h3: string,
      h4: string,
      h5: string,
      h6: string,
      body1: string,
      body2: string,
      caption1: string,
      caption2: string
    },
    letterSpacings: {
      caption1: string,
      caption2: string
    },
    fontFamilies: {
      heading: string,
      body: string
    },
    fontWeights: {
      semibold: number,
      regular: number
    },
    colors: {
      accent: string,
      theme: string,
      light: string,
      dark: string,
      danger: string,
      warning: string,
      success: string,
      info: string,
      white: string,
      black: string,
      linkedin: string,
      facebook: string,
      google: string
    },
    darkenBlending: {
      darken1: string
    },
    lightenBlending: {
      lighten1: string,
      lighten2: string,
      lighten3: string,
      lighten4: string,
      lighten5: string,
      lighten6: string,
      lighten7: string,
      lighten8: string,
      lighten9: string,
    },
    borderWidths: {
      xs: string,
      sm: string,
      md: string,
      lg: string,
      xl: string,
      xxl: string
    },
    borderStyles: {
      solid: string,
      dashed: string
    },
    radii: {
      xs: string,
      sm: string,
      md: string,
      lg: string,
      xl: string,
      xxl: string
    },
    zIndexes: {
      mobileStepper: string,
      appBar: string,
      drawer: string,
      modal: string,
      snackbar: string,
      tooltip: string
    }
  }
}