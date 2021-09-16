import React, { Component } from 'react'
import axios from 'axios'
import './mock/test.js'


export class App extends Component {

  componentDidMount(){
    // axios.get('/test').then(res=>{
    //   console.log(res)
    // })
    axios.get('http://localhost:9250/testexpress').then(res=>{
      console.log("testexpress---",res)
    })
  }

  render() {
    return (
      <div>
          ccc
      </div>
    )
  }
}

export default App

