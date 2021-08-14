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
        timestamps: false,
    };
    const Cart = sequelize.define(alias, cols, config);
    return Cart;
}
