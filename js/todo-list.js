class TodoList {
    constructor(element) {
        this.element = element;

        this.remove = this.remove.bind(this);
    }

    add(title) {
        let todoItem = new TodoItem(title, this.remove);
        
        this.element.appendChild(todoItem.element);
    }

    remove(todoItem) {
        this.element.removeChild(todoItem.element);
        todoItem.destroy();
        todoItem = null;
    }
}