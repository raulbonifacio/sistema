const Payload = require("./payload");
const context = require("./context");

const createFixedExpense = require("./actions/fixed-expenses/create-fixed-expense");

const facade = {
	createFixedExpense,
};

const handler = {
	get: (facade, property) => input => {
		const payload = new Payload(input, context);
		Reflect.get(facade, property)(payload);
		return payload;
	},
};

const proxiedFacade = new Proxy(facade, handler);

module.exports = proxiedFacade;
