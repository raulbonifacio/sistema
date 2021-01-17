const validateUserPassword = require("./validate-user-password");
const validateUserEmail = require("./validate-user-email");

async function getUserWithCredentials(context) {

	context = await Promise.resolve(context)
		.then(validateUserPassword)
		.then(validateUserEmail);

	const { errors, hasErrors, data } = context.result;
	const { User } = context.globals.models;
	const { email, password } = context.input;

	if (hasErrors) return context;

	const user = await User.findOne({
		where: { email, password },
	});

	if (user) {
		data.user = user;
	} else {
		errors.general = "Invalid credentials.";
	}

	return context;
}

module.exports = getUserWithCredentials;
