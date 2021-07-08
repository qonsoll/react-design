import React from 'react'
import Sider from './Sider'

export default {
  title: 'Components/Layout system/Sider',
  component: Sider,
  argTypes: {
    'Default AntD props': {
      description:
        'Component absolutely maintain default AntD sider properties (check Ant documentation: https://ant.design/components/layout/#Layout.Sider).',
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
  <Sider {...args} width='20vw' height='92vh' bg='#e9e9e9' borderRadius={6} />
)
