import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponent from './pages/classComponent'
import { FunctionComponent } from './pages/functionComponent';

function App () {
  return (
    <div className="App">
      <ClassComponent></ClassComponent>
      <FunctionComponent></FunctionComponent>
    </div>
  );
}

export default App;
