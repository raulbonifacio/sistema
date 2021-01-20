function pipeline(...middlewares) {

	return async context => {

		const stack = [...middlewares];

		let previousMiddleware = null;

		const next = async middleware => {
			if (previousMiddleware === middleware)
				throw "Called same middleware twice";

			previousMiddleware = middleware;

			if (middleware) {
				return middleware(context, () => next(stack.shift()));
			}
		};

		await next(stack.shift());

		return context;
	};
}

module.exports = pipeline;
