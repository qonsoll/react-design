import Box from '../Box'
import PropTypes from 'prop-types'
import React from 'react'

const Icon = (props) => {
  const { component, size, color, ...rest } = props

  return (
    <Box
      display="flex"
      fontSize={size || 24}
      color={color || 'inherit'}
      {...rest}
    >
      {component}
    </Box>
  )
}

Icon.propTypes = {
  component: PropTypes.node,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string
}

export default Icon
