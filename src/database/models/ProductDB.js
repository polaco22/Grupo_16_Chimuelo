module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        category_id: {
            type: dataTypes.INTEGER,
        },
        colors_id: {
            type: dataTypes.INTEGER,
        },
        image: {
            type: dataTypes.STRING,
        },
        price: {
            type: dataTypes.DECIMAL,
            allowNull: false,
        },
        stock: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }
    };
    let config = {
        tableName: "products_data",
        timestamps: false,
    };
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
      
        Product.belongsTo(models.Color, {
            as: "colors",
            foreignKey:"colors_id",
        });
        Product.belongsTo(models.Category, {
            as: "categories",
            foreignKey:"category_id",
        });
    };    
    return Product;
}
