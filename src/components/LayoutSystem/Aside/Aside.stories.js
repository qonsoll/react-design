import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import breakpoints from '../../../styles/breakpoints'
import { LayoutSystemProvider } from '../LayoutSystem'
import Layout from '../Layout'
import Aside from './Aside'
import Button from '../../Button'

export default {
  title: 'Components/Layout system/Aside',
  component: Aside,
  argTypes: {
    collapse: {
      description: 'Use it to control Aside collapse state.'
    },
    drawer: {
      description: 'Use it to apply drawer styles and behavior.'
    },
    onClose: {
      description: 'FIXME'
    },
    asideToggleBtn: {
      description:
        'Use it to place component which will collapse/uncollapse aside.'
    },
    'Any other Box properties': {
      description:
        'Set any other properties (accepted by the Box) to change the default settings.'
    }
  }
}

export const Template = (args) => {
  const [layoutConfig, setLayoutConfig] = useState({
    isAsideLeft: true,
    asideLeftCollapsed: true,
    asideLeftCollapseVariant: 'short',
    asideLeftOuter: false,
    asideLeftOverlay: true
  })

  const toggleAsideLeft = () => {
    setLayoutConfig({
      ...layoutConfig,
      asideLeftCollapsed: !layoutConfig.asideLeftCollapsed
    })
  }

  return (
    <ThemeProvider theme={breakpoints}>
      <LayoutSystemProvider {...layoutConfig}>
        <Layout
          asideLeft={
            <Aside
              collapse={layoutConfig.asideLeftCollapsed}
              drawer
              asideToggleBtn={
                <Button type='primary' onClick={toggleAsideLeft}>
                  Toogle
                </Button>
              }
            >
              Aside left
            </Aside>
          }
        >
          Content
        </Layout>
      </LayoutSystemProvider>
    </ThemeProvider>
  )
}
