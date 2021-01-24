import { Theme } from '../../Theme'

const hoverArgTypes = {
  hover: {
    description:
      'Set of properties for the hover state. Fields (bg, color, border, borderTop, borderRight, borderBottom, borderLeft, borderRadius)',
    control: {
      type: 'object'
    }
  },
  hoverBg: {
    description: 'Hover state background',
    control: {
      type: 'select',
      options: Object.keys(Theme.colors)
    }
  },
  hoverColor: {
    description: 'Hover state background',
    control: {
      type: 'select',
      options: Object.keys(Theme.colors)
    }
  },
  hoverBorder: {
    description: 'Hover state border',
    control: {
      type: 'text'
    }
  },
  hoverBorderTop: {
    description: 'Hover state border top',
    control: {
      type: 'text'
    }
  },
  hoverBorderRight: {
    description: 'Hover state border right',
    control: {
      type: 'text'
    }
  },
  hoverBorderBottom: {
    description: 'Hover state border bottom',
    control: {
      type: 'text'
    }
  },
  hoverBorderLeft: {
    description: 'Hover state border left',
    control: {
      type: 'text'
    }
  },
  hoverBorderRadius: {
    description: 'Hover state border radius',
    control: {
      type: 'text'
    }
  }
}

export default hoverArgTypes
