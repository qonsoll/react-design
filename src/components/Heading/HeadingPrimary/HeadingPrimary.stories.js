import React from 'react'
import HeadingPrimary from './HeadingPrimary.template'

export default {
  title: 'Components/Headings/HeadingPrimary',
  component: HeadingPrimary,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    title: {
      description: 'Use to specify title text.'
      // defaultValue: 'Heading'
    },
    titleSize: {
      description: 'Use to set title size.',
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5]
      }
    },
    titleMarginBottom: {
      description: 'Use to specify offset between title and subtitle.'
    },
    subTitle: {
      description: 'Use to specify subtitle text.'
    },
    textAlign: {
      description: 'Use to set text align.'
    }
  },
  args: {
    title: 'Heading'
  }
}

export const Template = (args) => <HeadingPrimary {...args} />
