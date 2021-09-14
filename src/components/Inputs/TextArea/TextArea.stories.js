import React from 'react'
import TextArea from './TextArea'
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
} from '../../../helpers/arg-types'
import CSSPropValues from '../../../helpers/css-prop-values'

export default {
  title: 'Components/Inputs/TextArea',
  component: TextArea,
  argTypes: {
    allowClear: {
      table: {
        category: 'Default AntD props'
      },
      description: 'If allow to remove input content with clear icon',
      control: {
        type: 'boolean'
      }
    },
    autoSize: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'Height autosize feature, can be set to true | false or an object { minRows: 2, maxRows: 6 }',
      control: {
        type: 'object'
      }
    },
    bordered: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Whether has border style',
      control: {
        type: 'boolean'
      }
    },
    defaultValue: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The initial input content',
      control: {
        type: 'string'
      }
    },
    maxLength: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The max length',
      control: {
        type: 'number'
      }
    },
    showCount: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Whether show text count',
      control: {
        type: 'boolean'
      }
    },
    value: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The input content value',
      control: {
        type: 'string'
      }
    },
    onPressEnter: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'The callback function that is triggered when Enter key is pressed'
    },
    onResize: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The callback function that is triggered when resize'
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

export const Template = (args) => <TextArea {...args} />
