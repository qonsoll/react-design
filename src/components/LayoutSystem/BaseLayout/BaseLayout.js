import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'

const BaseLayout = (props) => {
  const { children, direction, bg } = props

  return (
    <Box
      minHeight="100vh"
      width="100%" // value was changed from "100vw" to "100%" (fix should prevent horizontal scroll for windows platforms)
      display="flex"
      flexDirection={direction}
      bg={bg || 'var(--ql-layout-background)'}
    >
      {children}
    </Box>
  )
}

BaseLayout.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
  bg: PropTypes.string
}

export default BaseLayout
