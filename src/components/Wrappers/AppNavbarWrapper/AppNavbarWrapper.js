import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'

const AppNavbarWrapper = (props) => {
  const { children, width } = props

  return (
    <Box flexBasis={width || 280} {...props}>
      {children}
    </Box>
  )
}

AppNavbarWrapper.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number
}
AppNavbarWrapper.defaultProps = {
  width: '280px'
}

export default AppNavbarWrapper
