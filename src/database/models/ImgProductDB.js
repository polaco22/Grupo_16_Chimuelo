module.exports = (sequelize, dataTypes) => {
    let alias = "ImagenProducto";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idProduct: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        imgId: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
    };
    let config = {
        tableName: "imgProduct_data",
        timestamps: false,
    };
    const ImagenProducto = sequelize.define(alias, cols, config);

    ImagenProducto.associate = function (models) {
        ImagenProducto.belongsTo(models.Imagen, {
            as: "idImagenProducto",
            foreignKey:"imgId",
        });        
        ImagenProducto.belongsTo(models.Product, {
            as: "idProducto",
            foreignKey:"productId",
        });        
    };    
    return ImagenProducto;
}