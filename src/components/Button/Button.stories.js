import React from 'react'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    'Default AntD props': {
      description:
        'Component absolutely maintain default AntD button properties (check Ant documentation: https://ant.design/components/button/#API).',
      control: { disable: true }
    },
    type: {
      options: ['primary', 'secondary', 'text', 'link', 'ghost'],
      control: {
        type: 'select'
      }
    },
    danger: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    Packages: {
      table: {
        category: 'Extentions'
      },
      description:
        'Applyed styled-system packages (check styled-system API documentation: https://styled-system.com/api).',
      control: { disable: true }
    },
    'Extra CSS props': {
      table: {
        category: 'Extentions'
      },
      description: 'Additional CSS properties which could be applyed.',
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
  <Button type='primary' {...args}>
    Button
  </Button>
)
