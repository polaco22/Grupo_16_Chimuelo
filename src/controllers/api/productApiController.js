const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op, where, NUMBER } = require("sequelize");


const productApiController = {
    index: async (req,res) => { 
         try {
            //let page = Number.parseInt(req.query.page);
            let size = Number.parseInt(req.query.size);

            const productsPage = await db.Product.findAll({

                limit: size,
                //offset: page,
                include: [ "imagenes", "colors", "categories" ]
                
            });
            const products = await db.Product.findAll({

                include: [ "imagenes", "colors", "categories" ]
                
            });
            return res.status(200).json({
                count: products.length,
                countByCategory: {
                    Casual: products.filter(category => category.categories.name == "Casual").length,
                    Aventura: products.filter(category => category.categories.name == "Aventura").length,
                },
                data: productsPage,
                url: '/api/products',
                status: 200
            })}

        catch (err) { 
            console.log(err)}
        },
    show: async (req,res) => { 
        try {
            const products = await db.Product.findByPk(req.params.id, {include: [ "imagenes", "colors", "categories" ]});
            return res.status(200).json({
                data: products,
                url: '/api/products/:id',
                status: 200
            })} 

        catch (err) { 
            console.log(err)}
        }
}

module.exports = productApiController;