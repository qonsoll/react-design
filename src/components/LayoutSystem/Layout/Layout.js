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
    asideLeftCollapsed,
    asideRightCollapsed,
    collapseVariant,
    overlay,
    bg,
    contentP
  } = props

  const isOuterLayoutExists = asideLeftOuter || asideRightOuter

  const collapseMap = {
    full: { offset: '0' },
    short: { offset: 'var(--ql-aside-collapsed-width)' }
  }

  return (
    <>
      <BaseLayout direction={isOuterLayoutExists ? 'row' : 'column'} bg={bg}>
        {isOuterLayoutExists ? (
          <>
            {/* Aside left */}
            {asideLeftOuter &&
              asideLeft &&
              React.cloneElement(asideLeft, { side: 'left', collapseVariant })}

            <DirectionLayout
              direction='column'
              maxHeight='100vh'
              overflow='auto'
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
              <CompositionLayout
                header={
                  header && asideLeft
                    ? React.cloneElement(header, { asideLeft: true })
                    : header
                }
                asideLeft={
                  asideRightOuter &&
                  asideLeft &&
                  React.cloneElement(asideLeft, {
                    maxHeight: 'unset',
                    collapseVariant
                  })
                }
                asideRight={
                  asideLeftOuter &&
                  asideRight &&
                  React.cloneElement(asideRight, {
                    maxHeight: 'unset',
                    collapseVariant
                  })
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

            {/* Aside right */}
            {asideRightOuter &&
              asideRight &&
              React.cloneElement(asideRight, { side: 'right' })}
          </>
        ) : (
          <CompositionLayout
            header={
              header && asideLeft
                ? React.cloneElement(header, { asideLeft: true })
                : header
            }
            asideLeft={
              asideLeft &&
              React.cloneElement(asideLeft, {
                maxHeight: 'unset',
                isHeaderExists: !!header,
                isFooterExists: !!footer,
                collapseVariant
              })
            }
            asideRight={
              asideRight &&
              React.cloneElement(asideRight, {
                maxHeight: 'unset',
                isHeaderExists: !!header,
                isFooterExists: !!footer,
                collapseVariant
              })
            }
            asideLeftOuter={asideLeftOuter}
            asideRightOuter={asideRightOuter}
            isAsideLeftCollapsed={isAsideLeftCollapsed}
            isAsideRightCollapsed={isAsideRightCollapsed}
            footer={footer}
            isHeaderSticky={isHeaderSticky}
            isFooterSticky={isFooterSticky}
            contentP={contentP}
            asideLeftCollapsed={asideLeftCollapsed}
            asideRightCollapsed={asideRightCollapsed}
            collapseVariant={collapseVariant}
            overlay={overlay}
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
