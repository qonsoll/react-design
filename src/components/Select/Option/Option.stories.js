import React from 'react'
import Option from './Option'
import Select from '../Select/Select'
// import {
//   spaceArgTypes,
//   colorArgTypes,
//   typographyArgTypes,
//   layoutArgTypes,
//   flexboxArgTypes,
//   backgroundArgTypes,
//   borderArgTypes,
//   positionArgTypes,
//   shadowArgTypes,
//   extraArgTypes
// } from '../../../helpers/arg-types'
/** FIXME component doesn`t work with styled-component */

export default {
  title: 'Components/Select/Option',
  component: Option,
  argTypes: {
    className: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The additional class to option'
    },
    disabled: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Disable this option'
    },
    title: {
      table: {
        category: 'Default AntD props'
      },
      description: 'title of Select after select this Option'
    },
    value: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Default to filter with this property	'
    },
    children: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Text for option'
    }
    // ...spaceArgTypes,
    // ...colorArgTypes,
    // ...typographyArgTypes,
    // ...layoutArgTypes,
    // ...flexboxArgTypes,
    // ...backgroundArgTypes,
    // ...borderArgTypes,
    // ...positionArgTypes,
    // ...shadowArgTypes,
    // ...extraArgTypes
  },
  args: {
    value: 'ann',
    children: 'Ann'
  }
}

export const Template = (args) => (
  <Select style={{ minWidth: 150 }}>
    <Option {...args} />
  </Select>
)
