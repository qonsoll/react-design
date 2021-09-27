import React from 'react'
import Menu from '../Menu'
import Group from './Group'
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
  title: 'Components/Menus/Group',
  component: Group,
  argTypes: {
    children: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Sub-menu items	'
    },
    title: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The title of the group	'
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
    title: 'Group title'
  }
}

export const Template = (args) => (
  <Menu>
    <Group {...args} />
  </Menu>
)
