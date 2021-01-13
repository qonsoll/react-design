import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../../../design/design-system'
import Container from '../Container/Container.template'
import Row from '../Row/Row.template'
import Col from './Col.template'
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
  title: 'Grid/Col',
  component: Col,
  argTypes: {
    cw: {
      description:
        'Number of columns. Could be string, number or array (responsive)',
      control: {
        type: 'array'
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
    <Container bg='theme'>
      <Row bg='theme'>
        <Col {...args}>Column content 1</Col>
      </Row>
    </Container>
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  bg: 'accent',
  height: '50px',
  border: '1px solid #000'
}
Default.parameters = {
  docs: {
    source: {
      code: '<Col>Column content</Col>'
    }
  }
}
