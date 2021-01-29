const Output = require("./output");

class Context {
	constructor(input = {}, globals = {}) {
		this.input = input;
		this.globals = globals;
		this.result = new Output();
	}
}

module.exports = Context;
