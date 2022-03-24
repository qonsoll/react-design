import React, { forwardRef } from 'react'

import ContainerBase from './ContainerBase.template'
import classNames from 'classnames'

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
    children,
    className
  } = props

  const classes = classNames({
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
    'gutter-xxl': gutterXxl,
    [className]: Boolean(className)
  })

  return (
    <ContainerBase
      data-testid="container"
      className={classes}
      ref={ref}
      {...props}
    >
      {children}
    </ContainerBase>
  )
})

export default Container
