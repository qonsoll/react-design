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

1. In your index.js file insert two imports:
```jsx
import "@qonsoll/react-design/dist/styles/styles.css"; 
import "@qonsoll/react-design/dist/styles/vars/index.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```
2. Create folder styles/ in root of project, if you don't already have this folder in your project
```bash 
 mkdir styles
```
Create vars.css files inside styles/ directory. 

There is an example how vars.css file should look like. Copy and insert this code to vars.css file. You can add own values for vars, they will be override default vars from library
```jsx
:root {
  /* Colors —————————————————————————————— Start */
  --ql-color-accent1: rgb(102, 72, 191);
  /* Colors —————————————————————————————— End */

  /* Typography —————————————————————————————— Start */
  --ql-font-family-main:  "Rubik";
  /* Typography —————————————————————————————— End */
}
```
It is not necessary to use comments, but when your file have a lot of variables better to use comment for grouping

3. Add this import in file index.js
```jsx
import './styles/vars.css'
```
Be careful, it string must be only after string with importing default library's vars. Otherwise, your vars will not work. 
### How to override specific property?

Variables for all components, typography, colors and so on you can find in folder @qonsoll/react-design/dist/styles/vars. There are all vars, that you use. 

If you need to set variable for specific component, you need to go to component folder and find name of one. In file you will find name of var, that you need. 
For example, in order to change background for card, you need to: 
- go to file components/Card/_card.css;
- find variable --card-background;
- copy name of this var;
- go to file /styles/vars.css in your project;
- insert it
```jsx
  /* Card —————————————————————————————— Start */
  --card-background:  #a7a7a796;
  /* Card —————————————————————————————— End */
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
