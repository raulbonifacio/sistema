async function getUserWithCredentials({ globals, result, input }, next) {
	const { email, password } = input;
	const { errors, hasErrors, data } = result;
	const { User } = globals.models;

	if (hasErrors) return next();

	const user = await User.findOne({
		where: { email, password },
	});

	if (user) {
		data.user = user;
	} else {
		errors.general = "Invalid credentials.";
	}

	await next();
}

module.exports = getUserWithCredentials;
