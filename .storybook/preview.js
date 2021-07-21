import React from 'react'
import '../src/styles/vars.css'
import '../src/styles/antd.css'
import '../src/styles/PhoneInput.css'
// import "antd/dist/antd.css";
// import {ThemeProvider} from 'styled-components'
// import theme from './theme'

export const parameters = {
  layout: 'fullscreen',
  controls: { expanded: true },
  actions: {
    argTypesRegex: '^on[A-Z].*'
  }
}

export const decorators = [
  (Story) => (
    //  <ThemeProvider theme = {theme}>
    <Story />
    //  </ThemeProvider>
  )
]
