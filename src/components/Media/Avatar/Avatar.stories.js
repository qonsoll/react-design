import React from 'react'
import Avatar from './Avatar'
import {
  spaceArgTypes,
  colorArgTypes,
  typographyArgTypes,
  layoutArgTypes,
  flexboxArgTypes,
  backgroundArgTypes,
  borderArgTypes,
  positionArgTypes,
  shadowArgTypes
} from '../../../helpers/arg-types'
import CSSPropValues from '../../../helpers/css-prop-values'

export default {
  title: 'Media/Avatar',
  component: Avatar,
  argTypes: {
    alt: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'This attribute defines the alternative text describing the image',
      control: {
        type: 'text'
      }
    },
    gap: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Letter type unit distance between left and right sides',
      control: {
        type: 'number'
      }
    },
    icon: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Custom icon type for an icon avatar',
      control: {
        disable: true
      }
    },
    shape: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The shape of avatar',
      options: ['circle', 'square'],
      control: {
        type: 'select'
      }
    },
    size: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The size of avatar',
      options: ['large', 'small', 'default'],
      control: {
        type: 'select'
      }
    },
    src: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'The address of the image for an image avatar or image element',
      control: {
        type: 'text'
      }
    },
    srcSet: {
      table: {
        category: 'Default AntD props'
      },
      description: 'A list of sources to use for different screen resolutions',
      control: {
        type: 'text'
      }
    },
    draggable: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Whether the picture is allowed to be dragged'
    },
    crossOrigin: {
      table: {
        category: 'Default AntD props'
      },
      description: 'CORS settings attributes',
      options: ['anonymous', 'use-credentials', ''],
      control: {
        type: 'select'
      }
    },
    onError: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'Handler when img load error, return false to prevent default fallback behavior',
      control: {
        disable: true
      }
    },
    whiteSpace: {
      table: {
        category: 'Extra'
      },
      control: CSSPropValues.whiteSpace
    },
    cursor: {
      table: {
        category: 'Extra'
      },
      control: CSSPropValues.cursor
    },
    wordBreak: {
      table: {
        category: 'Extra'
      },
      control: CSSPropValues.wordBreak
    },
    zoom: {
      table: {
        category: 'Extra'
      },
      description: CSSPropValues.zoom.description,
      control: { type: CSSPropValues.zoom.type }
    },
    transform: {
      table: {
        category: 'Extra'
      },
      description: CSSPropValues.transform.description,
      control: { type: CSSPropValues.transform.type }
    },
    ...spaceArgTypes,
    ...colorArgTypes,
    ...typographyArgTypes,
    ...layoutArgTypes,
    ...flexboxArgTypes,
    ...backgroundArgTypes,
    ...borderArgTypes,
    ...positionArgTypes,
    ...shadowArgTypes
  }
}

export const Template = (args) => (
  <Avatar
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQog3HmcERCvKqjE-afKGUJzTsyKTipP7l_2Q&usqp=CAU"
    size="large"
    {...args}
  />
)
