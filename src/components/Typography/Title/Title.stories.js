import React from 'react'
import Title from './Title'

export default {
  title: 'Components/Typography/Title',
  component: Title,
  argTypes: {
    'Default AntD props': {
      description:
        'Component absolutely maintain default AntD title properties (check Ant documentation: https://ant.design/components/typography/#Typography.Title).',
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

export const Template = (args) => <Title {...args}>Title</Title>
