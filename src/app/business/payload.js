class Payload {
	/**
	 * @constructor
	 */
	constructor(input = {}, context = {}) {
		this.data = {};
		this.input = input;
		this.errors = {};
		this.context = context();
	}

	get data() {
		return this.data;
	}

	set data(data) {}

	get errors() {
		return this.errors;
	}

	/**
	 * @param {string|Symbol} name
	 * @param {any} value
	 */
	addData(name, value) {
		this.data[name] = value;
		return this;
	}

	/**
	 * @param {string|Symbol} name
	 * @returns {any}
	 */
	hasData(...names) {
		if (names.length) {
			return names.every(name => this.data.hasOwnProperty(name));
		} else {
			return Object.keys(this.data).length > 0;
		}
	}

	/**
	 * @param {string|Symbol} name
	 * @param {any} value
	 */
	addError(name, value) {
		this.errors[name] = value;
		return this;
	}

	/**
	 * @param {string|Symbol} name
	 * @returns {any}
	 */
	hasErrors(...names) {
		if (names.length) {
			return names.every(name => this.errors.hasOwnProperty(name));
		} else {
			return Object.keys(this.errors).length > 0;
		}
	}
}

module.exports = Payload;
