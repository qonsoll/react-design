import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'

const DirectionLayout = (props) => {
  const { children, direction } = props

  return (
    <Box flexGrow={1} display='flex' flexDirection={direction}>
      {children}
    </Box>
  )
}

DirectionLayout.propTypes = {
  direction: PropTypes.oneOf(['row', 'column'])
}

export default DirectionLayout
