import React from 'react'
import TextArea from './TextArea'

export default {
  title: 'Components/Inputs/TextArea',
  component: TextArea,
  argTypes: {
    'Default AntD props': {
      description:
        'Component absolutely maintain default AntD textarea properties (check Ant documentation: https://ant.design/components/input/#Input.TextArea).',
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

export const Template = (args) => <TextArea {...args} />
