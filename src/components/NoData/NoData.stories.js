import React from 'react'
import NoData from './NoData'
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
} from '../../helpers/arg-types'
import CSSPropValues from '../../helpers/css-prop-values'

export default {
  title: 'Components/NoData',
  component: NoData,
  argTypes: {
    description: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Customize description',
      control: {
        type: 'text'
      }
    },
    image: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'Customize image. Will treat as image url when string provided',
      control: {
        disable: true
      }
    },
    imageStyle: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The style of image',
      control: {
        disable: true
      }
    },
    ...spaceArgTypes,
    ...colorArgTypes,
    ...typographyArgTypes,
    ...layoutArgTypes,
    ...flexboxArgTypes,
    ...backgroundArgTypes,
    ...borderArgTypes,
    ...positionArgTypes,
    ...shadowArgTypes,
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
    }
  },
  args: {
    description: 'No Data'
  }
}

export const Template = (args) => <NoData {...args} />
