import Theme from '../Theme'
import CSSPropValues from '../css-prop-values'

const typographyArgTypes = {
  fontFamily: {
    table: {
      category: 'Typography'
    },
    description: 'Font family. Theme field: fonts',
    control: { type: 'select', options: Object.keys(Theme.fontFamilies) }
  },
  fontSize: {
    table: {
      category: 'Typography'
    },
    description: 'Font size. Theme field: fontSizes',
    control: { type: 'select', options: Object.keys(Theme.fontSizes) }
  },
  fontWeight: {
    table: {
      category: 'Typography'
    },
    description: 'Font weight. Theme field: fontWeights',
    control: { type: 'select', options: Object.keys(Theme.fontWeights) }
  },
  lineHeight: {
    table: {
      category: 'Typography'
    },
    description: 'Line height. Theme field: lineHeights',
    control: { type: 'select', options: Object.keys(Theme.lineHeights) }
  },
  letterSpacing: {
    table: {
      category: 'Typography'
    },
    description: 'Letter spacing. Theme field: letterSpacings',
    control: { type: 'select', options: Object.keys(Theme.letterSpacings) }
  },
  textAlign: {
    table: {
      category: 'Typography'
    },
    description: 'Text align',
    control: {
      type: 'select',
      options: CSSPropValues.textAlign.options
    }
  },
  fontStyle: {
    table: {
      category: 'Typography'
    },
    description: 'Font style',
    control: {
      type: 'select',
      options: CSSPropValues.fontStyle.options
    }
  }
}

export default typographyArgTypes
