import React from 'react'
import Menu from './Menu'
import MenuItem from '../MenuItem'
import Group from '../Group'
import Submenu from '../Submenu'
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
  title: 'Components/Menus/Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    defaultOpenKeys: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Array with the keys of default opened sub menus	'
    },
    defaultSelectedKeys: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Array with the keys of default selected menu items	'
    },
    expandIcon: {
      table: {
        category: 'Default AntD props'
      },
      control: { disable: true },
      description: 'Custom expand icon of submenu	'
    },
    forceSubMenuRender: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Render submenu into DOM before it becomes visible	'
    },
    inlineCollapsed: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Specifies the collapsed status when menu is inline mode	'
    },
    inlineIndent: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Indent (in pixels) of inline menu items on each level	'
    },
    mode: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Type of menu	'
    },
    multiple: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Allows selection of multiple items	'
    },
    openKeys: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Array with the keys of currently opened sub-menus	'
    },
    overflowedIndicator: {
      table: {
        category: 'Default AntD props'
      },
      control: { disable: true },
      description: 'Customized icon when menu is collapsed	'
    },
    selectable: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Allows selecting menu items	'
    },
    selectedKeys: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Array with the keys of currently selected menu items	'
    },
    style: {
      table: {
        category: 'Default AntD props'
      },
      control: { disable: true },
      description: 'Style of the root node	'
    },
    subMenuCloseDelay: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Delay time to hide submenu when mouse leaves (in seconds)	'
    },
    subMenuOpenDelay: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Delay time to show submenu when mouse enters, (in seconds)	'
    },
    theme: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Color theme of the menu	'
    },
    triggerSubMenuAction: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Which action can trigger submenu open/close	'
    },
    onClick: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Called when a menu item is clicked	'
    },
    onDeselect: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Called when a menu item is deselected (multiple mode only)	'
    },
    onOpenChange: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Called when sub-menus are opened or closed	'
    },
    onSelect: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Called when a menu item is selected	'
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
  },
  args: { defaultSelectedKeys: ['mail'] }
}

const Template = (args) => (
  <Menu {...args}>
    <MenuItem key="mail" icon={<MailOutlined />}>
      Navigation One
    </MenuItem>
    <MenuItem key="app" disabled icon={<AppstoreOutlined />}>
      Navigation Two
    </MenuItem>
    <Submenu
      key="SubMenu"
      icon={<SettingOutlined />}
      title="Navigation Three - Submenu">
      <Group title="Item 1">
        <MenuItem key="setting:1">Option 1</MenuItem>
        <MenuItem key="setting:2">Option 2</MenuItem>
      </Group>
      <Group title="Item 2">
        <MenuItem key="setting:3">Option 3</MenuItem>
        <MenuItem key="setting:4">Option 4</MenuItem>
      </Group>
    </Submenu>
    <MenuItem key="alipay">
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    </MenuItem>
  </Menu>
)

export const horizontalMenu = Template.bind({})
horizontalMenu.args = { mode: 'horizontal' }

export const verticalMenu = Template.bind({})
verticalMenu.args = { mode: 'vertical', width: '190px' }
