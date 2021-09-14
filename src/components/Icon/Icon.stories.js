import React from 'react'
import { TeamOutlined } from '@ant-design/icons'
import Icon from './Icon'

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    component: {
      table: {
        category: 'Specifies for Icon'
      },
      description: 'Use to specify Icon component.',
      control: { disable: true }
    },
    size: {
      table: {
        category: 'Specifies for Icon'
      },
      description: 'Use to specify Icon size.',
      control: { type: 'text' }
    },
    color: {
      table: {
        category: 'Specifies for Icon'
      },
      description: 'Use to specify Icon color.'
    },
    className: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The className of Icon',
      control: { type: 'text' }
    },
    rotate: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Rotate by n degrees (not working in IE9)',
      control: { type: 'number' }
    },
    spin: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Rotate icon with animation',
      control: { type: 'boolean' }
    },
    style: {
      table: {
        category: 'Default AntD props'
      },
      control: { disable: true },
      description: 'The style properties of icon, like fontSize and color'
    },
    twoToneColor: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Only supports the two-tone icon. Specify the primary color',
      control: { type: 'text' }
    }
  }
}

export const Template = (props) => {
  const { className, rotate, spin, style, twoToneColor, ...rest } = props

  const svgProps = { className, rotate, spin, style, twoToneColor }

  return <Icon component={<TeamOutlined {...svgProps} />} {...rest} />
}
