import React from 'react'
import Menu from '../Menu'
import Submenu from './Submenu'
import MenuItem from '../MenuItem'
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
  title: 'Components/Menus/Submenu',
  component: Submenu,
  argTypes: {
    children: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Sub-menus or sub-menu items	'
    },
    disabled: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Whether sub-menu is disabled	'
    },
    icon: {
      table: {
        category: 'Default AntD props'
      },
      control: { disable: true },
      description: 'Icon of sub menu	'
    },
    key: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Unique ID of the sub-menu	'
    },
    popupClassName: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Sub-menu class name, not working when mode="inline"	'
    },
    popupOffset: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Sub-menu offset, not working when mode="inline"	'
    },
    title: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Title of sub menu	'
    },
    onTitleClick: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Callback executed when the sub-menu title is clicked	'
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
  args: {
    children: [
      <MenuItem key="1">Menu item #2</MenuItem>,
      <MenuItem key="2">Menu item #3</MenuItem>
    ],
    key: 'submenu',
    title: 'Submenu title'
  }
}

export const Template = (args) => (
  <Menu>
    <Submenu {...args} />
  </Menu>
)
