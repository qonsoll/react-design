import React from "react";
import Container from '../Container/Container.template'
import Row from '../Row/Row.template'
import Col from "./Col.template";
import Box from '../../Base/Box'
import {
  spaceArgTypes,
  colorArgTypes,
  layoutArgTypes,
  backgroundArgTypes,
  borderArgTypes,
  positionArgTypes,
  shadowArgTypes
} from '../../../design-system/extensions/arg-types'
import CSSPropTypes from '../../../design-system/extensions/css-prop-values'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../../../design-system/Theme'

export default {
  title: "Grid/Col",
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
};

export const Default = (args) => (
  <ThemeProvider theme={Theme}>
    <Container>
      <Row>
        <Col {...args}>
          <Box bg="theme">Column 1 BOX</Box>
        </Col>
        <Col {...args}>
          <Box bg="theme">Column 2 BOX</Box>
        </Col>
      </Row>
    </Container>
  </ThemeProvider>
);

Default.args = { bg: 'accent', cw: [12, 12, 6] }
Default.parameters = {
  docs: {
    source: {
      code: '<Col cw={[12, 12, 6]}>Col content</Col>'
    }
  }
}

export const Order = (args) => (
  <ThemeProvider theme={Theme}>
    <Container>
      <Row>
        <Col bg="accent" order={args.order}>
          <Box bg="theme">Column 1 BOX</Box>
        </Col>
        <Col bg="accent" cw={[12, 12, 6]}>
          <Box bg="theme">Column 2 BOX</Box>
        </Col>
      </Row>
    </Container>
  </ThemeProvider>
);

Order.args = { bg: 'accent', cw: [12, 12, 6], order: 6 }
Order.parameters = {
  docs: {
    source: {
      code: '<Col order="6">Col content</Col>'
    }
  }
}

export const SelfVerticalAlignment = (args) => (
  <ThemeProvider theme={Theme}>
    <Container>
      <Row height="100px">
        <Col bg="accent" v={args.v}>
          <Box bg="theme">Column 1 BOX</Box>
        </Col>
        <Col bg="accent" cw={[12, 12, 6]}>
          <Box bg="theme">Column 2 BOX</Box>
        </Col>
      </Row>
    </Container>
  </ThemeProvider>
);

SelfVerticalAlignment.args = { bg: 'accent', cw: [12, 12, 6], v: 'flex-start' }
SelfVerticalAlignment.parameters = {
  docs: {
    source: {
      code: '<Col v="flex-start">Col content</Col>'
    }
  }
}