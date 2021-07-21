import React from 'react'
import BaseLayout from './BaseLayout'

export default {
  title: 'Components/Layout system/BaseLayout',
  component: BaseLayout,
  argTypes: {
    direction: {
      description: 'Use it to set layout direction (row or column).',
      table: { defaultValue: { summary: 'row' } }
    }
  }
}

export const Template = (args) => {
  return <BaseLayout />
}
