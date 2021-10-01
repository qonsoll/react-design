import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Box from '../Box'
import Avatar from '../Media/Avatar'
import Text from '../Typography/Text'
import Menu from '../Menus/Menu'
import MenuItem from '../Menus/MenuItem'
import { Dropdown, Menu as AntMenu } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const AccountAvatarStyled = styled.div`
  height: var(--ql-account-height);
  display: flex;
  align-items: center;
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
    title,
    caption,
    short,
    isEllipsis,
    ref
  } = props
  return (
    <AccountAvatarStyled ref={ref}>
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
          icon={<UserOutlined />}
        />
      </Box>
      {!short && (
        <Box display="flex" flexDirection="column" minWidth={isEllipsis && 0}>
          <Text variant="h5" color="inherit" isEllipsis={isEllipsis}>
            {title}
          </Text>
          <Text variant="caption1" color="inherit" isEllipsis={isEllipsis}>
            {caption}
          </Text>
        </Box>
      )}
    </AccountAvatarStyled>
  )
}

const ComplexMenu = (props) => {
  const { config } = props
  return (
    <>
      {config.map((menuItem, index) => {
        const { type, text, children, ...rest } = menuItem

        const TYPE_TO_COMPONENTS_MAP = {
          item: (key) => <MenuItem key={key} children={text} {...rest} />,
          group: (key) => (
            <MenuGroup key={key} text={text} config={children} {...rest} />
          ),
          submenu: (key) => (
            <SubMenu key={key} text={text} config={children} {...rest} />
          ),
          divider: (key) => <AntMenu.Divider key={key} />
        }

        return (
          TYPE_TO_COMPONENTS_MAP[type] &&
          TYPE_TO_COMPONENTS_MAP[type](index + type)
        )
      })}
    </>
  )
}

const MenuGroup = (props) => {
  const { config, text } = props

  return (
    <AntMenu.ItemGroup title={text}>
      <ComplexMenu key={new Date()} config={config} />
    </AntMenu.ItemGroup>
  )
}

const SubMenu = (props) => {
  const { config, text, ...rest } = props

  return (
    <AntMenu.SubMenu title={text} {...rest}>
      <ComplexMenu key={new Date()} config={config} />
    </AntMenu.SubMenu>
  )
}

const Account = (props) => {
  const { menu, menuPlacement, menuArrow, menuTrigger, ...rest } = props
  return (
    <>
      {menu ? (
        <Dropdown
          overlay={
            <Menu>
              <ComplexMenu config={menu} />
            </Menu>
          }
          placement={menuPlacement}
          arrow={menuArrow}
          trigger={menuTrigger}
        >
          {/* Strange behavior: need additional wrapper (like Box) to render dropdown */}
          <Box>
            <AccountAvatar {...rest} />
          </Box>
        </Dropdown>
      ) : (
        <AccountAvatar {...rest} />
      )}
    </>
  )
}

Account.propTypes = {
  avatar: PropTypes.string,
  avatarSize: PropTypes.oneOf(['large', 'default', 'small']),
  avatarShape: PropTypes.oneOf(['circle', 'square']),
  title: PropTypes.string,
  caption: PropTypes.string,
  short: PropTypes.bool,
  isEllipsis: PropTypes.bool,
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
  menuTrigger: PropTypes.oneOf(['click', 'hover']),
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
