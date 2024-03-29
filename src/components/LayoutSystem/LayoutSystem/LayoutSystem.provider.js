import React from 'react'
import LayoutSystemContext from './LayoutSystem.context'

const LayoutSystemProvider = (props) => {
  const {
    children,
    isAsideLeft,
    isAsideRight,
    asideLeftOuter,
    asideRightOuter,
    isAsideLeftCollapsed,
    isAsideRightCollapsed,
    isHeaderSticky,
    isFooterSticky,
    asideLeftCollapsed,
    asideRightCollapsed,
    asideLeftCollapseVariant,
    asideRightCollapseVariant,
    asideLeftOverlay,
    asideRightOverlay,
    contentHorizontalPadding,
    contentVerticalPadding,
    layoutBg
  } = props

  const isOuterLayoutExists = asideLeftOuter || asideRightOuter

  const collapseMap = {
    full: { offset: '0' },
    short: { offset: 'var(--ql-aside-collapsed-width)' }
  }

  const asideLeftNotCollapsedOverlay =
    isAsideLeft && !asideLeftCollapsed && asideLeftOverlay

  const asideRightNotCollapsedOverlay =
    isAsideRight && !asideRightCollapsed && asideRightOverlay

  const ml =
    asideLeftNotCollapsedOverlay &&
    (collapseMap[asideLeftCollapseVariant]?.offset ||
      'var(--ql-aside-collapsed-width)')

  const mr =
    asideRightNotCollapsedOverlay &&
    (collapseMap[asideRightCollapseVariant]?.offset ||
      'var(--ql-aside-collapsed-width)')

  const asideLeftOuterExists = asideLeftOuter && isAsideLeft
  const asideRightOuterExists = asideRightOuter && isAsideRight
  const asideLeftNotOuterExists = !asideLeftOuter && isAsideLeft
  const asideRightNotOuterExists = !asideRightOuter && isAsideRight

  return (
    <LayoutSystemContext.Provider
      value={{
        asideLeftOuter,
        asideRightOuter,
        isAsideLeftCollapsed,
        isAsideRightCollapsed,
        isHeaderSticky,
        isFooterSticky,
        asideLeftCollapsed,
        asideRightCollapsed,
        asideLeftCollapseVariant,
        asideRightCollapseVariant,
        asideLeftOverlay,
        asideRightOverlay,
        contentHorizontalPadding,
        contentVerticalPadding,
        layoutBg,
        asideLeftOuterExists,
        asideRightOuterExists,
        asideLeftNotOuterExists,
        asideRightNotOuterExists,
        ml,
        mr,
        isOuterLayoutExists
      }}
    >
      {children}
    </LayoutSystemContext.Provider>
  )
}

export default LayoutSystemProvider
