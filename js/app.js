const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', addTodoItem);

function createTodoItem(title) {
    let checkbox = createElement('input', { type: 'checkbox', className: 'checkbox', onchange: toggleTodoItem });
    let label = createElement('label', { className: 'title' }, title);
    let editInput = createElement('input', { type: 'text', className: 'textfield' });
    let editButton = createElement('button', { className: 'edit', onclick: editTodoItem }, 'Изменить');
    let deleteButton = createElement('button', { className: 'delete', onclick: deleteTodoItem }, 'Удалить');
    let listItem = createElement('li', { className: 'todo-item' }, checkbox, label, editInput, editButton, deleteButton);

    return listItem;
}

function addTodoItem(event) {
    event.preventDefault();

    let title = addInput.value;

    if (title === '') {
        return alert('Необходимо ввести название задачи.');
    }

    let todoItem = createTodoItem(title);

    todoList.appendChild(todoItem);
    addInput.value = '';
}

function toggleTodoItem() {
    let listItem = this.parentNode;

    listItem.classList.toggle('completed');
}

function editTodoItem() {
    let listItem = this.parentNode;
    let title = listItem.querySelector('.title');
    let editInput = listItem.querySelector('.textfield');
    let isEditing = listItem.classList.contains('editing');

    if (isEditing) {
        title.textContent = editInput.value;
        this.textContent = 'Изменить';
    } else {
        editInput.value = title.textContent;
        this.textContent = 'Сохранить';
    }

    listItem.classList.toggle('editing');
}

function deleteTodoItem() {
    let listItem = this.parentNode;
    
    todoList.removeChild(listItem);
}