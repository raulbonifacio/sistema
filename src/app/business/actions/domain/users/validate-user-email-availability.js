const { Op } = require("sequelize");

function validateUserEmailAvailability() {

	return async ({ input, output, globals }, next) => {
		const { User } = globals.models;
		const { email, id = 0 } = input;
		const { errors } = output;

		if( "email" in errors ) return next();

		const found = await User.findAll({ where: { email, id: { [Op.ne]: id } } });

		if (found.length) {
			errors.email = `The e-mail is not available.`;
		}

		await next();
	};
}

module.exports = validateUserEmailAvailability;
