import React from 'react'
import Save from './Save'

export default {
  title: 'Components/Actions/Save',
  component: Save,
  argTypes: {
    text: {
      description: 'Use to add text label for button button.'
      // defaultValue: 'Save'
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
    onClick: {
      description: 'Set the handler to handle click event.',
      control: { disable: true }
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
    props: {
      description:
        'Rest of the button properties are similar as in default AntD button (check Ant documentation: https://ant.design/components/button/).',
      control: { disable: true }
    }
  }
}

export const Template = (args) => <Save {...args} />
