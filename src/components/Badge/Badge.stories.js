import React from 'react'
import Badge from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    'Default AntD props': {
      description:
        'Component absolutely maintain default AntD dropdown properties (check Ant documentation: https://ant.design/components/badge/#Badge).',
      control: { disable: true }
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
    }
  }
}

export const Template = (args) => (
  <Badge status='success' text='Status' {...args} />
)
