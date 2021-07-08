import React from 'react'
import Menu from '../Menu'
import MenuItem from './MenuItem'

export default {
  title: 'Components/Menus/MenuItem',
  component: MenuItem,
  argTypes: {
    'Default AntD props': {
      description:
        'Component absolutely maintain default AntD menu item properties (check Ant documentation: https://ant.design/components/menu/#Menu.Item).',
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
  <Menu>
    <MenuItem {...args}>Menu item #1</MenuItem>
    <MenuItem {...args}>Menu item #2</MenuItem>
    <MenuItem {...args}>Menu item #3</MenuItem>
  </Menu>
)
