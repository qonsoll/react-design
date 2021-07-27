import React from 'react'
import Icon from './Icon'

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    component: {
      description: 'Use to specify Icon component.'
    },
    size: {
      description: 'Use to specify Icon size.'
    },
    color: {
      description: 'Use to specify Icon color.'
    }
  }
}

export const Template = (args) => <Icon />
