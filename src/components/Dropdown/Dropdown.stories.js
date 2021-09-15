import React from 'react'
import Dropdown from './Dropdown'
import { Button, Menu } from 'antd'
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
} from '../../helpers/arg-types'
import CSSPropValues from '../../helpers/css-prop-values'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    arrow: {
      table: {
        category: 'Default AntD props for Dropdown'
      },
      description: 'Whether the dropdown arrow should be visible'
    },
    disabled: {
      table: {
        category: 'Default AntD props for Dropdown'
      },
      description: 'Whether the dropdown menu is disabled'
    },
    destroyPopupOnHide: {
      table: {
        category: 'Default AntD props for Dropdown'
      },
      description: 'Whether destroy dropdown when hidden'
    },
    getPopupContainer: {
      table: {
        category: 'Default AntD props for Dropdown'
      },
      description:
        'To set the container of the dropdown menu. The default is to create a div element in body, but you can reset it to the scrolling area and make a relative reposition'
    },
    overlay: {
      table: {
        category: 'Default AntD props for Dropdown'
      },
      description: 'The dropdown menu'
    },
    overlayClassName: {
      table: {
        category: 'Default AntD props for Dropdown'
      },
      description: 'The class name of the dropdown root element',
      control: { type: 'text' }
    },
    overlayStyle: {
      table: {
        category: 'Default AntD props for Dropdown'
      },
      description: 'The style of the dropdown root element'
    },
    placement: {
      table: {
        category: 'Default AntD props for Dropdown'
      },
      options: [
        'bottomLeft',
        'bottomCenter',
        'bottomRight',
        'topLeft',
        'topCenter',
        'topRight'
      ],
      control: { type: 'select' },
      description: 'Placement of popup menu'
    },
    trigger: {
      table: {
        category: 'Default AntD props for Dropdown'
      },
      options: ['click', 'hover', 'contextMenu'],
      control: { type: 'select' },
      description:
        "The trigger mode which executes the dropdown action. Note that hover can't be used on touchscreens"
    },
    visible: {
      table: {
        category: 'Default AntD props for Dropdown'
      },
      description: 'Whether the dropdown menu is currently visible'
    },
    onVisibleChange: {
      table: {
        category: 'Default AntD props for Dropdown'
      },
      description: 'Called when the visible state is changed'
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
        category: 'Extra'
      },
      control: CSSPropValues.whiteSpace
    },
    cursor: {
      table: {
        category: 'Extra'
      },
      control: CSSPropValues.cursor
    },
    wordBreak: {
      table: {
        category: 'Extra'
      },
      control: CSSPropValues.wordBreak
    },
    zoom: {
      table: {
        category: 'Extra'
      },
      description: CSSPropValues.zoom.description,
      control: { type: CSSPropValues.zoom.type }
    },
    transform: {
      table: {
        category: 'Extra'
      },
      description: CSSPropValues.transform.description,
      control: { type: CSSPropValues.transform.type }
    }
  }
}

export const Template = (args) => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Item 1</Menu.Item>
      <Menu.Item key="2">Item 2</Menu.Item>
      <Menu.Item key="3">Item 3</Menu.Item>
    </Menu>
  )
  return (
    <Dropdown {...args} overlay={menu}>
      <Button>Dropdown</Button>
    </Dropdown>
  )
}
