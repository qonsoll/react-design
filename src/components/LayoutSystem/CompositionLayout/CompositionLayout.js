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
    ml,
    mr,
    asideLeftNotOuterExists,
    asideRightNotOuterExists,
    contentVerticalPadding,
    contentHorizontalPadding
  } = LayoutSystemConfig

  return (
    <>
      {/* Header */}
      {header && isHeaderSticky
        ? React.cloneElement(header, { position: 'sticky', top: 0 })
        : header}

      <DirectionLayout direction="row">
        {/* Aside left */}
        {asideLeftNotOuterExists &&
          React.cloneElement(asideLeft, { side: 'left' })}

        <Box
          display='flex'
          flexDirection='column'
          flexGrow={1}
          maxWidth="100%"
          py={contentVerticalPadding || 'var(--ql-content-py)'}
          px={
            contentHorizontalPadding || [
              'var(--ql-content-px-xxs)',
              'var(--ql-content-px-xs)',
              'var(--ql-content-px-sm)',
              'var(--ql-content-px-md)',
              'var(--ql-content-px-lg)',
              'var(--ql-content-px-xl)',
              'var(--ql-content-px-xxl)',
              'var(--ql-content-px-xxxl)'
            ]
          }
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
