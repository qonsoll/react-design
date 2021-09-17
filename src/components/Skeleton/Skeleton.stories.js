import React from 'react'
import Skeleton from './Skeleton'
import {
  spaceArgTypes,
  colorArgTypes,
  typographyArgTypes,
  layoutArgTypes,
  flexboxArgTypes,
  backgroundArgTypes,
  borderArgTypes,
  positionArgTypes,
  shadowArgTypes,
  extraArgTypes
} from '../../helpers/arg-types'

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  argTypes: {
    active: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Show animation effect'
    },
    avatar: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Show avatar placeholder'
    },
    loading: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Display the skeleton when true'
    },
    paragraph: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Show paragraph placeholder'
    },
    round: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Show paragraph and title radius when true'
    },
    title: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Show title placeholder'
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
    ...extraArgTypes
  },
  args: {
    round: true,
    paragraph: { rows: 5 },
    loading: true,
    title: { width: 100 },
    active: true,
    avatar: {
      active: true,
      size: 'default'
    }
  }
}

export const Template = (args) => <Skeleton width={400} {...args} />
