// BAD PRACTICE - not proper MVC. Should be separated to files.
const api = new APIManager()
const render = new Render()

const add = function () {
    let selectorValue = $('#drop-down-to-do :selected').text();
    let inputValue = { text: $("#todo-input").val() , priority : selectorValue }
    
    api.postAddTask(inputValue)
}

$("#todos").on("click", ".fa-check-circle", function () {
    const id = $(this).closest(".todo").data().id
    api.updateTask(id)
})

$("#todos").on("click", ".fa-trash", function () {
    const id = $(this).closest(".todo").data().id
    api.deleteTask(id)
})


api.getTasks()
.then( function (data) {
    render.render(data)
})
.catch( error => console.log(error))

// $.get('/todos', todos => render.render(todos))