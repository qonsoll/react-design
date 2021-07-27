import React from 'react'
import NavigationItem from './NavigationItem'

export default {
  title: 'Components/NavigationItem',
  component: NavigationItem,
  argTypes: {
    text: {
      description: 'Use to specify Item text.'
    },
    icon: {
      description: 'Use to specify Item icon.'
    },
    iconSize: {
      description: 'Use to specify Icon size.'
    },
    iconColor: {
      description: 'Use to specify Icon color.'
    },
    spaceBetween: {
      description: 'Use to specify space between icon and text.'
    }
  }
}

export const Template = (args) => <NavigationItem />
