import React from 'react'
import PropTypes from 'prop-types'
import { useLayoutSystem } from '../LayoutSystem'
import BaseLayout from '../BaseLayout'
import DirectionLayout from '../DirectionLayout'
import CompositionLayout from '../CompositionLayout'

const Layout = (props) => {
  const { children, header, asideLeft, asideRight, footer } = props

  // Requesting data from LayoutSystem context
  const LayoutSystemConfig = useLayoutSystem()
  const {
    asideLeftOuter,
    asideRightOuter,
    layoutBg,
    isOuterLayoutExists,
    ml,
    mr,
    asideLeftOuterExists,
    asideRightOuterExists
  } = LayoutSystemConfig

  // Building asides overrides props
  const asideLeftPropsOverride =
    isOuterLayoutExists && asideRightOuter
      ? { maxHeight: 'unset' }
      : {
          maxHeight: 'unset',
          isHeaderExists: !!header,
          isFooterExists: !!footer
        }
  const asideRightPropsOverride =
    isOuterLayoutExists && asideLeftOuter
      ? { maxHeight: 'unset' }
      : {
          maxHeight: 'unset',
          isHeaderExists: !!header,
          isFooterExists: !!footer
        }

  // Extending existing asides with additional props
  const asideLeftExtended =
    asideLeft && React.cloneElement(asideLeft, asideLeftPropsOverride)

  const asideRightExtended =
    asideRight && React.cloneElement(asideRight, asideRightPropsOverride)

  // Unified composition layout
  const compositionLayout = (
    <CompositionLayout
      header={header}
      asideLeft={asideLeftExtended}
      asideRight={asideRightExtended}
      footer={footer}>
      {children}
    </CompositionLayout>
  )

  return (
    <BaseLayout
      direction={isOuterLayoutExists ? 'row' : 'column'}
      bg={layoutBg || 'var(--ql-layout-background)'}>
      {isOuterLayoutExists ? (
        <>
          {/* Aside left */}
          {asideLeftOuterExists &&
            React.cloneElement(asideLeft, { side: 'left' })}

          <DirectionLayout
            direction="column"
            maxHeight="100vh"
            overflow="auto"
            ml={ml}
            mr={mr}
            boxShadow="var(--ql-content-shadow)">
            {compositionLayout}
          </DirectionLayout>

          {/* Aside right */}
          {asideRightOuterExists &&
            React.cloneElement(asideRight, { side: 'right' })}
        </>
      ) : (
        compositionLayout
      )}
    </BaseLayout>
  )
}

Layout.propTypes = {
  header: PropTypes.node,
  asideLeft: PropTypes.node,
  asideRight: PropTypes.node,
  footer: PropTypes.node
}

export default Layout
