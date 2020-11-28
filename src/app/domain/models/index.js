const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);

const db = {};

const {
	SEQUELIZE_HOST,
	SEQUELIZE_DATABASE,
	SEQUELIZE_USERNAME,
	SEQUELIZE_PASSWORD,
	SEQUELIZE_DIALECT,
	SEQUELIZE_PORT,
} = process.env;

let sequelize = new Sequelize(SEQUELIZE_DATABASE, SEQUELIZE_USERNAME, SEQUELIZE_PASSWORD, {
	host: SEQUELIZE_HOST,
	dialect: SEQUELIZE_DIALECT,
	port: SEQUELIZE_PORT,
});

fs.readdirSync(__dirname)
	.filter(file => {
		return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
	})
	.forEach(file => {
		const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
