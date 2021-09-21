import React from 'react'
import Text from './Text'
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
  title: 'Components/Typography/Text',
  component: Text,
  argTypes: {
    textOverflow: {
      table: {
        category: 'Extra CSS props'
      },
      control: CSSPropValues.textOverflow
    },
    variant: {
      table: {
        category: 'Custom properties'
      },
      description: 'Use to change text type.'
    },
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
    keyboard: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Keyboard style	'
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
    isEllipsis: {
      table: {
        category: 'Custom properties'
      },
      description: 'Use to truncate text.'
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
        category: 'Extra CSS props'
      },
      control: CSSPropValues.whiteSpace
    },
    cursor: {
      table: {
        category: 'Extra CSS props'
      },
      control: CSSPropValues.cursor
    },
    wordBreak: {
      table: {
        category: 'Extra CSS props'
      },
      control: CSSPropValues.wordBreak
    },
    zoom: {
      table: {
        category: 'Extra CSS props'
      },
      control: CSSPropValues.zoom
    },
    transform: {
      table: {
        category: 'Extra CSS props'
      },
      control: CSSPropValues.transform
    },
    textTransform: {
      table: {
        category: 'Extra CSS props'
      },
      control: CSSPropValues.textTransform
    }
  }
}

export const Template = (args) => <Text {...args}>Lorem ipsum...</Text>
