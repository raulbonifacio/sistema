const businessFacade = require("../../../business");

exports.login = async function (request, response) {

	const {
		data,
		errors,
		hasErrors,
	} = await businessFacade.fetchUserByCredentials(request.body);

	if (hasErrors) {
		response.redirectBackWithErrors(errors);
	} else {
		console.log(data);
		request.session.user = data.user;
		response.redirect("/dashboard");
	}
};

exports.showLoginForm = function (request, response) {
	if (request.session.user) return response.redirect("/");
	response.render("login/index.pug", { csrfToken: request.csrfToken() });
};
