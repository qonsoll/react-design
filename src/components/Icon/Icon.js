import React from 'react'
import PropTypes from 'prop-types'
import Box from '../Box'

const Icon = (props) => {
  const { component, size, color, ...arg } = props

  return (
    <Box
      display='flex'
      fontSize={size || 24}
      color={color || 'inherit'}
      {...arg}
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
