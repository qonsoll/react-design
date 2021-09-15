import React from 'react'
import '../src/styles/vars/index.css' // import '../src/styles/vars.css'
import '../src/styles/antd/index.css' // import '../src/styles/antd.css'
import '../src/styles/PhoneInput.css'

export const parameters = {
  layout: 'centered',
  controls: { expanded: true },
  backgrounds: {
    default: 'gray',
    values: [{ name: 'default', value: 'transparent' }, { name: 'gray', value: '#f6f6f666' }]
  },
  actions: {
    argTypesRegex: '^on[A-Z].*'
  }
}

export const decorators = [
  (Story) => (      
    <Story />
  )
]
