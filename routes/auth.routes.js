const { isJsonRequestValid } = require('../middlewares/isJsonRequestValid.middleware.js');
const { registerUserSchema } = require('../validators/auth.schema');
const { loginUserSchema } = require('../validators/auth.schema');
const schemaValidation = require('../middlewares/schemaValidation.middleware.js');

module.exports = app => {
    let router = require('express').Router();
    const controller = require('../controllers/auth.controller.js');
    router.post('/register', isJsonRequestValid, schemaValidation(registerUserSchema), controller.registerUser);
    router.post('/login', isJsonRequestValid, schemaValidation(loginUserSchema), controller.postLogin);
    app.use('/auth', router);
}