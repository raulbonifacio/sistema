const Context = require("./context");

function facade(actions, globals) {
	return new Proxy(actions, {
		get(actions, action) {
			if (actions.hasOwnProperty(action)) {
				return async input => {
					const context = new Context(input, globals);

					return Promise.resolve(actions[action](context)).then(
						context => context.result
					);
				};
			}

			throw new Error(`Action: '${action}'is not available in the facade`);
		},
	});
}

module.exports = facade;
