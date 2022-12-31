const addBtn = document.getElementById('add-btn');
const todoInp = document.getElementById('todo-inp');
const list = document.getElementById('list');

const todos = JSON.parse(window.localStorage.getItem('todos') || '[]');

function render() {
    while (list.firstChild) {
        list.firstChild.remove();
    }
    for (let todo of todos) {
        const li = document.createElement('li');
        li.classList.add('list-group-item','mb-2','rounded-pill','border','border-dark'); // adding a class to the li
        li.innerText = todo.task;
        list.append(li);
    }
}

function pushTodo(todo) {
    todos.push(todo);
}

function createTodo(newTaskText) {
    const newTodo = {
        id: todos.length + 1,
        task: newTaskText,
        isCompleted:false
    }
    pushTodo(newTodo);
    syncToLocalStorage();
    render();
}

function syncToLocalStorage() {
    window.localStorage.setItem('todos', JSON.stringify(todos));
}

addBtn.addEventListener('click', function () {
    const newTaskText = todoInp.value;
    if (newTaskText.trim().length === 0) {
        todoInp.classList.add('border','border-danger');
        return;
    }
    createTodo(newTaskText);
    todoInp.value = "";
});

todoInp.addEventListener('keydown', function () {
    if (todoInp.classList.contains('border-danger')) {
        todoInp.classList.remove('border-danger');
    }
});

render();




