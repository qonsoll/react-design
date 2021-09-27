import React from 'react'
import Link from './Link'
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
  title: 'Components/Typography/Link',
  component: Link,
  argTypes: {
    href: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Redirect url of link button'
    },
    target: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Same as target attribute of a, works when href is specified'
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
    },
    textTransform: {
      table: {
        category: 'Extra'
      },
      control: CSSPropValues.textTransform
    },
    textOverflow: {
      table: {
        category: 'Extra'
      },
      control: CSSPropValues.textOverflow
    }
  }
}

export const Template = (args) => <Link {...args}>Link</Link>
