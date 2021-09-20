import React from 'react'
import PropTypes from 'prop-types'
import PositioningWrapper from '../PositioningWrapper'
import ContentWrapper from '../ContentWrapper'
import Graphic from '../../Media/Graphic'

const PageWrapper = (props) => {
  const {
    children,
    height,
    alignMiddle,
    isBottomSticky,
    contentWidth,
    onBack,
    backBtnProps,
    divided,
    graphicProps,
    firstLevelHidden,
    headingProps,
    action,
    breadcrumb
  } = props

  const DEFAULT_BACK_BUTTON_PROPS = {
    divided: true
  }

  return (
    <PositioningWrapper
      height={height} // Quick fix to set height (related to new layout)
      alignMiddle={alignMiddle}
      isBottomSticky={isBottomSticky}
      contentWidth={contentWidth}
      onBack={alignMiddle && onBack}
      backBtnProps={backBtnProps}
      divided={
        divided !== undefined
          ? divided
          : DEFAULT_BACK_BUTTON_PROPS.divided
          ? DEFAULT_BACK_BUTTON_PROPS.divided
          : true
      }
      breadcrumb={alignMiddle && breadcrumb}>
      {graphicProps && graphicProps.src && graphicProps.alt && (
        <Graphic {...graphicProps} />
      )}
      {/* <Graphic {...graphicProps} /> */}
      <ContentWrapper
        firstLevelHidden={firstLevelHidden}
        headingProps={headingProps}
        alignMiddle={alignMiddle}
        action={action}
        onBack={!alignMiddle && onBack}
        backBtnProps={backBtnProps}
        divided={divided !== undefined ? divided : true}
        breadcrumb={!alignMiddle && breadcrumb}>
        {children}
      </ContentWrapper>
    </PositioningWrapper>
  )
}

PageWrapper.propTypes = {
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
  graphicProps: PropTypes.object,
  firstLevelHidden: PropTypes.bool,
  headingProps: PropTypes.object,
  action: PropTypes.node,
  breadcrumb: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
}
PageWrapper.defaultProps = {
  alignMiddle: false,
  firstLevelHidden: false,
  divided: true
}

export default PageWrapper
