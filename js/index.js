new App(
    document.querySelector('#app'),
    new TodoForm(document.querySelector('#todo-form')),
    new TodoList(document.querySelector('#todo-list'))
);