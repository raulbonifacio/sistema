
const {createFixedExpense} = require('../../business');

exports.index = async (request, response) => {
	response.render("pages/fixed-expenses/index");
};

exports.new = async (request, response) => {
	response.render("pages/fixed-expenses/new");
};

exports.test = async (request, response) => {

	const result = await createFixedExpense(request.body);

	response.send(result);
};
