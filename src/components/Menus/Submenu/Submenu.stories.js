import React from 'react'
import Menu from '../Menu'
import Submenu from './Submenu'
import MenuItem from '../MenuItem'

export default {
  title: 'Components/Menus/Submenu',
  component: Submenu,
  argTypes: {
    'Default AntD props': {
      description:
        'Component absolutely maintain default AntD menu item properties (check Ant documentation: https://ant.design/components/menu/#Menu.SubMenu).',
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
    <Submenu title='Submenu title' {...args}>
      <MenuItem>Menu item #2</MenuItem>
      <MenuItem>Menu item #3</MenuItem>
    </Submenu>
  </Menu>
)
