import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@qonsoll/react-design'
import HeadingPrimary from '../../Heading/HeadingPrimary'
import Back from '../../Actions/Back'

const ContentWrapperTest = (props) => {
  const {
    firstLevelHidden,
    headingProps,
    alignMiddle,
    children,
    action,
    onBack,
    backBtnProps,
    divided
  } = props

  const DEFAULT_PROPS = {
    marginBottom: 24
  }

  return (
    <Box
      height={!alignMiddle && 'inherit'}
      display='flex'
      flexDirection='column'
      flexGrow={alignMiddle && 1}
    >
      {!firstLevelHidden && (
        <Box
          display='flex'
          alignItems={
            headingProps && !headingProps.subTitle ? 'center' : 'flex-start'
          }
          mb={
            (headingProps && headingProps.marginBottom) ||
            DEFAULT_PROPS.marginBottom
          }
        >
          <Box
            display='flex'
            flex={1}
            alignItems={
              headingProps && !headingProps.subTitle ? 'center' : 'flex-start'
            }
            justifyContent={
              onBack || action || !alignMiddle ? 'flex-start' : 'center'
            }
          >
            {onBack && (
              <Back
                onClick={onBack}
                {...backBtnProps}
                divided={divided !== undefined ? divided : true}
              />
            )}
            <HeadingPrimary {...headingProps} />
          </Box>
          {action && <Box>{action}</Box>}
        </Box>
      )}
      <Box flex={1} height='100%'>
        {children}
      </Box>
    </Box>
  )
}

ContentWrapperTest.propTypes = {
  children: PropTypes.node,
  firstLevelHidden: PropTypes.bool,
  headingProps: PropTypes.object,
  action: PropTypes.node,
  onBack: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  backBtnProps: PropTypes.object,
  divided: PropTypes.bool,
  alignMiddle: PropTypes.bool
}

export default ContentWrapperTest
