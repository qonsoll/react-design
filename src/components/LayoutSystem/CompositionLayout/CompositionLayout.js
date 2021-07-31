import React from 'react'
import Box from '../../Box'
import { useLayoutSystem } from '../LayoutSystem'
import DirectionLayout from '../DirectionLayout'

const CompositionLayout = (props) => {
  const { children, header, asideLeft, asideRight, footer } = props

  const LayoutSystemConfig = useLayoutSystem()
  const {
    isHeaderSticky,
    isFooterSticky,
    contentPadding,
    ml,
    mr,
    asideLeftNotOuterExists,
    asideRightNotOuterExists
  } = LayoutSystemConfig

  return (
    <>
      {/* Header */}
      {header && isHeaderSticky
        ? React.cloneElement(header, { position: 'sticky', top: 0 })
        : header}

      <DirectionLayout direction='row'>
        {/* Aside left */}
        {asideLeftNotOuterExists &&
          React.cloneElement(asideLeft, { side: 'left' })}

        <Box
          flexGrow={1}
          p={contentPadding || 'var(--ql-content-padding)'}
          ml={ml}
          mr={mr}
        >
          {children}
        </Box>

        {/* Aside right */}
        {asideRightNotOuterExists &&
          React.cloneElement(asideRight, { side: 'right' })}
      </DirectionLayout>

      {/* Footer */}
      {footer && isFooterSticky
        ? React.cloneElement(footer, { position: 'sticky', bottom: 0 })
        : footer}
    </>
  )
}

export default CompositionLayout
