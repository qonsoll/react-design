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
    }
  }
}

export const Template = (args) => <Header />
