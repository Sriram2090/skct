import React, { Component } from 'react'

export class Classcomponent extends Component {
    constructor()
    {
        super();
        this.state={
            count:0
        }
    }
    Increment =()=>
    {
        this.setState({count:this.state.count+1})
    }
    Decrement =()=>
    {
        this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.Increment}>Incremment</button>
        <button onClick={this.Decrement}>Decremment</button>
        <button onClick={this.Increment}>2</button>

      </div>
    )
  }
}

export default Classcomponent