module.exports = (sequelize, dataTypes) => {
    let alias = "CartDetail";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        cartId: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
    
    };
    let config = {
        tableName: "cart_detail",
        timestamps: false,
    };
    const CartDetail = sequelize.define(alias, cols, config);
    return CartDetail;
}
