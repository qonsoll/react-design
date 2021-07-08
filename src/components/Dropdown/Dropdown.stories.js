import React from 'react'
import Dropdown from './Dropdown'
import { Button, Menu } from 'antd'
export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    'Default AntD props': {
      description:
        'Component absolutely maintain default AntD dropdown properties (check Ant documentation: https://ant.design/components/dropdown/#Dropdown).',
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

export const Template = (args) => {
  const menu = (
    <Menu>
      <Menu.Item key='1'>Item 1</Menu.Item>
      <Menu.Item key='2'>Item 2</Menu.Item>
      <Menu.Item key='3'>Item 3</Menu.Item>
    </Menu>
  )
  return (
    <Dropdown {...args} overlay={menu}>
      <Button>Dropdown</Button>
    </Dropdown>
  )
}
