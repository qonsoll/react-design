import Back from '../../Actions/Back'
import Box from '../../Box'
import HeadingPrimary from '../../Heading/HeadingPrimary'
import PropTypes from 'prop-types'
import React from 'react'

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
    breadcrumbs,
    contentHeightWithoutHeader,
    innerContentWrapperStyles
  } = props

  const DEFAULT_PROPS = { marginBottom: 24 }

  return (
    <Box
      height={!alignMiddle ? 'inherit' : undefined}
      display="flex"
      flexDirection="column"
      flexGrow={alignMiddle && 1}
    >
      {!firstLevelHidden && (
        <>
          {breadcrumbs && (
            <Box
              mb={breadcrumbs ? '8px' : undefined}
              display="flex"
              alignItems="center"
            >
              <Back
                onClick={onBack}
                {...backBtnProps}
                divided={divided ?? true}
              />

              {breadcrumbs}
            </Box>
          )}

          <Box
            display="flex"
            alignItems={headingProps ? 'center' : 'flex-start'}
            mt={headingProps && headingProps.marginTop}
            mb={
              (headingProps && headingProps.marginBottom) ||
              DEFAULT_PROPS.marginBottom
            }
          >
            <Box
              display="flex"
              flex={1}
              alignItems={
                headingProps && !headingProps.subTitle && !breadcrumbs
                  ? 'center'
                  : 'flex-start'
              }
              justifyContent={
                onBack || action || !alignMiddle ? 'flex-start' : 'center'
              }
              flexDirection={breadcrumbs ? 'column' : 'row'}
            >
              {onBack && !breadcrumbs && (
                <Back
                  onClick={onBack}
                  {...backBtnProps}
                  divided={divided ?? true}
                />
              )}

              <HeadingPrimary {...headingProps} />
            </Box>

            {action && <Box>{action}</Box>}
          </Box>
        </>
      )}
      <Box flex={1} height={contentHeightWithoutHeader || '100%'} {...innerContentWrapperStyles}>
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
  breadcrumbs: PropTypes.node,
  contentHeightWithoutHeader: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ])
}

export default ContentWrapperTest
