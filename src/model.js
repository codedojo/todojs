import { EventEmitter } from './helpers';

export default class Model extends EventEmitter {
    constructor(state = []) {
        super();

        this.state = state;
    }

    getItem(id) {
        return this.state.find(item => item.id == id);
    }

    addItem(item) {
        this.state.push(item);
        this.emit('change', this.state);
        return item;
    }

    updateItem(id, data) {
        const item = this.getItem(id);

        Object.keys(data).forEach(prop => item[prop] = data[prop]);

        this.emit('change', this.state);
        
        return item;
    }

    removeItem(id) {
        const index = this.state.findIndex(item => item.id == id);
        
        if (index > -1) {
            this.state.splice(index, 1);
            this.emit('change', this.state);
        }
    }
}