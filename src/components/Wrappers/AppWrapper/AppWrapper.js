import ContentOld from '../../LayoutSystem/Old/ContentOld'
import LayoutOld from '../../LayoutSystem/Old/LayoutOld'
import PropTypes from 'prop-types'
import React from 'react'

/** styles config for wrapper when footer is exists */
const FOOTER_STYLES_CONFIG = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}

const AppWrapper = (props) => {
  const {
    horizontal,
    children,
    appNavbar,
    bottomNavbar,
    appHeader,
    contentProps,
    footer,
    ...rest
  } = props

  return (
    <LayoutOld height="inherit" flexDirection={horizontal && 'row'} {...rest}>
      {horizontal && appNavbar}
      {!horizontal && appHeader}
      <ContentOld
        px={[
          'var(--ql-layout-padding-default)',
          'var(--ql-layout-padding-sm)',
          'var(--ql-layout-padding-md)',
          'var(--ql-layout-padding-lg)',
          'var(--ql-layout-padding-xl)',
          'var(--ql-layout-padding-xxl)',
          'var(--ql-layout-padding-xxxl)'
        ]}
        height="100%"
        overflow="auto"
        {...(footer && FOOTER_STYLES_CONFIG)}
        {...contentProps}
      >
        {children}
        {footer && footer}
      </ContentOld>
      {!horizontal && bottomNavbar}
    </LayoutOld>
  )
}

AppWrapper.propTypes = {
  horizontal: PropTypes.bool,
  children: PropTypes.node,
  appNavbar: PropTypes.node,
  bottomNavbar: PropTypes.node,
  appHeader: PropTypes.node,
  footer: PropTypes.node
}
AppWrapper.defaultProps = {
  horizontal: false
}

export default AppWrapper
