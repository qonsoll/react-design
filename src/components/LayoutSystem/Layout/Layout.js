import React from 'react'
import PropTypes from 'prop-types'
import BaseLayout from '../BaseLayout'
import DirectionLayout from '../DirectionLayout'
import CompositionLayout from '../CompositionLayout'

const Layout = (props) => {
  const {
    children,
    header,
    asideLeft,
    asideRight,
    footer,
    asideLeftOuter,
    asideRightOuter,
    isAsideLeftCollapsed,
    isAsideRightCollapsed,
    isHeaderSticky,
    isFooterSticky,
    bg,
    contentP
  } = props

  const isOuterLayoutExists = asideLeftOuter || asideRightOuter

  return (
    <>
      <BaseLayout direction={isOuterLayoutExists ? 'row' : 'column'} bg={bg}>
        {isOuterLayoutExists ? (
          <>
            {asideLeftOuter &&
              asideLeft &&
              React.cloneElement(asideLeft, { side: 'left' })}
            <DirectionLayout
              direction='column'
              maxHeight='100vh'
              overflow='auto'
            >
              <CompositionLayout
                header={header}
                asideLeft={
                  asideRightOuter &&
                  asideLeft &&
                  React.cloneElement(asideLeft, { maxHeight: 'unset' })
                }
                asideRight={
                  asideLeftOuter &&
                  asideRight &&
                  React.cloneElement(asideRight, { maxHeight: 'unset' })
                }
                asideLeftOuter={asideLeftOuter}
                asideRightOuter={asideRightOuter}
                isAsideLeftCollapsed={isAsideLeftCollapsed}
                isAsideRightCollapsed={isAsideRightCollapsed}
                footer={footer}
                isHeaderSticky={isHeaderSticky}
                isFooterSticky={isFooterSticky}
                contentP={contentP}
              >
                {children}
              </CompositionLayout>
            </DirectionLayout>
            {asideRightOuter &&
              asideRight &&
              React.cloneElement(asideRight, { side: 'right' })}
          </>
        ) : (
          <CompositionLayout
            header={header}
            asideLeft={
              asideLeft && React.cloneElement(asideLeft, { maxHeight: 'unset' })
            }
            asideRight={
              asideRight &&
              React.cloneElement(asideRight, { maxHeight: 'unset' })
            }
            asideLeftOuter={asideLeftOuter}
            asideRightOuter={asideRightOuter}
            isAsideLeftCollapsed={isAsideLeftCollapsed}
            isAsideRightCollapsed={isAsideRightCollapsed}
            footer={footer}
            isHeaderSticky={isHeaderSticky}
            isFooterSticky={isFooterSticky}
            contentP={contentP}
          >
            {children}
          </CompositionLayout>
        )}
      </BaseLayout>
    </>
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
