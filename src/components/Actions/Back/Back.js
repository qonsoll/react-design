import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from 'antd'
import Button from '../../Button'
import Divider from '../../Divider'
import Box from '../../Box'
import { ArrowLeftOutlined } from '@ant-design/icons'

const DEFAULT_PROPS = {
  tooltipPlacement: 'topLeft'
}

const Back = (props) => {
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
        <Box display='flex' alignItems='center'>
          <Tooltip
            title={tooltip}
            placement={tooltipPlacement || DEFAULT_PROPS.tooltipPlacement}
          >
            <Button
              onClick={onClick}
              type='text'
              icon={iconNode || iconNodeLeft || iconNodeRight}
              {...props}
              danger={false}
            />
          </Tooltip>
          {!divided ? null : (
            <Divider type='vertical' mr={3} height={24} top='unset' />
          )}
        </Box>
      ) : (
        <Box display='flex' alignItems='center'>
          <Button
            onClick={onClick}
            type='text'
            icon={iconNode || iconNodeLeft}
            {...props}
            danger={false}
          >
            {text}
            {iconNodeRight}
          </Button>
          {!divided ? null : (
            <Divider type='vertical' mr={3} height={24} top='unset' />
          )}
        </Box>
      )}
    </Fragment>
  )
}

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
  props: PropTypes.object
}
Back.defaultProps = {
  text: 'Back'
}

export default Back
