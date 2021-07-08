import React from 'react'
import Container from '../Container'
import Row from './Row.template'
import Col from '../Col'
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

export default {
  title: 'Grid/Row',
  component: Row,
  argTypes: {
    noGutters: {
      description: 'Removes column gutters',
      control: {
        type: 'boolean'
      }
    },
    noInnerGutters: {
      description: 'Removes inner column gutters only (for one line layouts)',
      control: {
        type: 'boolean'
      }
    },
    noOuterGutters: {
      description: 'Removes inner column gutters only (for one line layouts)',
      control: {
        type: 'boolean'
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
  <Container gutters>
    <Row {...args}>
      <Col cw='auto' bg='yellow'>
        <Box bg='blue' color='white'>
          Column 1
        </Box>
      </Col>
      <Col cw='auto' bg='yellow'>
        <Box bg='blue' color='white'>
          Column 2
        </Box>
      </Col>
    </Row>
  </Container>
)

Default.args = { bg: 'theme', height: '100px', v: 'center', h: 'center' }
Default.parameters = {
  docs: {
    source: {
      code: '<Container>Container content</Container>'
    }
  }
}
