import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from './Layout'
import Aside from '../Aside'
import Header from '../Header'
import Footer from '../Footer'
import { LayoutSystemProvider } from '../LayoutSystem'
import breakpoints from '../../../styles/breakpoints'

import { BADGE } from '@geometricpanda/storybook-addon-badges'

export default {
  title: 'Layout system/Layout',
  component: Layout,
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
    header: {
      description: 'Use to insert Header component.',
      control: {
        disable: true
      }
    },
    footer: {
      description: 'Use to insert Footer component.',
      control: {
        disable: true
      }
    },
    isHeaderSticky: {
      description: 'Use to make header sticky.',
      control: {
        type: 'boolean'
      }
    },
    isFooterSticky: {
      description: 'Use to make footer sticky.',
      control: {
        type: 'boolean'
      }
    },
    asideLeft: {
      description: 'Use to insert Aside component at the left side.',
      control: {
        disable: true
      }
    },
    asideRight: {
      description: 'Use to insert Aside component at the right side.',
      control: {
        disable: true
      }
    },
    isAsideLeft: {
      description:
        'This property should be always TRUE when you apply left aside.'
    },
    isAsideRight: {
      description:
        'This property should be always TRUE when you apply right aside.'
    },
    asideLeftOuter: {
      description: 'Use it set outer position for left aside.',
      control: {
        type: 'boolean'
      }
    },
    asideRightOuter: {
      description: 'Use it set outer position for right aside.',
      control: {
        type: 'boolean'
      }
    },
    isAsideLeftCollapsed: {
      description: 'Use it to apply possibility to collapse left aside.',
      control: {
        type: 'boolean'
      }
    },
    isAsideRightCollapsed: {
      description: 'Use it to apply possibility to collapse right aside.',
      control: {
        type: 'boolean'
      }
    },
    asideLeftCollapseVariant: {
      description: 'Use it to specify collapse variant for left aside.',
      control: {
        type: 'select',
        options: ['short', 'full']
      }
    },
    asideRightCollapseVariant: {
      description: 'Use it to specify collapse variant for right aside.',
      control: {
        type: 'select',
        options: ['short', 'full']
      }
    },
    asideLeftOverlay: {
      description: 'Use it to make left aside as overlay (drawer).',
      control: {
        type: 'boolean'
      }
    },
    asideRightOverlay: {
      description: 'Use it to make left aside as overlay (drawer).',
      control: {
        type: 'boolean'
      }
    }
  },
  args: {
    header: (
      <Header
        bg="#6648bf"
        color="#fff"
        alignItems="center"
        justifyContent="center">
        Good afternoon! I'm header.<span>🥸</span>
      </Header>
    ),
    asideLeft: (
      <Aside collapse bg="#e2e2e2" alignItems="center" justifyContent="center">
        Hi!<span>👋</span> I'm aside (currently left).
      </Aside>
    ),
    asideRight: (
      <Aside bg="#e2e2e2" alignItems="center" justifyContent="center">
        Hello!<span>🤟</span> I'm right aside.
      </Aside>
    ),
    footer: (
      <Footer
        bg="#2e2d35"
        color="#fff"
        alignItems="center"
        justifyContent="center">
        Ola! I'm footer. <span>😎</span>
      </Footer>
    ),
    isAsideLeft: true,
    isAsideRight: true
  }
}

export const Template = (args) => {
  const layoutConfig = {
    ...args
  }

  return (
    <ThemeProvider theme={breakpoints}>
      <LayoutSystemProvider {...layoutConfig}>
        <Layout
          header={
            <Header
              bg="#6648bf"
              color="#fff"
              alignItems="center"
              justifyContent="center">
              Good afternoon! I'm header. 🥸
            </Header>
          }
          asideLeft={
            <Aside
              collapse={layoutConfig.isAsideLeftCollapsed}
              drawer={layoutConfig.asideLeftOverlay}
              bg="#e2e2e2"
              alignItems="center"
              justifyContent="center">
              Hi!👋 I'm aside (currently left).
            </Aside>
          }
          asideRight={
            <Aside
              collapse={layoutConfig.isAsideRightCollapsed}
              drawer={layoutConfig.asideRightOverlay}
              bg="#e2e2e2"
              alignItems="center"
              justifyContent="center">
              Hello!🤟 I'm right aside.
            </Aside>
          }
          footer={
            <Footer
              bg="#2e2d35"
              color="#fff"
              alignItems="center"
              justifyContent="center">
              Ola! I'm footer. 😎
            </Footer>
          }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
          commodo viverra maecenas accumsan lacus vel. Varius sit amet mattis
          vulputate enim nulla aliquet. Turpis cursus in hac habitasse platea
          dictumst quisque. Turpis massa tincidunt dui ut ornare lectus. Aliquam
          vestibulum morbi blandit cursus. Lectus magna fringilla urna porttitor
          rhoncus. Vitae nunc sed velit dignissim sodales ut eu sem integer.
          Habitant morbi tristique senectus et netus. Varius vel pharetra vel
          turpis nunc. Nisl suscipit adipiscing bibendum est ultricies integer
          quis auctor. Pretium quam vulputate dignissim suspendisse in est ante
          in nibh. Cras semper auctor neque vitae tempus quam pellentesque.
          Aliquet eget sit amet tellus cras adipiscing enim. Feugiat in
          fermentum posuere urna. Suscipit adipiscing bibendum est ultricies
          integer quis auctor elit sed. Blandit aliquam etiam erat velit. At in
          tellus integer feugiat scelerisque varius. Mattis molestie a iaculis
          at erat. Amet nisl suscipit adipiscing bibendum est ultricies integer
          quis auctor. Mollis nunc sed id semper risus in hendrerit gravida
          rutrum. Tristique senectus et netus et malesuada fames. Sit amet
          mauris commodo quis imperdiet massa. Dolor sit amet consectetur
          adipiscing elit. Cursus in hac habitasse platea. A erat nam at lectus.
          Vulputate dignissim suspendisse in est ante in nibh. Gravida in
          fermentum et sollicitudin ac orci phasellus. Eget nunc scelerisque
          viverra mauris in. Diam phasellus vestibulum lorem sed risus. Ut diam
          quam nulla porttitor massa. Magnis dis parturient montes nascetur
          ridiculus mus. Pellentesque eu tincidunt tortor aliquam nulla
          facilisi. Orci nulla pellentesque dignissim enim sit amet venenatis.
          Purus non enim praesent elementum facilisis leo vel. Commodo sed
          egestas egestas fringilla phasellus faucibus scelerisque. Tellus in
          hac habitasse platea dictumst vestibulum rhoncus. Urna porttitor
          rhoncus dolor purus non enim praesent elementum facilisis. Cum sociis
          natoque penatibus et magnis dis parturient montes nascetur. Mattis
          molestie a iaculis at erat pellentesque adipiscing. Diam vel quam
          elementum pulvinar etiam non quam lacus. Purus in massa tempor nec.
        </Layout>
      </LayoutSystemProvider>
    </ThemeProvider>
  )
}
