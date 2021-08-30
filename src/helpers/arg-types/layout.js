import CSSPropValues from '../css-prop-values'

const layoutArgTypes = {
  width: {
    table: {
      category: 'Layout'
    },
    description: 'Width. Theme field: sizes',
    control: {
      type: 'text'
    }
  },
  height: {
    table: {
      category: 'Layout'
    },
    description: 'Height. Theme field: sizes',
    control: {
      type: 'text'
    }
  },
  minWidth: {
    table: {
      category: 'Layout'
    },
    description: 'Min width. Theme field: sizes',
    control: {
      type: 'text'
    }
  },
  maxWidth: {
    table: {
      category: 'Layout'
    },
    description: 'Max width. Theme field: sizes',
    control: {
      type: 'text'
    }
  },
  minHeight: {
    table: {
      category: 'Layout'
    },
    description: 'Min height. Theme field: sizes',
    control: {
      type: 'text'
    }
  },
  maxHeight: {
    table: {
      category: 'Layout'
    },
    description: 'Max height. Theme field: sizes',
    control: {
      type: 'text'
    }
  },
  size: {
    table: {
      category: 'Layout'
    },
    description: 'Size',
    control: {
      type: 'text'
    }
  },
  display: {
    table: {
      category: 'Layout'
    },
    description: 'Display',
    control: {
      type: 'select',
      options: CSSPropValues.display.options
    }
  },
  verticalAlign: {
    table: {
      category: 'Layout'
    },
    description: 'Vertical align',
    control: {
      type: 'select',
      options: CSSPropValues.verticalAlign.options
    }
  },
  overflow: {
    table: {
      category: 'Layout'
    },
    description: 'Overflow',
    control: {
      type: 'select',
      options: CSSPropValues.overflow.options
    }
  },
  overflowX: {
    table: {
      category: 'Layout'
    },
    description: 'OverflowX',
    control: {
      type: 'select',
      options: CSSPropValues.overflowX.options
    }
  },
  overflowY: {
    table: {
      category: 'Layout'
    },
    description: 'OverflowY',
    control: {
      type: 'select',
      options: CSSPropValues.overflowY.options
    }
  }
}

export default layoutArgTypes
