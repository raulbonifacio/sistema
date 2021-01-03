const flashedDataSymbol = Symbol("flashedData");

function flashedDataMiddleware(request, response, next) {
	const flashed = request.session[flashedDataSymbol] || {};

	request.flashed = flashed;
	request.session[flashedDataSymbol] = {};

	response.locals.flashed = flashed;
	response.flash = function (data) {
		console.log(data);
		request.session[flashedDataSymbol] = {
			...data,
			...request.session[flashedDataSymbol],
		};
	};

	next();
}

module.exports = flashedDataMiddleware;
