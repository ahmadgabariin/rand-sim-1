class APIManager {
    constructor () {}


    getTasks () {
        return $.get('/todos')
    }

    postAddTask (inputValue) {

        $.ajax({
            method : `POST` ,
            url : `/todo`,
            data : inputValue,
            success : (todos) => {
                render.render(todos)
                $("#todo-input").val("")
            },
            error : () => {
    
            }
            
        })

    }

    updateTask (taskID) {
        $.ajax({
            method: "PUT",
            url: "/todo/" + taskID,
            success : todos => {
                render.render(todos)
                
            }
            
        })
    }


    deleteTask (taskID) {

        $.ajax({
            method: "DELETE",
            url: "/todo/" + taskID,
            success: todos => {
                render.render(todos)
                
            }
        })

    }
}