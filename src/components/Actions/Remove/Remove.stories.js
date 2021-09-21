import React from 'react'
import Remove from './Remove'
import { DeleteOutlined } from '@ant-design/icons'

export default {
  title: 'Components/Actions/Remove',
  component: Remove,
  argTypes: {
    text: {
      description: 'Use to add text label for button button.'
      // defaultValue: 'Remove'
    },
    type: {
      description: 'Use to change button type.'
    },
    icon: {
      description:
        'Use to add icon at the left side inside button (shortcut, works the same as property "iconLeft").',
      control: { disable: true }
    },
    iconLeft: {
      description:
        'Use to add icon at the left side inside button (works the same as property "icon").',
      control: { disable: true }
    },
    iconRight: {
      description: 'Use to add icon at the right side inside button.',
      control: { disable: true }
    },
    shape: {
      description: 'Use to set button shape.'
    },
    tooltip: {
      description:
        'Use to enable tooltip and specify text for it. Tooltip works ONLY when button without text.'
      // defaultValue: 'Back button'
    },
    tooltipPlacement: {
      description: 'Use to specify tooltip position.'
      // defaultValue: 'topLeft'
    },
    question: {
      description: 'Use to specify remove question.'
    },
    onSubmit: {
      description: 'Set the handler to handle submit event.',
      control: { disable: true }
    },
    confirmLabel: {
      description: 'Use to specify submit button text.'
    },
    onCancel: {
      description: 'Set the handler to handle cancel event.',
      control: { disable: true }
    },
    cancelLabel: {
      description: 'Use to specify cancel button text.'
    },
    popconfirmPlacement: {
      description: 'Use to specify popconfirm placement.'
    },
    itemName: {
      description: 'Use to set item name.'
    },
    props: {
      description:
        'Rest of the button properties are similar as in default button',
      control: { disable: true }
    }
  },
  args: {
    icon: <DeleteOutlined />
  }
}

export const Template = (args) => <Remove {...args} />
