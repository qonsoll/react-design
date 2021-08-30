import React from 'react'
import FooterOld from './FooterOld'

export default {
  title: 'Layout system [OLD]/FooterOld',
  component: FooterOld,
  argTypes: {
    'Default AntD props': {
      description:
        'Component absolutely maintain default AntD footer properties (check Ant documentation: https://ant.design/components/layout/#Layout).',
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
  <FooterOld
    {...args}
    width='92vw'
    height='24vh'
    bg='#e9e9e9'
    borderRadius={6}
  />
)
