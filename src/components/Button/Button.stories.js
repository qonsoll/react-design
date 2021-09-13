import React from 'react'
import Button from './Button'
import {
  spaceArgTypes,
  colorArgTypes,
  typographyArgTypes,
  layoutArgTypes,
  flexboxArgTypes,
  backgroundArgTypes,
  borderArgTypes,
  positionArgTypes,
  shadowArgTypes,
  extraArgTypes
} from '../../helpers/arg-types'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Can be set to primary ghost dashed link text default',
      options: ['primary', 'secondary', 'text', 'link', 'ghost'],
      control: {
        type: 'select'
      }
    },
    danger: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Set the danger status of button',
      control: { type: 'boolean' }
    },
    disabled: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Disabled state of button',
      control: { type: 'boolean' }
    },
    block: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Option to fit button width to its parent width',
      control: { type: 'boolean' }
    },
    ghost: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'Make background transparent and invert text and border colors',
      control: { type: 'boolean' }
    },
    href: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Redirect url of link button',
      control: { type: 'text' }
    },
    htmlType: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Set the original html type of button',
      options: ['submit', 'reset', 'button'],
      control: { type: 'select' }
    },
    icon: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Set the icon component of button',
      control: { disable: true }
    },
    loading: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Set the loading status of button',
      control: { type: 'boolean' }
    },
    shape: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Can be set button shape',
      options: ['circle', 'round'],
      control: { type: 'radio' }
    },
    size: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Set the size of button',
      options: ['large', 'middle', 'small'],
      control: { type: 'radio' }
    },
    target: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'Same as target attribute of a, works when href is specified',
      control: { type: 'text' }
    },
    onClick: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Set the handler to handle click event'
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
    ...extraArgTypes,
    Packages: {
      table: {
        category: 'Extensions'
      },
      description:
        'Applied styled-system packages (check styled-system API documentation: https://styled-system.com/api).',
      control: { disable: true }
    },
    'Extra CSS props': {
      table: {
        category: 'Extensions'
      },
      description: 'Additional CSS properties which could be applied.',
      control: { disable: true }
    },
    variant: {
      table: {
        category: 'Custom properties'
      },
      control: { type: 'select', options: ['null', 'white'] },
      description: 'Use to change button type.'
    }
  }
}

export const Template = (args) => (
  <Button type="primary" {...args}>
    Button
  </Button>
)
