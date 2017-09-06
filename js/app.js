class App {
    constructor(element, todoForm, todoList) {
        this.element = element;
        this.todoForm = todoForm;
        this.todoList = todoList;

        this.initialize();
    }

    initialize() {
        this.todoForm.onSubmit = this.todoList.add.bind(this.todoList);
    }
}