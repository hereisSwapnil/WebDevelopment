let todo = [];
let todoCompleted = []


function displayTodo() {
    let listElement = document.getElementById("list");

    let mappedTodo = todo.map((item, index) => {
        console.log(index);
        return '<div class="list_item" id="todo_'+ index +'"><div class="list_text"><input type="checkbox" value=0 name="" id="" onchange=todo_complete('+ index + ',value)><label>' + item + '</label></div><div class="control"><i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i></div></div>';
    });

    let mappedTodoString = mappedTodo.join('');

    listElement.innerHTML = mappedTodoString;
}

function add_todo() {
    let item = document.getElementById("todo_input")
    if (item.value != "") {
        todo.push(item.value)
        displayTodo()
        item.value = ""
    }
}

function todo_complete(index, value) {
    todoCompleted.push(todo[index])
    todo.splice(todo[index], 1,"!"+todo[index])
    let listElement = document.getElementById("list");
    console.log(value);
    let mappedTodo = todo.map((item, i) => {
        if(i == index){
            return '<div class="list_item completed" id="todo_'+ i +'"><div class="list_text"><input type="checkbox" value=0 name="" id="" onchange=todo_complete('+ i + ',value)><label>' + item + '</label></div><div class="control"><i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i></div></div>';
        }else{
            return '<div class="list_item" id="todo_'+ i +'"><div class="list_text"><input type="checkbox" value=0 name="" id="" onchange=todo_complete('+ i + ',value)><label>' + item + '</label></div><div class="control"><i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i></div></div>';
        }
    });
    let mappedTodoString = mappedTodo.join('');
    listElement.innerHTML = mappedTodoString;

    todoCompleted.push(todo[index])
}

document.addEventListener("DOMContentLoaded", displayTodo)
