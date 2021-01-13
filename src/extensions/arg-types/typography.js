import theme from '../../design/design-system'
import CSSPropValues from '../../CSSPropValues'

const typographyArgTypes = {
  fontFamily: {
    description: 'Font family. Theme field: fonts',
    control: { type: 'select', options: Object.keys(theme.fonts) }
  },
  fontSize: {
    description: 'Font size. Theme field: fontSizes',
    control: { type: 'select', options: Object.keys(theme.fontSizes) }
  },
  fontWeight: {
    description: 'Font weight. Theme field: fontWeights',
    control: { type: 'select', options: Object.keys(theme.fontWeights) }
  },
  lineHeight: {
    description: 'Line height. Theme field: lineHeights',
    control: { type: 'select', options: Object.keys(theme.lineHeights) }
  },
  letterSpacing: {
    description: 'Letter spacing. Theme field: letterSpacings',
    control: { type: 'select', options: Object.keys(theme.letterSpacings) }
  },
  textAlign: {
    description: 'Text align',
    control: {
      type: 'select',
      options: CSSPropValues.textAlign.options
    }
  },
  fontStyle: {
    description: 'Font style',
    control: {
      type: 'select',
      options: CSSPropValues.fontStyle.options
    }
  }
}

export default typographyArgTypes
