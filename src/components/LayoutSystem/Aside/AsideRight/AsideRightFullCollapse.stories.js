import React from 'react'
import {
  RightOutlined,
  LeftOutlined,
  PieChartOutlined,
  ContainerOutlined,
  DesktopOutlined,
  SearchOutlined,
  TeamOutlined,
  FormatPainterOutlined,
  BellOutlined,
  DatabaseOutlined,
  InstagramOutlined,
  FacebookOutlined,
  BehanceOutlined
} from '@ant-design/icons'
import { Menu } from 'antd'
import Button from '../../../Button'
import Input from '../../../Inputs/Input'
import Row from '../../../Grid/Row'
import Col from '../../../Grid/Col'
import Box from '../../../Box'
import { ThemeProvider } from 'styled-components'
import breakpoints from '../../../../styles/breakpoints'
import { LayoutSystemProvider } from '../../LayoutSystem'
import Layout from '../../Layout'
import Header from '../../Header'
import Aside from '../Aside'
import Footer from '../../Footer'
import { useArgs } from '@storybook/client-api'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import QLLogo from '../../../../assets/ql-logo-short-primary.svg'

export default {
  title: 'Layout system/Aside/Right/Collapse/Full',
  component: Aside,
  decorators: [
    (Story) => {
      const [args, updateArgs] = useArgs()
      return <Story args={{ ...args, updateArgs }} />
    }
  ],
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        // Here could be general description...
      }
    },
    badges: [BADGE.NEEDS_REVISION]
  },
  argTypes: {
    isAsideRight: {
      table: {
        category: 'Props for Layout System Provider'
      },
      description:
        'Use to insert Aside component at the right side, TRUE is now',
      control: { disable: true }
    },
    asideRightCollapseVariant: {
      table: {
        category: 'Props for Layout System Provider'
      },
      description: 'Use to set variant for aside, FULL is now.',
      control: { disable: true }
    },
    asideRightOuter: {
      table: {
        category: 'Props for Layout System Provider'
      },
      description: 'Use it set outer position for right aside, TRUE is now',
      control: { disable: false }
    },
    asideRightCollapsed: {
      table: {
        category: 'Props for Layout System Provider'
      },
      description:
        'Use if for set default state for aside (collapse or uncollapse), TRUE is now',
      control: { disable: false }
    },
    asideRightOverlay: {
      table: {
        category: 'Props for Layout System Provider'
      },
      description:
        'Use if for set overlay for content when drawer is working, TRUE is now',
      control: { disable: true }
    },
    onClose: {
      table: {
        category: 'Props for Aside'
      },
      description:
        'Specify a callback that will be called when a user clicks mask or close button.',
      control: { disable: true }
    },
    asideToggleBtn: {
      table: {
        category: 'Props for Aside'
      },
      description: 'Use it to place component which will collapse aside.',
      control: { disable: true }
    },
    asideToggleBtnRight: {
      table: {
        category: 'Props for Header'
      },
      description: 'Use it to place component which will uncollapse aside.',
      control: { disable: true }
    },
    collapse: {
      table: {
        disable: true
      }
    },
    drawer: {
      table: {
        disable: true
      }
    }
    // 'other properties': {
    //   description:
    //     'Set any other properties (accepted by the Box) to change the default settings. [Read more >](/?path=/story/components-box--template)'
    // }
  }
}
const headerLayout = (
  <Row noOuterGutters v="center" width="100%" mr={3}>
    <Col>
      <Input
        prefix={<SearchOutlined />}
        placeholder="Enter queries here..."
        bordered={false}
      />
    </Col>
    <Col>
      <Menu mode="horizontal">
        <Menu.Item icon={<TeamOutlined />}>Roles</Menu.Item>
        <Menu.Item icon={<FormatPainterOutlined />}>Styling</Menu.Item>
        <Menu.Item icon={<DatabaseOutlined />}>DB structure</Menu.Item>
      </Menu>
    </Col>
    <Col cw="auto">
      <Button type="text" shape="circle" icon={<BellOutlined />} />
    </Col>
  </Row>
)

const footerLayout = (
  <Row h="center" v="center" width="100%">
    <Col cw="auto">
      <InstagramOutlined style={{ color: '#747374' }} />
    </Col>
    <Col cw="auto">
      <FacebookOutlined style={{ color: '#747374' }} />
    </Col>
    <Col cw="auto">
      <BehanceOutlined style={{ color: '#747374' }} />
    </Col>
  </Row>
)

const Template = (props) => {
  const { onClose, ...args } = props

  const toggleAsideRight = () => {
    args.updateArgs({
      asideRightCollapsed: !args.asideRightCollapsed
    })
    onClose()
  }

  return (
    <ThemeProvider theme={breakpoints}>
      <LayoutSystemProvider {...args}>
        <Layout
          header={
            <Header
              asideToggleBtnRight={
                args.asideRightCollapsed && (
                  <LeftOutlined onClick={toggleAsideRight} />
                )
              }
              bg="#f2f2f2">
              {headerLayout}
            </Header>
          }
          asideRight={
            <Aside
              onClose={toggleAsideRight}
              bg="#848484"
              color="#fff"
              {...args}>
              <Menu
                mode="inline"
                theme="dark"
                inlineCollapsed={args?.asideRightCollapsed}>
                <Box display="flex" justifyContent="center" py={10}>
                  <img src={QLLogo} alt="Qonsoll/React design" />
                </Box>
                <Menu.Item
                  key="1"
                  onClick={toggleAsideRight}
                  icon={<RightOutlined />}>
                  Collapse
                </Menu.Item>
                <Menu.Item key="2" icon={<PieChartOutlined />}>
                  Charts
                </Menu.Item>
                <Menu.Item key="3" icon={<DesktopOutlined />}>
                  Desktop
                </Menu.Item>
                <Menu.Item key="4" icon={<ContainerOutlined />}>
                  Documents
                </Menu.Item>
              </Menu>
            </Aside>
          }
          footer={<Footer bg="#f2f2f2">{footerLayout}</Footer>}>
          Content
        </Layout>
      </LayoutSystemProvider>
    </ThemeProvider>
  )
}

export const asideRightFullCollapse = Template.bind({})

asideRightFullCollapse.args = {
  isAsideRight: true,
  asideRightCollapseVariant: 'full',
  asideRightCollapsed: true,
  asideRightOuter: true
}
