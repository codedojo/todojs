class TodoForm {
    constructor(element) {
        this.element = element;
        this.titleInput = null;
        this.onSubmit = () => {};

        this.handleSubmit = this.handleSubmit.bind(this);

        this.initialize();
    }

    initialize() {
        this.titleInput = this.element.querySelector('#add-input');
        this.element.addEventListener('submit', this.handleSubmit);
    }

    destroy() {
        this.element.removeEventListener('submit', this.handleSubmit);
    }

    handleSubmit(event) {
        event.preventDefault();

        let title = this.titleInput.value;
    
        if (title === '') {
            return alert('Необходимо ввести название задачи.');
        }
    
        this.onSubmit(title);
        this.titleInput.value = '';
    }
}