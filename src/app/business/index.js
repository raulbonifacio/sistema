const facade = require("./core/facade");
const pipeline = require("./core/pipeline");

const { transaction, sequelize, models } = require("../database/sequelize");
const fetchUserByCredentials = require("./actions/domain/users/fetch-user-by-credentials");
const validateUserEmail = require("./actions/domain/users/validate-user-email");
const validateUserEmailAvailability = require("./actions/domain/users/validate-user-email-availability");
const validateUserFirstName = require("./actions/domain/users/validate-user-first-name");
const validateUserLastName = require("./actions/domain/users/validate-user-last-name");
const validateUserPassword = require("./actions/domain/users/validate-user-password");
const withoutErrors = require("./actions/control/without-errors");

const globals = {
	transaction,
	sequelize,
	models,
};

const actions = {
	storeUser: pipeline(
		validateUserFirstName(),
		validateUserLastName(),
		validateUserPassword(),
		validateUserEmail(),
		validateUserEmailAvailability()
	),
	alterUser: pipeline(
		validateUserFirstName(),
		validateUserLastName(),
		validateUserPassword(),
		validateUserEmail(),
		validateUserEmailAvailability()
	),
	fetchUserByCredentials: pipeline(
		validateUserEmail(),
		validateUserPassword(),
		withoutErrors(),
		fetchUserByCredentials()
	),
};

const businessFacade = facade(actions, globals);

module.exports = businessFacade;
