import React from 'react'
import NavigationItem from './NavigationItem'

export default {
  title: 'Components/NavigationItem',
  component: NavigationItem,
  argTypes: {
    height: {
      description: 'Use to specify Header height.'
    },
    layout: {
      description: 'Use to specify layout structure and inner components.'
    }
  }
}

export const Template = (args) => <NavigationItem />
