module.exports = (sequelize, dataTypes) => {
    let alias = "Category";
    let cols = {
        id: {
            type: dataTypes.INT,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
        }
    };
    let config = {
        timestamps: false,
    };
    const Category = sequelize.define(alias, cols, config);
    return Category;
}
