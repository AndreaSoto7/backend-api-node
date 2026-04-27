const db = require("../models");

exports.findUserById = async (id) => {
    return await db.usuario.findByPk(id);
}
exports.findUserByEmail = async (email) => {
    return await db.usuario.findOne({
        where: {
            email
        }
    });
}

exports.createUser = async (email, password, nombreCompleto) => {
    return await db.usuario.create({
        email,
        password: password,
        nombreCompleto
    });
}