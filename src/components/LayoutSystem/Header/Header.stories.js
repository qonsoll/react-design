import React from 'react'
import Header from './Header'

export default {
  title: 'Components/Layout system/Header',
  component: Header,
  argTypes: {
    'Default AntD props': {
      description:
        'Component absolutely maintain default AntD header properties (check Ant documentation: https://ant.design/components/layout/#Layout).',
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
  <Header {...args} width='92vw' height='20vh' bg='#e9e9e9' borderRadius={6} />
)
