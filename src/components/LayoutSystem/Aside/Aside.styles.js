const buildAsideLayoutStyles = ({
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
}) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: collapse
      ? collapseMap[collapseVariant]?.width || 'var(--ql-aside-collapsed-width)'
      : 'var(--ql-aside-width)',
    minWidth: collapse
      ? collapseMap[collapseVariant]?.width || 'var(--ql-aside-collapsed-width)'
      : 'var(--ql-aside-width)',
    maxHeight: maxHeight || 'var(--ql-aside-max-height)',
    bg: 'var(--ql-aside-background)',
    p: p || 'var(--ql-aside-padding)',
    overflow: 'auto',
    wordBreak: 'break-word',
    position: isNotCollapsedOverlay && 'fixed',
    top:
      isNotCollapsedOverlay && isHeaderExists ? 'var(--ql-header-height)' : 0,
    bottom:
      isNotCollapsedOverlay && isFooterExists ? 'var(--ql-footer-height)' : 0,
    left: isNotCollapsedOverlay && isAsideLeft && 0,
    right: isNotCollapsedOverlay && isAsideRight && 0,
    zIndex: isNotCollapsedOverlay && 'var(--ql-zindex-drawer)'
  }
}

const overlayStyles = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 'var(--ql-zindex-overlay)',
  bg: 'rgba(0 0 0 / 75%)'
}

export { buildAsideLayoutStyles, overlayStyles }

export default { buildAsideLayoutStyles, overlayStyles }
