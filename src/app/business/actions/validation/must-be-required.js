function mustBeRequired({ field, label = field }) {
	return ({ input, output }, next) => {
		const { errors } = output;

		if (!field in input) {
			errors[field] = `The ${label} is required.`;
		}

		return next();
	};
}

module.exports = mustBeRequired;
