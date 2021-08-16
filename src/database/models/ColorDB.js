module.exports = (sequelize, dataTypes) => {
    let alias = "Color";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
        }
    };
    let config = {
        tableName: "colors_data",
        timestamps: false,
    };
    const Color = sequelize.define(alias, cols, config);

    Color.associate = function (models) {
        Color.hasMany(models.Product, {
            as: "products",
            foreignKey:"colors_id",
        });
        
    };
    return Color;
}