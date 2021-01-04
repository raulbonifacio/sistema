/**
 * This middleware provides the `redirectBack` method on the response
 * object. It requires the flashedDataMiddleware to be setup first.
 */

function redirectWithErrorsMiddleware(request, response, next) {
	console.log(request);
	const { previousPath = "/" } = request.flashed;

	response.redirectBack = function () {
		response.redirect(previousPath);
	};

	response.flash({ previousPath: request.path });

	next();
}

module.exports = redirectWithErrorsMiddleware;
