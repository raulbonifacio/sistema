
const Context = require("./context");

function facade(actions, globals) {
	return new Proxy(actions, {
		get(actions, action) {
			if (actions.hasOwnProperty(action)) {
				return async input => {
					const context = new Context(input, globals);

					const received = await Promise.resolve(actions[action](context));

					if (received && context === received) {
						return context.result;
					} else {
						throw new Error("The context was not received back");
					}
				};
			}

			throw new Error(`Action: '${action}'is not available in the facade`);
		},
	});
}

module.exports = facade;
