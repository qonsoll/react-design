import React from 'react'
import Skeleton from './Skeleton'

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  argTypes: {
    'Default AntD props': {
      description:
        'Component absolutely maintain default AntD skeleton properties (check Ant documentation: https://ant.design/components/skeleton/#Skeleton).',
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

export const Template = (args) => <Skeleton width={400} round {...args} />
