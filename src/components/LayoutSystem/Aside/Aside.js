import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'
import { useLayoutSystem } from '../LayoutSystem'

const collapseMap = {
  full: { width: '0' },
  short: { width: 'var(--ql-aside-collapsed-width)' }
}

const AsideLayout = (props) => {
  const {
    children,
    side,
    isHeaderExists,
    isFooterExists,
    width,
    // collapse,
    maxHeight,
    bg,
    p,
    ...rest
  } = props

  const LayoutSystemConfig = useLayoutSystem()
  const {
    asideLeftCollapseVariant,
    asideRightCollapseVariant,
    asideLeftOverlay,
    asideRightOverlay,
    asideLeftCollapsed,
    asideRightCollapsed
  } = LayoutSystemConfig

  const isAsideLeft = side === 'left'
  const isAsideRight = side === 'right'

  const collapseVariant = isAsideLeft
    ? asideLeftCollapseVariant
    : asideRightCollapseVariant
  const overlay = isAsideLeft ? asideLeftOverlay : asideRightOverlay
  const collapse = isAsideLeft ? asideLeftCollapsed : asideRightCollapsed

  const isNotCollapsedOverlay = !collapse && overlay

  return (
    <Box
      display='flex'
      flexDirection='column'
      flexBasis={
        collapse
          ? collapseMap[collapseVariant]?.width ||
            'var(--ql-aside-collapsed-width)'
          : 'var(--ql-aside-width)'
      }
      minWidth={
        collapse
          ? collapseMap[collapseVariant]?.width ||
            'var(--ql-aside-collapsed-width)'
          : 'var(--ql-aside-width)'
      }
      maxHeight={maxHeight || 'var(--ql-aside-max-height)'}
      bg='var(--ql-aside-background)'
      p={p || 'var(--ql-aside-padding)'}
      overflow='auto'
      wordBreak='break-word'
      position={isNotCollapsedOverlay && 'fixed'}
      top={
        isNotCollapsedOverlay && isHeaderExists ? 'var(--ql-header-height)' : 0
      }
      bottom={
        isNotCollapsedOverlay && isFooterExists ? 'var(--ql-footer-height)' : 0
      }
      left={isNotCollapsedOverlay && isAsideLeft && 0}
      right={isNotCollapsedOverlay && isAsideRight && 0}
      zIndex={isNotCollapsedOverlay && 'var(--ql-zindex-drawer)'}
      {...rest}
    >
      {children}
    </Box>
  )
}

const Aside = (props) => {
  const {
    children,
    side,
    isHeaderExists,
    isFooterExists,
    width,
    maxHeight,
    bg,
    p,
    collapse,
    collapseVariant,
    asideToggleBtn,
    overlay,
    drawer
  } = props

  return (
    <>
      {!collapse && drawer && (
        <Box
          position='absolute'
          top={0}
          bottom={0}
          left={0}
          right={0}
          zIndex='var(--ql-zindex-overlay)'
          bg='rgba(0 0 0 / 75%)'
        />
      )}
      <AsideLayout
        side={side}
        isHeaderExists={isHeaderExists}
        isFooterExists={isFooterExists}
        width={width}
        maxHeight={maxHeight}
        bg={bg}
        p={p}
        collapse={collapse}
        collapseVariant={collapseVariant}
        overlay={overlay}
      >
        {asideToggleBtn}
        {children}
      </AsideLayout>
    </>
  )
}

Aside.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  collapse: PropTypes.bool,
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bg: PropTypes.string,
  p: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Aside
