const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const cls = require("cls-hooked");
const basename = path.basename(__filename);

const {
	SEQUELIZE_CONFIG,
	SEQUELIZE_MODELS,
	SEQUELIZE_CLS_NAMESPACE,
} = process.env;

const {
	host,
	database,
	username,
	password,
	dialect,
	port,
} = require(path.resolve(SEQUELIZE_CONFIG));

const db = {};

const namespace = cls.createNamespace(SEQUELIZE_CLS_NAMESPACE);

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
	cls.getNamespace(SEQUELIZE_CLS_NAMESPACE).get("transaction")
		? scope(db)
		: sequelize.transaction(scope.bind(null, db));

module.exports = db;
