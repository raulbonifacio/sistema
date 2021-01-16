/**
 * This function adds a csrf token to the response locals to be
 * used in the view.
 */
function csrfTokenMiddleware(request, response, next) {
	next();
	response.locals.csrfToken = request.csrfToken();
}

module.exports = csrfTokenMiddleware;
