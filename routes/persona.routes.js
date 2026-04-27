const { isJsonRequestValid } = require('../middlewares/isJsonRequestValid.middleware.js');
const { personaSchema } = require('../validators/persona.schema');
const schemaValidation = require('../middlewares/schemaValidation.middleware.js');
const getObjectOr404 = require('../middlewares/getObjectOr404.middleware.js');
const personaService = require('../services/personas.service.js');
const requireAuth  = require('../middlewares/user.middleware.js');

module.exports = app => {
    let router = require('express').Router();
    const controller = require('../controllers/persona.controller.js');

    router.get('/', requireAuth, controller.getPersonas);
    router.post('/', isJsonRequestValid, schemaValidation(personaSchema), controller.postPersonaCreate);
    router.get('/:id', getObjectOr404(personaService), controller.getPersonaById);
    router.put('/:id',isJsonRequestValid,  getObjectOr404(personaService), schemaValidation(personaSchema), controller.putPersonaUpdate);
    //router.patch('/:id', controller.putPersonaUpdate);
    router.delete('/:id', getObjectOr404(personaService), controller.deletePersona);

    app.use('/personas', router);
}