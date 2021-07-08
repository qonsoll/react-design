import React from 'react'
import Img from './Img'

export default {
  title: 'Components/Media/Img',
  component: Img,
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
    Packages: {
      table: {
        category: 'Extentions'
      },
      description:
        'Applyed styled-system packages (check styled-system API documentation: https://styled-system.com/api).',
      control: { disable: true }
    },
    'Extra CSS props': {
      table: {
        category: 'Extentions'
      },
      description: 'Additional CSS properties which could be applyed.',
      control: { disable: true }
    }
  }
}

export const Template = (args) => (
  <Img
    {...args}
    src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
    alt='Image'
    objectFit='cover'
    width={200}
    height={200}
  />
)
