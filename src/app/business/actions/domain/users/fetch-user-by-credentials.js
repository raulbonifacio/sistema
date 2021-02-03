const bcrypt = require("bcrypt");

function fetchUserByCredentials() {
	return async ({ input, output, globals }, next) => {
		const { User } = globals.models;
		const { email, password } = input;
		const { data, errors } = output;

		if(Object.keys(errors).length) return next();

		const user = await User.findOne({ where: { email } });

		if (user && (await bcrypt.compare(password, user.password))) {
			data.user = user;
		} else {
			errors.general = `Incorrect credentials.`;
		}

		return next();
	};
}

module.exports = fetchUserByCredentials;
