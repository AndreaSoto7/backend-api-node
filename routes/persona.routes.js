module.exports = app => {
    let router = require('express').Router();
    const controller = require('../controllers/persona.controller.js');

    router.get('/', controller.getPersonas);
    router.post('/', controller.postPersonaCreate);
    router.get('/:id', controller.getPersonaById);
    router.put('/:id', controller.putPersonaUpdate);
    //router.patch('/:id', controller.putPersonaUpdate);
    router.delete('/:id', controller.deletePersona);

    app.use('/personas', router);
}