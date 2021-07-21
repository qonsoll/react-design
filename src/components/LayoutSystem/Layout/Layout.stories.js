import React from 'react'
import Layout from './Layout'
import Header from '../Header'
import Footer from '../Footer'
import Aside from '../Aside'
import Box from '../../Box'
import Img from '../../Media/Img'

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
    },
    asideLeftOuter: {
      description: 'Use to place left Aside component outer.'
    },
    asideRightOuter: {
      description: 'Use to place right Aside component outer.'
    }
  }
}

export const Template = (args) => {
  return (
    <Layout
      header={<Header variant='1' />}
      asideLeft={<Aside>Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Aside>}
      asideRight={<Aside>Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Aside>}
      footer={<Footer layout={footerLayout} />}
      // asideLeftOuter
      // asideRightOuter
    >
      Content
    </Layout>
  )
}

const footerLayout = [
  {
    cw: 'auto',
    component: (
      <Img
        src='https://worktube.ai/images/wt-logo-full-color.svg'
        alt='Logo'
        height={28}
      />
    ),
    alignSelf: 'center'
  },
  { component: <Box width={24} height={24} bg='#000' /> },
  { cw: '3', component: <Box width={24} height={24} bg='#fff' /> }
]
