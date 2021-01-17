class Result {

	constructor() {
		this.data = {};
		this.errors = {};
		this.warnings = {};
	}

	get hasErrors() {
		return Object.keys(this.errors).length > 0;
	}

	get hasErrors() {
		return Object.keys(this.errors).length > 0;
	}
}

module.exports = Result;
