import CSSPropValues from '../../CSSPropValues'

const flexboxArgTypes = {
  alignItems: {
    description: '',
    control: {
      type: 'select',
      options: CSSPropValues.alignItems.options
    }
  },
  alignContent: {
    description: '',
    control: {
      type: 'select',
      options: CSSPropValues.alignContent.options
    }
  },
  justifyContent: {
    description: '',
    control: {
      type: 'select',
      options: CSSPropValues.justifyContent.options
    }
  },
  flexWrap: {
    description: '',
    control: {
      type: 'select',
      options: CSSPropValues.flexWrap.options
    }
  },
  flexDirection: {
    description: '',
    control: {
      type: 'select',
      options: CSSPropValues.flexDirection.options
    }
  },
  flex: {
    description: '',
    control: {
      type: 'text'
    }
  },
  flexGrow: {
    description: '',
    control: {
      type: 'number'
    }
  },
  flexShrink: {
    description: '',
    control: {
      type: 'number'
    }
  },
  flexBasis: {
    description: '',
    control: {
      type: 'text'
    }
  },
  justifySelf: {
    description: '',
    control: {
      type: 'select',
      options: CSSPropValues.justifySelf.options
    }
  },
  alignSelf: {
    description: '',
    control: {
      type: 'select',
      options: CSSPropValues.justifySelf.options
    }
  },
  order: {
    description: '',
    control: {
      type: 'number'
    }
  }
}

export default flexboxArgTypes
