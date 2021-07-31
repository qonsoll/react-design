# React design

> AntdD + styled system based on CSS vars. Extended antd components with additional style properties and advanced grid system.

[![NPM](https://img.shields.io/npm/v/@qonsoll/react-design.svg)](https://www.npmjs.com/package/@qonsoll/react-design) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install
### Install dependencies
```bash
npm install --save antd @ant-design/icons styled-components
```
or
```bash
yarn add antd @ant-design/icons styled-components
```
### Install library
```bash
npm install --save @qonsoll/react-design
```
or
```bash
yarn add @qonsoll/react-design
```
## Usage

1. Create vars.css files inside styles/ directory. Here is an example how vars.css file should look like https://github.com/qonsoll/react-design/blob/main/src/styles/vars.css

2. In your index.js file insert:
```jsx
import "@qonsoll/react-design/dist/styles/styles.css"; // Insert this line

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

### How to import components?
```jsx
import { Container, Row, Col, Button, Text } from "@qonsoll/react-design"
```

## Documentation (Storybook)
https://qonsoll.github.io/react-design

## Deploy Storybook changes to GitPages
Switch to root directory, then push changes and deploy it to GitPages:
```bash
git add . && git commit -m 'Commit message...' && git push && npm publish && npm run deploy-storybook
```

## License

MIT © [alexpassss](https://github.com/alexpassss)
