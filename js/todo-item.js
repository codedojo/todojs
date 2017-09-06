class TodoItem {
    constructor(title, onDelete = () => {}) {
        this.title = title;
        this.isEditing = false;
        this.onDelete = onDelete;

        this.handleToggle = this.handleToggle.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.initialize();
    }

    initialize() {
        this.checkbox = createElement('input', { type: 'checkbox', className: 'checkbox', onchange: this.handleToggle });
        this.label = createElement('label', { className: 'title' }, this.title);
        this.editInput = createElement('input', { type: 'text', className: 'textfield' });
        this.editButton = createElement('button', { className: 'edit', onclick: this.handleEdit }, 'Изменить');
        this.deleteButton = createElement('button', { className: 'delete', onclick: this.handleDelete }, 'Удалить');

        this.element = createElement('li', { className: 'todo-item' }, this.checkbox, this.label, this.editInput, this.editButton, this.deleteButton);
    }

    destroy() {
        this.checkbox.onchange = null;
        this.editButton.onclick = null;
        this.deleteButton.onclick = null;
    }

    handleEdit(event) {
        this.edit();
    }

    handleToggle(event) {
        this.toggle();
    }

    handleDelete(event) {
        this.onDelete(this);
    }

    edit() {
        if (this.isEditing) {
            this.isEditing = false;
            this.label.textContent = this.editInput.value;
            this.editButton.textContent = 'Изменить';
            this.element.classList.remove('editing');
        } else {
            this.isEditing = true;
            this.editInput.value = this.label.textContent;
            this.editButton.textContent = 'Сохранить';
            this.element.classList.add('editing');
        }
    }

    toggle() {
        this.element.classList.toggle('completed');
    }
}