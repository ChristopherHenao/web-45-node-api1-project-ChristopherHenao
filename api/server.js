// BUILD YOUR SERVER HERE
const express = require('express')
const Users = require('./users/model')

const server = express()

server.use(express.json())

// Endpoints
server.get('/api/users', (req, res) => {
    res.json({ message: 'hey there MP'})
})

server.get('/api/users/:id', (req, res) => {
    res.json('the get ID is working')
})

server.post('/api/users', (req, res) => {
    res.json('the post is working')
})

server.put('/api/users/:id', (req, res) => {
    res.json('the put is working')
})

server.delete('/api/users/:id', (req, res) => {
    res.json('the delete is working')
})

server.get('*', (req, res) => {
    res.status(404).json('this page does not exist')
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
