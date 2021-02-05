const businessFacade = require("../../../business");

exports.login = async function (request, response) {
	if (request.session.user) return response.redirect("/");

	const {
		data,
		errors,
		hasErrors,
	} = await businessFacade.fetchUserByCredentials(request.body);

	if (hasErrors) {
		response.redirectBackWithErrors(errors);
	} else {
		request.session.user = data.user;
		response.redirect("/");
	}
};

exports.showLoginForm = function (request, response) {
	if (request.session.user) return response.redirect("/");
	response.render("login/index.pug", { csrfToken: request.csrfToken() });
};
