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
    },
    titleLevel: {
      description: 'Use to set title size and specify html tag (h1 - h5).',
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5]
      }
    },
    titleSize: {
      description: '!!!Will be deprecated soon!!! Use to set title size and specify html tag (h1 - h5).',
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5]
      }
    },
    titleVariant: {
      description: 'Use to set title variant (h1 - h6)',
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
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
