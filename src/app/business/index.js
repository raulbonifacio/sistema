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
	get: (facade, action) =>
		facade.hasOwnProperty(action)
			? async input => Promise.resolve(facade[action](new Context(input, globals))).then(context => context.result)
			: undefined,
});
