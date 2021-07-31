import React from 'react'
import PropTypes from 'prop-types'
import { useLayoutSystem } from '../LayoutSystem'
import BaseLayout from '../BaseLayout'
import DirectionLayout from '../DirectionLayout'
import CompositionLayout from '../CompositionLayout'

const Layout = (props) => {
  const { children, header, asideLeft, asideRight, footer } = props

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

  const asideLeftExtended =
    asideLeft && React.cloneElement(asideLeft, asideLeftPropsOverride)

  const asideRightExtended =
    asideRight && React.cloneElement(asideRight, asideRightPropsOverride)

  const compositionLayout = (
    <CompositionLayout
      header={header}
      asideLeft={asideLeftExtended}
      asideRight={asideRightExtended}
      footer={footer}
    >
      {children}
    </CompositionLayout>
  )

  return (
    <BaseLayout
      direction={isOuterLayoutExists ? 'row' : 'column'}
      bg={layoutBg}
    >
      {isOuterLayoutExists ? (
        <>
          {/* Aside left */}
          {asideLeftOuterExists &&
            React.cloneElement(asideLeft, { side: 'left' })}

          <DirectionLayout
            direction='column'
            maxHeight='100vh'
            overflow='auto'
            ml={ml}
            mr={mr}
          >
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
  asideLeftOuter: PropTypes.bool,
  asideRightOuter: PropTypes.bool,
  isAsideLeftCollapsed: PropTypes.bool,
  isAsideRightCollapsed: PropTypes.bool,
  footer: PropTypes.node
}

export default Layout
