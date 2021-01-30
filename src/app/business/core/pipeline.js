function pipeline(...middlewares) {

	if (!middlewares.every(middleware => typeof middleware == "function"))
		throw new Error("All middlewares in the pipeline should be functions.");

	return (context, followUp = function () {}) => {

		if (typeof followUp != "function")
			throw new Error(`The followUp must be a function. Received: ${followUp}.`);

		const stack = [...middlewares];

		let previousMiddleware = null;

		const next = middleware => {
			if (previousMiddleware === middleware)
				throw new Error("The pipeline called same middleware twice.");

			previousMiddleware = middleware;

			if (middleware) {
				return middleware(context, (stop) => stop || next(stack.shift()));
			}
		};

		return Promise.resolve(next(stack.shift())).then(followUp).then(() => context);
	};
}

module.exports = pipeline;
