import React from 'react'
import Title from './Title'
import {
  spaceArgTypes,
  colorArgTypes,
  typographyArgTypes,
  layoutArgTypes,
  flexboxArgTypes,
  backgroundArgTypes,
  borderArgTypes,
  positionArgTypes,
  shadowArgTypes
} from '../../../helpers/arg-types'
import CSSPropValues from '../../../helpers/css-prop-values'

export default {
  title: 'Components/Typography/Title',
  component: Title,
  argTypes: {
    code: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Code style	'
    },
    copyable: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Whether to be copyable, customize it via setting an object	'
    },
    delete: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Deleted line style	'
    },
    disabled: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Disabled content	'
    },
    editable: {
      table: {
        category: 'Default AntD props'
      },
      description: 'If editable. Can control edit state when is object	'
    },
    ellipsis: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'Display ellipsis when text overflows, can configure rows and expandable by using object	'
    },
    level: {
      table: {
        category: 'Default AntD props'
      },
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5]
      },
      description: 'Set content importance. Match with h1, h2, h3, h4, h5'
    },
    mark: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Marked style	'
    },
    onClick: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Set the handler to handle click event	'
    },
    strong: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Bold style	'
    },
    italic: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Italic style	'
    },
    type: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Content type	'
    },
    underline: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Underlined style	'
    },
    ...spaceArgTypes,
    ...colorArgTypes,
    ...typographyArgTypes,
    ...layoutArgTypes,
    ...flexboxArgTypes,
    ...backgroundArgTypes,
    ...borderArgTypes,
    ...positionArgTypes,
    ...shadowArgTypes,
    whiteSpace: {
      table: {
        category: 'Extra'
      },
      control: CSSPropValues.whiteSpace
    },
    cursor: {
      table: {
        category: 'Extra'
      },
      control: CSSPropValues.cursor
    },
    wordBreak: {
      table: {
        category: 'Extra'
      },
      control: CSSPropValues.wordBreak
    },
    zoom: {
      table: {
        category: 'Extra'
      },
      description: CSSPropValues.zoom.description,
      control: { type: CSSPropValues.zoom.type }
    },
    transform: {
      table: {
        category: 'Extra'
      },
      description: CSSPropValues.transform.description,
      control: { type: CSSPropValues.transform.type }
    },
    textTransform: {
      table: {
        category: 'Extra'
      },
      control: CSSPropValues.textTransform
    },
    textOverflow: {
      table: {
        category: 'Extra'
      },
      control: CSSPropValues.textOverflow
    }
  },
  args: {
    level: 1
  }
}

export const Template = (args) => <Title {...args}>Title</Title>
