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
        }
    };
    let config = {
        tableName: "img_data",
        timestamps: false,
    };
    const Imagen = sequelize.define(alias, cols, config);

    Imagen.associate = function (models) {
        Imagen.hasMany(models.ImagenProducto, {
            as: "imagen",
            foreignKey:"imgId",
        });        
    };    
    return Imagen;
}