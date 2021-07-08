import React from 'react'
import Graphic from './Graphic.template'

export default {
  title: 'Components/Media/Graphic',
  component: Graphic,
  argTypes: {
    src: {
      table: {
        category: 'Mandatory'
      },
      description: 'Image url.',
      control: { disable: true }
    },
    alt: {
      table: {
        category: 'Mandatory'
      },
      description: 'Image alt-description.',
      control: { disable: true }
    },
    hidden: {
      table: {
        category: 'Other'
      },
      description:
        'Use to setup when component should be hidden (based on breakpoints).',
      control: { disable: true }
    },
    animation: {
      table: {
        category: 'Other'
      },
      description: 'Use to specify animation rules (based on classes).',
      control: { disable: true }
    },
    width: {
      table: {
        category: 'Other'
      },
      description: 'Component width.',
      control: { disable: true }
    },
    height: {
      table: {
        category: 'Other'
      },
      description: 'Component height.',
      control: { disable: true }
    },
    position: {
      table: {
        category: 'Other'
      },
      description: 'Use to specify component position.'
    },
    top: {
      table: {
        category: 'Other'
      },
      description: 'Top offset.'
    },
    bottom: {
      table: {
        category: 'Other'
      },
      description: 'Bottom offset.'
    },
    left: {
      table: {
        category: 'Other'
      },
      description: 'Left offset.'
    },
    right: {
      table: {
        category: 'Other'
      },
      description: 'Right offset.',
      control: { disable: true }
    },
    objectFit: {
      table: {
        category: 'Other'
      },
      description: 'Use to specify render method.'
    }
  }
}

export const Template = (args) => (
  <Graphic
    {...args}
    src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
    alt='Image'
    objectFit='cover'
    hidden={['block']}
    width={200}
    height={200}
  />
)
