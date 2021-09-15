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

export default {
  title: 'Layout system/Aside/Left/Collapse/Short',
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
    isAsideLeft: {
      table: {
        category: 'Props for Layout System Provider'
      },
      description:
        'Use to insert Aside component at the left side, TRUE is now',
      control: { disable: true }
    },
    asideLeftCollapseVariant: {
      table: {
        category: 'Props for Layout System Provider'
      },
      description: 'Use to set variant for aside, SHORT is now.',
      control: { disable: true }
    },
    asideLeftOuter: {
      table: {
        category: 'Props for Layout System Provider'
      },
      description: 'Use it set outer position for left aside, TRUE is now',
      control: { disable: false }
    },
    asideLeftCollapsed: {
      table: {
        category: 'Props for Layout System Provider'
      },
      description:
        'Use if for set default state for aside (collapse or uncollapse), TRUE is now',
      control: { disable: false }
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
  <Row noOuterGutters v="center" width="100%" ml={3}>
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

  const toggleAsideLeft = () => {
    args.updateArgs({
      asideLeftCollapsed: !args.asideLeftCollapsed
    })
    onClose()
  }

  return (
    <ThemeProvider theme={breakpoints}>
      <LayoutSystemProvider {...args}>
        <Layout
          header={<Header bg="#f2f2f2">{headerLayout}</Header>}
          asideLeft={
            <Aside
              onClose={toggleAsideLeft}
              bg="#848484"
              color="#fff"
              {...args}>
              <Menu
                mode="inline"
                theme="dark"
                inlineCollapsed={args?.asideLeftCollapsed}>
                <Box display="flex" justifyContent="center" py={10}>
                  <img
                    src="ql-logo-short-primary.svg"
                    alt="Qonsoll/React design"
                  />
                </Box>
                <Menu.Item
                  key="1"
                  onClick={toggleAsideLeft}
                  icon={
                    args?.asideLeftCollapsed ? (
                      <RightOutlined />
                    ) : (
                      <LeftOutlined />
                    )
                  }>
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

export const asideLeftShortCollapse = Template.bind({})

asideLeftShortCollapse.args = {
  isAsideLeft: true,
  asideLeftCollapseVariant: 'short',
  asideLeftCollapsed: true,
  asideLeftOuter: true
}
