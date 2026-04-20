const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    const Mascota = sequelize.define(
        'Mascota',
        {
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            tipo: {
                type: DataTypes.STRING,
            }
        },
    );
    return Mascota;
}