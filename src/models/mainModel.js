const path = require('path');
const fs = require('fs');

const model = {
    all: function () {
    const directory = path.resolve(__dirname,"../data","productsData.json")
    const file = fs.readFileSync(directory,"utf-8")
    const convert = JSON.parse(file)
    return convert
	},



}

module.exports = model;