const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  alert('New TODO button clicked!')
}

// 2
let todos = [];

// 3
function newTodo() {
    const todo = prompt("Введіть нове завдання:");
    if (todo) {
        todos.push({ task: todo, completed: false });
        render();
        updateCounter();
    }
}

// 4
function renderTodo(todo) {
    return `
        <li class="list-group-item">
            <input type="checkbox" class="form-check-input me-2" ${todo.completed ? 'checked' : ''} onchange="checkTodo(${todos.indexOf(todo)})">
            <label><span class="${todo.completed ? 'text-success text-decoration-line-through' : ''}">${todo.task}</span></label>
            <button class="btn btn-danger btn-sm float-end" onclick="deleteTodo(${todos.indexOf(todo)})">delete</button>
        </li>
    `;
}

// 5
function render() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = todos.map(todo => renderTodo(todo)).join('');
}

// 6
function updateCounter() {
    const itemCountSpan = document.getElementById('item-count');
    const uncheckedCountSpan = document.getElementById('unchecked-count');
    itemCountSpan.textContent = todos.length;
    const uncheckedCount = todos.filter(todo => !todo.completed).length;
    uncheckedCountSpan.textContent = uncheckedCount;
}

// 7
function deleteTodo(index) {
    todos.splice(index, 1);
    render();
    updateCounter();
}

// 8
function checkTodo(index) {
    todos[index].completed = !todos[index].completed;
    render();
    updateCounter();
}

render();
updateCounter();