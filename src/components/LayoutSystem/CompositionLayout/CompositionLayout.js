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
    contentP
  } = props

  return (
    <>
      {isHeaderSticky
        ? React.cloneElement(header, { position: 'sticky', top: 0 })
        : header}
      <DirectionLayout direction='row'>
        {!asideLeftOuter &&
          asideLeft &&
          React.cloneElement(asideLeft, { side: 'left' })}
        <Box flexGrow={1} p={contentP || 'var(--ql-content-padding)'}>
          {children}
        </Box>
        {!asideRightOuter &&
          asideRight &&
          React.cloneElement(asideRight, { side: 'right' })}
      </DirectionLayout>
      {isFooterSticky
        ? React.cloneElement(footer, { position: 'sticky', bottom: 0 })
        : footer}
    </>
  )
}

export default CompositionLayout
