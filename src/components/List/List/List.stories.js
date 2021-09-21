import React from 'react'
import List from './List'
import Text from '../../Typography/Text'

export default {
  title: 'Components/List/List',
  component: List,
  argTypes: {
    items: {
      description: 'DataSource array for list'
    },
    renderItem: {
      description: 'Use to specify item view.'
    },
    horizontal: {
      description: 'Use to enable horizontal view for list.'
      //   control: { disable: true }
    },
    grid: {
      description: 'Use to enable grid view for list.'
      //   control: { disable: true }
    },
    columns: {
      description: 'Use to specify amount of column for grid list.'
      //   control: { disable: true }
    },
    scrollable: {
      description: 'Use to make list scrollable.'
    },
    maxHeight: {
      description: 'Use to specify list max-height.'
      //   control: { disable: true }
    },
    title: {
      description: 'Use to add title text.'
      // defaultValue: 'Back button'
    },
    titleWidthProps: {
      description: 'Use to specify title width.'
      // defaultValue: 'topLeft'
    },
    titleProps: {
      description: 'Use to specify title props.'
      //   control: { disable: true }
    },
    action: {
      description: 'Use to add actions.'
      //   control: { disable: true }
    },
    headerActionWidthProps: {
      description: 'Use to specify width for section with actions in header.'
      //   control: { disable: true }
    },
    footerActionWidthProps: {
      description: 'Use to specify width for section with actions in footer.'
      //   control: { disable: true }
    },
    isListHeader: {
      description: 'Use to enable/disable header.'
      //   control: { disable: true }
    },
    headerPositioningProps: {
      description: 'Use to specify header positioning.'
      //   control: { disable: true }
    },
    isListFooter: {
      description: 'Use to enable/disable footer.'
      //   control: { disable: true }
    },
    footerPositioningProps: {
      description: 'Use to specify footer positioning.'
      //   control: { disable: true }
    },
    isLoaded: {
      description: 'Use to activate loading state (enabling skeleton).'
      //   control: { disable: true }
    },
    isEmpty: {
      description: 'Use to show empty list.'
      //   control: { disable: true }
    },
    showEmpty: {
      description: '[FIXME] Very interesting property :)'
      //   control: { disable: true }
    }
  },
  args: {
    grid: true,
    isListHeader: true,
    title: 'Header',
    items: [
      'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
      'Australian walks 100km after outback crash.',
      'Man charged over missing wedding girl.',
      'Los Angeles battles huge wildfires.'
    ],
    renderItem: (item) => <Text>{item}</Text>
  }
}

export const Template = (args) => <List {...args} />
