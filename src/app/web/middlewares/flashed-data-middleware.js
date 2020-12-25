const flashedDataSymbol = Symbol("flashedData");

function flashedDataMiddleware(request, response, next) {
	const flashed = request.session[flashedDataSymbol] || {};

	request.session[flashedDataSymbol] = {};

	response.flash = function (data) {
		request.session[flashedDataSymbol] = {
			...data,
			...request.session[flashedDataSymbol],
		};
	};

	next();

	response.locals.flashed = flashed;
}

module.exports = flashedDataMiddleware;
