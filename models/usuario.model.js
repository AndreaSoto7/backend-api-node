const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    const Usuario = sequelize.define(
        'Usuario',
        {
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            nombreCompleto: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
    );
    return Usuario;
}