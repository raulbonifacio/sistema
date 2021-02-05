function oldDataMiddleware(request, response, next) {
	const { old = {} } = request.flashed;
	response.locals.old = old;
	response.flash({ old: request.body });
	next();
}

module.exports = oldDataMiddleware;
