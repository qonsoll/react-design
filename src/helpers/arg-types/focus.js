import Theme from '../Theme'

const focusArgTypes = {
  focus: {
    description:
      'Set of properties for the focus state. Fields: bg, color, border, borderTop, borderRight, borderBottom, borderLeft, borderRadius',
    control: {
      type: 'object'
    }
  },
  focusBg: {
    description: 'Focus state background. Theme field: colors',
    control: {
      type: 'select',
      options: Object.keys(Theme.colors)
    }
  },
  focusColor: {
    description: 'Focus state background. Theme field: colors',
    control: {
      type: 'select',
      options: Object.keys(Theme.colors)
    }
  },
  focusBorder: {
    description: 'Focus state border',
    control: {
      type: 'text'
    }
  },
  focusBorderTop: {
    description: 'Focus state border top',
    control: {
      type: 'text'
    }
  },
  focusBorderRight: {
    description: 'Focus state border right',
    control: {
      type: 'text'
    }
  },
  focusBorderBottom: {
    description: 'Focus state border bottom',
    control: {
      type: 'text'
    }
  },
  focusBorderLeft: {
    description: 'Focus state border left',
    control: {
      type: 'text'
    }
  },
  focusBorderRadius: {
    description: 'Focus state border radius',
    control: {
      type: 'text'
    }
  }
}

export default focusArgTypes
