import React from 'react'
import Text from './Text'

export default {
  title: 'Components/Typography/Text',
  component: Text,
  argTypes: {
    'Default AntD props': {
      description:
        'Component absolutely maintain default AntD text properties (check Ant documentation: https://ant.design/components/typography/#Typography.Text).',
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
    },
    variant: {
      table: {
        category: 'Custom properties'
      },
      description: 'Use to change text type.'
    },
    isEllipsis: {
      table: {
        category: 'Custom properties'
      },
      description: 'Use to truncate text.'
    }
  }
}

export const Template = (args) => <Text {...args}>Lorem ipsum...</Text>
