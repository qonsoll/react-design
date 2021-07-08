import CSSPropValues from '../css-prop-values'

const gridArgTypes = {
  gridGap: {
    description: '',
    control: {
      type: 'text'
    }
  },
  gridRowGap: {
    description: '',
    control: {
      type: 'text'
    }
  },
  gridColumnGap: {
    description: '',
    control: {
      type: 'text'
    }
  },
  gridColumn: {
    description: '',
    control: {
      type: 'text'
    }
  },
  gridRow: {
    description: '',
    control: {
      type: 'text'
    }
  },
  gridArea: {
    description: '',
    control: {
      type: 'text'
    }
  },
  gridAutoFlow: {
    description: '',
    control: {
      type: 'select',
      options: CSSPropValues.gridAutoFlow.options
    }
  },
  gridAutoRows: {
    description: '',
    control: {
      type: 'text'
    }
  },
  gridAutoColumns: {
    description: '',
    control: {
      type: 'text'
    }
  },
  gridTemplateRows: {
    description: '',
    control: {
      type: 'text'
    }
  },
  gridTemplateColumns: {
    description: '',
    control: {
      type: 'text'
    }
  },
  gridTemplateAreas: {
    description: '',
    control: {
      type: 'text'
    }
  }
}

export default gridArgTypes
