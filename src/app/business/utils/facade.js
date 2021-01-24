const Context = require("./context");

function facade(actions, globals) {
	return new Proxy(actions, {
		get(actions, action) {
			const targetAction = actions[action];

			if (typeof targetAction != "function")
				throw `Invalid action: ${action} is not a function.`;

			return input =>
				Promise.resolve(targetAction(new Context(input, globals))).then(
					context => context.result
				);
		},
	});
}

module.exports = facade;
