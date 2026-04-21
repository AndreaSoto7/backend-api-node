const db = require("../models");
const personaService={
    getObjectList: async () => {
        return await db.persona.findAll();
    },
    createObject: async ({nombre, apellido, edad, ciudad, fechaNacimiento}) => {
        return await db.persona.create({
        nombre,
        apellido,
        edad,
        ciudad,
        fechaNacimiento
        });
    },
    getById: async (id) => {
        return await db.persona.findByPk(id);
    },
    updateObject: async (id, {nombre, apellido, edad, ciudad, fechaNacimiento}) => {
        const persona = await personaService.getById(id);
        persona.nombre = nombre;
        persona.apellido = apellido;
        persona.edad = edad;
        persona.ciudad = ciudad;
        persona.fechaNacimiento = fechaNacimiento;
        return await persona.save();
    },
    deleteObject: async (id) => {
        const persona = await personaService.getById(id);
        return await persona.destroy();
    }
}
module.exports = personaService;