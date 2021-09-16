module.exports = (sequelize, dataTypes) => {
    let alias = "Cart";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        productId: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        userId: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        price: {
            type: dataTypes.DECIMAL,
            allowNull: false,
        },
        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        active: {
            type: dataTypes.BOOLEAN,
        }
    };
    let config = {
        tableName: "cart_data",
        timestamps: false,
    };
    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = function (models) {
      
        Cart.belongsTo(models.User, {
            as: "users",
            foreignKey:"userId",
        });

        Cart.belongsTo(models.Product, {
            as: "products",
            foreignKey:"productId",
        });
    }
    return Cart;
}
