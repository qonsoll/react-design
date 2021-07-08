import React from 'react'
import Card from './Card'
import { Card as AntCard, Avatar } from 'antd'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    'Default AntD props': {
      description:
        'Component absolutely maintain default AntD card properties (check Ant documentation: https://ant.design/components/card/#Card).',
      control: { disable: true }
    },
    shadowless: {
      table: {
        category: 'Custom properties'
      },
      description: 'Use to disable card shadow.'
    },
    Packages: {
      table: {
        category: 'Extentions'
      },
      description:
        'Applyed styled-system packages (check styled-system API documentation: https://styled-system.com/api).',
      control: { disable: true }
    },
    'Extra CSS props': {
      table: {
        category: 'Extentions'
      },
      description: 'Additional CSS properties which could be applyed.',
      control: { disable: true }
    }
  }
}

export const Template = (args) => (
  <Card
    {...args}
    cover={
      <img
        alt='example'
        src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
      />
    }
    actions={[
      <SettingOutlined key='setting' />,
      <EditOutlined key='edit' />,
      <EllipsisOutlined key='ellipsis' />
    ]}
  >
    <AntCard.Meta
      avatar={
        <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
      }
      title='Card title'
      description='This is the description'
    />
  </Card>
)
