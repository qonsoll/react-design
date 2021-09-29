import React from 'react'
import OptGroup from '../OptGroup/OptGroup'
import Select from '../Select/Select'
import Option from '../../Select/Option'
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
  title: 'Components/Select/OptGroup',
  component: OptGroup,
  argTypes: {
    key: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Group key'
    },
    label: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Group label'
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
  args: { label: 'Manager' }
}

export const Template = (args) => (
  <Select defaultValue="lucy" style={{ width: 200 }}>
    <OptGroup {...args}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
    </OptGroup>
    <OptGroup label="Engineer">
      <Option value="Yiminghe">yiminghe</Option>
    </OptGroup>
  </Select>
)
