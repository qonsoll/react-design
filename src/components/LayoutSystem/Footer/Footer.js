import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'

const Footer = (props) => {
  const { children, height, bg, px, ...rest } = props

  return (
    <Box
      flexBasis={height || 'var(--ql-footer-height)'}
      minHeight={height || 'var(--ql-footer-height)'}
      bg={bg || 'var(--ql-footer-background)'}
      px={
        px || [
          'var(--ql-footer-px-xxs)',
          'var(--ql-footer-px-xs)',
          'var(--ql-footer-px-sm)',
          'var(--ql-footer-px-md)',
          'var(--ql-footer-px-lg)',
          'var(--ql-footer-px-xl)',
          'var(--ql-footer-px-xxl)',
          'var(--ql-footer-px-xxxl)'
        ]
      }
      display='flex'
      {...rest}
    >
      {children}
    </Box>
  )
}

Footer.propTypes = {
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),
  bg: PropTypes.string,
  px: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array])
}

Footer.defaultProps = {}

export default Footer
