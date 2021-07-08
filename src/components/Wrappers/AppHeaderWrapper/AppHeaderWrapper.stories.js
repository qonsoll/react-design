import React from 'react'
import AppWrapper from '../AppWrapper'
import AppHeaderWrapper from './AppHeaderWrapper'

export default {
  title: 'Components/Wrappers/AppHeaderWrapper',
  component: AppHeaderWrapper,
  argTypes: {
    children: {
      description: 'Use to insert any node within component.',
      control: { disable: true }
    }
  }
}

export const Template = (args) => (
  <AppWrapper
    bg='#f2f2f2'
    width='90vw'
    height='90vh'
    appHeader={<AppHeaderWrapper bg='#4c4c4c' height={64} {...args} />}
  />
)
