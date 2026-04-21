const Joi = require('joi');

const personaSchema = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    edad: Joi.number().integer().min(1).max(120).required(),
    ciudad: Joi.string().required(),
    fechaNacimiento: Joi.date().required()
});

module.exports = {
    personaSchema
};