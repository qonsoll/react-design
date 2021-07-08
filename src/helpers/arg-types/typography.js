import Theme from '../Theme'
import CSSPropValues from '../css-prop-values'

const typographyArgTypes = {
  fontFamily: {
    description: 'Font family. Theme field: fonts',
    control: { type: 'select', options: Object.keys(Theme.fontFamilies) }
  },
  fontSize: {
    description: 'Font size. Theme field: fontSizes',
    control: { type: 'select', options: Object.keys(Theme.fontSizes) }
  },
  fontWeight: {
    description: 'Font weight. Theme field: fontWeights',
    control: { type: 'select', options: Object.keys(Theme.fontWeights) }
  },
  lineHeight: {
    description: 'Line height. Theme field: lineHeights',
    control: { type: 'select', options: Object.keys(Theme.lineHeights) }
  },
  letterSpacing: {
    description: 'Letter spacing. Theme field: letterSpacings',
    control: { type: 'select', options: Object.keys(Theme.letterSpacings) }
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
