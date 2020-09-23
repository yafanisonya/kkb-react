import React, { Component } from 'react';

export default class ClassComponent extends Component {
  constructor (props) {
    super(props);
    this.state = { date: new Date() }
  }
  componentDidMount () {
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }
  componentWillUnmount () {
    clearInterval(this.timerID)
  }
  componentDidUpdate () {
    console.log('update')
  }
  render () {
    return <div>{this.state.date.toLocaleTimeString()}</div>
  }
}