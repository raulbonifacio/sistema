class Result {

	constructor() {
		this.data = {};
		this.errors = {};
		this.warnings = {};
	}

	get hasData() {
		return Object.keys(this.data).length > 0;
	}

	get hasErrors() {
		return Object.keys(this.errors).length > 0;
	}
	
	get hasWarnings() {  
		return Object.keys(this.warnings).length > 0;
	}
	
}

module.exports = Result;
