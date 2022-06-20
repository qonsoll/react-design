import ContentWrapper from '../ContentWrapper'
import Graphic from '../../Media/Graphic'
import PositioningWrapper from '../PositioningWrapper'
import PropTypes from 'prop-types'
import React from 'react'

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
    breadcrumbs,
    contentHeightWithoutHeader
  } = props

  return (
    <PositioningWrapper
      height={height} // Quick fix to set height (related to new layout)
      alignMiddle={alignMiddle}
      isBottomSticky={isBottomSticky}
      contentWidth={contentWidth}
      onBack={alignMiddle && onBack}
      backBtnProps={backBtnProps}
      divided={divided ?? true}
      breadcrumbs={alignMiddle && breadcrumbs}
    >
      {graphicProps && graphicProps.src && graphicProps.alt && (
        <Graphic {...graphicProps} />
      )}
      <ContentWrapper
        firstLevelHidden={firstLevelHidden}
        headingProps={headingProps}
        alignMiddle={alignMiddle}
        action={action}
        onBack={!alignMiddle && onBack}
        backBtnProps={backBtnProps}
        divided={divided ?? true}
        breadcrumbs={!alignMiddle && breadcrumbs}
        contentHeightWithoutHeader={contentHeightWithoutHeader}
      >
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
  contentHeightWithoutHeader: PropTypes.oneOfType([
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
  breadcrumbs: PropTypes.node
}
PageWrapper.defaultProps = {
  alignMiddle: false,
  firstLevelHidden: false,
  divided: true
}

export default PageWrapper
