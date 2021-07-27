import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'
// import Button from '../../Button'
// import { SearchOutlined } from '@ant-design/icons'

const Aside = (props) => {
  const {
    children,
    width,
    isAsideCollapsed,
    isAsideAsDrawer,
    side,
    maxHeight,
    bg,
    p
  } = props

  const isAsideLeftAsDrawer = side === 'left'
  const isAsideRightAsDrawer = side === 'right'

  return (
    <>
      {isAsideAsDrawer && (
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
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        flexBasis={
          isAsideCollapsed
            ? 'var(--ql-aside-collapsed-width)'
            : width || 'var(--ql-aside-width)'
        }
        minWidth={
          isAsideCollapsed
            ? 'var(--ql-aside-collapsed-width)'
            : width || 'var(--ql-aside-width)'
        }
        maxHeight={maxHeight || 'var(--ql-aside-max-height)'}
        position={isAsideAsDrawer && 'absolute'}
        top={isAsideAsDrawer && 0}
        bottom={isAsideAsDrawer && 0}
        left={isAsideAsDrawer && isAsideLeftAsDrawer && 0}
        right={isAsideAsDrawer && isAsideRightAsDrawer && 0}
        zIndex={isAsideAsDrawer && 'var(--ql-zindex-drawer)'}
        bg={bg || 'var(--ql-aside-background)'}
        p={p || 'var(--ql-aside-padding)'}
        overflow='auto'
        wordBreak='break-word'
        {...props}
      >
        {children}
      </Box>
    </>
  )
}

Aside.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isAsideCollapsed: PropTypes.bool,
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bg: PropTypes.string,
  p: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Aside
