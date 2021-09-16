
const express = require('express')
const Mock = require('mockjs')
const app = express()
const port = 9250

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
