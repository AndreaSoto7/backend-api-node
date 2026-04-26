const Joi = require('joi');

const registerUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    nombreCompleto: Joi.string().required()
});

const loginUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

module.exports = {
    registerUserSchema
};