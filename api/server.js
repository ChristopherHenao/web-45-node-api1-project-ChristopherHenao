// BUILD YOUR SERVER HERE
const express = require('express')
const Users = require('./users/model')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.json({ message: 'hey there MP'})
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
