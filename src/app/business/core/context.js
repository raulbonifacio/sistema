const Result = require("./result");

class Context {
	constructor(input = {}, globals = {}) {
		this.input = input;
		this.globals = globals;
		this.result = new Result();
	}
}

module.exports = Context;
