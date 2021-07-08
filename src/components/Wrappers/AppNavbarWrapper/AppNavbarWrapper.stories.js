import React from 'react'
import AppWrapper from '../AppWrapper'
import AppNavbarWrapper from './AppNavbarWrapper'

export default {
  title: 'Components/Wrappers/AppNavbarWrapper',
  component: AppNavbarWrapper,
  argTypes: {
    children: {
      description: 'Use to insert any node within component.',
      control: { disable: true }
    },
    width: {
      description: 'Use to specify component width.',
      defaultValue: 280
    }
  }
}

export const Template = (args) => (
  <AppWrapper
    horizontal
    bg='#f2f2f2'
    width='90vw'
    height='90vh'
    appNavbar={<AppNavbarWrapper bg='#4c4c4c' {...args} />}
  />
)
