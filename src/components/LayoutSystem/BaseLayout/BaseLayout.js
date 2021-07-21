import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'

const BaseLayout = (props) => {
  const { children, direction } = props

  return (
    <Box
      minHeight='100vh'
      width='100vw'
      display='flex'
      flexDirection={direction}
    >
      {children}
    </Box>
  )
}

BaseLayout.propTypes = {
  direction: PropTypes.oneOf(['row', 'column'])
}

export default BaseLayout
