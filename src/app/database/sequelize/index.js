const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const cls = require("cls-hooked");
const basename = path.basename(__filename);

const {
	host,
	database,
	username,
	password,
	dialect,
	port,
} = require("./config");

const { SEQUELIZE_CLS_NAMESPACE } = process.env;

const namespace = cls.createNamespace(SEQUELIZE_CLS_NAMESPACE);

Sequelize.useCLS(namespace);

let sequelize = new Sequelize(database, username, password, {
	host,
	dialect,
	port,
});

exports.models = {};

const MODELS = path.join(__dirname, "/models");

fs.readdirSync(MODELS)
	.filter(file => {
		return (
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
		);
	})
	.forEach(file => {
		const model = require(path.resolve(MODELS, file))(
			sequelize,
			Sequelize.DataTypes
		);

		exports.models[model.name] = model;
	});

Object.keys(exports.models).forEach(modelName => {
	exports.models[modelName].associate?.(exports.models);
});

exports.sequelize = sequelize;
exports.Sequelize = Sequelize;
exports.transaction = scope =>
	cls.getNamespace(SEQUELIZE_CLS_NAMESPACE).get("transaction")
		? scope(exports)
		: sequelize.transaction(scope.bind(null, exports));
