import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'
import { HeaderDesktopVariant1 } from '../Header/variants'

const Header = (props) => {
  const { height, bg, px, shadow, position, top, ...arg } = props

  return (
    <Box
      flexBasis={height || 'var(--ql-header-height)'}
      minHeight={height || 'var(--ql-header-height)'}
      bg={bg || 'var(--ql-header-background)'}
      px={px || 'var(--ql-header-desktop-px)'}
      boxShadow={shadow || 'var(--ql-header-shadow)'}
      display='flex'
      position={position}
      top={top}
      {...arg}
    >
      <HeaderDesktopVariant1 />
    </Box>
  )
}

Header.propTypes = {
  height: PropTypes.number,
  bg: PropTypes.string,
  px: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  shadow: PropTypes.string
}

export default Header
