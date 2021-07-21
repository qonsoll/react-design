import React from 'react'
import HeadingPrimary from './HeadingPrimary.template'

export default {
  title: 'Components/Headings/HeadingPrimary',
  component: HeadingPrimary,
  argTypes: {
    title: {
      description: 'Use to specify title text.'
      // defaultValue: 'Heading'
    },
    titleSize: {
      description: 'Use to set title size.',
      control: { disable: true }
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
  }
}

export const Template = (args) => <HeadingPrimary {...args} />
