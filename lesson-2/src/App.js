import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Salom {this.props.data.ism}</h1>
        <h2>Ishlar yaxshimi {this.props.data.ism}</h2>
        <h3>Sizning yoshingiz  {this.props.data.yosh || "null"} dami..?</h3>
      </div>
    )
  }
}

export default App