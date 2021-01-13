import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../../../design/design-system'
import Box from './Box.template'
import {
  spaceArgTypes,
  colorArgTypes,
  typographyArgTypes,
  layoutArgTypes,
  flexboxArgTypes,
  gridArgTypes,
  backgroundArgTypes,
  borderArgTypes,
  positionArgTypes,
  shadowArgTypes,
  hoverArgTypes
} from '../../../extensions/arg-types'

export default {
  title: 'Grid/Box',
  component: Box,
  argTypes: {
    ...spaceArgTypes,
    ...colorArgTypes,
    ...typographyArgTypes,
    ...layoutArgTypes,
    ...flexboxArgTypes,
    ...gridArgTypes,
    ...backgroundArgTypes,
    ...borderArgTypes,
    ...positionArgTypes,
    ...shadowArgTypes,
    ...hoverArgTypes
  }
}

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Box position={['absolute', 'static']} {...args}>
      Box
    </Box>
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  bg: 'theme',
  color: 'white'
}
Default.parameters = {
  docs: {
    source: {
      code: '<Box>Box content</Box>'
    }
  }
}
