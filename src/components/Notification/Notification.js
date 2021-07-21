import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Box from '../Box'
import Badge from '../Badge'
import Avatar from '../Media/Avatar'
import Text from '../Typography/Text'
import Link from '../Typography/Link'
import Divider from '../Divider'
import { UserOutlined } from '@ant-design/icons'

const Notification = (props) => {
  const {
    status,
    avatarUrl,
    avatarSize,
    avatarIcon,
    userName,
    onClickUserName,
    message,
    redirectButtonUrl,
    redirectButtonText,
    onClickMarkAsSeen,
    markAsSeenText,
    dateTime
  } = props
  return (
    <Box display='flex' flexGrow={1} alignItems='center'>
      <Box display='flex' alignSelf='flex-start' mr={3}>
        {status && <Badge status={status || 'default'} />}
        <Avatar
          src={avatarUrl}
          size={avatarSize || 40}
          icon={avatarIcon || <UserOutlined />}
        />
      </Box>
      <Box display='flex' flexDirection='column'>
        <Text lineHeight={1.5}>
          {userName && onClickUserName ? (
            <Link href={onClickUserName}>{userName} </Link>
          ) : (
            `${userName} `
          )}
          {message}
        </Text>
        {(redirectButtonText && redirectButtonUrl) ||
          (markAsSeenText && onClickMarkAsSeen && (
            <Box mt={2} display='flex' alignItems='center'>
              {redirectButtonText && redirectButtonUrl && (
                <Fragment>
                  <Link lineHeight={1.5} onClick={redirectButtonUrl}>
                    {redirectButtonText}
                  </Link>
                  <Divider type='vertical' />
                </Fragment>
              )}
              {onClickMarkAsSeen && (
                <Link lineHeight={1.5} onClick={onClickMarkAsSeen}>
                  {markAsSeenText || 'Mark as seen'}
                </Link>
              )}
            </Box>
          ))}
      </Box>
      <Box
        display='flex'
        justifyContent='flex-end'
        textAlign='right'
        pl={3}
        ml='auto'
        minWidth={60}
      >
        <Text type='secondary' fontSize={12} lineHeight='20px' fontWeight={600}>
          {dateTime}
        </Text>
      </Box>
    </Box>
  )
}

Notification.propTypes = {
  status: PropTypes.oneOf([
    'default',
    'success',
    'warning',
    'error',
    'processing'
  ]),
  avatarUrl: PropTypes.string,
  avatarSize: PropTypes.number,
  avatarIcon: PropTypes.node,
  userName: PropTypes.string,
  onClickUserName: PropTypes.func,
  message: PropTypes.string,
  redirectButtonUrl: PropTypes.string,
  redirectButtonText: PropTypes.string,
  onClickMarkAsSeen: PropTypes.func,
  markAsSeenText: PropTypes.string,
  dateTime: PropTypes.string
}

export default Notification
