# antd-styled

> AntdD + styled system. Extended antd components with additional style properties

[![NPM](https://img.shields.io/npm/v/antd-styled.svg)](https://www.npmjs.com/package/antd-styled) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save antd-styled
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'antd-styled'
import 'antd-styled/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## StoryBook
https://bllago.github.io/antd-styled/

## Deploy Storybook changes to GitPages
Switch to root directory, then push changes and deploy it to GitPages:
```bash
git add . && git commit -m 'Commit message...' && git push && npm publish && npm run deploy-storybook
```

## Playground
Switch to root directory and run project:
```bash
npm start
```

Then switch to playground directory "example" and run project:
```bash
npm start
```

Then switch back to root directory and run storybook :
```bash
npm run storybook
```

## License

MIT © [alexpassss](https://github.com/alexpassss)
