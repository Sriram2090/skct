import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor()
    {
        super();
        this.state={
            count:0
        }
    }
    In =()=>
    {
        this.setState({count:this.state.count+1})
    }
    componentDidMount()
    {
        alert("Hi Welcome eveery oone ")
console.log("componentDidMount-------->>>>>>>>>>>")

}
componentDidUpdate()
{
    console.log("componentDidUpdate-->>>>>>>")
    
}
componentWillUnmount()
{
    console.log("componentWillUnmount=======>>>>>>>")

}
  render() {
    return (
      <div>
        <h1> Counter: {this.state.count}</h1>
        <button onClick={this.In}>Incresase</button>
      </div>
    )
  }
}
