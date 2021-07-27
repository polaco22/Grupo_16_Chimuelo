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
    new: function (data,files) {
        const directory = path.resolve(__dirname,"../data","productsData.json")
        let productos = this.all();
        let nuevo = {
            id: productos.length > 0 ? productos[productos.length -1].id + 1: 1,
            name: data.name,
            description: data.description,
            category: data.category,
            colors: data.colors,
            image: typeof files === "object" && files.length > 0 ? files.map(image => image.filename) : ["default.jpg"],
            price: data.price,
            stock: data.stock
        }    
        productos.push(nuevo)
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true; 
    },
    edit: function (data,files,id) {
        const directory = path.resolve(__dirname,"../data","productsData.json")
        let productos = this.all();
        productos.map(producto => {
            if(producto.id == id ){
                producto.name = data.name,
                producto.description = data.description,
                producto.category = data.category,
                producto.colors = data.colors,
                producto.image = typeof files === "object" && files.length > 0 ? files.map(image => image.filename) : ["default.jpg"],
                producto.price = data.price,
                producto.stock = data.stock
                return producto
            }
            return producto
        })
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true;
    },
    delete: function(id) {
        const directory = path.resolve(__dirname,"../data","productsData.json")
        let productos = this.all();
        let deleted = this.one(id);
        fs.unlinkSync(path.resolve(__dirname,"../../public/uploads/products", deleted.image))
        productos = productos.filter(producto => producto.id != deleted.id)
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true;
    }
}

module.exports = model;