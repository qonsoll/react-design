import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  space,
  color,
  layout,
  background,
  border,
  shadow,
  compose,
  system,
  typography,
  flexbox,
  position
} from 'styled-system'
import Box from '../Box'
import Text from '../Typography/Text'
import Badge from '../Badge'
import Popover from '../Popover'
import Icon from '../Icon'
import { Menu } from 'antd'
import { RightOutlined } from '@ant-design/icons'

const StyledDiv = styled.div`
  display: flex;
  min-height: var(--ql-navigation-item-height);
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: var(--text-color);
    box-shadow: ${(props) =>
      props.vertical
        ? 'inset -1px 0 rgba(0 0 0 / 20%)'
        : 'inset 0 -3px rgba(0 0 0 / 20%)'};
    transition: all 0.2s ease-in-out;
  }
  &:active {
    background: rgba(0 0 0 / 4%);
    box-shadow: ${(props) =>
      props.vertical
        ? 'inset -1px 0 rgba(0 0 0 / 32%)'
        : 'inset 0 -3px rgba(0 0 0 / 32%)'};
    transition: all 0.2s ease-in-out;
  }
`
// padding: ${(props) => (props.vertical ? '0 24px' : '0 16px')};
// background: ${(props) =>
//   props.vertical
//     ? 'linear-gradient(90deg, rgba(0 0 0 / 5%), rgba(0 0 0 / 0%))'
//     : 'linear-gradient(0deg, rgba(0 0 0 / 5%), rgba(0 0 0 / 0%))'};
// background: ${(props) =>
//   props.vertical
//     ? 'linear-gradient(90deg, rgba(0 0 0 / 8%), rgba(0 0 0 / 2%))'
//     : 'linear-gradient(0deg, rgba(0 0 0 / 8%), rgba(0 0 0 / 2%))'};

/**
 * Composing props from styled system
 */
const WrapperStyleProps = compose(
  space,
  color,
  typography,
  layout,
  flexbox,
  background,
  border,
  position,
  shadow,
  system({
    whiteSpace: true,
    cursor: true,
    wordBreak: true,
    zoom: true,
    transform: true,
    transition: true
  })
)

/**
 * Building styled Wrapper.
 */
const Wrapper = styled(StyledDiv).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => defaultValidatorFn(prop)
})(WrapperStyleProps)

const ItemLayout = (props) => {
  const {
    icon,
    text,
    caption,
    iconSize,
    iconColor,
    spaceBetween,
    vertical,
    badgeLabel,
    badgeSize,
    subMenu,
    isCollapsed
  } = props

  return (
    <>
      {icon && (
        <Icon
          component={icon}
          size={iconSize}
          color={iconColor}
          mr={!isCollapsed && (spaceBetween || 2)}
        />
      )}
      {!isCollapsed && (
        <Box display='flex' flexDirection='column' flexGrow={1} minWidth={0}>
          <Text color='inherit' isEllipsis>
            {text}
          </Text>
          {caption && (
            <Text color='inherit' variant='caption1' isEllipsis>
              {caption}
            </Text>
          )}
        </Box>
      )}
      {badgeLabel && (
        <Badge count={badgeLabel} size={badgeSize} pl={2} ml='auto' mr={-12} />
      )}
      {vertical && subMenu && (
        <Icon
          component={<RightOutlined />}
          size='small'
          color={iconColor}
          mr={-12}
        />
      )}
    </>
  )
}

const NavigationItem = (props) => {
  const { vertical, subMenu, subMenuPlacement, subMenuTrigger } = props

  return (
    <>
      {subMenu ? (
        <Popover
          content={
            <Menu>
              <Menu.Item onClick={() => {}}>Item 1</Menu.Item>
              <Menu.Item onClick={() => {}} danger>
                Item 2
              </Menu.Item>
            </Menu>
          }
          placement={subMenuPlacement || 'right'}
          trigger={subMenuTrigger || 'hover'}
        >
          <Wrapper vertical={vertical}>
            <ItemLayout {...props} />
          </Wrapper>
        </Popover>
      ) : (
        <Wrapper vertical={vertical}>
          <ItemLayout {...props} />
        </Wrapper>
      )}
    </>
  )
}

NavigationItem.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
  iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  iconColor: PropTypes.string,
  spaceBetween: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default NavigationItem
