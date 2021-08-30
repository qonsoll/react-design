import Theme from '../Theme'

const borderArgTypes = {
  border: {
    table: {
      category: 'Border'
    },
    description: 'Border',
    control: {
      type: 'text'
    }
  },
  borderWidth: {
    table: {
      category: 'Border'
    },
    description: 'Border width. Theme property: borderWidths',
    control: {
      type: 'select',
      options: Object.keys(Theme.borderWidths)
    }
  },
  borderStyle: {
    table: {
      category: 'Border'
    },
    description: 'Border style. Theme property: borderStyles',
    control: {
      type: 'select',
      options: Object.keys(Theme.borderStyles)
    }
  },
  borderColor: {
    table: {
      category: 'Border'
    },
    description: 'Border color. Theme property: colors',
    control: {
      type: 'select',
      options: Object.keys(Theme.colors)
    }
  },
  borderRadius: {
    table: {
      category: 'Border'
    },
    description: 'Border radius. Theme property: radii',
    control: {
      type: 'select',
      options: Object.keys(Theme.radii)
    }
  },
  borderTop: {
    table: {
      category: 'Border'
    },
    description: 'Border top',
    control: {
      type: 'text'
    }
  },
  borderTopWidth: {
    table: {
      category: 'Border'
    },
    description: 'Border top width. Theme property: borderWidths',
    control: {
      type: 'select',
      options: Object.keys(Theme.borderWidths)
    }
  },
  borderTopStyle: {
    table: {
      category: 'Border'
    },
    description: 'Border top style. Theme property: borderStyles',
    control: {
      type: 'select',
      options: Object.keys(Theme.borderStyles)
    }
  },
  borderTopColor: {
    table: {
      category: 'Border'
    },
    description: 'Border top color. Theme property: colors',
    control: {
      type: 'select',
      options: Object.keys(Theme.colors)
    }
  },
  borderTopLeftRadius: {
    table: {
      category: 'Border'
    },
    description: 'Border top left radius. Theme property: radii',
    control: {
      type: 'select',
      options: Object.keys(Theme.radii)
    }
  },
  borderTopRightRadius: {
    table: {
      category: 'Border'
    },
    description: 'Border top right radius. Theme property: radii',
    control: {
      type: 'select',
      options: Object.keys(Theme.radii)
    }
  },
  borderRight: {
    table: {
      category: 'Border'
    },
    description: 'Border right',
    control: {
      type: 'text'
    }
  },
  borderRightWidth: {
    table: {
      category: 'Border'
    },
    description: 'Border right width. Theme property: borderWidths',
    control: {
      type: 'select',
      options: Object.keys(Theme.borderWidths)
    }
  },
  borderRightStyle: {
    table: {
      category: 'Border'
    },
    description: 'Border right style. Theme property: borderStyles',
    control: {
      type: 'select',
      options: Object.keys(Theme.borderStyles)
    }
  },
  borderRightColor: {
    table: {
      category: 'Border'
    },
    description: 'Border right color. Theme property: colors',
    control: {
      type: 'select',
      options: Object.keys(Theme.colors)
    }
  },
  borderBottom: {
    table: {
      category: 'Border'
    },
    description: 'Border bottom',
    control: {
      type: 'text'
    }
  },
  borderBottomWidth: {
    table: {
      category: 'Border'
    },
    description: 'Border bottom width. Theme property: borderWidths',
    control: {
      type: 'select',
      options: Object.keys(Theme.borderWidths)
    }
  },
  borderBottomStyle: {
    table: {
      category: 'Border'
    },
    description: 'Border bottom style. Theme property: borderStyles',
    control: {
      type: 'select',
      options: Object.keys(Theme.borderStyles)
    }
  },
  borderBottomColor: {
    table: {
      category: 'Border'
    },
    description: 'Border bottom color. Theme property: colors',
    control: {
      type: 'select',
      options: Object.keys(Theme.colors)
    }
  },
  borderBottomLeftRadius: {
    table: {
      category: 'Border'
    },
    description: 'Border bottom left radius. Theme property: radii',
    control: {
      type: 'select',
      options: Object.keys(Theme.radii)
    }
  },
  borderBottomRightRadius: {
    table: {
      category: 'Border'
    },
    description: 'Border bottom right radius. Theme property: radii',
    control: {
      type: 'select',
      options: Object.keys(Theme.radii)
    }
  },
  borderLeft: {
    table: {
      category: 'Border'
    },
    description: 'Border left',
    control: {
      type: 'text'
    }
  },
  borderLeftWidth: {
    table: {
      category: 'Border'
    },
    description: 'Border left width. Theme property: borderWidths',
    control: {
      type: 'select',
      options: Object.keys(Theme.borderWidths)
    }
  },
  borderLeftStyle: {
    table: {
      category: 'Border'
    },
    description: 'Border left style. Theme property: borderStyles',
    control: {
      type: 'select',
      options: Object.keys(Theme.borderStyles)
    }
  },
  borderLeftColor: {
    table: {
      category: 'Border'
    },
    description: 'Border left color. Theme property: colors',
    control: {
      type: 'select',
      options: Object.keys(Theme.colors)
    }
  },
  borderX: {
    table: {
      category: 'Border'
    },
    description: 'BorderX',
    control: {
      type: 'text'
    }
  },
  borderY: {
    table: {
      category: 'Border'
    },
    description: 'BorderY',
    control: {
      type: 'text'
    }
  }
}

export default borderArgTypes
