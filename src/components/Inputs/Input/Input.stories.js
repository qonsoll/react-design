import React from 'react'
import Input from './Input'

export default {
  title: 'Components/Inputs/Input',
  component: Input,
  argTypes: {
    'Default AntD props': {
      description:
        'Component absolutely maintain default AntD input properties (check Ant documentation: https://ant.design/components/input/#Input).',
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

export const Template = (args) => <Input {...args} />
