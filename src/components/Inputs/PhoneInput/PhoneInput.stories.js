import React from 'react'
import PhoneInput from './PhoneInput'
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
  title: 'Components/Inputs/PhoneInput',
  component: PhoneInput,
  argTypes: {
    'Default react-phone-input-2 props': {
      description:
        'Component absolutely maintain default react-phone-input-2 input properties (check documentation: https://github.com/bl00mber/react-phone-input-2).',
      control: { disable: true }
    },
    ...typographyArgTypes,
    ...spaceArgTypes,
    ...colorArgTypes,
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

export const Template = (args) => <PhoneInput {...args} />
