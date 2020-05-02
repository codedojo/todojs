import Model from './model';
import View from './view';
import Controller from './controller';
import { save, load } from './helpers';

const state = load('todos') || undefined;

const model = new Model(state);
model.on('change', state => save(state));

const view = new View(document.querySelector('#app'));
const controller = new Controller(model, view);