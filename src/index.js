import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo192.png'
import styles from "./indexModule.css"
import App from './App'

const name = "fanison";
const obj = {
  firstName: 'Harry',
  lastName: 'Potter'
}
function formatName (name) {
  return name.firstName + " " + name.lastName
}
const greet = <div>good</div>
const show = false
const a = [0, 1, 2, 3]

const jsx = <div>
  {/* //基本使用 表达式用{}包裹 */}
  <div>hello,{name}</div>
  {/* 函数 */}
  <div>{formatName(obj)}</div>
  {/* jsx对象 */}
  {greet}
  {/* 条件语句 */}
  {show ? greet : '登录'}
  {show && greet}
  {/* 数组 */}
  <ul>
    {a.map(item => (<li key={item}>{item}</li>))}
  </ul>
  {/* 模块化、属性 */}
  <img src={logo} className={styles.logo} style={{ width: "50px", height: "50px" }} ></img>
</div>

// ReactDOM.render(jsx, document.getElementById("root"))
ReactDOM.render(<App />, document.getElementById("root"))
