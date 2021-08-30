import React from 'react'
import Avatar from './Avatar'

export default {
  title: 'Media/Avatar',
  component: Avatar,
  argTypes: {
    'Default AntD props': {
      description:
        'Component absolutely maintain default AntD avatar properties (check Ant documentation: https://ant.design/components/avatar/#Avatar).',
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
  <Avatar
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQog3HmcERCvKqjE-afKGUJzTsyKTipP7l_2Q&usqp=CAU'
    size='large'
    {...args}
  />
)
