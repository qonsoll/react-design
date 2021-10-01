import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'
import HeadingPrimary from '../../Heading/HeadingPrimary'
import Back from '../../Actions/Back'
import { Breadcrumb } from 'antd'

const ContentWrapperTest = (props) => {
  const {
    firstLevelHidden,
    headingProps,
    alignMiddle,
    children,
    action,
    onBack,
    backBtnProps,
    divided,
    breadcrumb
  } = props

  const DEFAULT_PROPS = {
    marginBottom: 24
  }

  return (
    <Box
      height={!alignMiddle ? 'inherit' : undefined}
      display="flex"
      flexDirection="column"
      flexGrow={alignMiddle && 1}
    >
      {!firstLevelHidden && (
        <Box
          display="flex"
          alignItems={
            headingProps && !headingProps.subTitle ? 'center' : 'flex-start'
          }
          mb={
            (headingProps && headingProps.marginBottom) ||
            DEFAULT_PROPS.marginBottom
          }
        >
          <Box
            display="flex"
            flex={1}
            alignItems={
              headingProps && !headingProps.subTitle && !breadcrumb
                ? 'center'
                : 'flex-start'
            }
            justifyContent={
              onBack || action || !alignMiddle ? 'flex-start' : 'center'
            }
            flexDirection={breadcrumb ? 'column' : 'row'}
          >
            {onBack && (
              <Box
                mb={breadcrumb ? [2, 2, 3, 3, 3] : []}
                display="flex"
                alignItems="center"
              >
                <Back
                  onClick={onBack}
                  {...backBtnProps}
                  divided={divided !== undefined ? divided : true}
                />
                {breadcrumb && (
                  <Breadcrumb {...breadcrumb?.props}>
                    {breadcrumb?.children}
                  </Breadcrumb>
                )}
              </Box>
            )}
            <HeadingPrimary {...headingProps} />
          </Box>
          {action && <Box>{action}</Box>}
        </Box>
      )}
      <Box flex={1} height="100%">
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
  alignMiddle: PropTypes.bool,
  breadcrumb: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
}

export default ContentWrapperTest
