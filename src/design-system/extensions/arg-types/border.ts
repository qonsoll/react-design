import { Theme } from '../../Theme'

const borderArgTypes = {
  border: {
    description: 'Border',
    control: {
      type: 'text'
    }
  },
  borderWidth: {
    description: 'Border width. Theme property: borderWidths',
    control: {
      type: 'select',
      options: Object.keys(Theme.borderWidths)
    }
  },
  borderStyle: {
    description: 'Border style. Theme property: borderStyles',
    control: {
      type: 'select',
      options: Object.keys(Theme.borderStyles)
    }
  },
  borderColor: {
    description: 'Border color. Theme property: colors',
    control: {
      type: 'select',
      options: Object.keys(Theme.colors)
    }
  },
  borderRadius: {
    description: 'Border radius. Theme property: radii',
    control: {
      type: 'select',
      options: Object.keys(Theme.radii)
    }
  },
  borderTop: {
    description: 'Border top',
    control: {
      type: 'text'
    }
  },
  borderTopWidth: {
    description: 'Border top width. Theme property: borderWidths',
    control: {
      type: 'select',
      options: Object.keys(Theme.borderWidths)
    }
  },
  borderTopStyle: {
    description: 'Border top style. Theme property: borderStyles',
    control: {
      type: 'select',
      options: Object.keys(Theme.borderStyles)
    }
  },
  borderTopColor: {
    description: 'Border top color. Theme property: colors',
    control: {
      type: 'select',
      options: Object.keys(Theme.colors)
    }
  },
  borderTopLeftRadius: {
    description: 'Border top left radius. Theme property: radii',
    control: {
      type: 'select',
      options: Object.keys(Theme.radii)
    }
  },
  borderTopRightRadius: {
    description: 'Border top right radius. Theme property: radii',
    control: {
      type: 'select',
      options: Object.keys(Theme.radii)
    }
  },
  borderRight: {
    description: 'Border right',
    control: {
      type: 'text'
    }
  },
  borderRightWidth: {
    description: 'Border right width. Theme property: borderWidths',
    control: {
      type: 'select',
      options: Object.keys(Theme.borderWidths)
    }
  },
  borderRightStyle: {
    description: 'Border right style. Theme property: borderStyles',
    control: {
      type: 'select',
      options: Object.keys(Theme.borderStyles)
    }
  },
  borderRightColor: {
    description: 'Border right color. Theme property: colors',
    control: {
      type: 'select',
      options: Object.keys(Theme.colors)
    }
  },
  borderBottom: {
    description: 'Border bottom',
    control: {
      type: 'text'
    }
  },
  borderBottomWidth: {
    description: 'Border bottom width. Theme property: borderWidths',
    control: {
      type: 'select',
      options: Object.keys(Theme.borderWidths)
    }
  },
  borderBottomStyle: {
    description: 'Border bottom style. Theme property: borderStyles',
    control: {
      type: 'select',
      options: Object.keys(Theme.borderStyles)
    }
  },
  borderBottomColor: {
    description: 'Border bottom color. Theme property: colors',
    control: {
      type: 'select',
      options: Object.keys(Theme.colors)
    }
  },
  borderBottomLeftRadius: {
    description: 'Border bottom left radius. Theme property: radii',
    control: {
      type: 'select',
      options: Object.keys(Theme.radii)
    }
  },
  borderBottomRightRadius: {
    description: 'Border bottom right radius. Theme property: radii',
    control: {
      type: 'select',
      options: Object.keys(Theme.radii)
    }
  },
  borderLeft: {
    description: 'Border left',
    control: {
      type: 'text'
    }
  },
  borderLeftWidth: {
    description: 'Border left width. Theme property: borderWidths',
    control: {
      type: 'select',
      options: Object.keys(Theme.borderWidths)
    }
  },
  borderLeftStyle: {
    description: 'Border left style. Theme property: borderStyles',
    control: {
      type: 'select',
      options: Object.keys(Theme.borderStyles)
    }
  },
  borderLeftColor: {
    description: 'Border left color. Theme property: colors',
    control: {
      type: 'select',
      options: Object.keys(Theme.colors)
    }
  },
  borderX: {
    description: 'BorderX',
    control: {
      type: 'text'
    }
  },
  borderY: {
    description: 'BorderY',
    control: {
      type: 'text'
    }
  }
}

export default borderArgTypes
