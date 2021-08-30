import React from 'react'
import { ThemeProvider } from 'styled-components'
import breakpoints from '../../../styles/breakpoints'
import { LayoutSystemProvider } from '../LayoutSystem'
import Layout from '../Layout'
import Header from './Header'
import Footer from '../Footer'

import { BADGE } from '@geometricpanda/storybook-addon-badges'

export default {
  title: 'Layout system/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Here could be general description...
      }
    },
    badges: [BADGE.NEEDS_REVISION]
  },
  argTypes: {
    height: {
      description: 'Use to override default Header height.'
    },
    bg: {
      description: 'Use to override default Header background color.'
    },
    px: {
      description: 'Use to override default Header padding.'
    },
    shadow: {
      description: 'Use to override default Header shadow.'
    },
    asideToggleBtnLeft: {
      description: 'Use to insert component which will control left aside.',
      control: { disable: true }
    },
    asideToggleBtnRight: {
      description: 'Use to insert component which will control right aside.',
      control: { disable: true }
    },
    'other properties': {
      description:
        'Set any other properties (accepted by the Box) to change the default settings. [Read more >](/?path=/story/components-box--template)'
    }
  },
  args: {
    height: 64,
    bg: '#6648bf'
  }
}

export const Template = (args) => {
  const layoutConfig = {}

  return (
    <ThemeProvider theme={breakpoints}>
      <LayoutSystemProvider {...layoutConfig}>
        <Layout
          header={
            <Header
              color='#fff'
              alignItems='center'
              justifyContent='center'
              {...args}
            >
              Hi!👋 I'm header.
            </Header>
          }
          footer={<Footer bg='#f2f2f2' />}
        />
      </LayoutSystemProvider>
    </ThemeProvider>
  )
}
