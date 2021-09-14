import React from 'react'
import Input from './Input'
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
  title: 'Components/Inputs/Input',
  component: Input,
  argTypes: {
    addonAfter: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'The label text displayed after (on the right side of) the input field',
      control: {
        type: 'object'
      }
    },
    addonBefore: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'The label text displayed before (on the left side of) the input field',
      control: {
        type: 'object'
      }
    },
    allowClear: {
      table: {
        category: 'Default AntD props'
      },
      description: 'If allow to remove input content with clear icon',
      control: { type: 'boolean' }
    },
    bordered: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Whether has border style',
      control: { type: 'boolean' }
    },
    defaultValue: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Whether has border style',
      control: { type: 'text' }
    },
    disabled: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Whether the input is disabled',
      control: { type: 'boolean' }
    },
    id: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The ID for input',
      control: { type: 'text' }
    },
    maxLength: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The max length',
      control: { type: 'number' }
    },
    prefix: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The prefix icon for the Input',
      control: { type: 'object' }
    },
    size: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'The size of the input box. Note: in the context of a form, the large size is used',
      options: ['large', 'middle', 'small'],
      control: { type: 'radio' }
    },
    suffix: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The suffix icon for the Input',
      control: { type: 'object' }
    },
    type: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The type of input',
      control: { type: 'text' }
    },
    value: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The input content value',
      control: { type: 'text' }
    },
    onChange: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Callback when user input'
    },
    onPressEnter: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'The callback function that is triggered when Enter key is pressed'
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
    transform: {
      table: {
        category: 'Extra CSS props'
      },
      control: CSSPropValues.transform
    }
  }
}

export const Template = (args) => <Input {...args} />
