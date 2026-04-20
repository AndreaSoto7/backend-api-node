const { sequelize } = require('../config/db.config');

const persona = require('./persona.model')(sequelize);
const mascota = require('./mascota.model')(sequelize);
const usuario = require('./usuario.model')(sequelize);

module.exports = {
    persona,
    mascota,
    usuario,
    sequelize,
    Sequelize: sequelize.Sequelize,
}