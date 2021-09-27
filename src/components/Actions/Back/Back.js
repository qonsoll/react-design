import React, { Fragment, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from 'antd'
import Button from '../../Button'
import Divider from '../../Divider'
import Box from '../../Box'
import { ArrowLeftOutlined } from '@ant-design/icons'

const DEFAULT_PROPS = {
  tooltipPlacement: 'topLeft'
}

const Back = forwardRef((props, ref) => {
  const {
    text,
    icon,
    iconLeft,
    iconRight,
    onClick,
    tooltip,
    tooltipPlacement,
    divided
  } = props

  const iconNode =
    typeof icon === 'boolean' || typeof icon === 'undefined' ? (
      <ArrowLeftOutlined />
    ) : (
      icon
    )
  const iconNodeLeft =
    typeof iconLeft === 'boolean' || typeof icon === 'undefined' ? (
      <ArrowLeftOutlined />
    ) : (
      iconLeft
    )
  const iconNodeRight =
    typeof iconRight === 'boolean' ? <ArrowLeftOutlined /> : iconRight

  return (
    <Fragment>
      {!text ? (
        <Box display="flex" alignItems="center">
          <Tooltip
            title={tooltip}
            placement={tooltipPlacement || DEFAULT_PROPS.tooltipPlacement}>
            <Button
              onClick={onClick}
              type="text"
              icon={iconNode || iconNodeLeft || iconNodeRight}
              {...props}
              danger={false}
              ref={ref}
            />
          </Tooltip>
          {!divided ? null : (
            <Divider type="vertical" mr={3} height={24} top="unset" />
          )}
        </Box>
      ) : (
        <Box display="flex" alignItems="center">
          <Button
            onClick={onClick}
            type="text"
            icon={iconNode || iconNodeLeft}
            {...props}
            danger={false}
            ref={ref}>
            {text}
            {iconNodeRight}
          </Button>
          {!divided ? null : (
            <Divider type="vertical" mr={3} height={24} top="unset" />
          )}
        </Box>
      )}
    </Fragment>
  )
})

Back.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  onClick: PropTypes.func,
  tooltip: PropTypes.string,
  tooltipPlacement: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left',
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'leftTop',
    'leftBottom',
    'rightTop',
    'rightBottom'
  ]),
  divided: PropTypes.bool,
  props: PropTypes.shape({
    type: PropTypes.oneOf(['primary', 'secondary', 'text', 'link', 'ghost']),
    danger: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    ghost: PropTypes.bool,
    href: PropTypes.string,
    htmlType: PropTypes.string,
    loading: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({ delay: PropTypes.number })
    ]),
    shape: PropTypes.oneOf(['circle', 'round']),
    size: PropTypes.oneOf(['small', 'middle', 'large']),
    target: PropTypes.string
  })
}

export default Back
