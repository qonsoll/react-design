import React from 'react'
import Box from './Box'
import {
  spaceArgTypes,
  colorArgTypes,
  typographyArgTypes,
  layoutArgTypes,
  flexboxArgTypes,
  backgroundArgTypes,
  borderArgTypes,
  positionArgTypes,
  shadowArgTypes,
  extraArgTypes
} from '../../helpers/arg-types'

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    ...spaceArgTypes,
    ...colorArgTypes,
    ...typographyArgTypes,
    ...layoutArgTypes,
    ...flexboxArgTypes,
    ...backgroundArgTypes,
    ...borderArgTypes,
    ...positionArgTypes,
    ...shadowArgTypes,
    ...extraArgTypes
  }
}

export const Template = (args) => (
  <Box {...args} width={200} height={200} bg='#e9e9e9' borderRadius={12} />
)
