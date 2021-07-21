import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Row from '../../Grid/Row'
import Col from '../../Grid/Col'
import Skeleton from '../../Skeleton'
import { Typography, Empty } from 'antd'

import {
  HORIZONTAL_LAYOUT_PROPS,
  DEFAULT_LAYOUT_PROPS,
  GRID_ITEM_DEFAULT_PROPS,
  DEFAULT_VERTICAL_SCROLL_PROPS
} from './constants'

const List = (props) => {
  const {
    items,
    renderItem,
    horizontal,
    grid,
    columns,
    scrollable,
    maxHeight,
    title,
    titleWidthProps,
    titleProps,
    action,
    headerActionWidthProps,
    footerActionWidthProps,
    isListHeader,
    headerPositioningProps,
    isListFooter,
    footerPositioningProps,
    isLoaded,
    isEmpty,
    showEmpty
  } = props

  const listLayoutProps =
    !grid && horizontal ? HORIZONTAL_LAYOUT_PROPS : DEFAULT_LAYOUT_PROPS

  const isColumnsNumber = columns && typeof columns === 'number'
  const isColumnsObject = columns && typeof columns === 'object'
  const colProps = isColumnsNumber
    ? { span: 24 / columns }
    : isColumnsObject
    ? columns
    : GRID_ITEM_DEFAULT_PROPS

  const scrollProps =
    !grid && !horizontal && scrollable && DEFAULT_VERTICAL_SCROLL_PROPS

  const list =
    items &&
    items.map((item) =>
      grid && !horizontal ? (
        <Col key={item.id} {...colProps} display='flex' flexDirection='column'>
          {renderItem(item)}
        </Col>
      ) : (
        renderItem(item)
      )
    )

  return (
    <React.Fragment>
      {isListHeader && (
        <Row mb={24} {...headerPositioningProps}>
          {title && (
            <Col {...titleWidthProps}>
              <Typography.Title {...titleProps}>{title}</Typography.Title>
            </Col>
          )}
          {action && <Col {...headerActionWidthProps}>{action}</Col>}
        </Row>
      )}
      <Row>
        {grid && (
          <Fragment>
            {!isLoaded && !isEmpty && (
              <Skeleton title={false} paragraph={{ rows: 5 }} />
            )}
            {isLoaded && isEmpty && <Empty />}
            {isLoaded && !isEmpty && list}
          </Fragment>
        )}
        {!grid && (
          <Col
            span={24}
            {...listLayoutProps}
            {...scrollProps}
            maxHeight={maxHeight}
          >
            {!isLoaded && <Skeleton title={false} paragraph={{ rows: 5 }} />}
            {isLoaded && isEmpty && showEmpty && (
              <Empty description={false} image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}
            {isLoaded && !isEmpty && list}
          </Col>
        )}
      </Row>
      {isListFooter && (
        <Row mt={24} {...footerPositioningProps}>
          <Col {...footerActionWidthProps}>{action}</Col>
        </Row>
      )}
    </React.Fragment>
  )
}

List.propTypes = {
  items: PropTypes.array,
  renderItem: PropTypes.node,
  horizontal: PropTypes.bool,
  grid: PropTypes.bool,
  columns: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  scrollable: PropTypes.bool,
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  titleWidthProps: PropTypes.object,
  titleProps: PropTypes.object,
  action: PropTypes.node,
  headerActionWidthProps: PropTypes.object,
  footerActionWidthProps: PropTypes.object,
  isListHeader: PropTypes.bool,
  headerPositioningProps: PropTypes.object,
  isListFooter: PropTypes.bool,
  footerPositioningProps: PropTypes.object,
  isLoaded: PropTypes.bool,
  isEmpty: PropTypes.bool,
  showEmpty: PropTypes.bool
}

export default List
