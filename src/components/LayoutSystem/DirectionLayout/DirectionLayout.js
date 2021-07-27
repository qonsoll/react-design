import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'

const DirectionLayout = (props) => {
  const { children, direction, maxHeight, overflow } = props

  return (
    <Box
      flexGrow={1}
      display='flex'
      flexDirection={direction}
      maxHeight={maxHeight}
      overflow={overflow}
    >
      {children}
    </Box>
  )
}

DirectionLayout.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  overflow: PropTypes.string
}

export default DirectionLayout
