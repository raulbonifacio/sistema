const businessFacade = require("../../../business");

const DASHBOARD = "/app/dashboard";

const loginController = {

	async login(request, response) {
		if (request.session.user) return response.redirect(DASHBOARD);
		const {
			data,
			errors,
			hasErrors,
		} = await businessFacade.fetchUserByCredentials(request.body);

		if (hasErrors) {
			response.redirectBackWithErrors(errors);
		} else {
			request.session.user = data.user;
			response.redirect(DASHBOARD);
		}
	},

	showLoginForm(request, response) {
		if (request.session.user) return response.redirect(DASHBOARD);
		response.render("login/index.pug", { csrfToken: request.csrfToken() });
	},
};

module.exports = loginController;
