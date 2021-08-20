module.exports = (sequelize, dataTypes) => {
    let alias = "Imagen";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        file: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        product_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }
    };
    let config = {
        tableName: "img_data",
        timestamps: false,
    };
    const Imagen = sequelize.define(alias, cols, config);

    Imagen.associate = function (models) {

    Imagen.belongsTo(models.Product, {
        as: "imagenes",
        foreignKey:"product_id",
    });
}
    return Imagen;
}