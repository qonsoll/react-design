import React from 'react'
import SelectableItem from './SelectableItem'

export default {
  title: 'Components/Items/SelectableItem',
  component: SelectableItem,
  argTypes: {
    item: {
      table: {
        category: 'Custom properties'
      },
      description: 'Component input data.',
      control: { disable: true }
    },
    children: {
      table: {
        category: 'Custom properties'
      },
      description: 'Component to render.',
      control: { disable: true }
    },
    mb: {
      table: {
        category: 'Custom properties'
      },
      description: 'Margin bottom.',
      control: { disable: true }
    },
    isSelected: {
      table: {
        category: 'Custom properties'
      },
      description: 'Function that helps to get status of the item',
      control: { disable: true }
    },
    toggle: {
      table: {
        category: 'Custom properties'
      },
      description: 'Adding/removing item to/from array.',
      control: { disable: true }
    }
  }
}

export const Template = (args) => <SelectableItem {...args} />
