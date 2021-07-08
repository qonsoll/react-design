import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Box from '../Box'
import Badge from '../Badge'
import Avatar from '../Media/Avatar'
import Text from '../Typography/Text'
import Link from '../Typography/Link'
import Divider from '../Divider'
import { UserOutlined } from '@ant-design/icons'

/**
 * Notification (25 Mar 2021)
 *
 * @since      0.0.1
 *
 * @param {oneOf}      [status]                  Use it to show notification status.
 * @param {oneOf}      [avatarUrl]               Use to specify avatar url.
 * @param {oneOf}      [avatarSize]              Use it to specify avatar size.
 * @param {oneOf}      [avatarIcon]              Use it to specify avatar icon when avatar url is absent.
 * @param {oneOf}      [userName]                Use it to specify user name.
 * @param {oneOf}      [onClickUserName]         Use it to specify url after clicking on user name.
 * @param {oneOf}      [message]                 Use it to specify message text.
 * @param {oneOf}      [redirectButtonUrl]       Use it to specify extra action url.
 * @param {oneOf}      [redirectButtonText]      Use it to specify extra action text.
 * @param {oneOf}      [onClickMarkAsSeen]       Use it to specify "mark as seen" action url.
 * @param {oneOf}      [markAsSeenText]          Use it to specify "mark as seen" action text.
 * @param {oneOf}      [dateTime]                Use it to show date or/and time.
 *
 * @return {ReactComponent}
 */

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
