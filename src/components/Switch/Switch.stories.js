import React from 'react'
import Switch from './Switch'
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
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    autoFocus: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Whether get focus when component mounted'
    },
    checked: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Determine whether the Switch is checked'
    },
    checkedChildren: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The content to be shown when the state is checked'
    },
    className: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The additional class to Switch'
    },
    defaultChecked: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Whether to set the initial state'
    },
    disabled: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Disable switch'
    },
    loading: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Loading state of switch'
    },
    size: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The size of the Switch'
    },
    unCheckedChildren: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The content to be shown when the state is unchecked'
    },
    onChange: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Trigger when the checked state is changing'
    },
    onClick: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Trigger when clicked'
    },
    blur: {
      table: {
        category: 'Default Switch methods'
      },
      description: 'Remove focus'
    },
    focus: {
      table: {
        category: 'Default Switch methods'
      },
      description: 'Get focus'
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

export const Template = (args) => <Switch {...args} />
