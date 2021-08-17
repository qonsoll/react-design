import React from 'react'
import Header from './Header'

export default {
  title: 'Components/Layout system/Header',
  component: Header,
  argTypes: {
    height: {
      description: 'Use to override default Header height.'
    },
    bg: {
      description: 'Use to override default Header background color.'
    },
    px: {
      description: 'Use to override default Header padding.'
    },
    shadow: {
      description: 'Use to override default Header shadow.'
    },
    asideToggleBtnLeft: {
      description: 'Use to insert component which will control left aside.'
    },
    asideToggleBtnRight: {
      description: 'Use to insert component which will control right aside.'
    },
    'Any other Box properties': {
      description:
        'Set any other properties (accepted by the Box) to change the default settings.'
    }
  }
}

export const Template = (args) => <Header>This is header</Header>
