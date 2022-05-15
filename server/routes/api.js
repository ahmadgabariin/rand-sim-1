const express = require('express')
const router = express.Router()

const todos = []
let id = 1

router.get('/todos', function (req, res) {
    res.send(todos)
})

router.post('/todo', function (req, res) {
    const taskOBJ = req.body
    const newTodo = { id: id++, text: taskOBJ.text, complete: false , priority : taskOBJ.priority } 

    todos.push(newTodo)
    res.send(todos)
})

router.put('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    let completed = todos.find(t => t.id == todoID).complete  // completed to complete
    if(completed) {
        todos.find(t => t.id == todoID).complete = false // completed to complete
    }
    else {
        todos.find(t => t.id == todoID).complete = true
    }
    res.send(todos)
})

router.delete('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID /// string id
    let index = todos.findIndex(todo => todo.id == todoID)
    console.log(index)
    todos.splice(index, 1)
    console.log('hello')
    res.send(todos)
})

module.exports = router