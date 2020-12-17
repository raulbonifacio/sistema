const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const cls = require("cls-hooked");
const basename = path.basename(__filename);

const { ENVIRONMENT, SEQUELIZE_CONFIG, SEQUELIZE_MODELS } = process.env;

const {
	host,
	database,
	username,
	password,
	dialect,
	port,
} = require(path.resolve(SEQUELIZE_CONFIG))[ENVIRONMENT];

const db = {};

const namespace = cls.createNamespace(process.env.SEQUELIZE_CLS_NAMESPACE);

Sequelize.useCLS(namespace);

let sequelize = new Sequelize(database, username, password, {
	host,
	dialect,
	port,
});

fs.readdirSync(SEQUELIZE_MODELS)
	.filter(file => {
		return (
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
		);
	})
	.forEach(file => {
		const model = require(path.resolve(SEQUELIZE_MODELS, file))(
			sequelize,
			Sequelize.DataTypes
		);
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.transaction = scope =>
	cls.getNamespace(process.env.SEQUELIZE_CLS_NAMESPACE).get("transaction")
		? scope()
		: sequelize.transaction(scope);

module.exports = db;
