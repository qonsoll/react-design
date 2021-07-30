import React from 'react'
import Box from '../../Box'
import DirectionLayout from '../DirectionLayout'

const CompositionLayout = (props) => {
  const {
    children,
    header,
    asideLeft,
    asideRight,
    asideLeftOuter,
    asideRightOuter,
    footer,
    isHeaderSticky,
    isFooterSticky,
    asideLeftCollapsed,
    asideRightCollapsed,
    collapseVariant,
    overlay,
    contentP
  } = props

  const collapseMap = {
    full: { offset: '0' },
    short: { offset: 'var(--ql-aside-collapsed-width)' }
  }

  return (
    <>
      {/* Header */}
      {header && isHeaderSticky
        ? React.cloneElement(header, { position: 'sticky', top: 0 })
        : header}

      <DirectionLayout direction='row'>
        {/* Aside left */}
        {!asideLeftOuter &&
          asideLeft &&
          React.cloneElement(asideLeft, { side: 'left' })}

        <Box
          flexGrow={1}
          p={contentP || 'var(--ql-content-padding)'}
          ml={
            asideLeft &&
            // !asideLeftCollapsed &&
            overlay &&
            (collapseMap[collapseVariant]?.offset ||
              'var(--ql-aside-collapsed-width)')
          }
          mr={
            asideRight &&
            // !asideRightCollapsed &&
            overlay &&
            (collapseMap[collapseVariant]?.offset ||
              'var(--ql-aside-collapsed-width)')
          }
        >
          {children}
        </Box>

        {/* Aside right */}
        {!asideRightOuter &&
          asideRight &&
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
