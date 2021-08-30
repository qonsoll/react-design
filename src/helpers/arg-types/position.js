import Theme from '../Theme'
import CSSPropValues from '../css-prop-values'

const positionArgTypes = {
  position: {
    table: {
      category: 'Position'
    },
    description: 'BorderY',
    control: {
      type: 'select',
      options: CSSPropValues.position.options
    }
  },
  zIndex: {
    table: {
      category: 'Position'
    },
    description: 'zIndex',
    control: {
      type: 'select',
      options: Object.keys(Theme.zIndexes)
    }
  },
  top: {
    table: {
      category: 'Position'
    },
    description: 'Top position',
    control: {
      type: 'text'
    }
  },
  right: {
    table: {
      category: 'Position'
    },
    description: 'Right position',
    control: {
      type: 'text'
    }
  },
  bottom: {
    table: {
      category: 'Position'
    },
    description: 'Bottom position',
    control: {
      type: 'text'
    }
  },
  left: {
    table: {
      category: 'Position'
    },
    description: 'Left position',
    control: {
      type: 'text'
    }
  }
}

export default positionArgTypes
