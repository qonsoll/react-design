import React from 'react'
import Header from './Header'

export default {
  title: 'Components/Layout system/Header',
  component: Header,
  argTypes: {
    height: {
      description: 'Use to specify Header height.'
    },
    bg: {
      description: 'Use to specify Header background color.'
    },
    shadow: {
      description: 'Use to specify Header shadow.'
    }
  }
}

export const Template = (args) => <Header />
