const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op, where, NUMBER } = require("sequelize");


const userApiController = {
    index: async (req,res) => { 
         try {
            const users = await db.User.findAll({attributes: {exclude: [ "password", "admin" ]}});
            return res.status(200).json({
                count: users.length,
                data: users,
                url: '/api/users',
                status: 200
            })}

        catch (err) { 
            console.log(err)}
        },
    show: async (req,res) => { 
        try {
            const users = await db.User.findByPk(req.params.id, {attributes: {exclude: [ "password", "admin" ]}});
            return res.status(200).json({
                data: users,
                url: '/api/users/:id',
                status: 200
            })} 

        catch (err) { 
            console.log(err)}
        }
}

module.exports = userApiController;