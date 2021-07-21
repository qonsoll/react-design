import React from 'react'
import ContentOld from './ContentOld'

export default {
  title: 'Components/Layout system/ContentOld',
  component: ContentOld,
  argTypes: {
    'Default AntD props': {
      description:
        'Component absolutely maintain default AntD content properties (check Ant documentation: https://ant.design/components/layout/#Layout).',
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
  <ContentOld
    {...args}
    width='72vw'
    height='92vh'
    bg='#e9e9e9'
    borderRadius={6}
  />
)
