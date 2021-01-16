const Context = require("./context");
const validators = require("./validators");
const { models, transaction } = require("../database/sequelize");

const facade = {

};

const globals = {
	applicationName: "sistema",
	facade,
	validators,
	models,
	transaction,
};

module.exports = new Proxy(facade, {
	get: (facade, action) =>
		facade.hasOwnProperty(action)
			? async input => {
					const context = new Context(input, globals);
					return Promise.resolve(facade[action](context)).then(context => context.result);
			  }
			: undefined,
});
