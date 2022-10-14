import React from 'react'
import Account from './Account'
import { AppstoreOutlined } from '@ant-design/icons'
import MenuItem from '../Menus/MenuItem'

import { BADGE } from '@geometricpanda/storybook-addon-badges'
import { Menu } from 'antd'

export default {
  title: 'Components/Account',
  component: Account,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'This is a component that is designed to display the user account of the application, as well as a menu with all the actions that relate to the account.'
      }
    },
    badges: [BADGE.NEEDS_REVISION]
  },
  argTypes: {
    avatar: {
      description: 'Use it to set avatar src (url).',
      control: { type: 'text' }
    },
    avatarSize: {
      description: 'Use it to set avatar size.',
      control: { type: 'select', options: ['large', 'default', 'small'] }
    },
    avatarShape: {
      description: 'Use it to set avatar shape.',
      control: { type: 'select', options: ['circle', 'square'] }
    },
    avatarIcon: {
      description: 'Use it to set avatar icon.',
      control: { type: 'text' }
    },
    avatarText: {
      description: 'Use it to set avatar text.',
      control: { type: 'text' }
    },
    title: {
      description: 'Use it to specify title.',
      control: { type: 'text' }
    },
    caption: {
      description: 'Use it to specify caption.',
      control: { type: 'text' }
    },
    short: {
      description:
        'Use it to specify component view (with title and caption or without)',
      control: { type: 'boolean' }
    },
    isEllipsis: {
      description: 'Use it to make title and caption truncated.',
      control: { type: 'boolean' }
    },
    suffix: {
      description:
        'Use it to insert smth. after title and caption (it could be button/icon/badge/image/etc.).',
      control: { type: 'text' }
    },
    menu: {
      description: 'Menu structure (data source)',
      control: { type: 'text' }
    },
    menuPlacement: {
      description: 'Use to specify dropdown placement.',
      control: {
        type: 'select',
        options: [
          'bottomLeft',
          'bottomCenter',
          'bottomRight',
          'topLeft',
          'topCenter',
          'topRight'
        ]
      }
    },
    menuArrow: {
      description: 'Use to apply/remove arrow.',
      control: { type: 'boolean' }
    },
    menuTrigger: {
      description: 'Use to specify trigger (click/hover).',
      control: { type: 'select', options: ['click', 'hover'] }
    },
    onAccountClick: {
      description: 'Use to specify action for component.',
      control: { type: 'text' }
    },
    ref: {
      description: 'FIXME: need correct description',
      control: { type: 'text' }
    }
    // 'other properties': {
    //   description:
    //     'Set any other properties (accepted by the Box) to change the default settings. [Read more >](/?path=/story/components-box--template)'
    // }
  },
  args: {
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQhSyZzBEk_ImJli4Fr_mfBeDJYjnFZTE4yg&usqp=CAU',
    title: 'User name',
    caption: 'user@gmail.com',
    menu: [
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
        type: 'item',
        text: 'Item #2',
        icon: <AppstoreOutlined />,
        danger: false,
        disabled: false,
        onClick: () => {
          console.log('Item #2')
        }
      }
    ]
  }
}

const Template = (args) => <Account {...args} />

export const full = Template.bind({})

export const short = Template.bind({})
short.args = {
  short: true,
  menuPlacement: 'bottomCenter'
}

// const accountMenu = [
//   {
//     type: 'item',
//     text: 'Item #1',
//     icon: <AppstoreOutlined />,
//     danger: false,
//     disabled: false,
//     onClick: () => {
//       console.log('Item #1')
//     }
//   }
//   {
//     type: 'divider'
//   }
//   {
//     type: 'group',
//     text: 'First group',
//     children: [
//       {
//         type: 'item',
//         text: 'Item #1',
//         icon: <AppstoreOutlined />,
//         danger: false,
//         disabled: false,
//         onClick: () => {
//           console.log('First group: Item #1')
//         }
//       },
//       {
//         type: 'item',
//         text: 'Item #2',
//         icon: <AppstoreOutlined />,
//         danger: true,
//         disabled: false,
//         onClick: () => {
//           console.log('First group: Item #2')
//         }
//       },
//       {
//         type: 'item',
//         text: 'Item #3',
//         icon: <AppstoreOutlined />,
//         danger: false,
//         disabled: false,
//         onClick: () => {
//           console.log('First group: Item #3')
//         }
//       },
//       {
//         type: 'group',
//         text: 'Second group',
//         children: [
//           {
//             type: 'item',
//             text: 'Item #1',
//             icon: <AppstoreOutlined />,
//             danger: false,
//             disabled: false,
//             onClick: () => {
//               console.log('Second group: Item #1')
//             }
//           },
//           {
//             type: 'item',
//             text: 'Item #2',
//             icon: <AppstoreOutlined />,
//             danger: true,
//             disabled: false,
//             onClick: () => {
//               console.log('Second group: Item #2')
//             }
//           },
//           {
//             type: 'item',
//             text: 'Item #3',
//             icon: <AppstoreOutlined />,
//             danger: false,
//             disabled: false,
//             onClick: () => {
//               console.log('Second group: Item #3')
//             }
//           }
//         ]
//       }
//     ]
//   }
//   {
//     type: 'submenu',
//     text: 'First submenu',
//     popupOffset: ['0', '-16px'],
//     disabled: false,
//     children: [
//       {
//         type: 'submenu',
//         text: 'Second submenu',
//         children: [
//           {
//             type: 'item',
//             text: 'Item #1',
//             icon: <AppstoreOutlined />,
//             danger: false,
//             disabled: false,
//             onClick: () => {
//               console.log('Second group: Item #1')
//             }
//           },
//           {
//             type: 'item',
//             text: 'Item #2',
//             icon: <AppstoreOutlined />,
//             danger: true,
//             disabled: false,
//             onClick: () => {
//               console.log('Second group: Item #2')
//             }
//           },
//           {
//             type: 'item',
//             text: 'Item #3',
//             icon: <AppstoreOutlined />,
//             danger: false,
//             disabled: false,
//             onClick: () => {
//               console.log('Second group: Item #3')
//             }
//           }
//         ]
//       },
//       {
//         type: 'submenu',
//         text: 'Second submenu',
//         children: [
//           {
//             type: 'item',
//             text: 'Item #1',
//             icon: <AppstoreOutlined />,
//             danger: false,
//             disabled: false,
//             onClick: () => {
//               console.log('Second group: Item #1')
//             }
//           },
//           {
//             type: 'item',
//             text: 'Item #2',
//             icon: <AppstoreOutlined />,
//             danger: true,
//             disabled: false,
//             onClick: () => {
//               console.log('Second group: Item #2')
//             }
//           },
//           {
//             type: 'item',
//             text: 'Item #3',
//             icon: <AppstoreOutlined />,
//             danger: false,
//             disabled: false,
//             onClick: () => {
//               console.log('Second group: Item #3')
//             }
//           }
//         ]
//       }
//     ]
//   }
// ]
