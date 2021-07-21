import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'

const Aside = (props) => {
  const { children, width } = props
  return (
    <Box
      flexBasis={width || 280}
      minWidth={width || 280}
      bg='#e1e1e1'
      overflow='hidden'
      wordBreak='break-word'
    >
      {children}
    </Box>
  )
}

Aside.propTypes = {
  width: PropTypes.number
}

export default Aside
