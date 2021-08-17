import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from './Layout'
import Aside from '../Aside'
import Header from '../Header'
import Footer from '../Footer'
import { LayoutSystemProvider } from '../LayoutSystem'
import breakpoints from '../../../styles/breakpoints'

export default {
  title: 'Components/Layout system/Layout',
  component: Layout,
  argTypes: {
    header: {
      description: 'Use to insert Header component.'
    },
    asideLeft: {
      description: 'Use to insert Aside component at the left side.'
    },
    asideRight: {
      description: 'Use to insert Aside component at the right side.'
    },
    footer: {
      description: 'Use to insert Footer component.'
    }
  }
}

export const Template = (args) => {
  const layoutConfig = {
    isAsideLeft: true,
    asideLeftOuter: true,
    isAsideRight: true
  }

  return (
    <ThemeProvider theme={breakpoints}>
      <LayoutSystemProvider {...layoutConfig}>
        <Layout
          header={<Header>Header</Header>}
          asideLeft={<Aside>Aside left</Aside>}
          asideRight={<Aside>Aside right</Aside>}
          footer={<Footer>Footer</Footer>}
        >
          Content
        </Layout>
      </LayoutSystemProvider>
    </ThemeProvider>
  )
}
