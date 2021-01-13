import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../../../design/design-system'
import Container from '../Container/Container.template'
import Row from './Row.template'
import {
  spaceArgTypes,
  colorArgTypes,
  layoutArgTypes,
  backgroundArgTypes,
  borderArgTypes,
  shadowArgTypes,
  hoverArgTypes
} from '../../../extensions/arg-types'

export default {
  title: 'Grid/Row',
  component: Row,
  argTypes: {
    v: {
      description: 'Inner elements vertical alignment',
      control: {
        type: 'select',
        options: ['top', 'center', 'bottom']
      }
    },
    h: {
      description: 'Inner elements horizontal alignment',
      control: {
        type: 'select',
        options: ['left', 'center', 'right', 'around', 'between', 'evenly']
      }
    },
    noGutters: {
      description: 'Remove gutters for inner columns',
      control: {
        type: 'boolean'
      }
    },
    disableDynamicGutters: {
      description: 'Make row gutters static',
      control: {
        type: 'boolean'
      }
    },
    ...spaceArgTypes,
    ...colorArgTypes,
    ...layoutArgTypes,
    ...backgroundArgTypes,
    ...borderArgTypes,
    ...shadowArgTypes,
    ...hoverArgTypes
  }
}

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Container bg='theme' p='2'>
      <Row {...args} />
    </Container>
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  bg: 'accent',
  height: '50px'
}
Default.parameters = {
  docs: {
    source: {
      code: '<Row>Row content</Row>'
    }
  }
}
