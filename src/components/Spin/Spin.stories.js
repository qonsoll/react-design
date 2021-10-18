import React from 'react'
import Spin from './Spin'
import { colorArgTypes, positionArgTypes } from '../../helpers/arg-types'

export default {
  title: 'Components/Spin',
  component: Spin,
  argTypes: {
    ...colorArgTypes,
    ...positionArgTypes
  }
}

export const Template = (args) => <Spin {...args} />
