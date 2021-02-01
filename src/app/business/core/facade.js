const Context = require("./context");

function facade(actions = {}, globals = {}) {

	if (typeof actions != "object")
		throw new Error(`The actions should be an Object. Received ${globals}.`);

	if (typeof globals != "object")
		throw new Error(`The globals should be an Object. Received ${globals}.`);

	if (typeof actions != "object")
		throw new Error(`The actions should be an Object. Received ${action}.`);

	Object.entries(actions).forEach(([name, action]) => {
		if (typeof action != "function")
			throw new Error(`The ${name} is not a function. Received ${action}`);
	});

	return new Proxy(actions, {
		get(actions, action) {
			if (typeof actions[action] == "undefined") return;
			return input => {
				const context = new Context(input, globals);

				return Promise.resolve(actions[action](context)).then(
					context => context.output
				);
			};
		},
	});
}

module.exports = facade;
