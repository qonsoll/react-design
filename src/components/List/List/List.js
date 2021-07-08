import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Row from '../../Grid/Row'
import Col from '../../Grid/Col'
import Skeleton from '../../Skeleton'
import { Typography, Empty } from 'antd'

/**
 * List (19 Dec 2020)
 *
 * @since      0.0.1
 *
 * @param {array}          [items]                         DataSource array for list
 * @param {node}           [renderItem]                    Use to specify item view.
 * @param {boolean}        [horizontal]                    Use to enable horizontal view for list.
 * @param {boolean}        [grid]                          Use to enable grid view for list.
 * @param {oneOfType}      [columns]                       Use to specify amount of column for grid list.
 * @param {boolean}        [scrollable]                    Use to make list scrollable.
 * @param {oneOfType}      [maxHeight]                     Use to specify list max-height.
 * @param {string}         [title]                         Use to add title text.
 * @param {object}         [titleWidthProps]               Use to specify title width.
 * @param {object}         [titleProps]                    Use to specify title props.
 * @param {node}           [action]                        Use to add actions.
 * @param {object}         [headerActionWidthProps]        Use to specify width for section with actions in header.
 * @param {object}         [footerActionWidthProps]        Use to specify width for section with actions in footer.
 * @param {boolean}        [isListHeader]                  Use to enable/disable header.
 * @param {object}         [headerPositioningProps]        Use to specify header positioning.
 * @param {boolean}        [isListFooter]                  Use to enable/disable footer.
 * @param {object}         [footerPositioningProps]        Use to specify footer positioning.
 * @param {boolean}        [isLoaded]                      Use to activate loading state (enabling skeleton).
 * @param {boolean}        [isEmpty]                       Use to show empty list.
 * @param {boolean}        [showEmpty]                     [FIXME] Very interesting property :)
 *
 * @return {ReactComponent}
 */

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
