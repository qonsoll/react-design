import React from 'react'
import Box from '../Box/Box'
import Ribbon from './Ribbon'

export default {
  title: 'Components/Ribbon',
  component: Ribbon,
  argTypes: {
    color: {
      description: 'Use to set ribbon text color',
      control: { type: 'text' }
    },
    bg: {
      description: 'Use to set ribbon background color',
      control: { type: 'text' }
    },
    offset: {
      description: 'Use to set ribbon popsition ([vertical, horisontal])',
      control: { disable: true }
    },
    placement: {
      description: 'Use to set side of ribbon placement',
      control: { type: 'select', options: ['end', 'start'] }
    },
    text: {
      description: 'Use to add text into ribbon',
      control: { type: 'text' }
    }
  },
  args: {
    text: 'Ribbon',
    color: 'var(--ql-color-white)',
    bg: 'var(--ql-color-dark)',
    placement: 'end',
    offset: ['20px', '-8px']
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
