import React from 'react'
import PropTypes from 'prop-types'
import LayoutOld from '../../LayoutSystem/LayoutOld'
import ContentOld from '../../LayoutSystem/ContentOld'

const AppWrapper = (props) => {
  const {
    horizontal,
    children,
    appNavbar,
    bottomNavbar,
    appHeader,
    contentProps,
    ...rest
  } = props

  return (
    <LayoutOld height='inherit' flexDirection={horizontal && 'row'} {...rest}>
      {horizontal && appNavbar}
      {!horizontal && appHeader}
      <ContentOld
        px={[
          'var(--layout-padding-default)',
          'var(--layout-padding-sm)',
          'var(--layout-padding-md)',
          'var(--layout-padding-lg)',
          'var(--layout-padding-xl)',
          'var(--layout-padding-xxl)'
        ]}
        height='100%'
        overflow='auto'
        {...contentProps}
      >
        {children}
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
  appHeader: PropTypes.node
}
AppWrapper.defaultProps = {
  horizontal: false
}

export default AppWrapper
