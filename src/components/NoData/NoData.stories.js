import React from 'react'
import NoData from './NoData'

export default {
  title: 'Components/NoData',
  component: NoData,
  argTypes: {
    'Default AntD props': {
      description:
        'Component absolutely maintain default AntD empty properties (check Ant documentation: https://ant.design/components/empty/#API).',
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

export const Template = (args) => <NoData {...args} />
