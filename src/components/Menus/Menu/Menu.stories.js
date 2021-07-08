import React from 'react'
import Menu from './Menu'

export default {
  title: 'Components/Menus/Menu',
  component: Menu,
  argTypes: {
    'Default AntD props': {
      description:
        'Component absolutely maintain default AntD menu properties (check Ant documentation: https://ant.design/components/menu/#Menu).',
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

export const Template = (args) => <Menu {...args} />
