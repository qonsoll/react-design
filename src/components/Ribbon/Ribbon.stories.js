import React from 'react'
import Box from '../Box/Box'
import Ribbon from './Ribbon'

export default {
  title: 'Components/Ribbon',
  component: Ribbon,
  argTypes: {
    // color: {
    //   description: 'Use to set ribbon text color',
    //   control: { type: 'text' }
    // },
    bg: {
      description: 'Use to set ribbon background color',
      control: { type: 'text' }
    },
    top: {
      description: 'Top position',
      control: { type: 'text' }
    },
    bottom: {
      description: 'Bottom position',
      control: { type: 'text' }
    },
    display: {
      description: 'Dislay property',
      control: { type: 'text' }
    },
    placement: {
      description: 'Use to set side of ribbon placement',
      control: { type: 'select', options: ['end', 'start'] }
    },
    text: {
      description: 'Use to add text into ribbon',
      control: { type: 'text' }
    },
    children: {
      description:
        'Component, that will contain ribbon, needs to be wrapped in it',
      control: { disabled: true }
    }
  },
  args: {
    text: 'Ribbon',
    color: 'var(--ql-color-white)',
    bg: 'var(--ql-color-dark)',
    placement: 'end',
    top: '20%',
    display: 'block'
  }
}

export const Template = (args) => (
  <Ribbon {...args}>
    <Box
      height={200}
      width={200}
      bg="var(--ql-color-dark-t-lighten5)"
      borderRadius="var(--ql-border-radius-md)"
    />
  </Ribbon>
)
