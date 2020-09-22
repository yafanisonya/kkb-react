import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = "fanison";
const obj = {
  firstName: 'Harry',
  lastName: 'Potter'
}
function formatName (name) {
  return name.firstName + " " + name.lastName
}
const jsx = <div>
  <div>hello,{name}</div>
  <div>{formatName(obj)}</div>
</div>

ReactDOM.render(jsx, document.getElementById("root"))

