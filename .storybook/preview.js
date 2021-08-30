import React from 'react'
import '../src/styles/vars/index.css' // import '../src/styles/vars.css'
import '../src/styles/antd/index.css' // import '../src/styles/antd.css'
import '../src/styles/PhoneInput.css'

export const parameters = {
  layout: 'centered',
  controls: { expanded: true },
  actions: {
    argTypesRegex: '^on[A-Z].*'
  }
}

export const decorators = [
  (Story) => (
    <Story />
  )
]
