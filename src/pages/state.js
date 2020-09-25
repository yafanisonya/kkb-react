import React, { Component } from 'react'

export default class SetStatePage extends Component {
  constructor (props) {
    super(props);
    this.state = { counter: 0 }
  }
  componentDidMount () {
    document.getElementById('dom').addEventListener("click", this.setCounter)
  }
  changeValue = v => {
    this.setState({
      counter: this.state.counter + v
    }, () => {
      console.log('counter', this.state.counter)
    })
    console.log('counter_out', this.state.counter)
    // this.setState(state => ({ counter: state.counter + v }))
  }
  setCounter = () => {
    // setTimeout(() => {
    //   this.changeValue(1)
    //   console.log('counter_setTimeOut', this.state.counter)
    // })
    this.changeValue(1);
    this.changeValue(2);
    console.log('counter_t', this.state.counter)
  }
  render () {
    const { counter } = this.state;
    return (
      <div>
        <h3>SetState</h3>
        <button onClick={this.setCounter}>{counter}</button>
        <button id="dom">{counter}</button>
      </div>
    )
  }
}