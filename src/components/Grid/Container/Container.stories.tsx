import React from "react";
import '../../../design-system/root.scss'
import Container from "./Container.template";
import {
  spaceArgTypes,
  colorArgTypes,
  layoutArgTypes,
  backgroundArgTypes,
  borderArgTypes,
  positionArgTypes,
  shadowArgTypes
} from '../../../design-system/extensions/arg-types'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../../../design-system/Theme'

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

export const Default = (args) => (
  <ThemeProvider theme={Theme}>
    <Container {...args} />
  </ThemeProvider>
);

Default.args = { bg: 'theme', height: '50px' }
Default.parameters = {
  docs: {
    source: {
      code: '<Container>Container content</Container>'
    }
  }
}

export const Bounded = (args) => (
  <ThemeProvider theme={Theme}>
    <Container {...args}>With max-width</Container>
  </ThemeProvider>
);

Bounded.args = { bg: 'theme', height: '50px', bounded: true }
Bounded.parameters = {
  docs: {
    source: {
      code: '<Container bounded>Container content</Container>'
    }
  }
}

export const WithGutters = (args) => (
  <ThemeProvider theme={Theme}>
    <Container {...args}>Width padding-left and padding-right</Container>
  </ThemeProvider>
);

WithGutters.args = { bg: 'theme', height: '50px', gutters: true }
WithGutters.parameters = {
  docs: {
    source: {
      code: '<Container gutters>Container content</Container>'
    }
  }
}

export const ContainerWidth = (args) => (
  <ThemeProvider theme={Theme}>
    <Container {...args}>With static max-width</Container>
  </ThemeProvider>
);

ContainerWidth.args = { bg: 'theme', height: '50px', sm: true }
ContainerWidth.parameters = {
  docs: {
    source: {
      code: '<Container sm>Container content</Container>'
    }
  }
}