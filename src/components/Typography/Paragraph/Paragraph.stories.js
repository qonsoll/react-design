import React from 'react'
import Paragraph from './Paragraph'
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
  title: 'Components/Typography/Paragraph',
  component: Paragraph,
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
    }
  }
}

export const Template = (args) => (
  <Paragraph {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Paragraph>
)
