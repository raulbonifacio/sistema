const businessFacade = require("../../../business");

const loginController = {

	async login(request, response) {
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
	},

	showLoginForm(request, response) {
		if (request.session.user) return response.redirect("/");
		response.render("login/index.pug", { csrfToken: request.csrfToken() });
	},
};

module.exports = loginController;
