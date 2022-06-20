import React, { useMemo } from 'react'

import Back from '../../Actions/Back'
import Box from '../../Box'
import PropTypes from 'prop-types'

const PositioningWrapper = (props) => {
  const {
    children,
    height,
    alignMiddle,
    contentWidth,
    onBack,
    backBtnProps,
    divided,
    isBottomSticky,
    breadcrumbs
  } = props

  // [COMPUTED PROPERTIES]
  const wrapperHeightComputed = useMemo(
    () => height || ((alignMiddle || isBottomSticky) && 'inherit') || undefined,
    [alignMiddle, height, isBottomSticky]
  )
  const wrapperJustifyContentComputed = useMemo(
    () => (alignMiddle && 'center') || undefined,
    [alignMiddle]
  )
  const heightComputed = useMemo(
    () => ((!alignMiddle || (alignMiddle && onBack)) && '100%') || undefined,
    [alignMiddle, onBack]
  )
  const widthComputed = useMemo(
    () =>
      (alignMiddle && contentWidth && Array.isArray(contentWidth)
        ? contentWidth
        : contentWidth?.toString()) || undefined,
    [alignMiddle, contentWidth]
  )
  const marginComputed = useMemo(
    () => (alignMiddle && contentWidth && 'auto') || undefined,
    [alignMiddle, contentWidth]
  )
  const displayComputed = useMemo(
    () => (alignMiddle && onBack ? 'flex' : 'block'),
    [alignMiddle, onBack]
  )
  const alignItemsComputed = useMemo(
    () => (alignMiddle && onBack && 'center') || undefined,
    [alignMiddle, onBack]
  )
  const flexComputed = useMemo(
    () => ((!alignMiddle || (alignMiddle && onBack)) && 1) || undefined,
    [alignMiddle, onBack]
  )

  return (
    <Box
      height={wrapperHeightComputed} // Quick fix to set height (related to new layout)
      display="flex"
      justifyContent={wrapperJustifyContentComputed}
      flexDirection="column"
      // minHeight='fit-content'
    >
      {onBack && (
        <Box mb={[2, 2, 2, 0]} display="flex" alignItems="center">
          <Back onClick={onBack} {...backBtnProps} divided={divided} />
          {breadcrumbs}
        </Box>
      )}
      <Box
        display={displayComputed}
        alignItems={alignItemsComputed}
        flex={flexComputed}
        height={heightComputed}
        // minHeight='fit-content'
        width={widthComputed}
        ml={marginComputed}
        mr={marginComputed}
      >
        {children}
      </Box>
    </Box>
  )
}

PositioningWrapper.propTypes = {
  children: PropTypes.node,
  alignMiddle: PropTypes.bool,
  contentWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),
  onBack: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  backBtnProps: PropTypes.object,
  divided: PropTypes.bool,
  isBottomSticky: PropTypes.bool,
  breadcrumbs: PropTypes.node
}

export default PositioningWrapper
