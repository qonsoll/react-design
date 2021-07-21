import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'
import { HeaderDesktopVariant1 } from '../Header/variants'

const Header = (props) => {
  const { height, bg, ...arg } = props

  return (
    <Box
      flexBasis={height || 'var(--ql-header-height)'}
      minHeight={height || 'var(--ql-header-height)'}
      bg={bg || 'var(--ql-header-background)'}
      display='flex'
      {...arg}
    >
      <HeaderDesktopVariant1 />
    </Box>
  )
}

Header.propTypes = {
  height: PropTypes.number,
  bg: PropTypes.string
}

export default Header
