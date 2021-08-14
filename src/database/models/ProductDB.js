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
            allowNull: false,
        },
        color_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
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
        timestamps: false,
    };
    const Product = sequelize.define(alias, cols, config);
    return Product;
}
