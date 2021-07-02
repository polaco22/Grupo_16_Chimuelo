const path = require('path');
const fs = require('fs');

const model = {
    all: function () {
        const directory = path.resolve(__dirname,"../data","productsData.json")
        const file = fs.readFileSync(directory,"utf-8")
        const convert = JSON.parse(file)
        return convert
	},

    new: function (data,file) {
        const directory = path.resolve(__dirname,"../data","productsData.json")
        let productos = this.all();
        let nuevo = {
            id: productos.length > 0 ? productos[productos.length -1].id + 1: 1,
            name: data.name,
            description: data.description,
            category: data.category,
            colors: data.colors,//.map(color => parseInt(color))
            image: file.filename,
            price: data.price,
            stock: data.stock
        }    
        productos.push(nuevo)
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true; 

    }


}

module.exports = model;