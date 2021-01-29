class Output {
	constructor() {
		this.data = {};
		this.errors = {};
		this.warnings = {};
	}

	_has(target, ...props) {
		//Check if has props
	}

	get hasData(...props) {
		return props.length;
	}

	get hasErrors() {
		return Object.keys(this.errors).length > 0;
	}

	get hasWarnings() {
		return Object.keys(this.warnings).length > 0;
	}
}

module.exports = Output;
