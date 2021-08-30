// BUILD YOUR SERVER HERE
const express = require('express')
const Users = require('./users/model')

const server = express()

server.use(express.json())

// Endpoints
server.get('/api/users', (req, res) => {
    Users.find()
    .then(users => {
        res.json(users)
    })
    .catch(error => {
        res.status(500).json({ message: "The users information could not be retrieved" })
    })
})

server.get('/api/users/:id', async (req, res) => {
    const user = await Users.findById(req.params.id)
    try {
        if (!user) {
            res.status(404).json({ message: "The user with the specified ID does not exist" })
        }
        else {
            res.json(user)
        }
    }
    catch (error) {
        res.status(500).json({ message: "The user information could not be retrieved" })
    }
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
