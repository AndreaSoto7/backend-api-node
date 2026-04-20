const { createPersona, updatePersona, deletePersona, getPersonaList } = require('../services/personas.service');

exports.getPersonas = async (req, res) => {
    const personas = await getPersonaList()
    res.json(personas);
};

exports.getPersonaById = async (req, res) => {
    const { id } = req.params;
    const persona = await getPersonaById(id);
    if (!persona) {
        res.status(404).json({ message: 'Person not found' });
        return;
    }
    res.json(persona);
};

exports.postPersonaCreate = async (req, res) => {
    if(!req.body || Object.keys(req.body).length === 0) {
        res.status(400).json({ message: 'Request body is empty' });
        return;
    }
    const { nombre, apellido, edad, ciudad, fechaNacimiento } = req.body;
    if(!nombre || !apellido || !edad || !ciudad || !fechaNacimiento) {
        res.status(400).json({ message: 'Missing required fields' });
        return;
    }
    const persona = await createPersona(nombre, apellido, edad, ciudad, fechaNacimiento);
    res.json(persona);
};
exports.putPersonaUpdate = async (req, res) => {
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