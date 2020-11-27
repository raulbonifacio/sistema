const Sequelize = require("sequelize");

const sequelize = new Sequelize("database", "username", "password", {
	dialect: "sqlite",
	storage: "./session.sqlite",
});

module.exports = sequelize;
