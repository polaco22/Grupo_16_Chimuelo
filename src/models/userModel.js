const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');

const userModel = {
    all: function () {
        const directory = path.resolve(__dirname,"../data","usersData.json")
        const file = fs.readFileSync(directory,"utf-8")
        const convert = JSON.parse(file)
        return convert
	},
    generateId: function () {
        let allUsers = this.all();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },
    one: function (id) {
        return this.all().find(user => user.id == id);
    },
    findByEmail: function (email) {
        return this.all().find(user => user.email == email);
    },
    findByUserName: function (userName) {
        return this.all().find(user => user.userName == userName);
    },
    create: function (userData, file) {
        const directory = path.resolve(__dirname,"../data","usersData.json")
        let allUsers = this.all();
        let newUser =  {
            id: this.generateId(),
            ...userData,
            avatar: typeof file === 'undefined' ? "default.jpg" : file.filename,
            password: bcryptjs.hashSync(userData.password,10),
            confirmarContraseña: bcryptjs.hashSync(userData.password,10),
            admin: String(userData.email).includes("@lookingood") ? true : false,
        }
        allUsers.push(newUser);
        fs.writeFileSync(directory,JSON.stringify(allUsers,null,2));
        return true;
    },
    edit: function (userData,file, id) {
        const directory = path.resolve(__dirname,"../data","usersData.json")
        let allUsers = this.all();
        allUsers.map(oneUser => {
            if (oneUser.id == id) {
                oneUser.fullName = userData.fullName,
                oneUser.userName = userData.userName,
                oneUser.email = userData.email,
                oneUser.password = bcryptjs.hashSync(userData.password,10),
                oneUser.dni = userData.dni,
                oneUser.provincia = userData.provincia,
                oneUser.avatar = typeof file === 'undefined' ? "default.jpg" : file.filename,
                oneUser.admin = String(userData.email).includes("@lookingood") ? true : false;
                return oneUser
            }
            return oneUser
        })
        fs.writeFileSync(directory,JSON.stringify(allUsers,null,2))
        return true;
    },
    delete: function (id) {
        const directory = path.resolve(__dirname,"../data","usersData.json")
        let allUsers = this.all();
        let deleted = this.one(id);
        // eliminamos la imagen de la carpeta upload
        fs.unlinkSync(path.resolve(__dirname,"../../public/uploads/avatars", deleted.avatar))
        let finalUsers = allUsers.filter(oneUser => oneUser.id != id);
        fs.writeFileSync(directory,JSON.stringify(finalUsers,null,2));
        return true;
    }
}

module.exports = userModel;
