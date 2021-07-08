import React from 'react'
import Back from './Back'

export default {
  title: 'Components/Actions/Back',
  component: Back,
  argTypes: {
    text: {
      description: 'Use to add text label for button button',
      defaultValue: 'Back button'
    },
    icon: {
      description:
        'Use to add icon at the left side inside button (shortcut, works the same as property "iconLeft")',
      control: { disable: true }
    },
    iconLeft: {
      description:
        'Use to add icon at the left side inside button (works the same as property "icon")',
      control: { disable: true }
    },
    iconRight: {
      description: 'Use to add icon at the right side inside button',
      control: { disable: true }
    },
    onClick: {
      description: 'Set the handler to handle click event',
      control: { disable: true }
    },
    tooltip: {
      description:
        'Use to enable tooltip and specify text for it. Tooltip works ONLY when button without text.',
      defaultValue: 'Back button'
    },
    tooltipPlacement: {
      description: 'Use to specify tooltip position.',
      defaultValue: 'top'
    },
    divided: {
      description: 'Use to enable divider at the right side of the button.',
      defaultValue: false
    },
    props: {
      description:
        'Rest of the button properties are similar as in default AntD button (check Ant documentation: https://ant.design/components/button/).',
      control: { disable: true }
    }
  }
}

export const Template = (args) => <Back {...args} />
