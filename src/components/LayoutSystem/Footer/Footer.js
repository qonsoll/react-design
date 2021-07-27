import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'
// import Container from '../../Grid/Container'
// import Row from '../../Grid/Row'
// import Col from '../../Grid/Col'

const Footer = (props) => {
  const {
    height,
    // layout,
    bg,
    px,
    position,
    bottom
  } = props

  return (
    <Box
      flexBasis={height || 'var(--ql-footer-height)'}
      minHeight={height || 'var(--ql-footer-height)'}
      bg={bg || 'var(--ql-footer-background)'}
      px={px || 'var(--ql-footer-desktop-px)'}
      display='flex'
      position={position}
      bottom={bottom}
    >
      Content
      {/* <Container>
        <Row height='100%'>
          {layout.map(({ component, ...arg }, index) => (
            <Col key={index} {...arg}>
              {component}
            </Col>
          ))}
        </Row>
      </Container> */}
    </Box>
  )
}

Footer.propTypes = {
  height: PropTypes.number,
  layout: PropTypes.array
}

export default Footer
