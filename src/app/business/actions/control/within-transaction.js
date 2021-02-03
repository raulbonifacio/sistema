function withinTransaction() {
	return ({ globals }, next) => {
		return globals.transaction(() => next());
	};
}

module.exports = withinTransaction;
