class Render {
    constructor () {

    }

    render = function (todos) {
        console.log(todos)
        $("#todos").empty()

        const source = $('#task-template').html();
        const template = Handlebars.compile(source)
        let newHTML = template({todos : todos});
        $('#todos').append(newHTML);

    
       /*  todos.forEach(todo => {
            $("#todos").append(`
            <div data-id=${todo.id} class="todo ${todo.complete ? 'complete' : ''}" >
                <i class="fas fa-check-circle"></i>
                <span class=text>${todo.text}</span>
                <span class="delete"><i class="fas fa-trash"></i></span>
            </div>
            `)
        }) */
        


    }

    
      
}