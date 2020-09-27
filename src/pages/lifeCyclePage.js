import React, { Component } from 'react'

export default class LifeCyclePage extends Component {
  static defaultProps = {};
  static propTypes = {};
  constructor (props) {
    super(props);
    this.state = { count: 0 };
    console.log('constructor')
  }
  static getDeriveStateFromProps (props, state) {
    console.log('getDerivedStateFromProps');
    const { count } = state;
    return count > 5 ? { count: 0 } : null
  }
  componentDidMount () {
    console.log('componentDidMount')
  }
  shouldComponentUpdate (nextProps, nextState) {
    const { count } = nextState;
    console.log('shouldComponentUpdate', nextState, this.state)
    return count !== 3;
  }
  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState);
    return {
      msg: '我是getSnapshotBeforeUpdate'
    }
  }
  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState.snapshot)
  }
  setCount = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render () {
    console.log('render', this.props)
    const { count } = this.state;
    return (
      <div>
        <h3>LifeCyclePage</h3>
        <p>{count}</p>
        <button onClick={this.setCount}>change count</button>
        <Child count={count} />
      </div>
    )
  }
}

class Child extends Component {
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }
  render () {
    console.log('Child render')
    const { count } = this.props
    return (
      <div>
        <h3>Child</h3>
        <p>{count}</p>
      </div>
    )
  }
}