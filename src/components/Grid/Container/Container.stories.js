import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../../../design/design-system'
import Container from './Container.template'
import {
  spaceArgTypes,
  colorArgTypes,
  layoutArgTypes,
  backgroundArgTypes,
  borderArgTypes,
  positionArgTypes,
  shadowArgTypes,
  hoverArgTypes
} from '../../../extensions/arg-types'

export default {
  title: 'Grid/Container',
  component: Container,
  argTypes: {
    bounded: {
      description: 'Limit container width',
      control: {
        type: 'boolean'
      }
    },
    gutters: {
      description: 'Add gutters to the container and rows inside',
      control: {
        type: 'boolean'
      }
    },
    fullHeight: {
      description: 'Will add property height="100%" to the container',
      control: {
        type: 'boolean'
      }
    },
    ...spaceArgTypes,
    ...colorArgTypes,
    ...layoutArgTypes,
    ...backgroundArgTypes,
    ...borderArgTypes,
    ...positionArgTypes,
    ...shadowArgTypes,
    ...hoverArgTypes
  }
}

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Container {...args} />
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  bg: 'theme',
  height: '50px'
}
Default.parameters = {
  docs: {
    source: {
      code: '<Container>Container content</Container>'
    }
  }
}
