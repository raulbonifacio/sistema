const facade = require("./utils/facade");

const { transaction, ...models } = require("../database/sequelize");
const getUserWithCredentials = require("./actions/users/get-user-with-credentials");

const actions = {
	getUserWithCredentials,
};

const globals = {
	models,
	transaction,
};

const businessFacade = facade(actions, globals);

module.exports = businessFacade;
