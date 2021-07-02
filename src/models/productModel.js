const path = require('path');
const fs = require('fs');

const model = {
    all: function () {
        const directory = path.resolve(__dirname,"../data","productsData.json")
        const file = fs.readFileSync(directory,"utf-8")
        const convert = JSON.parse(file)
        return convert
	},
    one: function (id) {
        let productos = this.all();
        let resultado = productos.find(producto => producto.id == id)
        return resultado;
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
    },
    edit: function (data,file,id) {
        const directory = path.resolve(__dirname,"../data","productsData.json")
        let productos = this.all();
        productos.map(producto => {
            if(producto.id == id ){
                producto.name = data.name,
                producto.description = data.description,
                producto.category = data.category,
                producto.colors = data.colors,
                producto.image = file.filename,
                producto.price = data.price,
                producto.stock = data.stock
                return producto
            }
            return producto
        })
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true;
    }
}

module.exports = model;