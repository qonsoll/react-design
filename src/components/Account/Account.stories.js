import React from 'react'
import Account from './Account'
import { AppstoreOutlined } from '@ant-design/icons'

export default {
  title: 'Components/Account',
  component: Account,
  argTypes: {
    menu: {
      description: 'Menu structure (data source)'
    },
    menuPlacement: {
      description: 'Use to specify dropdown placement.'
    },
    menuArrow: {
      description: 'Use to apply arrow.'
    },
    menuTrigger: {
      description: 'Use to specify trigger.'
    }
  }
}

export const Template = (args) => <Account menu={accountMenu} />

const accountMenu = [
  {
    type: 'item',
    text: 'Item #1',
    icon: <AppstoreOutlined />,
    danger: false,
    disabled: false,
    onClick: () => {
      console.log('Item #1')
    }
  },
  {
    type: 'divider'
  },
  {
    type: 'group',
    text: 'First group',
    children: [
      {
        type: 'item',
        text: 'Item #1',
        icon: <AppstoreOutlined />,
        danger: false,
        disabled: false,
        onClick: () => {
          console.log('First group: Item #1')
        }
      },
      {
        type: 'item',
        text: 'Item #2',
        icon: <AppstoreOutlined />,
        danger: true,
        disabled: false,
        onClick: () => {
          console.log('First group: Item #2')
        }
      },
      {
        type: 'item',
        text: 'Item #3',
        icon: <AppstoreOutlined />,
        danger: false,
        disabled: false,
        onClick: () => {
          console.log('First group: Item #3')
        }
      },
      {
        type: 'group',
        text: 'Second group',
        children: [
          {
            type: 'item',
            text: 'Item #1',
            icon: <AppstoreOutlined />,
            danger: false,
            disabled: false,
            onClick: () => {
              console.log('Second group: Item #1')
            }
          },
          {
            type: 'item',
            text: 'Item #2',
            icon: <AppstoreOutlined />,
            danger: true,
            disabled: false,
            onClick: () => {
              console.log('Second group: Item #2')
            }
          },
          {
            type: 'item',
            text: 'Item #3',
            icon: <AppstoreOutlined />,
            danger: false,
            disabled: false,
            onClick: () => {
              console.log('Second group: Item #3')
            }
          }
        ]
      }
    ]
  },
  {
    type: 'submenu',
    text: 'First submenu',
    popupOffset: ['0', '-16px'],
    disabled: false,
    children: [
      {
        type: 'submenu',
        text: 'Second submenu',
        children: [
          {
            type: 'item',
            text: 'Item #1',
            icon: <AppstoreOutlined />,
            danger: false,
            disabled: false,
            onClick: () => {
              console.log('Second group: Item #1')
            }
          },
          {
            type: 'item',
            text: 'Item #2',
            icon: <AppstoreOutlined />,
            danger: true,
            disabled: false,
            onClick: () => {
              console.log('Second group: Item #2')
            }
          },
          {
            type: 'item',
            text: 'Item #3',
            icon: <AppstoreOutlined />,
            danger: false,
            disabled: false,
            onClick: () => {
              console.log('Second group: Item #3')
            }
          }
        ]
      },
      {
        type: 'submenu',
        text: 'Second submenu',
        children: [
          {
            type: 'item',
            text: 'Item #1',
            icon: <AppstoreOutlined />,
            danger: false,
            disabled: false,
            onClick: () => {
              console.log('Second group: Item #1')
            }
          },
          {
            type: 'item',
            text: 'Item #2',
            icon: <AppstoreOutlined />,
            danger: true,
            disabled: false,
            onClick: () => {
              console.log('Second group: Item #2')
            }
          },
          {
            type: 'item',
            text: 'Item #3',
            icon: <AppstoreOutlined />,
            danger: false,
            disabled: false,
            onClick: () => {
              console.log('Second group: Item #3')
            }
          }
        ]
      }
    ]
  }
]
