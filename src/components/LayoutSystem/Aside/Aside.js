import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'

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
    collapse,
    collapseVariant,
    overlay,
    maxHeight,
    bg,
    p,
    ...rest
  } = props

  const isAsideLeft = side === 'left'
  const isAsideRight = side === 'right'

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
      position={!collapse && overlay && 'fixed'}
      top={
        !collapse && overlay && isHeaderExists ? 'var(--ql-header-height)' : 0
      }
      bottom={
        !collapse && overlay && isFooterExists ? 'var(--ql-footer-height)' : 0
      }
      left={!collapse && overlay && isAsideLeft && 0}
      right={!collapse && overlay && isAsideRight && 0}
      zIndex={!collapse && overlay && 'var(--ql-zindex-drawer)'}
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
      {/* {overlay ? (
        <>
          {overlayState && (
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
            width={width}
            maxHeight={maxHeight}
            bg={bg}
            p={p}
            display={overlayState ? 'flex' : 'none'}
            position='fixed'
            top={overlayState && 0}
            bottom={overlayState && 0}
            left={overlayState && isAsideLeftAsDrawer && 0}
            right={overlayState && isAsideRightAsDrawer && 0}
            zIndex='var(--ql-zindex-drawer)'
          >
            {asideToggleBtn}
            {children}
          </AsideLayout>
        </>
      ) : (
        <AsideLayout
          width={width}
          maxHeight={maxHeight}
          bg={bg}
          p={p}
          collapse={collapse}
          collapseVariant={collapseVariant}
        >
          {asideToggleBtn}
          {children}
        </AsideLayout>
      )} */}
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
