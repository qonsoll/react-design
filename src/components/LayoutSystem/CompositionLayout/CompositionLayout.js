import React from 'react'
import Box from '../../Box'
import DirectionLayout from '../DirectionLayout'

const CompositionLayout = (props) => {
  const {
    children,
    header,
    asideLeft,
    asideRight,
    footer,
    asideLeftOuter,
    asideRightOuter
  } = props

  return (
    <>
      {header}
      <DirectionLayout direction='row'>
        {!asideLeftOuter && asideLeft}
        <Box flexGrow={1}>{children}</Box>
        {!asideRightOuter && asideRight}
      </DirectionLayout>
      {footer}
    </>
  )
}

export default CompositionLayout
