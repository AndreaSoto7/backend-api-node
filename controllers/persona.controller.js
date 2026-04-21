const { personaSchema } = require('../validators/persona.schema');
const personaService = require('../services/personas.service.js');

exports.getPersonas = async (req, res) => {
    const personas = await personaService.getObjectList();
    res.json(personas);
};

exports.getPersonaById = async (req, res) => {
    res.json(req.obj);
};

exports.postPersonaCreate = async (req, res) => {
    const persona = await personaService.createObject(req.body);
    res.json(persona);
};

exports.putPersonaUpdate = async (req, res) => {
    const { id } = req.params;
    const persona = await personaService.updateObject(id, req.body);
    res.json(persona);
};
exports.deletePersona = async (req, res) => {
    const { id } = req.params;
    await personaService.deleteObject(id);
    res.json({ message: 'Persona eliminada correctamente' });
};