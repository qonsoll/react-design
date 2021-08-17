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
      background={bg || 'var(--ql-header-background)'}
      px={
        px || [
          'var(--ql-header-px-xxs)',
          'var(--ql-header-px-xs)',
          'var(--ql-header-px-sm)',
          'var(--ql-header-px-md)',
          'var(--ql-header-px-lg)',
          'var(--ql-header-px-xl)',
          'var(--ql-header-px-xxl)',
          'var(--ql-header-px-xxxl)'
        ]
      }
      boxShadow={shadow || 'var(--ql-header-shadow)'}
      display='flex'
      alignItems='center'
      zIndex='var(--ql-header-z-index)'
      {...rest}
    >
      {asideToggleBtnLeft}
      {children}
      {asideToggleBtnRight}
    </Box>
  )
}

Header.propTypes = {
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),
  bg: PropTypes.string,
  px: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),
  shadow: PropTypes.string,
  asideToggleBtnLeft: PropTypes.node,
  asideToggleBtnRight: PropTypes.node
}

export default Header
