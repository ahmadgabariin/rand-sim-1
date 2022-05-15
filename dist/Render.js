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

    }

    
      
}