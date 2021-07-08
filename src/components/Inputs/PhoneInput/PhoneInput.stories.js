import React from 'react'
import PhoneInput from './PhoneInput'

export default {
  title: 'Components/Inputs/PhoneInput',
  component: PhoneInput,
  argTypes: {
    'Default react-phone-input-2 props': {
      description:
        'Component absolutely maintain default react-phone-input-2 input properties (check documentation: https://github.com/bl00mber/react-phone-input-2).',
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

export const Template = (args) => <PhoneInput {...args} />
