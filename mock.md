## ����mock
1.��װ����
yarn add axios --save
yarn add mockjs --save-dev
yarn add json5 --save-dev

2.��src���洴��mock/test.js
import Mock from 'mockjs'
Mock.setup({
    timeout:1000
})

Mock.mock('/test','get', {
    data:'@id'
})

3.ʹ��
import React, { Component } from 'react'
import axios from 'axios'
import './mock/test.js'		//�ص�������ļ�Ҫ����

export class App extends Component {
  componentDidMount(){
    axios.get('/test').then(res=>{
      console.log(res)
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

## ʹ��express����mock
1.��װexpress
yarn add express --save

2.�ڸ�Ŀ¼����express/server.js
const express = require('express')
const Mock = require('mockjs')
const app = express()
const port = 9250

//�����������
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.get('/testexpress', (req, res) => {
  res.send(Mock.mock({
    id: '@id'
  }))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

3.ʹ��
componentDidMount(){
    axios.get('http://localhost:9250/testexpress').then(res=>{
      console.log("testexpress---",res)
    })
  }




