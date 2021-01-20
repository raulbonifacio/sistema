const facade = require("./utils/facade");
const pipeline = require("./utils/pipeline");

const getUserWithCredentials = require("./actions/users/get-user-with-credentials");
const validateUserEmail = require("./actions/users/validate-user-email");
const validateUserPassword = require("./actions/users/validate-user-password");

const { transaction, ...models } = require("../database/sequelize");

const globals = {
	models,
	transaction,
};

const actions = {

	getUserWithCredentials: pipeline(
		validateUserEmail(),
		validateUserPassword(),
		getUserWithCredentials(), 
	),


};

const businessFacade = facade(actions, globals);

module.exports = businessFacade;
