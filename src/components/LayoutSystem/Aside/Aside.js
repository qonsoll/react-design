import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'
import { useLayoutSystem } from '../LayoutSystem'
import { buildAsideLayoutStyles, overlayStyles } from './Aside.styles'

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

  const asideStyles = buildAsideLayoutStyles({
    collapse,
    collapseMap,
    collapseVariant,
    maxHeight,
    isNotCollapsedOverlay,
    isHeaderExists,
    isFooterExists,
    isAsideLeft,
    isAsideRight,
    p
  })

  return (
    <Box {...asideStyles} {...rest}>
      {children}
    </Box>
  )
}

const Aside = (props) => {
  const { children, asideToggleBtn, drawer, onClose, ...rest } = props

  const { collapse } = rest

  return (
    <>
      {!collapse && drawer && <Box {...overlayStyles} onClick={onClose} />}
      <AsideLayout {...rest}>
        {asideToggleBtn}
        {children}
      </AsideLayout>
    </>
  )
}

Aside.propTypes = {
  collapse: PropTypes.bool,
  drawer: PropTypes.bool,
  onClose: PropTypes.func,
  asideToggleBtn: PropTypes.node
}

export default Aside
