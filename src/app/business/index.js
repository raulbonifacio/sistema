const facade = require("./core/facade");
const pipeline = require("./core/pipeline");

const { transaction, sequelize, models } = require("../database/sequelize");

const globals = {
	transaction,
	sequelize,
	models,
};

const actions = {};

const businessFacade = facade(actions, globals);

module.exports = businessFacade;
