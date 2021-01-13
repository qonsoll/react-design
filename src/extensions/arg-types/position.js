import theme from '../../design/design-system'
import CSSPropValues from '../../CSSPropValues'

const positionArgTypes = {
  position: {
    description: 'BorderY',
    control: {
      type: 'select',
      options: CSSPropValues.position.options
    }
  },
  zIndex: {
    description: 'zIndex',
    control: {
      type: 'select',
      options: Object.keys(theme.zIndexes)
    }
  },
  top: {
    description: 'Top position',
    control: {
      type: 'text'
    }
  },
  right: {
    description: 'Right position',
    control: {
      type: 'text'
    }
  },
  bottom: {
    description: 'Bottom position',
    control: {
      type: 'text'
    }
  },
  left: {
    description: 'Left position',
    control: {
      type: 'text'
    }
  }
}

export default positionArgTypes
