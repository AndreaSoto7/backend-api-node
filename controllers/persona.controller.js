
const { createPersona, updatePersona, deletePersona, getPersonaList } = require('../services/persona.service');

exports.getPersonas = async (req, res) => {
    const personas = await getPersonaList()
    res.json(personas);
};

exports.getPersonaById = async (req, res) => {
    const { id } = req.params;
    const persona = await getPersonaById(id);
    if (!persona) {
        res.status(404).json({ message: 'Persona no encontrada' });
        return;
    }
    res.json(persona);
};

exports.postPersonaCreate = async (req, res) => {
    const { nombre, apellido, edad, ciudad, fechaNacimiento } = req.body;
    const persona = await createPersona(nombre, apellido, edad, ciudad, fechaNacimiento);
    res.json(persona);
};
exports.postPersonaUpdate = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, edad, ciudad, fechaNacimiento } = req.body;
    const persona = await updatePersona(id, nombre, apellido, edad, ciudad, fechaNacimiento);
    res.json(persona);
};
exports.deletePersona = async (req, res) => {
    const { id } = req.params;
    await deletePersona(id);
    res.json({ message: 'Persona eliminada correctamente' });
};