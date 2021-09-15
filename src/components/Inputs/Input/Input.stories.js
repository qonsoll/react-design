import React from 'react'
import Input from './Input'
import { UserOutlined } from '@ant-design/icons'
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
    prefix: {
      table: {
        disable: true
      },
      control: { disable: true }
    },
    suffix: {
      table: {
        disable: true
      },
      control: { disable: true }
    },
    addonAfter: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'The label text displayed after (on the right side of) the input field',
      control: {
        disable: true
      }
    },
    addonBefore: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'The label text displayed before (on the left side of) the input field',
      control: {
        disable: true
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
    size: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'The size of the input box. Note: in the context of a form, the large size is used',
      options: ['large', 'middle', 'small'],
      control: { type: 'radio' }
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
    placeholder: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The placeholder for input',
      control: { type: 'text' }
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

const Template = (args) => <Input placeholder="Placeholder..." {...args} />

export const input = Template.bind({})

export const inputWithIcon = Template.bind({})
inputWithIcon.argTypes = {
  prefix: {
    description: 'The prefix icon for the Input. PREFIX is now',
    table: { category: 'Default AntD props', disable: false }
  },
  suffix: {
    description: 'The suffix icon for the Input',
    table: { category: 'Default AntD props', disable: false }
  }
}
inputWithIcon.args = {
  prefix: <UserOutlined />
}
