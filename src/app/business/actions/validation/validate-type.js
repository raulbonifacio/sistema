function validateType({ field, label = field, type, stop = false }) {

	return ({ input, result }, next) => {

		if (field in result.errors) return next(stop);

		const { [field]: value } = input;
		const { errors } = result;

		if (typeof value != type) {
			errors[field] = `The ${label} must be of type: ${type}.`;
		}

		return next();
	};
}
