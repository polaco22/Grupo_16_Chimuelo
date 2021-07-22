const path = require('path');
const fs = require('fs');

const colorModel = {
    all: function () {
        const directory = path.resolve(__dirname,"../data","colorsData.json")
        const file = fs.readFileSync(directory,"utf-8")
        const convert = JSON.parse(file)
        return convert
	},
    one: function (id) {
        let productos = this.all();
        let resultado = productos.find(producto => producto.id == id)
        return resultado;
	},
};

module.exports = colorModel;