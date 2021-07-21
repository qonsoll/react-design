import React from 'react'
import Navigation from './Navigation'

export default {
  title: 'Components/Navigation',
  component: Navigation,
  argTypes: {
    height: {
      description: 'Use to specify Header height.'
    },
    layout: {
      description: 'Use to specify layout structure and inner components.'
    }
  }
}

export const Template = (args) => <Navigation />
