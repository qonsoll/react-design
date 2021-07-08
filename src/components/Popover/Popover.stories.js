import React from 'react'
import Popover from './Popover'

export default {
  title: 'Components/Popover',
  component: Popover,
  argTypes: {
    'Default AntD props': {
      description:
        'Component absolutely maintain default AntD popover properties (check Ant documentation: https://ant.design/components/popover/#API).',
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

export const Template = (args) => <Popover {...args} />
