const model = new Model();
const controller = new Controller();
const view = new View(model, controller);

controller.initialize(model, view);