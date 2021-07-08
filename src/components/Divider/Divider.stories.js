import React from 'react'
import Divider from './Divider'

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    'Default AntD props': {
      description:
        'Component absolutely maintain default AntD divider properties (check Ant documentation: https://ant.design/components/divider/#API).',
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

export const Template = (args) => <Divider {...args} width={320} />
