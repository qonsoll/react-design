import React from 'react'
import Container from './Container.template'
import {
  spaceArgTypes,
  colorArgTypes,
  layoutArgTypes,
  backgroundArgTypes,
  borderArgTypes,
  positionArgTypes,
  shadowArgTypes
} from '../../../helpers/arg-types'

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
    ...spaceArgTypes,
    ...colorArgTypes,
    ...layoutArgTypes,
    ...backgroundArgTypes,
    ...borderArgTypes,
    ...positionArgTypes,
    ...shadowArgTypes
  }
}

export const Default = (args) => <Container {...args} />

Default.args = { bg: 'green', height: '50px' }
Default.parameters = {
  docs: {
    source: {
      code: '<Container>Container content</Container>'
    }
  }
}

export const Bounded = (args) => <Container {...args}>With max-width</Container>

Bounded.args = { bg: 'red', height: '50px', bounded: true }
Bounded.parameters = {
  docs: {
    source: {
      code: '<Container bounded>Container content</Container>'
    }
  }
}

export const WithGutters = (args) => (
  <Container {...args}>Width padding-left and padding-right</Container>
)

WithGutters.args = { bg: 'blue', height: '50px', gutters: true }
WithGutters.parameters = {
  docs: {
    source: {
      code: '<Container gutters>Container content</Container>'
    }
  }
}

export const ContainerWidth = (args) => (
  <Container {...args}>With static max-width</Container>
)

ContainerWidth.args = { bg: 'yellow', height: '50px', sm: true }
ContainerWidth.parameters = {
  docs: {
    source: {
      code: '<Container sm>Container content</Container>'
    }
  }
}
