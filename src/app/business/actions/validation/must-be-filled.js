function mustBeFilled({ field, label = field }) {
	return ({ input, output }, next) => {
		const { errors } = output;

		if (!(field in input) || String(input[field]).length == 0) {
			errors[field] = `The ${label} is required.`;
		}

		return next();
	};
}

module.exports = mustBeFilled;
