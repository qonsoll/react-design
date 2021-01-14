import React, { useState, useEffect } from 'react'
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
  hoverArgTypes,
  flexboxArgTypes
} from '../../../extensions/arg-types'
// import '../../../styles.module.scss'

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
    order: {
      description: 'Column order',
      control: {
        type: 'number'
      }
    },
    v: {
      description: 'Column vertical alignment',
      control: flexboxArgTypes.alignItems.control
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

const Template = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <Container bg='theme'>
        <Row height='60px' bg='theme'>
          <Col {...args} height='30px'>
            Column content 1
          </Col>
          <Col {...args} height='30px'>
            Column content 2
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  )
}

export const Default = Template.bind({})
Default.args = {
  // bg: 'accent',
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
