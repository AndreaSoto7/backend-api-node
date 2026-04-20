const db = require("../models");

exports.getPersonaList = async () => {
    return await db.persona.findAll();
}

exports.createPersona = async (nombre, apellido, edad, ciudad, fechaNacimiento) => {
    return await db.persona.create({
        nombre,
        apellido,
        edad,
        ciudad,
        fechaNacimiento
    });
}

exports.getPersonaById = async (id) => {
    return await db.persona.findByPk(id);
}

exports.updatePersona = async (id, nombre, apellido, edad, ciudad, fechaNacimiento) => {
    const persona = await this.getPersonaById(id);
    persona.nombre = nombre;
    persona.apellido = apellido;
    persona.edad = edad;
    persona.ciudad = ciudad;
    persona.fechaNacimiento = fechaNacimiento;
    return await persona.save();
}

exports.deletePersona = async (id) => {
    const persona = await this.getPersonaById(id);
    return await persona.destroy();
}