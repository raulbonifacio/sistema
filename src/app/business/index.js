const facade = require("./facade");

const { models, transaction } = require("../database/sequelize");

const actions = {

	createSomething(context) {
		return context;
	},
};

const globals = {
	models,
	transaction,
};

const businessFacade = facade(actions, globals);

module.exports = businessFacade;
