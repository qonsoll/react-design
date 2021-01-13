import CSSPropValues from '../../CSSPropValues'

const layoutArgTypes = {
  width: {
    description: 'Width. Theme field: sizes',
    control: {
      type: 'text'
    }
  },
  height: {
    description: 'Height. Theme field: sizes',
    control: {
      type: 'text'
    }
  },
  minWidth: {
    description: 'Min width. Theme field: sizes',
    control: {
      type: 'text'
    }
  },
  maxWidth: {
    description: 'Max width. Theme field: sizes',
    control: {
      type: 'text'
    }
  },
  minHeight: {
    description: 'Min height. Theme field: sizes',
    control: {
      type: 'text'
    }
  },
  maxHeight: {
    description: 'Max height. Theme field: sizes',
    control: {
      type: 'text'
    }
  },
  size: {
    description: 'Size',
    control: {
      type: 'text'
    }
  },
  display: {
    description: 'Display',
    control: {
      type: 'select',
      options: CSSPropValues.display.options
    }
  },
  verticalAlign: {
    description: 'Vertical align',
    control: {
      type: 'select',
      options: CSSPropValues.verticalAlign.options
    }
  },
  overflow: {
    description: 'Overflow',
    control: {
      type: 'select',
      options: CSSPropValues.overflow.options
    }
  },
  overflowX: {
    description: 'OverflowX',
    control: {
      type: 'select',
      options: CSSPropValues.overflowX.options
    }
  },
  overflowY: {
    description: 'OverflowY',
    control: {
      type: 'select',
      options: CSSPropValues.overflowY.options
    }
  }
}

export default layoutArgTypes
