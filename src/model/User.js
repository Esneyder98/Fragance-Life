// 4. Editar la información de un usuario

const fs = require('fs');
const path = require('path');

const User = {
	fileName: path.join(__dirname, '../data/usersDataBase.json'),
//leer archivo
	getData: function () {
		return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
	},
//generar un id
	generateId: function () {
		let allUsers = this.findAll();
		let lastUser = allUsers.pop();
		if (lastUser) {
			return lastUser.id + 1;
		}
	//si no tengo usuarios devuelve 1
		return 1;
	},
//todos los usuarios
	findAll: function () {
		return this.getData();
	},
//buscar usuario por id
	findByPk: function (id) {
		let allUsers = this.findAll();
		let userFound = allUsers.find(oneUser => oneUser.id === id);
		return userFound;
	},
//buscar un usuario por campo (campo,valor) ***solo uno****
	findByField: function (field, text) {
		let allUsers = this.findAll();
		let userFound = allUsers.find(oneUser => oneUser[field] === text);
		return userFound;
	},
	//crear a un usuario
	create: function (userData) {
		let allUsers = this.findAll();
		let newUser = {
			id: this.generateId(),
			...userData
		}
		allUsers.push(newUser);
		fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null,  ' '));
		return newUser;
	},

	delete: function (id) {
		let allUsers = this.findAll();
		let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
		fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
		return true;
	}
}

module.exports = User;