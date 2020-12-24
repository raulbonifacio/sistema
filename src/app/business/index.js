const Context = require("./context");
const { models, transaction } = require("../database");

const createFixedExpense = require("./actions/fixed-expenses/create-fixed-expense");

const facade = {
	createFixedExpense,
};

const globals = {
	applicationName: "sistema",
	facade,
	models,
	transaction,
};

module.exports = new Proxy(facade, {
	get: (facade, action) => async input => {
		const context = new Context(input, globals);

		if (facade.hasOwnProperty(action)) {
			return Promise.resolve(facade[action](context)).then(context => context.result);
		}

		throw new Error(`The action: ${action} was not found in the facade.`);
	},
});
