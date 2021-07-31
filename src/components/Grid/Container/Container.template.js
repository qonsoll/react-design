import React, { forwardRef } from 'react'
import classNames from 'classnames'
import ContainerBase from './ContainerBase.template'

/**
 * Creating Container which returns Box with className (css)
 */
const Container = forwardRef((props, ref) => {
  const {
    bounded,
    gutters,
    sm,
    md,
    lg,
    xl,
    xxl,
    gutterDefault,
    gutterSm,
    gutterMd,
    gutterLg,
    gutterXl,
    gutterXxl,
    children
  } = props
  const className = classNames({
    container: true,
    bounded,
    gutters,
    'container-sm': sm,
    'container-md': md,
    'container-lg': lg,
    'container-xl': xl,
    'container-xxl': xxl,
    'gutter-default': gutterDefault,
    'gutter-sm': gutterSm,
    'gutter-md': gutterMd,
    'gutter-lg': gutterLg,
    'gutter-xl': gutterXl,
    'gutter-xxl': gutterXxl
  })
  return (
    <ContainerBase
      data-testid='container'
      className={className}
      ref={ref}
      {...props}
    >
      {children}
    </ContainerBase>
  )
})

export default Container
