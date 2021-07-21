import React from 'react'
import Footer from './Footer'

export default {
  title: 'Components/Layout system/Footer',
  component: Footer,
  argTypes: {
    height: {
      description: 'Use to specify Header height.'
    },
    layout: {
      description: 'Use to specify layout structure and inner components.'
    }
  }
}

export const Template = (args) => <Footer />
