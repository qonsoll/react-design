import React from 'react'
import CompositionLayout from './CompositionLayout'

export default {
  title: 'Components/Layout system/CompositionLayout',
  component: CompositionLayout,
  argTypes: {
    direction: {
      description: 'Use it to set layout direction (row or column).'
    }
  }
}

export const Template = (args) => {
  return <CompositionLayout />
}
