import React from 'react'
import Menu from '../Menu'
import MenuItem from './MenuItem'
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from '@ant-design/icons'
import {
  spaceArgTypes,
  colorArgTypes,
  typographyArgTypes,
  layoutArgTypes,
  flexboxArgTypes,
  backgroundArgTypes,
  borderArgTypes,
  positionArgTypes,
  shadowArgTypes
} from '../../../helpers/arg-types'
import CSSPropValues from '../../../helpers/css-prop-values'

export default {
  title: 'Components/Menus/MenuItem',
  component: MenuItem,
  argTypes: {
    danger: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Display the danger style	'
    },
    disabled: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Whether menu item is disabled	'
    },
    icon: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The icon of the menu item	'
    },
    key: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Unique ID of the menu item	'
    },
    title: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Set display title for collapsed item	'
    },
    ...spaceArgTypes,
    ...colorArgTypes,
    ...typographyArgTypes,
    ...layoutArgTypes,
    ...flexboxArgTypes,
    ...backgroundArgTypes,
    ...borderArgTypes,
    ...positionArgTypes,
    ...shadowArgTypes,
    whiteSpace: {
      table: {
        category: 'Extra CSS props'
      },
      control: CSSPropValues.whiteSpace
    },
    cursor: {
      table: {
        category: 'Extra CSS props'
      },
      control: CSSPropValues.cursor
    },
    wordBreak: {
      table: {
        category: 'Extra CSS props'
      },
      control: CSSPropValues.wordBreak
    },
    zoom: {
      table: {
        category: 'Extra CSS props'
      },
      control: CSSPropValues.zoom
    },
    transform: {
      table: {
        category: 'Extra CSS props'
      },
      control: CSSPropValues.transform
    }
  }
}

export const Template = (args) => (
  <Menu>
    <MenuItem icon={<AppstoreOutlined />} key="appstore" {...args}>
      App store
    </MenuItem>
    <MenuItem disabled icon={<MailOutlined />} key="mail" {...args}>
      Mail
    </MenuItem>
    <MenuItem danger icon={<SettingOutlined />} key="settings" {...args}>
      Settings
    </MenuItem>
  </Menu>
)
