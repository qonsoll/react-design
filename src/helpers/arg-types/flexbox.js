import CSSPropValues from '../css-prop-values'

const flexboxArgTypes = {
  alignItems: {
    table: {
      category: 'Flexbox'
    },
    description: '',
    control: {
      type: 'select',
      options: CSSPropValues.alignItems.options
    }
  },
  alignContent: {
    table: {
      category: 'Flexbox'
    },
    description: '',
    control: {
      type: 'select',
      options: CSSPropValues.alignContent.options
    }
  },
  justifyContent: {
    table: {
      category: 'Flexbox'
    },
    description: '',
    control: {
      type: 'select',
      options: CSSPropValues.justifyContent.options
    }
  },
  flexWrap: {
    table: {
      category: 'Flexbox'
    },
    description: '',
    control: {
      type: 'select',
      options: CSSPropValues.flexWrap.options
    }
  },
  flexDirection: {
    table: {
      category: 'Flexbox'
    },
    description: '',
    control: {
      type: 'select',
      options: CSSPropValues.flexDirection.options
    }
  },
  flex: {
    table: {
      category: 'Flexbox'
    },
    description: '',
    control: {
      type: 'text'
    }
  },
  flexGrow: {
    table: {
      category: 'Flexbox'
    },
    description: '',
    control: {
      type: 'number'
    }
  },
  flexShrink: {
    table: {
      category: 'Flexbox'
    },
    description: '',
    control: {
      type: 'number'
    }
  },
  flexBasis: {
    table: {
      category: 'Flexbox'
    },
    description: '',
    control: {
      type: 'text'
    }
  },
  justifySelf: {
    table: {
      category: 'Flexbox'
    },
    description: '',
    control: {
      type: 'select',
      options: CSSPropValues.justifySelf.options
    }
  },
  alignSelf: {
    table: {
      category: 'Flexbox'
    },
    description: '',
    control: {
      type: 'select',
      options: CSSPropValues.justifySelf.options
    }
  },
  order: {
    table: {
      category: 'Flexbox'
    },
    description: '',
    control: {
      type: 'number'
    }
  }
}

export default flexboxArgTypes
