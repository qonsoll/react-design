import React from 'react'
import Card from './Card'
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
  title: 'Components/Card/CardBasic',
  component: Card,
  argTypes: {
    actions: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The action list, shows at the bottom of the Card',
      control: { disable: true }
    },
    activeTabKey: {
      table: {
        category: 'Default AntD props'
      },
      description: "Current TabPane's key"
    },
    bodyStyle: {
      table: {
        category: 'Default AntD props'
      },
      control: { disable: true },
      description: 'Inline style to apply to the card content'
    },
    bordered: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Toggles rendering of the border around the card'
    },
    cover: {
      table: {
        category: 'Default AntD props'
      },
      control: { disable: true },
      description: 'Card cover'
    },
    defaultActiveTabKey: {
      table: {
        category: 'Default AntD props'
      },
      description: "Initial active TabPane's key, if activeTabKey is not set"
    },
    extra: {
      table: {
        category: 'Default AntD props'
      },
      control: { disable: true },
      description: 'Content to render in the top-right corner of the card'
    },
    headStyle: {
      table: {
        category: 'Default AntD props'
      },
      control: { disable: true },
      description: 'Inline style to apply to the card head'
    },
    hoverable: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Lift up when hovering card'
    },
    loading: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'Shows a loading indicator while the contents of the card are being fetched	'
    },
    size: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Size of card	'
    },
    tabBarExtraContent: {
      table: {
        category: 'Default AntD props'
      },
      control: { disable: true },
      description: 'Extra content in tab bar'
    },
    tabList: {
      table: {
        category: 'Default AntD props'
      },
      control: { disable: true },
      description: "List of TabPane's head"
    },
    tabProps: {
      table: {
        category: 'Default AntD props'
      },
      control: { disable: true },
      description: 'Tabs'
    },
    title: {
      table: {
        category: 'Default AntD props'
      },
      control: { type: 'text' },
      description: 'Card title'
    },
    type: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Card style type, can be set to inner or not set'
    },
    onTabChange: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Callback when tab is switched'
    },
    shadowless: {
      table: {
        category: 'Custom properties'
      },
      description: 'Use to disable card shadow.'
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
    transform: {
      table: {
        category: 'Extra CSS props'
      },
      control: CSSPropValues.transform
    }
  }
}

const Template = (args) => (
  <Card {...args}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
)

export const cardBasic = Template.bind({})
cardBasic.args = {
  title: 'Default size card',
  extra: <a href="#">More</a>,
  style: { width: 300 }
}
