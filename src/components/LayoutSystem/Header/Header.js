import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'

const Header = (props) => {
  const {
    children,
    height,
    bg,
    px,
    shadow,
    asideToggleBtnLeft,
    asideToggleBtnRight,
    ...rest
  } = props

  return (
    <Box
      flexBasis={height || 'var(--ql-header-height)'}
      minHeight={height || 'var(--ql-header-height)'}
      bg={bg || 'var(--ql-header-background)'}
      px={px || 'var(--ql-header-desktop-px)'}
      boxShadow={shadow || 'var(--ql-header-shadow)'}
      display='flex'
      alignItems='center'
      {...rest}
    >
      {asideToggleBtnLeft}
      {children}
      {asideToggleBtnRight}
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
