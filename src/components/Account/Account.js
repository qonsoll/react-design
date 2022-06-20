import { Menu as AntMenu, Dropdown } from 'antd'
import React, { useMemo } from 'react'

import Avatar from '../Media/Avatar'
import Box from '../Box'
import Menu from '../Menus/Menu'
import MenuItem from '../Menus/MenuItem'
import PropTypes from 'prop-types'
import Remove from '../Actions/Remove'
import Text from '../Typography/Text'
import styled from 'styled-components'

const DropdownStyled = styled(Dropdown)`
  &.ant-dropdown-trigger {
    flex-grow: 1;
    min-width: ${(props) => props?.isEllipsis && 0};
  }
`

const AccountAvatarStyled = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  height: var(--ql-account-height);
  min-width: ${(props) => props?.isEllipsis && 0};
  cursor: pointer;
  color: var(--ql-account-color);
  transition: var(--ql-account-transition);
  & > div:first-child {
    box-shadow: var(--ql-account-avatar-box-shadow);
    transition: var(--ql-account-transition);
  }
  &:hover {
    color: var(--ql-account-color-hover);
    transition: var(--ql-account-transition);
    & > div:first-child {
      box-shadow: var(--ql-account-avatar-box-shadow-hover);
      transition: var(--ql-account-transition);
    }
  }
`

const AccountAvatar = (props) => {
  const {
    avatar,
    avatarSize,
    avatarShape,
    avatarIcon,
    avatarText,
    title,
    caption,
    short,
    isEllipsis,
    onAccountClick,
    ref
  } = props
  return (
    <AccountAvatarStyled
      ref={ref}
      isEllipsis={isEllipsis}
      onClick={onAccountClick}
    >
      <Box
        boxShadow="inherit"
        p="3px"
        borderRadius={avatarShape === 'square' ? 0 : '50%'}
        mr={short ? 'unset' : 3}
      >
        <Avatar
          src={avatar}
          size={avatarSize || 'large'}
          shape={avatarShape}
          icon={avatarIcon}
          bg="var(--ql-account-avatar-bg)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {avatarText}
        </Avatar>
      </Box>
      {!short && (
        <Box
          display="flex"
          flexDirection="column"
          flexGrow={1}
          minWidth={isEllipsis && 0}
        >
          <Text
            color="var(--ql-account-title-color)"
            fontWeight="var(--ql-account-title-font-weight)"
            isEllipsis={isEllipsis}
          >
            {title}
          </Text>
          <Text
            variant="caption1"
            color="var(--ql-account-caption-color)"
            fontWeight="var(--ql-account-caption-font-weight)"
            isEllipsis={isEllipsis}
          >
            {caption}
          </Text>
        </Box>
      )}
    </AccountAvatarStyled>
  )
}
const ComplexMenuItem = (props) => {
  const { type, text, children, ...rest } = props

  const TYPE_TO_COMPONENTS_MAP = {
    item: <MenuItem {...rest}>{text}</MenuItem>,
    group: <MenuGroup text={text} config={children} {...rest} />,
    submenu: <SubMenu text={text} config={children} />,
    divider: <AntMenu.Divider />,
    remove: <Remove {...props} type={props?.buttonType} />
  }

  return TYPE_TO_COMPONENTS_MAP[type] || null
}

const MenuGroup = (props) => {
  const { config, text } = props

  const menuComputed = useMemo(
    () => (
      <AntMenu.ItemGroup title={text}>
        {config.map((menuItem, index) => (
          <ComplexMenuItem {...menuItem} key={index} />
        )) || null}
      </AntMenu.ItemGroup>
    ),
    [config, text]
  )

  return menuComputed
}

const SubMenu = (props) => {
  const { config, text, ...rest } = props

  const menuComputed = useMemo(
    () => (
      <AntMenu.SubMenu title={text} {...rest}>
        {config.map((menuItem, index) => (
          <ComplexMenuItem {...menuItem} key={index} />
        )) || null}
      </AntMenu.SubMenu>
    ),
    [config, rest, text]
  )

  return menuComputed
}

const Account = (props) => {
  const {
    menu,
    menuPlacement,
    menuArrow,
    menuTrigger,
    suffix,
    isEllipsis,
    onAccountClick,
    ...rest
  } = props

  const menuComputed = useMemo(
    () => (
      <Menu>
        {menu.map((menuItem, index) => (
          <ComplexMenuItem {...menuItem} key={index} />
        )) || null}
      </Menu>
    ),
    [menu]
  )

  return (
    <Box display="flex" alignItems="center">
      {menu ? (
        <>
          <DropdownStyled
            overlay={menuComputed}
            placement={menuPlacement}
            arrow={menuArrow}
            trigger={menuTrigger}
            isEllipsis={isEllipsis}
          >
            {/* FIXME: Strange behavior: need additional wrapper (like Box) to render dropdown */}
            <Box>
              <AccountAvatar
                isEllipsis={isEllipsis}
                onAccountClick={onAccountClick}
                {...rest}
              />
            </Box>
          </DropdownStyled>
          {suffix}
        </>
      ) : (
        <>
          <AccountAvatar
            isEllipsis={isEllipsis}
            onAccountClick={onAccountClick}
            {...rest}
          />
          {suffix}
        </>
      )}
    </Box>
  )
}

Account.propTypes = {
  onAccountClick: PropTypes.func,
  avatar: PropTypes.string,
  avatarSize: PropTypes.oneOf(['large', 'default', 'small']),
  avatarShape: PropTypes.oneOf(['circle', 'square']),
  avatarIcon: PropTypes.node,
  avatarText: PropTypes.node,
  title: PropTypes.string,
  caption: PropTypes.string,
  short: PropTypes.bool,
  isEllipsis: PropTypes.bool,
  suffix: PropTypes.node,
  menu: PropTypes.array,
  menuPlacement: PropTypes.oneOf([
    'bottomLeft',
    'bottomCenter',
    'bottomRight',
    'topLeft',
    'topCenter',
    'topRight'
  ]),
  menuArrow: PropTypes.bool,
  menuTrigger: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.number
  ]),
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ])
}

Account.defaultProps = {
  avatarSize: 'large',
  avatarShape: 'circle',
  short: false,
  isEllipsis: false,
  menuPlacement: 'bottomLeft',
  menuArrow: false,
  menuTrigger: 'hover'
}

export default Account
