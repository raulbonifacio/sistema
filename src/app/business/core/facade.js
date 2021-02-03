const Context = require("./context");

function facade(actions = {}, globals = {}) {

	if (typeof actions != "object")
		throw new Error(`The actions should be an Object. Received ${actions}.`);

	if (typeof globals != "object")
		throw new Error(`The globals should be an Object. Received ${globals}.`);

	Object.entries(actions).forEach(([name, action]) => {
		if (typeof action != "function")
			throw new Error(`The ${name} is not a function. Received ${action}`);
	});

	return new Proxy(actions, {
		get(actions, action) {
			if (typeof actions[action] != "function") return;
			return (input, overrides = {}) => {
				const context = new Context(input, { ...globals, ...overrides });
				return Promise.resolve(actions[action](context)).then(
					context => context.output
				);
			};
		},
	});
}

module.exports = facade;
