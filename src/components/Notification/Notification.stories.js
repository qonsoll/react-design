import React from 'react'
import Notification from './Notification'
import Box from '../Box'

export default {
  title: 'Components/Notification',
  component: Notification,
  argTypes: {
    status: {
      description: 'Use it to show notification status.'
      // control: { disable: true }
    },
    avatarUrl: {
      description: 'Use to specify avatar url.'
    },
    avatarSize: {
      description: 'Use it to specify avatar size.'
    },
    avatarIcon: {
      description: 'Use it to specify avatar icon when avatar url is absent.'
    },
    avatarMarginRight: {
      description: 'Use it to specify margin right for avatar.'
    },
    userName: {
      description: 'Use it to specify user name.'
    },
    onClickUserName: {
      description: 'Use it to specify url after clicking on user name.'
    },
    message: {
      description: 'Use it to specify message text.'
    },
    redirectButtonUrl: {
      description: 'Use it to specify extra action url.'
    },
    redirectButtonText: {
      description: 'Use it to specify extra action text.'
    },
    onClickMarkAsSeen: {
      description: 'Use it to specify "mark as seen" action url.'
    },
    markAsSeenText: {
      description: 'Use it to specify "mark as seen" action text.'
    },
    dateTime: {
      description: 'Use it to show date or/and time.'
    }
  }
}

export const Template = (args) => (
  <Box width={400}>
    <Notification
      avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQog3HmcERCvKqjE-afKGUJzTsyKTipP7l_2Q&usqp=CAU"
      avatarSize={48}
      userName="Thomas Washington"
      onClickUserName="https://google.com"
      message="Notification title could be very very long"
      redirectButtonUrl="https://facebook.com"
      redirectButtonText="Open profile"
      dateTime="17m"
      {...args}
    />
  </Box>
)
