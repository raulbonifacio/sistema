function pipeline(...middlewares) {
	return async context => {
		let previousMiddleware = null;

		const next = async middleware => {
			if (previousMiddleware === middleware)
				throw "Called same middleware twice";

			previousMiddleware = middleware;

			if (middleware) {
				return middleware(context, () => next(middlewares.shift()));
			}
		};

		await next(middlewares.shift());

		return context;
	};
}

module.exports = pipeline;
