import React from 'react'
import Box from '../Box'
import Divider from './Divider'
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
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    className: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The className of container'
    },
    dashed: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Whether line is dashed'
    },
    orientation: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The position of title inside divider'
    },
    plain: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Divider text show as plain style'
    },
    style: {
      table: {
        category: 'Default AntD props'
      },
      control: { disable: true },
      description: 'The style object of container'
    },
    type: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The direction type of divider'
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
    transform: {
      table: {
        category: 'Extra CSS props'
      },
      control: CSSPropValues.transform
    }
  },
  args: {
    width: '320px',
    minWidth: '320px'
  }
}

export const Template = (args) => (
  <Box display="flex" alignItems="center" flexDirection="column">
    <Divider {...args}>Or</Divider>
  </Box>
)
