// 4. Editar la información de un usuario
const { exists } = require('fs');
const path = require('path');
const db = require("../database/models");
let Op = db.Sequelize.Op
let sequelize = require("sequelize")


const User = {
//todos los usuarios
	findAll: function(){
			db.users.findAll()
			.then(function(resultado){
				return resultado;
			}).catch(function(error){
				console.log(error);
			})
	},
//buscar usuario por id
	findByPk: function(userId){
		db.users.findByPk(userId)
		.then(function(resultado){	
			return resultado;
		}).catch(function(error){
			console.log(error);
		})
	},
 getUsers: async function() {
       
		try{
			let UsersFound = await db.users.findAll({
				includes : [ {association : "category"}]
			});
			
		 return UsersFound;
 			} catch (err){
		 console.log(err)
		 return err;
	 }
	 },
	 findByField:(userData) => {
		let user  = db.users.findAll(
		  {
			where :{email : userData}
		  }
		);
		return user
		  .then((res) => {
			return res;
		  })
		  .catch((err) =>{
			return err
		   } );
		},
	findByEmail : async function(email) {
		try{
		 const allUsers = await this.getUsers();
		 const userFound = await allUsers.find((user) => 
		 user.email === email);
		 return userFound;
	 } catch (err){
		 console.log(err)
		 return err;
	 }
	 },
	//crear a un usuario
	create : function(userData){
			db.users
        .create({
          document: userData.document,
          name: userData.name,
          surname: userData.surname,
          email: userData.email,
          password: userData.password,
          category_id: userData.category_id,
          avatar: userData.avatar,
        })
        .then(function (resultado) {
          return resultado;
        })
        .catch(function (error) {
          console.log(error);
        });
	},
	
	delete : function(userToDelete){
		db.users.destroy({
			where :{
				id : userToDelete
			}
		}).then(function(resultado){
			
			return resultado;
		}).catch(function(error){
			console.log(error);
		})
	},
	update : function(userToEdit, idUser){
		db.users.update({
			document : userToEdit.document,
			name : userToEdit.name,
			surname : userToEdit.surname,
			email : userToEdit.email,
			password : userToEdit.password,
			avatar : userToEdit.avatar
		}, {
			where :{
				id : idUser
			}
		}).then(function(resultado){
			return resultado;
		}).catch(function(error){
			console.log(error);
		})
	}
}

module.exports = User;
User.findAll()

