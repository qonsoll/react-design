import React from 'react'
import Link from './Link'

export default {
  title: 'Components/Typography/Link',
  component: Link,
  argTypes: {
    'Default AntD props': {
      description:
        'Component absolutely maintain default AntD link properties (check Ant documentation: https://ant.design/components/typography/#Typography.Link).',
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

export const Template = (args) => <Link {...args}>Link</Link>
