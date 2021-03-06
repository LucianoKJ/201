import React from 'react'
import MyTest from './components/MyTest'

class App extends React.Component {
  // Mounting(掛載階段) 只會呼叫一次
  constructor(props) {
    // 呼叫React.Component建構式
    super(props)

    //設定state初始值
    this.state = {
      total: 0,
    }
    console.log('constructor')
  }

  // Mounting(掛載階段)，呈現後只會呼叫一次
  componentDidMount() {
    console.log('componentDidMount')
    console.log(document.getElementById('abc').innerHTML)
  }

  // 更新階段，每次更新後會呼叫一次
  componentDidUpdate() {
    console.log('componentDidUpdate')
    console.log(document.getElementById('abc').innerHTML)
  }

  render() {
    console.log('render')
    return (
      <>
        <MyTest />
        <h1 id="abc">{this.state.total}</h1>
        <button
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.setState({ total: this.state.total - 1 })
          }}
        >
          -1
        </button>
      </>
    )
  }
}

export default App
