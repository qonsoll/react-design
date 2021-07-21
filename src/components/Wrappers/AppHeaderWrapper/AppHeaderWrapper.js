import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'

const AppHeaderWrapper = (props) => {
  const { children } = props

  return <Box {...props}>{children}</Box>
}

AppHeaderWrapper.propTypes = {
  children: PropTypes.node
}

export default AppHeaderWrapper
