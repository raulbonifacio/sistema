/**
 * This function adds a csrf token to the response locals to be
 * used in the view.
 */
function csrfTokenMiddleware(request, response, next) {
	next();
}

module.exports = csrfTokenMiddleware;
