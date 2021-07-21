import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'
import Container from '../../Grid/Container'
import Row from '../../Grid/Row'
import Col from '../../Grid/Col'

const Footer = (props) => {
  const { height, layout } = props

  return (
    <Box
      flexBasis={height || 64}
      minHeight={height || 64}
      bg='#4c4c4c'
      display='flex'
    >
      <Container>
        <Row height='100%'>
          {layout.map(({ component, ...arg }, index) => (
            <Col key={index} {...arg}>
              {component}
            </Col>
          ))}
        </Row>
      </Container>
    </Box>
  )
}

Footer.propTypes = {
  height: PropTypes.number,
  layout: PropTypes.array
}

export default Footer
