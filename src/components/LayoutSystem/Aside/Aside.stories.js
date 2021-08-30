import React from 'react'
import { ThemeProvider } from 'styled-components'
import breakpoints from '../../../styles/breakpoints'
import { LayoutSystemProvider } from '../LayoutSystem'
import Layout from '../Layout'
import Header from '../Header'
import Aside from './Aside'
import Footer from '../Footer'
import Button from '../../Button'
import { ArrowLeftOutlined } from '@ant-design/icons'

import { BADGE } from '@geometricpanda/storybook-addon-badges'

export default {
  title: 'Layout system/Aside',
  component: Aside,
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
    collapse: {
      description: 'Use it to control Aside collapse state.',
      control: {
        disable: true
      }
    },
    drawer: {
      description: 'Use it to apply drawer styles and behavior.'
    },
    onClose: {
      description: 'Use it to add action (function) which will toogle aside.'
    },
    asideToggleBtn: {
      description:
        'Use it to place component which will collapse/uncollapse aside.',
      control: {
        disable: true
      }
    },
    'other properties': {
      description:
        'Set any other properties (accepted by the Box) to change the default settings. [Read more >](/?path=/story/components-box--template)'
    }
  },
  args: {}
}

export const Template = (args) => {
  const layoutConfig = {
    isAsideLeft: true,
    asideLeftOuter: true,
    asideLeftOverlay: true
  }

  return (
    <ThemeProvider theme={breakpoints}>
      <LayoutSystemProvider {...layoutConfig}>
        <Layout
          header={<Header bg='#f2f2f2' />}
          asideLeft={
            <Aside
              {...args}
              bg='#6648bf'
              color='#fff'
              asideToggleBtn={
                <Button
                  type='dashed'
                  ghost
                  icon={<ArrowLeftOutlined />}
                  mb={5}
                />
              }
            >
              Hi!👋 I'm aside (currently left).
            </Aside>
          }
          footer={<Footer bg='#f2f2f2' />}
        >
          Content
        </Layout>
      </LayoutSystemProvider>
    </ThemeProvider>
  )
}
