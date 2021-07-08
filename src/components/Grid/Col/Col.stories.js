import React from 'react'
import Container from '../Container'
import Row from '../Row'
import Col from './Col.template'
import Box from '../../Box'
import {
  spaceArgTypes,
  colorArgTypes,
  layoutArgTypes,
  backgroundArgTypes,
  borderArgTypes,
  positionArgTypes,
  shadowArgTypes
} from '../../../helpers/arg-types'
import CSSPropTypes from '../../../helpers/css-prop-values'

export default {
  title: 'Grid/Col',
  component: Col,
  argTypes: {
    cw: {
      description: 'Column width (string, number or array (media queries))',
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
      description: 'Align inner content Vertically',
      control: {
        type: 'select',
        options: ['top', 'center', 'bottom']
      }
    },
    h: {
      description: 'Align inner content Horizontally',
      control: {
        type: 'select',
        options: ['left', 'center', 'right', 'around', 'between', 'evenly']
      }
    },
    alignSelf: {
      description: 'Column vertical alignment',
      control: CSSPropTypes.alignSelf
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
  <Container>
    <Row>
      <Col {...args}>
        <Box bg='blue'>Column 1 BOX</Box>
      </Col>
      <Col {...args}>
        <Box bg='blue'>Column 2 BOX</Box>
      </Col>
    </Row>
  </Container>
)

Default.args = { bg: 'red', cw: [12, 12, 6] }
Default.parameters = {
  docs: {
    source: {
      code: '<Col cw={[12, 12, 6]}>Col content</Col>'
    }
  }
}

export const Order = (args) => (
  <Container>
    <Row>
      <Col bg='accent' order={args.order}>
        <Box bg='green'>Column 1 BOX</Box>
      </Col>
      <Col bg='accent' cw={12}>
        <Box bg='green'>Column 2 BOX</Box>
      </Col>
      <Col bg='accent' cw={12}>
        <Box bg='green'>Column 3 BOX</Box>
      </Col>
      <Col bg='accent' cw={12}>
        <Box bg='green'>Column 4 BOX</Box>
      </Col>
    </Row>
  </Container>
)

Order.args = { bg: 'accent', cw: [12, 12, 6], order: 6 }
Order.parameters = {
  docs: {
    source: {
      code: '<Col order="6">Col content</Col>'
    }
  }
}

export const SelfVerticalAlignment = (args) => (
  <Container>
    <Row height='100px'>
      <Col bg='#000' alignSelf={args.alignSelf}>
        <Box bg='yellow'>Column 1 BOX</Box>
      </Col>
      <Col bg='#000' cw={[12, 12, 6]}>
        <Box bg='yellow'>Column 2 BOX</Box>
      </Col>
    </Row>
  </Container>
)

SelfVerticalAlignment.args = { bg: 'accent', cw: [12, 12, 6], v: 'flex-start' }
SelfVerticalAlignment.parameters = {
  docs: {
    source: {
      code: '<Col alignSelf="flex-start">Col content</Col>'
    }
  }
}
