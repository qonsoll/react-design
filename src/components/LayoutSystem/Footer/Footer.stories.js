import React from 'react'
import { ThemeProvider } from 'styled-components'
import breakpoints from '../../../styles/breakpoints'
import { LayoutSystemProvider } from '../LayoutSystem'
import Layout from '../Layout'
import Footer from './Footer'

export default {
  title: 'Components/Layout system/Footer',
  component: Footer,
  argTypes: {
    height: {
      description: 'Use to override default Footer height.'
    },
    bg: {
      description: 'Use to override default Footer background color.'
    },
    px: {
      description: 'Use to override default Footer padding.'
    },
    'Any other Box properties': {
      description:
        'Set any other properties (accepted by the Box) to change the default settings.'
    }
  }
}

export const Template = (args) => {
  const layoutConfig = {
    asideLeftOuter: false
  }

  return (
    <ThemeProvider theme={breakpoints}>
      <LayoutSystemProvider {...layoutConfig}>
        <Layout footer={<Footer>This is footer</Footer>}>Content</Layout>
      </LayoutSystemProvider>
    </ThemeProvider>
  )
}
