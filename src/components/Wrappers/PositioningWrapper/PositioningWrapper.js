import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'
import Back from '../../Actions/Back'

const PositioningWrapper = (props) => {
  const {
    children,
    alignMiddle,
    contentWidth,
    onBack,
    backBtnProps,
    divided,
    isBottomSticky
  } = props

  return (
    <Box
      height={(alignMiddle || isBottomSticky) && 'inherit'}
      display='flex'
      justifyContent={alignMiddle && 'center'}
      flexDirection='column'
      // minHeight='fit-content'
    >
      {onBack && (
        <Box mb={[2, 2, 2, 0, 0]}>
          <Back onClick={onBack} {...backBtnProps} divided={divided} />
        </Box>
      )}
      <Box
        display={alignMiddle && onBack && 'flex'}
        alignItems={alignMiddle && onBack && 'center'}
        flex={(!alignMiddle || (alignMiddle && onBack)) && 1}
        height={(!alignMiddle || (alignMiddle && onBack)) && '100%'}
        // minHeight='fit-content'
        width={alignMiddle && contentWidth}
        ml={alignMiddle && contentWidth && 'auto'}
        mr={alignMiddle && contentWidth && 'auto'}
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
  onBack: PropTypes.func,
  backBtnProps: PropTypes.object,
  divided: PropTypes.bool,
  isBottomSticky: PropTypes.bool
}

export default PositioningWrapper
