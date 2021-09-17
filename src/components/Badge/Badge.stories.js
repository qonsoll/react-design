import React from 'react'
import Badge from './Badge'
import Avatar from '../Media/Avatar'

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    color: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Customize Badge dot color'
    },
    count: {
      table: {
        category: 'Default AntD props'
      },
      control: { type: 'number' },
      description: 'Number to show in badge	'
    },
    dot: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Whether to display a red dot instead of count'
    },
    offset: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Set offset of the badge dot'
    },
    overflowCount: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Max count to show'
    },
    showZero: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Whether to show badge when count is zero'
    },
    size: {
      table: {
        category: 'Default AntD props'
      },
      description: 'If count is set, size sets the size of badge'
    },
    status: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Set Badge as a status dot'
    },
    text: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'If status is set, text sets the display text of the status dot',
      control: {
        disable: true
      }
    },
    title: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Text to show when hovering over the badge'
    }
    /* has the wrong behavior */
    // ...spaceArgTypes,
    // ...colorArgTypes,
    // ...typographyArgTypes,
    // ...layoutArgTypes,
    // ...flexboxArgTypes,
    // ...backgroundArgTypes,
    // ...borderArgTypes,
    // ...positionArgTypes,
    // ...shadowArgTypes,
    // ...extraArgTypes
  },
  args: {
    status: 'success',
    count: 0,
    showZero: true,
    size: 'default'
  }
}

export const Template = (args) => (
  <Badge {...args}>
    <Avatar shape="square" size="large" />
  </Badge>
)
